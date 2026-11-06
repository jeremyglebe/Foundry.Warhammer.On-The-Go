# Drowsy's WFRP4e On The Go

Drowsy's WFRP4e On The Go adds role-aware mobile companion views to WFRP4e on Foundry VTT 14.

## What you can do

### Players

- a comprehensive Player view of the current user's assigned character;
- wounds and state controls, resources, movement, XP, characteristics, searchable skills, talents,
  traits, career, and personal details;
- WFRP-native roll setup for characteristics, skills, weapons, traits, spells, prayers, reloads, and
  extended tests;
- combat loadout and armour coverage, editable inventory and containers, magic, religion,
  conditions, effects, ailments, notes, and confirmed advancement actions;
- recent visible chat results plus permission-aware world and compendium journals;
- live refresh when the assigned actor, embedded items/effects, chat, or journals change;
- actionable states when a player has no usable Character assignment.

Enabled GMs always receive the GM view. Enabled non-GMs receive the Player view. The module is built
for the WFRP4e system and does not expose other actors to a player.

## GMs and activation

GMs get a full-screen prep menu with Journals and module Settings. You choose which users can use On
The Go and the viewport width at which it opens automatically. This is a companion for your running
Foundry world, not an offline app or a replacement for the full desktop GM interface.

## Requirements

- Foundry VTT: minimum 14, verified 14.
- Game system: wfrp4e. The manifest does not declare a specific WFRP4e version.
- Module ID: `wfrp4e-on-the-go`.
- Players need an assigned WFRP4e Character that they can access.

Compatibility values above come from the package manifest; they do not promise support for every
browser or device.

## Installation

1. In Foundry's Setup screen, open **Add-on Modules → Install Module**.
2. Paste this URL into **Manifest URL** and choose **Install**:

   ```text
   https://github.com/jeremyglebe/Foundry.Warhammer.On-The-Go/releases/latest/download/module.json
   ```

3. Launch your WFRP4e world, open **Manage Modules**, enable **Drowsy's WFRP4e On The Go**, and
   save.

Use the manifest URL, not the GitHub source-code ZIP.
[Release downloads and notes](https://github.com/jeremyglebe/Foundry.Warhammer.On-The-Go/releases/latest)
are available if you need a particular version.

## First use

1. As GM, open **Game Settings → Drowsy's WFRP4e On The Go → Configure Users** and enable the
   players and GMs who should use the companion.
2. Set **On The Go Width Threshold**. The default is 800 pixels; automatic startup applies when an
   enabled user's browser viewport is at or below the threshold.
3. Assign each player's WFRP4e Character in Foundry's user configuration, then refresh the browser.
   Enabled GMs receive the GM view even when they have an assigned character.
4. To use automatic startup on a wider screen, turn on **Force On The Go On This Client** in that
   browser and refresh. This bypasses the width threshold, not the GM's enabled-user list.

For a manual preview, choose **Open On The Go Window** in the module's Game Settings. It opens your
role's view in a movable, resizable window without hiding Foundry, independently of the automatic
activation settings. Close an existing full-screen On The Go view with **Escape** first.

## Troubleshooting

- **Nothing opens automatically:** check that the module and your user are enabled, check the
  viewport threshold or client force setting, and refresh after activation changes.
- **No character appears:** ask the GM to check your assigned Character and access to that actor.
  The Player view does not browse every actor in the world.
- **Need the regular Foundry interface:** press **Escape** to close the full-screen companion, or
  use the windowed view.
- **Browser controls still take up space:** use **Menu → Enter fullscreen** in the Player view or
  the fullscreen button on the GM home menu. Availability depends on the browser. iPhone Safari does
  not support this page-fullscreen API; use its browser toolbar controls instead.

## Feedback

[Report a bug or request a feature](https://github.com/jeremyglebe/Foundry.Warhammer.On-The-Go/issues).
Include your module, Foundry and WFRP4e versions, browser/device, user role, steps to reproduce, and
whether you used automatic full-screen mode or the windowed view. Avoid sharing private world data.
