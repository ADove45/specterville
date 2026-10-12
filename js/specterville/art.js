/* SPECTERVILLE: ART. One entry per picture. The game looks for images/<key>.jpg (or .png, .webp) and shows it above that page.
   If a file does not exist, nothing is shown (set SV.PLACEHOLDERS = true to see labeled empty slots while you add pictures).
   t: what the picture is.  p: the scene prompt for an image generator.  pri: 1 = make these first.
   PROMPTS.md at the repo root is generated from this file. */
SV.PLACEHOLDERS = false;
SV.STYLE = 'Dark painterly gothic illustration, oil-painting texture, deep umber and near-black shadows with warm gold highlights, candlelight and drifting mist, small-town Southern Georgia, cinematic wide 16:9 composition, no text, no lettering, no logos, and no recognizable faces (people only as silhouettes or seen from behind)';

SV.ART = {
  'title': { pri: 1, t: 'Specterville', p: 'A small Georgia town at dusk under a sky of mist, a tall church steeple and a grand mansion on a hill, pale translucent ghostly figures standing in lit windows and on the street, seven faint glowing stars of the Pleiades cluster above the rooftops.' },

  /* Day cards */
  'day-1': { t: 'Day One: The Candle', p: 'A single purple candle burning on a bedside table in a dark bedroom, the flame reflected in a window, a dark hand-shaped shadow on the wall.' },
  'day-2': { t: 'Day Two: The Past', p: 'A cluttered old filing cabinet drawer open in a dim trailer office, three yellowed case pages, a pale ghostly man in suspenders fading into a recliner in the background.' },
  'day-3': { t: 'Day Three: Ashes', p: 'The smoking ruins of a burned-down trailer sheriff station at midday, a lone figure standing in the ash, a rental car in the distance, pale smoke rising.' },
  'day-4': { t: 'Day Four: The Square', p: 'A historic Southern town square in afternoon light, storefronts with striped awnings, a neon sign flickering, a faint ghostly figure reflected in a shop window.' },
  'day-5': { t: 'Day Five: The Dinner', p: 'A grand antebellum mansion at dusk with every window lit gold, a long table glimpsed through the windows, pale ghostly servers moving among the guests, magnolia trees in front.' },
  'day-6': { t: 'Day Six: Church', p: 'A tall white country church with a cross-topped steeple on a Sunday morning, stained glass glowing, a still lake in the foreground with a wooden dock.' },
  'day-7': { t: 'Day Seven: The Seventh Sister', p: 'A night sky over a small town with the Pleiades star cluster blazing, a faint pink glow gathering over a mansion and a jailhouse below.' },

  /* Places */
  'apartment': { pri: 1, t: 'Gwyneth Miller’s Apartment', p: 'A small cheap one-bedroom apartment bedroom at noon, heat shimmering through blinds, an unmade bed, a large purple candle and a small white card on the bedside table, police tape across the doorway.' },
  'library': { pri: 1, t: 'The Specter Public Library', p: 'A busy small-town public library with rows of shelves and students at computers wearing headphones, one translucent pale figure standing at the reference desk, warm lamps, dust in the light.' },
  'diner': { pri: 1, t: 'Bishop’s', p: 'A hole-in-the-wall Southern barbecue diner and bar at night, a flickering red neon sign, plastic menus on tables, a pale translucent waitress fading near the counter, an old jukebox glowing in the corner.' },
  'station': { pri: 1, t: 'The Sheriff’s Station', p: 'The interior of a cramped four-room trailer converted to a sheriff’s station, an ancient filing cabinet taking up half a wall, a desk covered in case files, maps of a small town pinned to the paneling.' },
  'station-ruins': { t: 'The Station Ruins', p: 'The blackened smoldering ruins of a burned trailer, twisted metal and a filing cabinet standing in the ash, pale smoke curling up, a lone silhouette and a car in the distance.' },
  'shop': { pri: 1, t: 'The Daylight Candle Shop', p: 'A small, warm candle shop with narrow aisles lined with hundreds of burning candles, lavender smoke, a counter with a chakra chart on the wall, a translucent female silhouette standing between the shelves.' },
  'bnb': { t: 'The Bed & Breakfast', p: 'A quiet B&B bedroom at night, lamplight on a table with a thick case file and a vase of roses, a television glowing, a specter shield bracelet on the nightstand.' },
  'hud': { t: 'The HUD Apartments', p: 'A run-down two-story apartment complex with dried patchy grass and scattered trash, a flickering lobby light, an alley of bars glowing in the distance.' },
  'lake': { t: 'Ethan’s Lake House', p: 'A two-story country farmhouse with its porch light on, a large still lake behind it at twilight, a pickup truck in the gravel drive, a faint ghostly figure seated in a window.' },
  'trailer': { t: 'Renee Stevens’ Trailer', p: 'A tidy doublewide trailer in a trailer park, a container garden of roses and snapdragons by the steps, bird feeders full of blue jays and hummingbirds, morning light.' },
  'hospital': { pri: 1, t: 'The Hospital', p: 'A five-story modern glass hospital on a hill outside a small town at dusk, a bland beige lobby glowing, a pale translucent figure in a white coat in an upper window.' },
  'school': { t: 'Specter High School', p: 'A Southern high school at night, a lit auditorium full of a crowd, a banner announcing a town hall meeting, a principal’s office window glowing gold.' },
  'shops': { t: 'The Shops on the Square', p: 'Three storefronts on a small-town square: a discount dress shop, a goth teen boutique, and an elegant gown shop with mannequins, afternoon light and a neon sign.' },
  'scoop': { t: 'The Scoop', p: 'A dim hole-in-the-wall club down a poorly lit alley, thumping blue and magenta stage light spilling through the back door, a bouncer silhouette, haze.' },
  'church': { pri: 1, t: 'The Church', p: 'The interior of a traditional basilica-style church, stained glass windows, a choir, a saxophone, shafts of colored light falling on pews, a front row of finely dressed figures seen from behind.' },
  'cemetery': { pri: 1, t: 'The Cemetery', p: 'A manicured, lonely cemetery lined with magnolia trees at evening, a humble stone tomb with an altar in the center, a woman kneeling at a small headstone, green translucent shapes gathering at the tomb.' },
  'mansion': { pri: 1, t: 'The Shelley Mansion', p: 'A grand antebellum mansion at dusk, every window glowing gold, a long dining table glimpsed through the windows, pale ghostly servers among the guests, magnolia trees and mist.' },
  'prison': { t: 'The State Prison', p: 'A grim state prison visitation room with a metal table bolted to the floor, shackles, harsh fluorescent light, a huge shadowed silhouette across the table.' },
  'jail': { pri: 1, t: 'The Jailhouse', p: 'A jailhouse observation room at night with a one-way window onto three interrogation rooms, one figure in each, dark monitors, an energy reader device glowing on a table.' },

  /* Set-piece scenes */
  'event-fire': { pri: 1, t: 'The Fire', p: 'A burned-out trailer sheriff station at midday, smoke rising, a volunteer fire crew resting beside a truck, a man in a rental car watching.' },
  'event-townhall': { pri: 1, t: 'The Town Hall', p: 'A crowded high school auditorium at night, rows of seats and a stage with a podium, silhouettes of townspeople standing and turning toward the exits, a pale translucent girl standing alone on the stage in a soft ghostly glow, a seated woman calm in the middle of the crowd.' },
  'event-council': { t: 'The Circle of Trust', p: 'A candle shop after midnight, coffee mugs on a small table, a group of living figures and two pale translucent specters seated in candlelight.' },
  'event-debrief': { t: 'The Command Post', p: 'A hotel suite turned into an FBI command post, laptops, maps with strings, a team of silhouettes around a table at night.' },
  'event-margretdoor': { t: 'Two in the Morning', p: 'A dim motel hallway at two in the morning, a woman sitting on the floor against a door with her arms around her knees, a single warm lamp.' },
  'event-arrive': { pri: 1, t: 'Dinner at the Shelleys’', p: 'A grand mansion foyer with an antebellum staircase, a woman in a black dress opening the front door, a butler specter beside her, candlelit drawing room beyond.' },
  'event-overdose': { t: 'Three in the Morning', p: 'A hospital waiting room at three in the morning, a man with his head in his hands, two stern elderly women stepping off an elevator, fluorescent light.' },
  'event-tv': { t: 'The News', p: 'A television in a dim hotel room showing a news broadcast outside a mansion, flashing camera lights, a drugged woman in a robe led down steps by a man.' },


  /* ---------- Pictures for choices (the page turns to these when you pick an action) ----------
     Key: act-<action id>. A picture for a reply to a dialogue choice is act-<action id>-c<number>, counting from 0.
     If a choice picture is missing the game shows the action picture, and if that is missing, the place picture. */
  'act-body': { t: 'Examine the body', p: 'A bed seen from the doorway through yellow police tape in noon light, a white sheet drawn up and dark hair spread across a pillow, a bedside lamp, the mood quiet and solemn.' },
  'act-candle': { t: 'The purple candle', p: 'A close view of a large purple candle burned low beside a small white instruction card on a bedside table, soft gold light, wax dripping, a faint curl of smoke.' },
  'act-room': { t: 'Search the room', p: 'A cheap feminine bedroom being searched, a dresser with perfume bottles and candles, a mirror, scattered clothing, police tape, perfume haze in warm light.' },
  'act-ethan_apt': { t: 'Ethan in the doorway', p: 'A tall man in a ball cap and faded jeans stepping through a bedroom doorway into warm light, seen mostly from behind, a woman in a dark suit turning toward him in silhouette.' },
  'act-ben': { t: 'The reference desk', p: 'A pale translucent young man with large glasses seated behind a library reference desk, fading at the edges, warm lamp light, rows of shelves behind him, seen in profile.' },
  'act-katherine': { t: 'The woman in the aisle', p: 'A woman in her late thirties standing alone in a narrow library aisle between tall shelves, arms crossed, head bowed, seen from behind in soft gold light.' },
  'act-charles': { t: 'The manager’s door', p: 'A cluttered library manager’s office door ajar, warm light spilling into a dim hallway, a tall man in silhouette in the doorway and a purple-haired translucent girl slipping past.' },
  'act-computer': { t: 'Gwyneth’s computer', p: 'A library computer glowing in a dim corner, a web page of purple candles on the screen, a woman seated in silhouette from behind, a coffee mug beside the keyboard.' },
  'act-ashley': { t: 'The waitress', p: 'A pale translucent young waitress in a pink diner uniform fading beside a booth, carrying a glass of water, warm neon glow, plastic menus on the table.' },
  'act-ethan_diner': { t: 'Ethan joins you', p: 'Two people in a Southern diner booth seen from behind, a basket of bread rolls and two glasses of water on the table between them, a jukebox glowing in the corner.' },
  'act-files': { t: 'The four case files', p: 'Four case files laid side by side on a meeting table in a small trailer, four ID photographs of dark-haired women partly visible, a takeout container, warm lamplight.' },
  'act-kendra': { t: 'Tell Ethan about Kendra', p: 'A woman and a man seated at a trailer meeting table, heads bowed over open files, lamplight, the man’s hand resting near hers, both in silhouette.' },
  'act-abfile': { t: 'Abigail’s file', p: 'A hand pulling a thin worn case folder from the bottom drawer of an old green filing cabinet, three yellowed pages, warm lamplight, trailer wood paneling.' },
  'act-knock': { t: 'The knock at the door', p: 'A trailer sheriff’s office doorway crowded with two men in silhouette, a short stout man with thick glasses and a tall man in a suit, backlit by evening light, a woman at a desk holding a folder to her chest.' },
  'act-mackenzie': { t: 'Mackenzie reads your hands', p: 'Two hands held palms-up in candlelight above a small table, a chakra chart open beside them, lavender sprigs, soft gold light, two women seated facing each other in silhouette.' },
  'act-gwyn': { t: 'Gwyneth appears', p: 'A pale translucent young woman standing between candle shelves, the flames showing through her, a woman in a dark suit raising a wrist-worn device that glows faintly.' },
  'act-night': { t: 'Ethan calls at nine', p: 'A hotel bedroom at night, a woman lying awake looking up at a stucco ceiling, a lamp, a phone glowing on the nightstand, a thick case file on the table.' },

  /* Endings */
  'ending-win': { pri: 1, t: 'Case Closed', p: 'An interrogation room just after a surge of pink-violet energy has faded, a toppled chair beside a metal table under a hanging lamp, a soft pink haze dissolving in the air, the stars of the Pleiades visible through a high window, silhouettes of paramedics at the doorway.' },
  'ending-lose': { t: 'Case Lost', p: 'A mansion bedroom with the lights out, a window open to the night, seven stars shining, one star dimming.' }
};
