const categories = [
  { title: "Texting Seno", icon: "💬", tag: "reply lore", items: [
    "I have received a reply from Seno within 2 minutes.",
    "I have received a reply from Seno within 1 hour.",
    "I have waited 6+ hours for a Seno reply and it eventually came.",
    "I have waited multiple days for a Seno reply and it eventually came.",
    "I sent Seno a message and genuinely could not tell if he had seen it or not for 10+ days.",
    "Seno has replied to me instantly at 3am with something coherent.",
    "Seno has said \"nvm\" over text and I never found out what he was going to say."
  ]},
  { title: "Chocolate Milk", icon: "🥛", tag: "brown elixir", items: [
    "I have watched Seno pick up chocolate milk like it was the most natural thing in the world. No explanation.",
    "Seno has offered me chocolate milk like it was genuinely the move.",
    "I have seen Seno visibly disappointed when the chocolate milk ran out.",
    "I have seen Seno drink 2 glasses of chocolate milk in one sitting.",
    "I have seen Seno drink 4 glasses of chocolate milk in one sitting.",
    "I have seen Seno drink chocolate milk at a time where no reasonable person would drink chocolate milk.",
    "Seno has used chocolate milk as a meal replacement in front of me and seemed fine about it."
  ]},
  { title: "Philosophy and Debates", icon: "🧠", tag: "determinism DLC", items: [
    "Seno has brought up free will vs determinism in a conversation I did not expect it to come up in.",
    "Seno has asked me whether I think free will actually exists and genuinely waited for my answer.",
    "Seno has asked me something about existence or the meaning of life at a completely unreasonable time.",
    "I have watched Seno argue a philosophical point calmly for so long that the other person just gave up.",
    "Seno has said something like \"your purpose is to never have to think about your purpose\" with a straight face.",
    "Seno has disagreed with me philosophically in a way that was calm, correct, and slightly annoying.",
    "Seno asked me a question that made me pause for 10+ seconds before I could even start answering.",
    "Seno has changed my mind about something through a conversation I didn't expect to matter."
  ]},
  { title: "Emotional Seno", icon: "🫶", tag: "quiet kindness", items: [
    "I have seen Seno cry.",
    "Seno has said something to me that I still think about.",
    "Seno has done something quietly kind for someone without making it a thing."
  ]},
  { title: "Climbing: The V-Grades", icon: "🧗", tag: "campus boulder", items: [
    "Seno has convinced me to go climbing and I actually went.",
    "I have watched Seno look at something around campus and immediately assess whether it's climbable.",
    "I have climbed a table, chair, or some other completely random object with Seno.",
    "I have seen Seno send a V3.",
    "I have seen Seno send a V4.",
    "I have seen Seno send a V5.",
    "I have seen Seno send a V6.",
    "I have seen Seno send a V7.",
    "I have seen Seno send a V8.",
    "I have heard Seno talk about a problem he's been projecting on for weeks.",
    "Seno has come back from climbing mid-day like nothing happened and gone straight back to what he was doing."
  ]},
  { title: "Games and Activities", icon: "🎲", tag: "2-player Catan", items: [
    "I have watched a horror movie with Seno and seen him actually scared.",
    "I have played Catan with Seno one on one. Just the two of us.",
    "I have played a game with Seno that was designed for 3+ people and we just did it anyway.",
    "I have cooked food that Seno, a known picky eater, actually ate and said he liked.",
    "I have thrown hands at Seno."
  ]},
  { title: "Dining Court", icon: "🍽️", tag: "Hilly shift", items: [
    "I have visited Seno on shift at Hilly dining.",
    "I have received extra food from Seno on shift. He said nothing. Eye contact only.",
    "I have watched Seno zone out completely mid-shift while clearly thinking about something else entirely.",
    "Seno has texted me something philosophical or completely unrelated while on shift.",
    "I know which days Seno works without having to ask."
  ]},
  { title: "Hillenbrand", icon: "🚪", tag: "room 860", items: [
    "I have been to Seno's room, 860, at Hillenbrand.",
    "I have been in Seno's room past midnight talking about something that did not need to be discussed at that hour.",
    "I have run into Seno in the Hilly common area and he was clearly already there when I arrived."
  ]},
  { title: "Seno's Sleep Schedule", icon: "🌙", tag: "circadian optional", items: [
    "I have seen Seno at breakfast at an hour that did not match when I last saw him awake.",
    "I have personally seen Seno awake and active past 3am.",
    "I have personally seen Seno awake and active past 5am.",
    "Seno has said \"I might sleep\" and then texted me something 2 hours later.",
    "Seno has shown up to something on zero sleep and seemed completely fine about it."
  ]},
  { title: "Hackathon Seno", icon: "💻", tag: "lock-in mode", items: [
    "I have attended a hackathon with Seno.",
    "I have watched Seno go full lock-in mode overnight at a hackathon.",
    "I have seen Seno crash out mid-hackathon, fully gone, no warning.",
    "I have watched Seno win something at a hackathon."
  ]},
  { title: "Quietly Chaotic", icon: "🌀", tag: "calm face", items: [
    "Seno did something completely unhinged while maintaining a totally calm face.",
    "Seno went silent in a group for ages and then said something that derailed the whole conversation.",
    "Seno has said something with complete confidence that was immediately wrong, and briefly stood by it.",
    "I have been present for a Seno moment I could never fully explain to someone who wasn't there.",
    "I have an inside reference with Seno that requires zero context between us."
  ]},
  { title: "The Legendary Ones", icon: "🏆", tag: "rare drop", items: [
    "I have personally witnessed Seno consume alcohol.",
    "Seno has been dragged into something I suggested that he didn't agree to initially and was fine about it after."
  ]},
  { title: "Do You Actually Know Seno?", icon: "🔮", tag: "final boss", items: [
    "I can predict whether Seno will reply instantly or in 10 days based on vibe alone.",
    "Seno has described me to someone else and I would recognize the description."
  ]}
];

