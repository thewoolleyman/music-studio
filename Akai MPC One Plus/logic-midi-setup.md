# Akai MPC One Plus MIDI With Logic Pro 12.2

This note covers MIDI behavior between the Akai MPC One Plus and Logic Pro 12.2. It intentionally keeps MIDI separate from the Saffire audio path except where the audio path is needed to hear MPC internal sounds.

## RESOLVED: MPC -> Logic DIN MIDI Working (verified 2026-06-30)

Root cause of the "no MIDI in Logic" failure: the Scarlett 4i4's 5-pin MIDI OUT was cabled straight back into the Scarlett's own MIDI IN (an accidental self-loopback). The MPC was therefore never in the MIDI path, so every test failed in both directions regardless of MPC or Logic settings. This was a cabling fault, not a software-settings fault. The previously suspected causes (drum track vs MIDI track, MPC preference toggles, Logic input routing) were not the problem.

Correct cabling, OUT-to-IN at each end:

- `MPC One Plus MIDI OUT -> 5-pin DIN -> Scarlett 4i4 MIDI IN` (MPC into Logic; this is the goal path, verified working).
- `Scarlett 4i4 MIDI OUT -> 5-pin DIN -> MPC One Plus MIDI IN` (Logic into MPC; reverse path, cabled).

Verified-working Logic receive setup (2026-06-30):

- Incoming DIN MIDI arrives as a CoreMIDI source under `Scarlett 4i4 4th Gen`, not as an `Akai`/`MPC` device. In Audio MIDI Setup > MIDI Studio the Scarlett shows online with 1 MIDI In and 1 MIDI Out.
- A record-enabled Software Instrument track captured a MIDI region from the MPC. Logic merges all MIDI inputs into the record-enabled (or focused) instrument track, so no per-device input selector is needed.

Second gotcha (after the cabling fix): not every MPC pad was bound to send on the MIDI track, so hitting an unbound pad produced nothing in Logic and looked like a continued failure. Only pads mapped to the MIDI track transmit out the DIN. When testing, hit a pad you know is bound (or play the recorded sequence), not an arbitrary empty pad.

Reverse direction (Logic -> MPC) also verified working 2026-06-30. Key gotcha: when you create a Logic External MIDI track, its **MIDI Destination defaults to `Logic Pro Virtual Out`**, which goes nowhere physical. You must change the MIDI Destination to **`Scarlett 4i4 4th Gen`** (channel 1 for the first pass). With that set, Logic's Musical Typing (or any region/controller on that track) transmits out the DIN and triggers the MPC's internal sounds. Audio MIDI Setup's "Test Setup" send is not a reliable way to test this and was misleading; use a correctly-routed Logic External MIDI track instead.

Note on proof: an External MIDI track has no internal instrument, so notes on it can only leave via the assigned hardware MIDI port. The proof it crossed the wire is hearing the MPC's own engine (audio returns on Scarlett inputs 3-4), which Logic cannot produce by any other means. On the External MIDI track, Audio Input can be `No Input` and Audio Output `No Output` so the track is pure MIDI.

## Current Bench State

Observed on 2026-06-30:

- Logic project: `Test Project 1.logicx`.
- Main Mac interface: Focusrite Scarlett 4i4 4th Gen.
- Audio MIDI Setup, after Rescan MIDI: `Scarlett 4i4 4th Gen` and `V49 MKII` were online; no `Akai`, `MPC`, or `MPC One Plus` MIDI device was visible.
- Logic track menu contains `New External MIDI Track`.
- Logic software instrument tracks did not show a per-device MIDI input selector in the visible track inspector. In normal use, treat a selected or record-enabled software instrument track as listening to available MIDI inputs.
- Existing working audio path:
  - MPC One Plus main output L -> 1/4" TRS cable -> Saffire Pro 40 rear line input 3.
  - MPC One Plus main output R -> 1/4" TRS cable -> Saffire Pro 40 rear line input 4.
  - Saffire Pro 40 line output 3 -> 1/4" TRS cable -> Scarlett 4i4 rear input 3.
  - Saffire Pro 40 line output 4 -> 1/4" TRS cable -> Scarlett 4i4 rear input 4.
  - Scarlett 4i4 USB-C cable -> Mac -> Logic stereo audio track input 3-4.

The USB MIDI branch is currently blocked before Logic: the MPC is not visible to macOS as a MIDI device in the observed state. Do not spend time changing Logic track settings until Audio MIDI Setup or `system_profiler` shows an MPC/Akai endpoint.

## MPC Manual Facts

From `MPC Standalone OS - User Guide - v3.9.pdf`:

