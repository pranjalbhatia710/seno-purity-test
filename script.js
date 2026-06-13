const categories = [
  { title: "Texting Seno", kicker: "typing… maybe", items: [
    "I have received a reply from Seno within 2 minutes.",
    "I have received a reply from Seno within 1 hour.",
    "I have waited 6+ hours for a Seno reply and it eventually came.",
    "I have waited multiple days for a Seno reply and it eventually came.",
    "I sent Seno a message and genuinely could not tell if he had seen it or not for 10+ days.",
    "Seno has replied to me instantly at 3am with something coherent.",
    "Seno has said \"nvm\" over text and I never found out what he was going to say."
  ]},
  { title: "Chocolate Milk", kicker: "the brown elixir", items: [
    "I have watched Seno pick up chocolate milk like it was the most natural thing in the world. No explanation.",
    "Seno has offered me chocolate milk like it was genuinely the move.",
    "I have seen Seno visibly disappointed when the chocolate milk ran out.",
    "I have seen Seno drink 2 glasses of chocolate milk in one sitting.",
    "I have seen Seno drink 4 glasses of chocolate milk in one sitting.",
    "I have seen Seno drink chocolate milk at a time where no reasonable person would drink chocolate milk.",
    "Seno has used chocolate milk as a meal replacement in front of me and seemed fine about it."
  ]},
  { title: "Philosophy & Debates", kicker: "free will speedrun", items: [
    "Seno has brought up free will vs determinism in a conversation I did not expect it to come up in.",
    "Seno has asked me whether I think free will actually exists and genuinely waited for my answer.",
    "Seno has asked me something about existence or the meaning of life at a completely unreasonable time.",
    "I have watched Seno argue a philosophical point calmly for so long that the other person just gave up.",
    "Seno has said something like \"your purpose is to never have to think about your purpose\" with a straight face.",
    "Seno has disagreed with me philosophically in a way that was calm, correct, and slightly annoying.",
    "Seno asked me a question that made me pause for 10+ seconds before I could even start answering.",
    "Seno has changed my mind about something through a conversation I didn't expect to matter."
  ]},
  { title: "Emotional Seno", kicker: "quiet lore", items: [
    "I have seen Seno cry.",
    "Seno has said something to me that I still think about.",
    "Seno has done something quietly kind for someone without making it a thing."
  ]},
  { title: "Climbing: The V-Grades", kicker: "campus is a boulder", items: [
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
  { title: "Games & Activities", kicker: "two-player Catan incident", items: [
    "I have watched a horror movie with Seno and seen him actually scared.",
    "I have played Catan with Seno one on one. Just the two of us.",
    "I have played a game with Seno that was designed for 3+ people and we just did it anyway.",
    "I have cooked food that Seno, a known picky eater, actually ate and said he liked.",
    "I have thrown hands at Seno."
  ]},
  { title: "Dining Court", kicker: "Hilly shift canon", items: [
    "I have visited Seno on shift at Hilly dining.",
    "I have received extra food from Seno on shift. He said nothing. Eye contact only.",
    "I have watched Seno zone out completely mid-shift while clearly thinking about something else entirely.",
    "Seno has texted me something philosophical or completely unrelated while on shift.",
    "I know which days Seno works without having to ask."
  ]},
  { title: "Hillenbrand", kicker: "room 860 cinematic universe", items: [
    "I have been to Seno's room, 860, at Hillenbrand.",
    "I have been in Seno's room past midnight talking about something that did not need to be discussed at that hour.",
    "I have run into Seno in the Hilly common area and he was clearly already there when I arrived."
  ]},
  { title: "Seno's Sleep Schedule", kicker: "circadian optional", items: [
    "I have seen Seno at breakfast at an hour that did not match when I last saw him awake.",
    "I have personally seen Seno awake and active past 3am.",
    "I have personally seen Seno awake and active past 5am.",
    "Seno has said \"I might sleep\" and then texted me something 2 hours later.",
    "Seno has shown up to something on zero sleep and seemed completely fine about it."
  ]},
  { title: "Hackathon Seno", kicker: "overnight lock-in", items: [
    "I have attended a hackathon with Seno.",
    "I have watched Seno go full lock-in mode overnight at a hackathon.",
    "I have seen Seno crash out mid-hackathon, fully gone, no warning.",
    "I have watched Seno win something at a hackathon."
  ]},
  { title: "Quietly Chaotic", kicker: "calm face, impossible act", items: [
    "Seno did something completely unhinged while maintaining a totally calm face.",
    "Seno went silent in a group for ages and then said something that derailed the whole conversation.",
    "Seno has said something with complete confidence that was immediately wrong, and briefly stood by it.",
    "I have been present for a Seno moment I could never fully explain to someone who wasn't there.",
    "I have an inside reference with Seno that requires zero context between us."
  ]},
  { title: "The Legendary Ones", kicker: "unlockable aura", items: [
    "I have personally witnessed Seno consume alcohol.",
    "Seno has been dragged into something I suggested that he didn't agree to initially and was fine about it after."
  ]},
  { title: "Do You Actually Know Seno?", kicker: "final boss", items: [
    "I can predict whether Seno will reply instantly or in 10 days based on vibe alone.",
    "Seno has described me to someone else and I would recognize the description."
  ]}
];

const total = categories.reduce((sum, category) => sum + category.items.length, 0);
const test = document.querySelector('#test');
const template = document.querySelector('#categoryTemplate');
const scoreValue = document.querySelector('#scoreValue');
const meterFill = document.querySelector('#meterFill');
const verdict = document.querySelector('#verdict');
const shareBtn = document.querySelector('#shareBtn');
const randomizeBtn = document.querySelector('#randomizeBtn');

const verdicts = [
  { maxChecked: 0, text: "Untouched by the Seno cinematic universe." },
  { maxChecked: 8, text: "You know of Seno. You have maybe seen the chocolate milk." },
  { maxChecked: 18, text: "Casual Seno witness. A few unexplained moments have entered your life." },
  { maxChecked: 32, text: "You are in the extended Seno lore. The reply delays no longer surprise you." },
  { maxChecked: 48, text: "You know Seno extremely well. You have probably heard philosophy after midnight." },
  { maxChecked: 67, text: "Certified Seno historian. Room 860 should have a plaque for you." }
];

function render() {
  categories.forEach((category, categoryIndex) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.category-card');
    node.querySelector('.category-kicker').textContent = category.kicker;
    node.querySelector('h2').textContent = category.title;
    const list = node.querySelector('ol');
    category.items.forEach((item, itemIndex) => {
      const globalIndex = categories.slice(0, categoryIndex).reduce((sum, c) => sum + c.items.length, 0) + itemIndex + 1;
      const li = document.createElement('li');
      li.className = 'question';
      li.innerHTML = `<input id="q-${globalIndex}" type="checkbox" /><label for="q-${globalIndex}"><span>${globalIndex}. ${item}</span></label>`;
      list.appendChild(li);
    });
    test.appendChild(node);
    card?.style.setProperty('--tilt', `${(categoryIndex % 3) - 1}deg`);
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener('change', updateScore));
  updateScore();
}

function updateScore() {
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].length;
  const score = Math.max(0, Math.round(100 - (checked / total) * 100));
  scoreValue.textContent = score;
  meterFill.style.width = `${score}%`;
  verdict.textContent = verdicts.find(v => checked <= v.maxChecked).text;
  document.querySelectorAll('.question').forEach(q => q.classList.toggle('checked', q.querySelector('input').checked));
  localStorage.setItem('seno-purity-checked', JSON.stringify([...document.querySelectorAll('input')].map(i => i.checked)));
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem('seno-purity-checked') || '[]');
    document.querySelectorAll('input').forEach((input, index) => input.checked = Boolean(saved[index]));
  } catch {}
  updateScore();
}

async function copyResult() {
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].length;
  const score = scoreValue.textContent;
  const text = `I got ${score}/100 on The Seno Purity Test (${checked}/${total} Seno moments witnessed). ${verdict.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    shareBtn.textContent = 'Copied';
  } catch {
    shareBtn.textContent = text;
  }
  setTimeout(() => shareBtn.textContent = 'Copy result', 1600);
}

function chaosSample() {
  document.querySelectorAll('input').forEach((input, index) => {
    const categoryWeight = index > 54 ? 0.23 : index > 24 ? 0.38 : 0.32;
    input.checked = Math.random() < categoryWeight;
  });
  updateScore();
  document.querySelector('#test').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function markExistingPhotos() {
  await Promise.all([1,2,3].map(index => new Promise(resolve => {
    const image = new Image();
    image.onload = () => { document.body.classList.add(`has-photo-${index}`); resolve(); };
    image.onerror = resolve;
    image.src = `assets/seno-${index}.jpg?${Date.now()}`;
  })));
}

render();
restore();
markExistingPhotos();
shareBtn.addEventListener('click', copyResult);
randomizeBtn.addEventListener('click', chaosSample);
