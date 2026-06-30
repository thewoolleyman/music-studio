# Music Studio Setup

This file captures the working studio hardware context for future Codex sessions in this folder.

## Documentation Rules

- In Mermaid connection diagrams, every physical cable must have its own line/edge. Do not combine stereo pairs, paired line outputs, or USB chains into a single diagram edge.
- Internal device routing may be shown, but it must be labeled as internal routing rather than as a cable.

## Device Summary

### Focusrite Scarlett 4i4

- Role: Primary Mac audio interface for Logic.
- Folder: `Focusrite Scarlett 4i4`
- Current use: Receives the final stereo audio feed that Logic records.
- Planned input pair: rear line inputs 3/4.
- Notes: Logic should use the Scarlett 4i4 as the audio device. A stereo audio track in Logic should record from Scarlett inputs 3-4 when capturing the submix from the Saffire Pro 40.

### Focusrite Saffire Pro 40

- Role: Standalone analog line mixer/pass-through device feeding the Scarlett.
- Folder: `Focusrite Saffire Pro 40`
- Manual: `Focusrite Saffire Pro 40/userguidepro40english04.pdf`
- Current use: FireWire is not part of the setup. Treat it as a standalone box using its default or previously saved hardware routing.
- Important constraint: Do not assume Saffire MixControl, FireWire control, software routing changes, or programmable panning are available.
- Planned source inputs: rear line inputs 3/4.
- Planned output pair: line outputs 3/4 into the Scarlett 4i4.
- Rationale: The user reports the unit was not custom-routed when it was previously connected via FireWire, so the working assumption is corresponding default routing: input 3 to output 3, input 4 to output 4.
- Fallback: If line outputs 3/4 do not pass the expected signal, test Monitor Outputs 1/2 as the main monitor mix output pair.

### Akai MPC One Plus

- Role: Standalone sampler/sequencer/groovebox and stereo audio source.
- Folder: `Akai MPC One Plus`
- Manual: `Akai MPC One Plus/MPC Standalone OS - User Guide - v3.9.pdf`
- Current audio path: MPC main left/right outputs feed Saffire rear line inputs 3/4.
- Cable approach: Use two separate 1/4 inch cables for stereo, one for left and one for right. Prefer 1/4 inch TRS-to-TRS balanced cables when available; short TS instrument cables can work if needed.

### Alesis V49 MKII

- Role: USB MIDI keyboard controller for playing software instruments in Logic.
- Folder: `Alesis V49 MKII`
- Manual: `Alesis V49 MKII/V49 MKII - User Guide - v1.3.pdf`
- Current use: MIDI controller only; it does not provide audio to the Saffire or Scarlett.
- Troubleshooting rule: Verify macOS sees the V49 MKII as a MIDI device before changing Logic track settings.

### Gitfos C1Pro USB Hub

- Role: USB-C hub/dock used for Mac connectivity.
- Folder: `Gitfos C1pro USB hub`
- Current use: General USB/peripheral connectivity.
- Note: For MIDI controllers, a port can provide power while failing data negotiation. If a USB MIDI device lights up but does not appear in macOS, bypass the hub or move to a known-good data port.

## Connection Diagram

```mermaid
flowchart TB
    subgraph MPC["Akai MPC One Plus"]
        direction TB
        MPCL["Main Out L"]
        MPCR["Main Out R"]
    end

    subgraph Saffire["Focusrite Saffire Pro 40<br/>standalone default routing"]
        direction TB
        SaffireIn3["Rear line input 3"]
        SaffireOut3["Line output 3"]
        SaffireIn4["Rear line input 4"]
        SaffireOut4["Line output 4"]
        SaffireIn3 -. "internal route" .-> SaffireOut3
        SaffireIn4 -. "internal route" .-> SaffireOut4
    end

    subgraph Scarlett["Focusrite Scarlett 4i4"]
        direction TB
        ScarlettIn3["Rear line input 3"]
        ScarlettIn4["Rear line input 4"]
        ScarlettUSB["USB audio interface"]
        ScarlettIn3 -. "internal audio path" .-> ScarlettUSB
        ScarlettIn4 -. "internal audio path" .-> ScarlettUSB
    end

    Logic["Mac / Logic<br/>stereo audio track input 3-4"]

    subgraph MIDI["USB MIDI control"]
        direction TB
        V49["Alesis V49 MKII"]
        Hub["Gitfos C1Pro USB hub"]
    end

    MPCL -->|1/4" TRS cable| SaffireIn3
    MPCR -->|1/4" TRS cable| SaffireIn4
    SaffireOut3 -->|1/4" TRS cable| ScarlettIn3
    SaffireOut4 -->|1/4" TRS cable| ScarlettIn4
    ScarlettUSB -- "USB cable" --> Logic

    V49 -- "USB cable" --> Hub
    Hub -- "USB cable" --> Logic
```

