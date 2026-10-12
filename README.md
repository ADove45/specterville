# Specterville

An interactive investigation game set in the American Specter universe by Rasheedah Prioleau. You play FBI Special Agent Audra Wheeler.

Case One, *The Seven Sisters* (Book One), is playable: seven days in Specter, Georgia, from a crime scene to the jailhouse accusation. Books Two and Three are not built yet.

Open `index.html` in any modern browser. No build step. Progress saves in the browser.

## Features
- **Pictures:** every page and every choice can have its own picture. The page turns when you pick something. See `PROMPTS.md` and `COPILOT_GUIDE.md`.
- **Listen:** a Listen button reads each page aloud using the voices on the player's own device. Voices and speed are in the Case Board.

## Files
- `index.html` - the page
- `js/specterville/data.js` - shared content: people, clues, theories, suspects, map positions
- `js/specterville/days/day1.js` ... `day7.js` - one file per day: places, actions, set-piece events
- `js/specterville/days/ending.js` - winning and losing endings
- `js/specterville/game.js` - the engine
- `css/specterville.css` - styling
- `js/audio.js` - generated sound effects

## Publish
Repo Settings, Pages, Deploy from branch, `main`, `/ (root)`.

## Edit
Add a place or an action by editing that day's `places`. Add a clue to `SV.CLUES` and a theory (a pair of clues) to `SV.THEORIES`. Set `SV.SITE` (author website) and `SV.ACT1` (a page to read Act I) in `data.js` to control the links on the title screen.

Dialogue is condensed from the manuscripts and keeps their wording. The manuscripts themselves are not in this repo.