const goofs = [
  "The two-minute reply is a shiny Pokémon.", "Still inside the normal human messaging window.", "The reply crawled out of the void eventually.", "Certified archaeological text thread.", "Schrödinger's read receipt has entered the chat.", "3am Seno is apparently running on premium firmware.", "The forbidden 'nvm' lore remains sealed.",
  "He chose chocolate milk like a main character chooses destiny.", "The carton was presented like a tactical solution.", "A small tragedy in dairy form.", "Two glasses: casual lore.", "Four glasses: dairy-based ascension.", "Chronologically illegal chocolate milk.", "Meal prep, but make it concerning.",
  "Free will did not consent to being discussed here.", "He waited because this was, apparently, office hours.", "The universe was not ready for that timestamp.", "Calm debate stamina: maxed.", "Straight face, devastating sentence.", "Correct in the most annoying possible way.", "Your buffering icon became visible.", "Unexpected character development unlocked.",
  "Rare emotional cutscene.", "That line got saved to mental notes forever.", "Silent kindness, zero announcement, maximum damage.",
  "You were recruited into the wall-touching lifestyle.", "Every surface is a route if you believe hard enough.", "Furniture became terrain.", "V3 witness badge.", "V4 witness badge.", "V5 witness badge.", "V6 witness badge.", "V7 witness badge.", "V8 witness badge. Frame it.", "The project had a project manager: Seno's brain.", "Climb, vanish, return, continue. Normal behavior.",
  "Horror movie bravery audit failed.", "One-on-one Catan is a social experiment.", "Rules said 3+, vibes said no.", "Picky eater approval: Michelin-adjacent.", "Friendly combat arc unlocked.",
  "Hilly NPC encounter.", "Silent food transfer, elite communication.", "Physically on shift, spiritually elsewhere.", "Clocked in, philosophically unlocked.", "You know the schedule. You are in too deep.",
  "Room 860 visitor log entry.", "Midnight discourse tax paid.", "He spawned there before you loaded in.",
  "Breakfast Seno defies continuity.", "3am activity confirmed.", "5am activity confirmed. Seek sunlight.", "Sleep was merely a suggestion.", "Zero sleep, full battery, suspicious.",
  "Hackathon party member joined.", "Overnight lock-in aura detected.", "Crash-out speedrun any percent.", "Winner screen achieved.",
  "Unhinged act, accountant expression.", "Silent patch note changed the whole conversation.", "Confidence outran accuracy.", "The story cannot survive translation.", "No context required. Terrifying intimacy.",
  "Legendary drop, low spawn rate.", "Reluctant side quest became canon.",
  "You read the vibes like weather radar.", "If the description fits, you're canon."
];

