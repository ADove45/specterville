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
  'event-townhall': { pri: 1, t: 'The Town Hall', p: 'A packed high school auditorium in panic, silhouettes of a crowd rushing toward the exits, a translucent girl standing on the stage with a face melting in anger, a seated woman calm in the chaos.' },
  'event-council': { t: 'The Circle of Trust', p: 'A candle shop after midnight, coffee mugs on a small table, a group of living figures and two pale translucent specters seated in candlelight.' },
  'event-debrief': { t: 'The Command Post', p: 'A hotel suite turned into an FBI command post, laptops, maps with strings, a team of silhouettes around a table at night.' },
  'event-margretdoor': { t: 'Two in the Morning', p: 'A dim motel hallway at two in the morning, a woman sitting on the floor against a door with her arms around her knees, a single warm lamp.' },
  'event-arrive': { pri: 1, t: 'Dinner at the Shelleys’', p: 'A grand mansion foyer with an antebellum staircase, a woman in a black dress opening the front door, a butler specter beside her, candlelit drawing room beyond.' },
  'event-overdose': { t: 'Three in the Morning', p: 'A hospital waiting room at three in the morning, a man with his head in his hands, two stern elderly women stepping off an elevator, fluorescent light.' },
  'event-tv': { t: 'The News', p: 'A television in a dim hotel room showing a news broadcast outside a mansion, flashing camera lights, a drugged woman in a robe led down steps by a man.' },

  /* Endings */
  'ending-win': { pri: 1, t: 'Case Closed', p: 'An interrogation room after a storm of energy, a toppled chair, a small old woman lying still, paramedics rushing in, a glowing pink haze fading, stars of the Pleiades in a window.' },
  'ending-lose': { t: 'Case Lost', p: 'A mansion bedroom with the lights out, a window open to the night, seven stars shining, one star dimming.' }
};