- The MPC One Plus follows the MPC One hardware instructions unless called out separately.
- The MPC One Plus has one USB Type-B port, one USB Type-A port, one 5-pin MIDI input, and one 5-pin MIDI output.
- The USB Type-B computer connection is documented as sending and receiving MIDI/audio data to and from the MPC software on the computer.
- The USB Type-C Data Role setting is for MPC One G2 / MPC Key 37 G2 hardware, not the MPC One Plus.
- `Preferences > MIDI / Sync` controls port availability:
  - Input port `Track` makes a port available as a selectable track MIDI input.
  - Input port `Global` routes MIDI from that port to the current track.
  - Input port `Control` sends MIDI from that port to MIDI Learn.
  - Output port `Track` makes a port available as a selectable track MIDI output.
  - `Enable MIDI Ports When Discovered` automatically enables the `Track` option when a MIDI device is connected.
- Drum, Plugin, Keygroup, MIDI, and CV tracks can receive MIDI. Audio tracks do not have MIDI input routing.
- A drum track has `MIDI Input Port`, `MIDI Input Channel`, `MIDI Send`, and `MIDI Monitor`.
- `MIDI Monitor` modes:
  - `Off`: track input is not monitored.
  - `In`: track input is always monitored, recorded events are not heard.
  - `Auto`: track input is monitored when the track is record armed.
  - `Merge`: track input is always monitored and recorded events are heard.
- `Project Load/Save` can use a `User Auto Load File` or template project, so a known-good MIDI-ready drum project can become the default new-project state.

## MPC As Controller Into Logic

### Preferred USB test

Cable path:

```text
MPC One Plus USB Type-B port -> USB data cable -> Mac or Mac dock
Scarlett 4i4 USB-C cable -> Mac
```

MPC state:

- Standalone mode first.
- Do not use Controller Mode as the first test; prior testing got stuck at `Looking for computer`.
- If Controller Mode is entered accidentally, use the MPC `Standalone` button to return.

Mac verification:

1. Open Audio MIDI Setup.
2. Choose the MIDI Studio window.
3. Click Rescan MIDI.
4. Continue only if an Akai/MPC device appears online.

Logic verification:

1. Select a software instrument track, for example `SoCal`.
2. Record-enable the target software instrument track or select it so it is the active instrument.
3. Press MPC pads.
4. Expected result: the software instrument plays and Logic shows incoming MIDI.

Current result:

- Not verified in the current pass because the MPC was not visible to macOS over USB.

Practical Logic workaround:

- If both the Alesis V49 MKII and MPC are connected, Logic may play the selected or record-enabled software instrument from either controller.
- For reliable separation, record-enable only the instrument track you intend to play.
- If two controllers must be connected at once, put them on different MIDI channels where possible and use track/channel filtering only after the basic device visibility test succeeds.

### DIN fallback into Logic

Cable path:

```text
MPC One Plus MIDI OUT -> 5-pin DIN MIDI cable -> Scarlett 4i4 MIDI IN
Scarlett 4i4 USB-C cable -> Mac
```

Mac verification:

- Audio MIDI Setup should show `Scarlett 4i4 4th Gen` online.
- Logic will see incoming DIN MIDI under the Scarlett interface, not as a separate `Akai` or `MPC` USB device.

MPC settings to check:

- In `Preferences > MIDI / Sync`, make sure the relevant MPC MIDI output port is enabled for track/control use.
- If using MPC MIDI Control Mode, set `MIDI Control Mode Output` to the MPC MIDI output.
- If using a drum program rather than MIDI Control Mode, check the pad/track I/O settings for MIDI output behavior. Pads can be configured to send MIDI notes externally.

Current result:

- Not verified in the current pass.

## Logic Sending MIDI To MPC Internal Sounds

Cable path:

```text
Scarlett 4i4 MIDI OUT -> 5-pin DIN MIDI cable -> MPC One Plus MIDI IN
MPC One Plus main output L -> 1/4" TRS cable -> Saffire Pro 40 rear line input 3
MPC One Plus main output R -> 1/4" TRS cable -> Saffire Pro 40 rear line input 4
Saffire Pro 40 line output 3 -> 1/4" TRS cable -> Scarlett 4i4 rear input 3
Saffire Pro 40 line output 4 -> 1/4" TRS cable -> Scarlett 4i4 rear input 4
Scarlett 4i4 USB-C cable -> Mac
```

Logic setup:

- Use `Track > New External MIDI Track` (or the `+` button > MIDI > External MIDI).
- In the create dialog, expand `Details` and set `MIDI Destination` to `Scarlett 4i4 4th Gen` - this defaults to `Logic Pro Virtual Out`, which sends MIDI nowhere physical. This is the single most common reason "Logic -> MPC" appears dead.
- Use MIDI channel 1 for the first pass unless the MPC drum track is set to a different channel.
- Optional but clean: set Audio Input `No Input` and Audio Output `No Output` so the track only transmits MIDI.
- Keep a separate stereo audio track on input 3-4 to hear or record the MPC main outputs.

What you are actually hearing:

