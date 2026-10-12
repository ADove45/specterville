// Regenerates PROMPTS.md from js/specterville/art.js. Run with: node tools/make-prompts.js
global.window = {}; const fs = require('fs'); global.SV = { DAYS: [] };
eval(fs.readFileSync(__dirname + '/../js/specterville/art.js', 'utf8'));
const keys = Object.keys(SV.ART);
const isAct = k => k.indexOf('act-') === 0, pages = keys.filter(k => !isAct(k)), acts = keys.filter(isAct);
const first = pages.filter(k => SV.ART[k].pri), rest = pages.filter(k => !SV.ART[k].pri);
const full = k => `${SV.ART[k].p} ${SV.STYLE}. Wide 16:9 landscape.`;
let n = 0; const block = k => `### ${++n}. ${SV.ART[k].t}\nSave as: \`images/${k}.jpg\`\n\n\`\`\`\n${full(k)}\n\`\`\`\n`;
fs.writeFileSync(__dirname + '/../PROMPTS.md', `# Specterville picture prompts

${keys.length} pictures. Every prompt below is complete and stands on its own: copy the whole block into Copilot (or any image generator), one at a time, and save the result with the exact file name shown.

Each prompt already includes the style, the "no text" rule and the "no recognizable faces" rule. You can also use the primer in \`COPILOT_GUIDE.md\` first to keep the whole set consistent.

If Copilot refuses ("can't be generated due to Microsoft's code of conduct"), start a new chat, paste the primer again, and use gentler words: avoid "panic", "melting", "anger", "attack", "blood" and "violence". Describe the mood with light and posture instead.

## Pages: places, scenes, day cards, endings (${first.length} first, then ${rest.length} more)

${first.concat(rest).map(block).join('\n')}
## Choice pictures: one for each action you can take (${acts.length} so far)

The page turns to one of these when the player picks an action. If a file is missing, the game shows the place picture instead.

${acts.map(block).join('\n')}`);
console.log(keys.length, 'prompts:', first.length, 'first,', rest.length, 'more,', acts.length, 'choice pictures');
