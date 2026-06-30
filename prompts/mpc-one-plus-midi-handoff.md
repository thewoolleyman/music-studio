# MPC One Plus MIDI Handoff Prompt

Copy and paste the prompt below into a new Codex session.

```text
We are in /Users/cwoolley/workspace/music-studio. Read AGENTS.md first.

Goal: get Akai MPC One Plus MIDI working reliably with Logic Pro 12.2, then document the exact usage/setup in this repo. Focus specifically on MIDI behavior, not the Saffire audio routing unless needed for context.

Hardware/context:
- Mac is using Scarlett 4i4 as the main Logic audio/MIDI interface.
- Alesis V49 MKII already works as a USB MIDI controller for Logic software instruments.
- MPC One Plus audio line-out path is now working:
  MPC Main Out L/R -> Saffire Pro 40 rear line inputs 3/4 -> Saffire line outputs 3/4 -> Scarlett rear inputs 3/4 -> Logic stereo audio track input 3-4.
- Saffire issue was user error: MPC had accidentally been plugged into Saffire outputs 3/4 instead of inputs 3/4.

Known MPC MIDI facts from prior debugging:
- MPC firmware updater did not see the MPC until the MPC was put into update mode.
- MPC can update over Wi-Fi too.
- MPC Controller Mode got stuck on "Looking for computer"; exiting was done via the Standalone button, not an Exit button.
- macOS/Logic/GarageBand MIDI visibility was confusing. At one point the MPC appeared in an MPC setting as something like "<none>, MPC, Remote."
- GarageBand eventually received MIDI from both the Alesis and Akai, and both could play a software instrument.
- Logic was installed afterward; both Alesis and Akai worked for a Logic software instrument at least once.
- There was confusion around MIDI Control Mode and Output Port. It had been set to "MPC."
- Verify, do not assume, whether the working Akai-to-Logic path was USB MIDI, DIN MIDI through the Scarlett, or both.

DIN MIDI experiment:
- User plugged Focusrite/Scarlett MIDI OUT -> MPC MIDI IN so Logic/Codex could trigger MPC sounds.
- MPC was on a drum track.
- Initially the MPC showed activity but did not trigger sound; only a skinny left-side meter moved.
- After some setting change by the user, MPC made sound from incoming MIDI.
- The exact setting that fixed it was not captured, so rediscover and document it.
- User correctly noted that an MPC audio track would not have a MIDI input port; use drum/plugin/keygroup/MIDI-capable tracks for MIDI triggering.

Important behavior to investigate and document:

1. MPC as MIDI controller into Logic software instruments.
   - USB path preferred if possible.
   - DIN via Scarlett is acceptable as backup.
   - Show how to select/control Akai vs Alesis per Logic track, if Logic supports that directly.
   - If Logic listens omni/all inputs by default, document the practical workaround.

2. Logic sending MIDI to MPC to trigger MPC internal sounds.
   - Test Scarlett MIDI OUT -> MPC MIDI IN.
   - Determine exact MPC project/track settings needed for a drum track to respond.
   - Determine whether this can be made default for all MPC projects via template/autoload/default project.

3. Simultaneous behavior.
   - User wants MIDI and MPC line/audio output enabled at the same time.
   - Confirm whether MPC can send/receive MIDI while also outputting its standalone audio from Main Out L/R.
   - Current expectation: yes, but verify in Logic with separate tracks:
     - Software Instrument track receives MIDI from MPC.
     - Audio track records MPC line output on Scarlett inputs 3-4.
     - Optional External MIDI track sends MIDI back to MPC.

4. USB vs DIN.
   - User ideally wants this through USB, not MIDI DIN.
   - Verify whether MPC One Plus standalone mode exposes usable USB MIDI ports to macOS/Logic.
   - If USB requires Controller Mode, document that limitation clearly.
   - If standalone USB MIDI works, document exact MPC MIDI/SYNC preference settings and Logic settings.
   - If not, document DIN fallback through Scarlett.

Local docs:
- MPC manual: /Users/cwoolley/workspace/music-studio/Akai MPC One Plus/MPC Standalone OS - User Guide - v3.9.pdf
- Alesis manual: /Users/cwoolley/workspace/music-studio/Alesis V49 MKII/V49 MKII - User Guide - v1.3.pdf
- Saffire manual: /Users/cwoolley/workspace/music-studio/Focusrite Saffire Pro 40/userguidepro40english04.pdf
- Existing studio source of truth: /Users/cwoolley/workspace/music-studio/AGENTS.md

Working style:
- Do not hallucinate Logic menu paths. If possible, drive Logic/macOS directly or verify via screenshots/tools.
- Keep audio and MIDI tests separate.
- For each test, state the exact cable path, Logic track type, Logic input/output, MPC mode, and MPC track type.
- Document findings in the repo once verified.
```
