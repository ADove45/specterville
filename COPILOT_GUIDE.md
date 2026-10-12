# Making the pictures with Copilot, one at a time

## Step 1: start a new Copilot chat and paste this once (the style primer)

> I'm creating a set of matching illustrations for an interactive mystery game called Specterville, based on the American Specter novels: a small-town Southern ghost mystery set in Georgia. I will ask for one image at a time. For every image, keep exactly this style: dark painterly gothic illustration, oil-painting texture, deep umber and near-black shadows with warm gold highlights, candlelight and drifting mist, cinematic wide 16:9 composition.
>
> Rules for every image:
> - No text, lettering, logos or watermarks anywhere.
> - No recognizable or close-up faces. Show people only as silhouettes, seen from behind, or in shadow.
> - Ghosts (specters) are pale, translucent, softly glowing figures.
> - No gore or violence.
> - Keep the same moody palette throughout: umber, black and gold, with occasional deep blue night and a faint violet glow.
>
> Reply with just the image. If you can't make one, tell me what to change. Ready?

Optional but helpful: attach the Book One cover and add, "Use the attached book cover as a color and mood reference only. Do not copy its characters."

## Step 2: for each picture, send this (replace the bracket with a prompt from PROMPTS.md)

> Next image, wide 16:9, same style as before: [PASTE THE SCENE PROMPT HERE]

Use the scene text only. The style is already set, so you don't need to paste the long style line each time.

## Step 3: save it
1. Download the picture and rename it to the exact file name in PROMPTS.md, for example `apartment.jpg`.
2. On GitHub, open the `images` folder, choose Add file, Upload files, drop it in, and commit.
3. Reload the game with a hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on a Mac).

## If something goes wrong
| Problem | Say this |
|---|---|
| The style drifts after a few images | "Match the style of the first image exactly." |
| Text or a sign with words appears | "Regenerate with no text or lettering anywhere in the image." |
| A face shows up | "Make every person a silhouette or seen from behind, with no visible faces." |
| It is square, not wide | "Make it a wide 16:9 landscape." |
| It refuses | "Make it less graphic and more atmospheric. No people in the foreground." |

Order to work in: the first batch at the top of PROMPTS.md (15 pictures), then the rest.

## Pictures for choices
Besides the page pictures, every action the player can take has its own picture (the page turns to it). Those prompts are in the second half of `PROMPTS.md`. Save them as `images/act-<name>.jpg`, for example `images/act-body.jpg`. If one is missing, the game simply shows the place picture.