## Current Stereo Capture Path

Use this as the first tested path for capturing MPC stereo audio in Logic:

```text
MPC One Plus MAIN OUT L -> Saffire Pro 40 rear line input 3
MPC One Plus MAIN OUT R -> Saffire Pro 40 rear line input 4

Saffire Pro 40 line output 3 -> Scarlett 4i4 rear line input 3
Saffire Pro 40 line output 4 -> Scarlett 4i4 rear line input 4

Scarlett 4i4 USB -> Mac -> Logic stereo audio track input 3-4
```

## Repository Inventory And Management

### Device Directories

| Directory | Associated device |
| --- | --- |
| [`Akai MPC One Plus`](<Akai MPC One Plus>) | Akai MPC One Plus |
| [`Alesis V49 MKII`](<Alesis V49 MKII>) | Alesis V49 MKII |
| [`Focusrite Saffire Pro 40`](<Focusrite Saffire Pro 40>) | Focusrite Saffire Pro 40 |
| [`Focusrite Scarlett 4i4`](<Focusrite Scarlett 4i4>) | Focusrite Scarlett 4i4 |
| [`Gitfos C1pro USB hub`](<Gitfos C1pro USB hub>) | Gitfos C1Pro USB Hub |

### Device Documents And Websites

| Device | Local docs and saved assets | Device website |
| --- | --- | --- |
| Akai MPC One Plus | [`MPC Standalone OS - User Guide - v3.9.pdf`](<Akai MPC One Plus/MPC Standalone OS - User Guide - v3.9.pdf>); [`inMusic Software Center-darwin-universal-1.39.0.zip`](<Akai MPC One Plus/inMusic Software Center-darwin-universal-1.39.0.zip>); [`MPC (Gen 1) 3.9.0 Updater.app.zip`](<Akai MPC One Plus/MPC (Gen 1) 3.9.0 Updater.app.zip>); [`MPC (Gen 2) 3.9.0 Updater.app.zip`](<Akai MPC One Plus/MPC (Gen 2) 3.9.0 Updater.app.zip>) | [Akai MPC One Plus](https://www.akaipro.com/mpc-one-plus/) |
| Alesis V49 MKII | [`V49 MKII - User Guide - v1.3.pdf`](<Alesis V49 MKII/V49 MKII - User Guide - v1.3.pdf>); [`Alesis V Series MKII Preset Editor 1.0.1.dmg.zip`](<Alesis V49 MKII/Alesis V Series MKII Preset Editor 1.0.1.dmg.zip>) | [Alesis V49 MKII](https://www.alesis.com/products/view2/v49-mkii) |
| Focusrite Saffire Pro 40 | [`userguidepro40english04.pdf`](<Focusrite Saffire Pro 40/userguidepro40english04.pdf>); [`Saffire MixControl-3.9.3168_0.dmg.zip`](<Focusrite Saffire Pro 40/Saffire MixControl-3.9.3168_0.dmg.zip>) | [Focusrite Saffire Pro 40](https://focusrite.com/products/saffire-pro-40) |
| Focusrite Scarlett 4i4 | [`Focusrite Control 2 1.1014.0.0.dmg.zip`](<Focusrite Scarlett 4i4/Focusrite Control 2 1.1014.0.0.dmg.zip>) | [Focusrite Scarlett 4i4](https://focusrite.com/products/scarlett-4i4) |
| Gitfos C1Pro USB Hub | [`Gitfos 18 in 1 Powered USB C Hub with 4K HDMI _ C1Pro.html`](<Gitfos C1pro USB hub/Gitfos 18 in 1 Powered USB C Hub with 4K HDMI _ C1Pro.html>) | [Gitfos C1Pro](https://gitfos.com/products/c1pro) |

### Operational / Repo Discipline

- Keep hardware documentation changes in this repo committed and pushed when done.
- Before committing, check the diff and avoid committing unrelated local changes.
- Preserve the folder-per-device organization for manuals, installers, saved vendor pages, and supporting assets.