const total = categories.reduce((sum, c) => sum + c.items.length, 0);
const list = document.querySelector('#test');
const scoreValue = document.querySelector('#scoreValue');
const meterFill = document.querySelector('#meterFill');
const verdict = document.querySelector('#verdict');
const shareBtn = document.querySelector('#shareBtn');
const randomizeBtn = document.querySelector('#randomizeBtn');
const resetBtn = document.querySelector('#resetBtn');

const verdicts = [
  { maxChecked: 0, text: "Untouched by the Seno cinematic universe." },
  { maxChecked: 8, text: "You have seen the trailer. Maybe one chocolate milk cameo." },
  { maxChecked: 18, text: "Casual Seno witness. The lore is beginning to stick." },
  { maxChecked: 32, text: "Recurring character. You know the delay patterns." },
  { maxChecked: 48, text: "Deep lore holder. You have probably heard philosophy after midnight." },
  { maxChecked: 67, text: "Certified Seno historian. Room 860 should have a plaque for you." }
];

function render() {
  let global = 0;
  categories.forEach(category => {
    const breakEl = document.createElement('li');
    breakEl.className = 'category-break';
    breakEl.textContent = `${category.icon} ${category.title} · ${category.tag}`;
    list.appendChild(breakEl);
    category.items.forEach(item => {
      global += 1;
      const li = document.createElement('li');
      li.className = 'question';
      li.innerHTML = `
        <div class="q-main">
          <input id="q-${global}" type="checkbox" />
          <label for="q-${global}">${item}</label>
        </div>
        <span class="q-badge"><b>${category.icon}</b>${category.tag}</span>
        <p class="goof">${goofs[global - 1]}</p>
      `;
      list.appendChild(li);
    });
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener('change', updateScore));
  restore();
}

function updateScore() {
  const inputs = [...document.querySelectorAll('input[type="checkbox"]')];
  const checked = inputs.filter(i => i.checked).length;
  const score = Math.max(0, Math.round(100 - (checked / total) * 100));
  scoreValue.textContent = score;
  meterFill.style.width = `${score}%`;
  verdict.textContent = verdicts.find(v => checked <= v.maxChecked).text;
  document.querySelectorAll('.question').forEach(q => q.classList.toggle('checked', q.querySelector('input')?.checked));
  localStorage.setItem('seno-purity-checked', JSON.stringify(inputs.map(i => i.checked)));
}

function restore() {
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem('seno-purity-checked') || '[]'); } catch {}
  document.querySelectorAll('input[type="checkbox"]').forEach((input, i) => input.checked = Boolean(saved[i]));
  updateScore();
}

function reset() {
  document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
  updateScore();
}

function chaosSample() {
  document.querySelectorAll('input[type="checkbox"]').forEach((input, i) => {
    const odds = i > 62 ? 0.18 : i > 54 ? 0.28 : i > 25 ? 0.38 : 0.34;
    input.checked = Math.random() < odds;
  });
  updateScore();
}

async function copyResult() {
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].length;
  const text = `I got ${scoreValue.textContent}/100 on The Seno Purity Test (${checked}/${total} Seno moments witnessed). ${verdict.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    shareBtn.textContent = 'Copied';
  } catch {
    shareBtn.textContent = 'Could not copy';
  }
  setTimeout(() => shareBtn.textContent = 'Copy result', 1500);
}

render();
shareBtn.addEventListener('click', copyResult);
randomizeBtn.addEventListener('click', chaosSample);
resetBtn.addEventListener('click', reset);
