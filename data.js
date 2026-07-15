/* =====================================================================
   DATA — this is the part you own. Edit this file only; index.html
   never needs to change when you add, remove, or fix a resource.

   How to add a row:
     1. Get lat/lng by right-clicking any spot in Google Maps.
     2. region:   1=Panhandle/NW  2=Northeast  3=Central/I-4  4=South
     3. category: school | library | apex | linux | maker | con | meetup
     4. url may be "" if there is no website.

   Data sweep: July 2026. Meetup venues and schedules drift — the notes
   flag anything that should be re-verified before you rely on it.
   ===================================================================== */
const RESOURCES = [
  // ---- 1 · PANHANDLE / NORTHWEST ----
  { name:"UWF Center for Cybersecurity & AI", category:"school", region:1, lat:30.5471, lng:-87.2185, city:"Pensacola", url:"https://uwf.edu/centers/cybersecurity-and-ai/", notes:"NSA-designated national cyber hub — GenCyber camps, CyberPatriot outreach, Cybersecurity Ambassadors." },
  { name:"Florida State University", category:"school", region:1, lat:30.4419, lng:-84.2985, city:"Tallahassee", url:"https://www.fsu.edu", notes:"CS and cybersecurity programs; student security clubs." },
  { name:"PSC Cyber Defense Club", category:"school", region:1, lat:30.4262, lng:-87.2090, city:"Pensacola", url:"https://pensacolastate.edu/student-clubs/cyber-defense-club/", notes:"Pensacola State College's student defense club — competes in regional cyber events." },
  { name:"Making Awesome Makerspace", category:"maker", region:1, lat:30.4460, lng:-84.3100, city:"Tallahassee", url:"https://makingawesome.org", notes:"Community makerspace with electronics and classes." },
  { name:"West Florida Public Libraries — Main", category:"library", region:1, lat:30.4131, lng:-87.2169, city:"Pensacola", url:"https://mywfpl.com", notes:"Free tech programs and meeting rooms." },
  { name:"BSides Pensacola", category:"con", region:1, lat:30.4213, lng:-87.2169, city:"Pensacola", url:"https://bsidespensacola.org", notes:"“Hacking the Coast” — grassroots Gulf Coast security con: talks, workshops, CTF." },
  { name:"DC850 · Hack Pensacola", category:"meetup", region:1, lat:30.4180, lng:-87.2130, city:"Pensacola", url:"https://forum.defcon.org/node/231655", notes:"Gulf Coast DEF CON group — CTF, lockpicking, reversing; all ages and skill levels." },
  { name:"CyberThon (AFCEA Blue Angels)", category:"apex", region:1, lat:30.3530, lng:-87.2720, city:"Pensacola", url:"http://www.afceapensacola.org", notes:"Annual youth cyber-defense competition at the National Flight Academy." },

  // ---- 2 · NORTHEAST / NORTH CENTRAL ----
  { name:"University of Florida", category:"school", region:2, lat:29.6436, lng:-82.3549, city:"Gainesville", url:"https://www.ufl.edu", notes:"FICS Research institute; student CTF teams." },
  { name:"UF K-12 Cybersecurity Academy", category:"apex", region:2, lat:29.6480, lng:-82.3430, city:"Gainesville", url:"https://gencyber.education.ufl.edu", notes:"NSA/NSF-backed GenCyber summer program for high-school students and teachers." },
  { name:"University of North Florida", category:"school", region:2, lat:30.2697, lng:-81.5106, city:"Jacksonville", url:"https://www.unf.edu", notes:"Cybersecurity degree tracks and outreach." },
  { name:"Jacksonville Public Library — Main", category:"library", region:2, lat:30.3273, lng:-81.6606, city:"Jacksonville", url:"https://jaxpubliclibrary.org", notes:"Free classes, maker lab programs." },
  { name:"DC904 (DEF CON Group)", category:"meetup", region:2, lat:30.3322, lng:-81.6557, city:"Jacksonville", url:"https://dc904.org", notes:"Monthly hacker meetup — venue rotates; pin marks downtown." },
  { name:"BSides Jax", category:"con", region:2, lat:30.2686, lng:-81.5060, city:"Jacksonville", url:"https://www.bsidesjax.org", notes:"Volunteer-run infosec con each fall at the UNF University Center — lockpick village, CTF; students free." },
  { name:"Gainesville Hackerspace", category:"maker", region:2, lat:29.6860, lng:-82.3370, city:"Gainesville", url:"https://gainesvillehackerspace.org", notes:"Open house Tuesdays 7pm — 24/7 member access, 3D printers, laser cutters, electronics." },
  { name:"OWASP Jacksonville", category:"meetup", region:2, lat:30.2530, lng:-81.5520, city:"Jacksonville", url:"https://owasp.org/www-chapter-jacksonville/", notes:"AppSec chapter — meets 3rd Monday (Star-V, AC Skinner Pkwy)." },
  { name:"Jacksonville 2600", category:"meetup", region:2, lat:30.3050, lng:-81.7200, city:"Jacksonville", url:"https://www.2600.com/meetings", notes:"First-Friday hacker meetup at The Silver Cow, Edgewood Ave S." },
  { name:"JaxLUG", category:"linux", region:2, lat:30.3322, lng:-81.6749, city:"Jacksonville", url:"", notes:"Jacksonville Linux Users Group — verify current schedule before attending." },
  { name:"MakerSpace at HQ — Alachua County Library", category:"library", region:2, lat:29.6497, lng:-82.3215, city:"Gainesville", url:"https://www.aclib.us/makerspace-hq", notes:"3D printers, laser cutter, Cricut, and sewing machines at little to no cost." },

  // ---- 3 · CENTRAL / I-4 CORRIDOR ----
  { name:"Cyber Florida at USF", category:"school", region:3, lat:28.0587, lng:-82.4139, city:"Tampa", url:"https://cyberflorida.org", notes:"Statewide cyber hub — workforce training, K-12 programs, events." },
  { name:"Operation K12 · CyberLaunch", category:"apex", region:3, lat:28.0620, lng:-82.4080, city:"Tampa (statewide)", url:"https://cyberflorida.org/opk12/", notes:"Cyber Florida's free K-12 programs — classroom curriculum plus the statewide CyberLaunch CTF for grades 6–12." },
  { name:"Hack@UCF", category:"school", region:3, lat:28.6024, lng:-81.2001, city:"Orlando", url:"https://hackucf.org", notes:"UCF's collegiate cyber defense club — open meetings, top CTF team." },
  { name:"BSides Tampa", category:"con", region:3, lat:28.0645, lng:-82.4130, city:"Tampa", url:"https://bsidestampa.net", notes:"May 15–16, 2026 at the USF Marshall Center — 2,000+ attendees, villages, training day." },
  { name:"BSides Orlando", category:"con", region:3, lat:28.5383, lng:-81.3792, city:"Orlando", url:"https://bsidesorlando.org", notes:"Sept 25–26, 2026 — workshops Friday, conference Saturday." },
  { name:"DC407 (DEF CON Group)", category:"meetup", region:3, lat:28.5440, lng:-81.3730, city:"Orlando", url:"https://dc407.com", notes:"Orlando-area DEF CON group with scheduled in-person meetings." },
  { name:"DC813 (DEF CON Group)", category:"meetup", region:3, lat:27.9506, lng:-82.4572, city:"Tampa", url:"", notes:"Tampa's DEF CON group — find current meetings via the DEF CON Groups directory." },
  { name:"SpaceCoastSec · DC321", category:"meetup", region:3, lat:28.0836, lng:-80.6081, city:"Melbourne", url:"https://www.eventbrite.com/o/spacecoastsec-77095667243", notes:"Space Coast infosec community — 3rd Tuesday 6:30pm, Brevard County." },
  { name:"Tampa Hackerspace", category:"maker", region:3, lat:27.9860, lng:-82.4400, city:"Tampa", url:"https://tampahackerspace.com", notes:"Makerspace with electronics lab and open nights." },
  { name:"FamiLAB", category:"maker", region:3, lat:28.6208, lng:-81.3600, city:"Longwood", url:"https://familab.org", notes:"Long-running community makerspace north of Orlando." },
  { name:"MakerFX Makerspace", category:"maker", region:3, lat:28.4350, lng:-81.4280, city:"Orlando", url:"https://www.makerfx.org", notes:"8600 Commodity Cir — laser, CNC, electronics; classes and open builds." },
  { name:"Melbourne Makerspace", category:"maker", region:3, lat:28.0790, lng:-80.6520, city:"Melbourne", url:"https://www.facebook.com/MelbourneMakerspace/", notes:"Community makerspace — members get 24/7 access." },
  { name:"Orlando Public Library — Melrose Center", category:"library", region:3, lat:28.5411, lng:-81.3766, city:"Orlando", url:"https://www.ocls.info", notes:"Free tech, audio/video, and fab labs at the main library." },
  { name:"Suncoast Linux Users Group (SLUG)", category:"linux", region:3, lat:27.9600, lng:-82.4800, city:"Tampa Bay", url:"https://www.meetup.com/Suncoast-LUG/", notes:"Tampa Bay's oldest active LUG — free meetings, open to all; pin marks Tampa, meetings move around the bay." },
  { name:"GoLUG", category:"linux", region:3, lat:28.5400, lng:-81.3850, city:"Orlando", url:"https://www.golug.org", notes:"Greater Orlando Linux User Group — #golug on Libera.Chat." },
  { name:"OWASP Tampa", category:"meetup", region:3, lat:27.9470, lng:-82.4590, city:"Tampa", url:"https://owasp.org/www-chapter-tampa/", notes:"Quarterly AppSec meetups — free and open to all." },
  { name:"OWASP Orlando", category:"meetup", region:3, lat:28.5414, lng:-81.3790, city:"Orlando", url:"https://owasp.org/www-chapter-orlando/", notes:"Meets at Downtown PourHouse, 20 S Orange Ave." },
  { name:"Orlando 2600", category:"meetup", region:3, lat:28.5536, lng:-81.3430, city:"Orlando", url:"https://www.2600.com/meetings", notes:"First-Friday hacker meetup — Miller's Ale House, 2600 E Colonial Dr." },
  { name:"The Hive — John F. Germany Library", category:"library", region:3, lat:27.9519, lng:-82.4600, city:"Tampa", url:"https://hcplc.org/services/hive", notes:"10,000 sq ft innovation center — 3D printers, CNC, soldering, robotics scrimmage zone; free with a library card." },
  { name:"The Loft — Centennial Park Library", category:"library", region:3, lat:28.1930, lng:-82.7397, city:"Holiday (Pasco)", url:"https://pascolibraries.org/makerspaces/the-loft/", notes:"Pasco Libraries studio-arts makerspace — painting, photo digitization, arts & crafts." },
  { name:"Ingenuity Lab — Hugh Embry Library", category:"library", region:3, lat:28.3648, lng:-82.1954, city:"Dade City (Pasco)", url:"https://www.pascolibraries.org/makerspaces/", notes:"STEAM makerspace — KEVA planks, LEGO bricks, arts & crafts." },
  { name:"Studio H — Hudson Library", category:"library", region:3, lat:28.3630, lng:-82.6890, city:"Hudson (Pasco)", url:"https://pascolibraries.org/makerspaces/studio-h/", notes:"Multimedia studio — record demos and podcasts, practice instruments." },
  { name:"The Foundry — Land O' Lakes Library", category:"library", region:3, lat:28.2189, lng:-82.4575, city:"Land O' Lakes (Pasco)", url:"https://pascolibraries.org/makerspaces/the-foundry/", notes:"Complete wood shop plus fabric arts and craft center." },
  { name:"Regency Fresh — Regency Park Library", category:"library", region:3, lat:28.2790, lng:-82.6770, city:"New Port Richey (Pasco)", url:"https://www.pascolibraries.org/makerspaces/", notes:"Full test-kitchen makerspace — recipes and cooking demonstrations." },
  { name:"Discovery Gardens — New River Library", category:"library", region:3, lat:28.2321, lng:-82.3040, city:"Wesley Chapel (Pasco)", url:"https://www.pascolibraries.org/makerspaces/", notes:"Community and butterfly gardens with demonstrations." },
  { name:"Clayworks — Starkey Ranch Library", category:"library", region:3, lat:28.1859, lng:-82.6320, city:"Odessa (Pasco)", url:"https://www.pascolibraries.org/makerspaces/", notes:"Ceramics studio with open studio hours, inside the Theatre Library Cultural Center." },
  { name:"Pasco Mobile Makerspace", category:"library", region:3, lat:28.3660, lng:-82.6860, city:"Countywide (Pasco)", url:"https://pascolibraries.org/makerspaces/mobile-makerspace/", notes:"Makerspace van — recording gear to portable lathes; travels anywhere in Pasco County." },
  { name:"Clearwater Maker Studios", category:"library", region:3, lat:27.9682, lng:-82.8010, city:"Clearwater", url:"https://www.myclearwaterlibrary.com/Services/Studios", notes:"Design, prototype, and create with library equipment and software at the Main Library." },
  { name:"Palm Harbor Library MakerSpace", category:"library", region:3, lat:28.0847, lng:-82.7530, city:"Palm Harbor", url:"", notes:"Hazel L. Incantalupo MakerSpace — youth-focused; verify hours with the library." },

  // ---- 4 · SOUTH FLORIDA (incl. SW coast) ----
  { name:"Cybersecurity@FIU", category:"school", region:4, lat:25.7574, lng:-80.3733, city:"Miami", url:"https://cyber.fiu.edu", notes:"NSA CAE research and degree programs at Florida International University." },
  { name:"GenCyber@FIU", category:"apex", region:4, lat:25.7600, lng:-80.3690, city:"Miami", url:"https://caecyber.fiu.edu/gencyber/", notes:"NSA/NSF GenCyber summer camps for grade 6–12 teachers — feeds cyber into local classrooms." },
  { name:"Miami Sunset Senior High — Cyber Magnet", category:"apex", region:4, lat:25.7020, lng:-80.4040, city:"Miami", url:"https://miamisunsetsenior.com/cybersecurity-magnet-program/", notes:"Public magnet program — CyberPatriot, National Cyber League, and picoCTF teams." },
  { name:"Nova Southeastern University", category:"school", region:4, lat:26.0765, lng:-80.2521, city:"Davie", url:"https://www.nova.edu", notes:"NSA CAE-designated cybersecurity programs." },
  { name:"Miami-Dade Public Library — Main", category:"library", region:4, lat:25.7743, lng:-80.1937, city:"Miami", url:"https://mdpls.org", notes:"Free technology training and programs." },
  { name:"HackMiami", category:"con", region:4, lat:25.9510, lng:-80.1210, city:"Sunny Isles Beach", url:"https://hackmiami.com", notes:"HackMiami 1101: May 12–16, 2026, Marenas Beach Resort — plus monthly meetups (meetup.com/hackmiami)." },
  { name:"DC305 (DEF CON Group)", category:"meetup", region:4, lat:25.7617, lng:-80.1918, city:"Miami", url:"https://www.meetup.com/dcg305/", notes:"Miami's DEF CON group — meets monthly, 1st Sunday." },
  { name:"DC561 (DEF CON Group)", category:"meetup", region:4, lat:26.7135, lng:-80.0533, city:"West Palm Beach", url:"https://dc561.org", notes:"Talks, workshops, and networking at Subculture Coffee on Clematis St." },
  { name:"Boca Raton 2600", category:"meetup", region:4, lat:26.3585, lng:-80.0831, city:"Boca Raton", url:"https://www.2600.com/meetings", notes:"First-Friday hacker meetup — Living Green Cafe, Federal Hwy." },
  { name:"OWASP South Florida", category:"meetup", region:4, lat:26.1224, lng:-80.1373, city:"Fort Lauderdale", url:"https://owasp.org/www-chapter-south-florida/", notes:"AppSec chapter for the Miami / Fort Lauderdale metro — events posted on Meetup." },
  { name:"Moonlighter FabLab", category:"maker", region:4, lat:25.7907, lng:-80.1350, city:"Miami Beach", url:"https://moonlighterfablab.org", notes:"Nonprofit STEAM fab lab — 3D printing, laser, CNC; hosts Maker Faire Miami." },
  { name:"SWFL Hackerspace", category:"maker", region:4, lat:26.6406, lng:-81.8723, city:"Fort Myers", url:"https://swflhackerspace.com", notes:"Southwest Florida's community hackerspace — build, design, hack." },
  { name:"BSides SWFL", category:"con", region:4, lat:26.5560, lng:-81.9010, city:"Fort Myers", url:"https://bsidesswfl.org", notes:"At Florida SouthWestern State College — next edition Feb 26–27, 2027." },
  { name:"South Florida LUG (SFLUG)", category:"linux", region:4, lat:26.1220, lng:-80.1440, city:"Fort Lauderdale", url:"", notes:"Serves Ft. Lauderdale / Hollywood / Miami — verify current status before attending." },
  { name:"Creation Station — Broward Main Library", category:"library", region:4, lat:26.1195, lng:-80.1436, city:"Fort Lauderdale", url:"https://www.broward.org/Library/pages/creationstation.aspx", notes:"Makerspace + gadget lab — 3D printing, VR, A/V production, robotics kits; free classes in coding and 3D design." },
  { name:"OWASP Bonita Springs", category:"meetup", region:4, lat:26.3398, lng:-81.7787, city:"Bonita Springs", url:"https://owasp.org/www-chapter-bonita-springs/", notes:"Covers the Naples–Fort Myers area; meets virtually the first Tuesday of each quarter — RSVP on Meetup." },
];