- The sound is produced by the MPC's internal engine, not by Logic. The Logic External MIDI track has no instrument loaded; it only transmits note number, velocity, and channel. Do not confuse this with a Logic software instrument.
- The instrument is defined on the MPC, by three things:
  - Which MPC track receives the MIDI. Set by `Preferences > MIDI / Sync` for the input port named `MPC`: `Global` routes incoming MIDI to the currently selected MPC track/program; `Track` makes the port selectable as a track's `MIDI Input` (the track whose `MIDI Input = MPC` on a matching channel receives it).
  - The program loaded on that receiving track: Drum (kit of samples), Keygroup (multisampled instrument), or Plugin (internal MPC synth). Changing this program changes the sound; nothing in Logic changes.
  - The note number selects the specific sound within the program. For a Drum program, notes ~36-51 map to the 16 pads, so a note with no pad mapped produces silence. For Keygroup/Plugin programs the note is the pitch.
- The audio returns to Logic over the separate path: MPC Main Out L/R -> Saffire -> Scarlett inputs 3-4 -> Logic. MIDI and this audio are independent.

MPC project setup:

- Use a Drum, Plugin, Keygroup, or MIDI-capable track, not an Audio track.
- For a drum test, load a kit on a Drum track.
- On the MPC track I/O/settings page:
  - `MIDI Input Port`: choose the MPC physical MIDI input, or `All Ports` for the first pass.
  - `MIDI Input Channel`: choose `Any` for the first pass, or match Logic's external MIDI channel.
  - `MIDI Monitor`: use `In` or `Merge` for a reliable live test. If using `Auto`, record-arm the MPC track.
- In `Preferences > MIDI / Sync`, make sure the MPC MIDI input has `Track` enabled. Use `Global` only when you intentionally want incoming MIDI to follow the currently selected MPC track.

Likely fix for the earlier "skinny left-side meter but no sound" symptom:

- MIDI was arriving at the MPC, but the current MPC track was not actually sounding it. Check, in order:
  - The current MPC track is a Drum/Plugin/Keygroup/MIDI-capable track, not an Audio track.
  - A drum kit or sound is loaded.
  - The track MIDI input port/channel matches the incoming Scarlett DIN MIDI.
  - Monitoring is `In` or `Merge`, or `Auto` with the track record-armed.
  - Logic is sending notes in the kit's playable note range.

Current result:

- Prior hands-on testing reached sound from Logic into the MPC after an MPC setting change, but the exact setting was not captured.
- The setting still needs to be rediscovered and written here as the final known-good value.

## Simultaneous MIDI And MPC Audio

Expected working layout:

- A Logic software instrument track receives MIDI from the MPC over USB or DIN.
- A Logic stereo audio track records the MPC line output on Scarlett inputs 3-4.
- Optional: a Logic external MIDI track sends MIDI back to the MPC over Scarlett MIDI OUT.

This should be possible because MIDI routing and the MPC main audio outputs are separate paths. Keep them isolated while testing:

1. Prove MPC audio into Logic on the stereo audio track input 3-4.
2. Prove MPC MIDI into a Logic software instrument.
3. Prove Logic external MIDI to MPC internal sounds.
4. Enable the proven tracks together.

Avoid enabling MIDI Clock sync until audio/MIDI note behavior is stable. The MPC manual notes that audio recording is disabled when receiving MIDI Clock sync; use MTC instead if sync and MPC-side audio recording are needed.

## Default Project Recommendation

After the Logic-to-MPC trigger settings are confirmed on the hardware:

1. Save an MPC project named `Logic DIN MIDI Drum Template`.
2. Include one loaded Drum track with:
   - MIDI input port set to the working Scarlett DIN input path or `All Ports`.
   - MIDI input channel set to the working channel or `Any`.
   - MIDI monitor set to the confirmed working mode.
3. Save it as a template, or set it as `Preferences > Project Load/Save > User Auto Load File`.
4. Reboot or create a new project and verify that the same Logic external MIDI track triggers sound without redoing the settings.

## Next Hands-On Verification Checklist

- [ ] Plug MPC One Plus USB Type-B into the Mac with a known-good USB data cable.
- [ ] Confirm whether Audio MIDI Setup shows an online Akai/MPC USB MIDI endpoint after Rescan MIDI.
- [ ] If USB appears, test MPC pads on a Logic software instrument track.
- [ ] If USB does not appear, document USB as unavailable in this setup and use DIN through the Scarlett.
- [ ] Connect Scarlett 4i4 MIDI OUT to MPC MIDI IN with a 5-pin DIN MIDI cable.
- [ ] Create or select a Logic external MIDI track routed to `Scarlett 4i4 4th Gen`, channel 1.
- [ ] On the MPC, load a Drum track and test `MIDI Monitor` set to `In`, then `Merge`.
- [ ] Record the exact MPC `MIDI Input Port`, `MIDI Input Channel`, `MIDI Monitor`, and any Preferences > MIDI / Sync port toggles that make the MPC sound.
- [ ] Save the confirmed MPC setup as a template or User Auto Load File.
