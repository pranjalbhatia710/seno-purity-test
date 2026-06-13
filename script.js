const items = [
  ["texting", "I have received a reply from Seno within 2 minutes.", "The two-minute reply is a documented anomaly."],
  ["texting", "I have received a reply from Seno within 1 hour.", "Fast enough to feel intentional."],
  ["texting", "I have waited 6+ hours for a Seno reply and it eventually came.", "The message returned from orbit."],
  ["texting", "I have waited multiple days for a Seno reply and it eventually came.", "Carbon dating may be required."],
  ["texting", "I sent Seno a message and genuinely could not tell if he had seen it or not for 10+ days.", "Read receipt uncertainty became a lifestyle."],
  ["texting", "Seno has replied to me instantly at 3am with something coherent.", "The 3am build was somehow stable."],
  ["texting", "Seno has said \"nvm\" over text and I never found out what he was going to say.", "The archive remains sealed."],
  ["milk", "I have watched Seno pick up chocolate milk like it was the most natural thing in the world. No explanation.", "A normal action performed with abnormal conviction."],
  ["milk", "Seno has offered me chocolate milk like it was genuinely the move.", "Presented as a complete solution."],
  ["milk", "I have seen Seno visibly disappointed when the chocolate milk ran out.", "A small dairy tragedy."],
  ["milk", "I have seen Seno drink 2 glasses of chocolate milk in one sitting.", "Casual lore."],
  ["milk", "I have seen Seno drink 4 glasses of chocolate milk in one sitting.", "Dairy-based ascension."],
  ["milk", "I have seen Seno drink chocolate milk at a time where no reasonable person would drink chocolate milk.", "Chronologically indefensible."],
  ["milk", "Seno has used chocolate milk as a meal replacement in front of me and seemed fine about it.", "Nutrition was interpreted loosely."],
  ["philosophy", "Seno has brought up free will vs determinism in a conversation I did not expect it to come up in.", "The topic spawned without warning."],
  ["philosophy", "Seno has asked me whether I think free will actually exists and genuinely waited for my answer.", "Office hours began immediately."],
  ["philosophy", "Seno has asked me something about existence or the meaning of life at a completely unreasonable time.", "The universe received a late-night ticket."],
  ["philosophy", "I have watched Seno argue a philosophical point calmly for so long that the other person just gave up.", "The stamina was the argument."],
  ["philosophy", "Seno has said something like \"your purpose is to never have to think about your purpose\" with a straight face.", "Delivered like a normal sentence."],
  ["philosophy", "Seno has disagreed with me philosophically in a way that was calm, correct, and slightly annoying.", "The worst kind of correct."],
  ["philosophy", "Seno asked me a question that made me pause for 10+ seconds before I could even start answering.", "Visible buffering."],
  ["philosophy", "Seno has changed my mind about something through a conversation I didn't expect to matter.", "Unexpected patch installed."],
  ["emotional", "I have seen Seno cry.", "Rare cutscene."],
  ["emotional", "Seno has said something to me that I still think about.", "Saved permanently in mental notes."],
  ["emotional", "Seno has done something quietly kind for someone without making it a thing.", "Maximum impact, minimum announcement."],
  ["climbing", "Seno has convinced me to go climbing and I actually went.", "Recruitment successful."],
  ["climbing", "I have watched Seno look at something around campus and immediately assess whether it's climbable.", "Every object entered route review."],
  ["climbing", "I have climbed a table, chair, or some other completely random object with Seno.", "Furniture became terrain."],
  ["climbing", "I have seen Seno send a V3.", "Witness badge recorded."],
  ["climbing", "I have seen Seno send a V4.", "Witness badge recorded."],
  ["climbing", "I have seen Seno send a V5.", "Witness badge recorded."],
  ["climbing", "I have seen Seno send a V6.", "Witness badge recorded."],
  ["climbing", "I have seen Seno send a V7.", "Witness badge recorded."],
  ["climbing", "I have seen Seno send a V8.", "Frame the memory."],
  ["climbing", "I have heard Seno talk about a problem he's been projecting on for weeks.", "The wall had a subplot."],
  ["climbing", "Seno has come back from climbing mid-day like nothing happened and gone straight back to what he was doing.", "Departed, climbed, returned to the timeline."],
  ["games", "I have watched a horror movie with Seno and seen him actually scared.", "Fear response confirmed."],
  ["games", "I have played Catan with Seno one on one. Just the two of us.", "A board game rule was challenged."],
  ["games", "I have played a game with Seno that was designed for 3+ people and we just did it anyway.", "The player count was treated as advice."],
  ["games", "I have cooked food that Seno, a known picky eater, actually ate and said he liked.", "Approval was achieved."],
  ["games", "I have thrown hands at Seno.", "Friendly combat entered the record."],
  ["hilly", "I have visited Seno on shift at Hilly dining.", "The workplace cameo."],
  ["hilly", "I have received extra food from Seno on shift. He said nothing. Eye contact only.", "Silent transfer protocol."],
  ["hilly", "I have watched Seno zone out completely mid-shift while clearly thinking about something else entirely.", "Present on payroll, absent in spirit."],
  ["hilly", "Seno has texted me something philosophical or completely unrelated while on shift.", "Clocked in and metaphysical."],
  ["hilly", "I know which days Seno works without having to ask.", "You are in too deep."],
  ["room", "I have been to Seno's room, 860, at Hillenbrand.", "Room 860 visitor record."],
  ["room", "I have been in Seno's room past midnight talking about something that did not need to be discussed at that hour.", "The hour made it worse and better."],
  ["room", "I have run into Seno in the Hilly common area and he was clearly already there when I arrived.", "He spawned before the scene loaded."],
  ["sleep", "I have seen Seno at breakfast at an hour that did not match when I last saw him awake.", "Timeline continuity error."],
  ["sleep", "I have personally seen Seno awake and active past 3am.", "Activity confirmed."],
  ["sleep", "I have personally seen Seno awake and active past 5am.", "Sunrise had competition."],
  ["sleep", "Seno has said \"I might sleep\" and then texted me something 2 hours later.", "Sleep remained theoretical."],
  ["sleep", "Seno has shown up to something on zero sleep and seemed completely fine about it.", "Battery percentage unclear."],
  ["hackathon", "I have attended a hackathon with Seno.", "Team member unlocked."],
  ["hackathon", "I have watched Seno go full lock-in mode overnight at a hackathon.", "Focus became visible."],
  ["hackathon", "I have seen Seno crash out mid-hackathon, fully gone, no warning.", "System suspended unexpectedly."],
  ["hackathon", "I have watched Seno win something at a hackathon.", "Victory screen observed."],
  ["chaos", "Seno did something completely unhinged while maintaining a totally calm face.", "The face made it worse."],
  ["chaos", "Seno went silent in a group for ages and then said something that derailed the whole conversation.", "One sentence changed the room."],
  ["chaos", "Seno has said something with complete confidence that was immediately wrong, and briefly stood by it.", "Confidence briefly outran reality."],
  ["chaos", "I have been present for a Seno moment I could never fully explain to someone who wasn't there.", "The story collapses under translation."],
  ["chaos", "I have an inside reference with Seno that requires zero context between us.", "Context no longer necessary."],
  ["legendary", "I have personally witnessed Seno consume alcohol.", "Rare drop recorded."],
  ["legendary", "Seno has been dragged into something I suggested that he didn't agree to initially and was fine about it after.", "Reluctant side quest became canon."],
  ["final", "I can predict whether Seno will reply instantly or in 10 days based on vibe alone.", "Vibe radar calibrated."],
  ["final", "Seno has described me to someone else and I would recognize the description.", "Final box. The score disappears if you check it."]
];

const total = 67;
const list = document.querySelector('#test');
const scoreValue = document.querySelector('#scoreValue');
const scoreTotal = document.querySelector('#scoreTotal');
const scoreLine = document.querySelector('.score-line');
const meterFill = document.querySelector('#meterFill');
const verdict = document.querySelector('#verdict');
const shareBtn = document.querySelector('#shareBtn');
const resetBtn = document.querySelector('#resetBtn');

const verdicts = [
  { minScore: 67, text: "No boxes checked. Seno lore has not yet entered the record." },
  { minScore: 55, text: "Mostly pure. You have seen the trailer, not the full Seno arc." },
  { minScore: 42, text: "You are a recurring character in the Seno cinematic universe." },
  { minScore: 28, text: "Deep lore holder. The chocolate milk and late-night philosophy are familiar." },
  { minScore: 12, text: "Historian-level exposure. You can probably identify a Seno moment before it happens." },
  { minScore: 1, text: "The archive is almost complete. Room 860 should have your name in the credits." },
  { minScore: 0, text: "" }
];

function render() {
  items.forEach(([kind, text, goof], index) => {
    const n = index + 1;
    const li = document.createElement('li');
    li.className = 'question';
    li.dataset.kind = kind;
    li.innerHTML = `
      <img class="q-art" src="assets/generated/q-${String(n).padStart(2, '0')}.svg" alt="Generated Seno evidence image ${n}" />
      <div class="q-main">
        <input id="q-${n}" type="checkbox" />
        <label for="q-${n}">${text}</label>
      </div>
      <p class="goof">${goof}</p>
    `;
    list.appendChild(li);
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener('change', updateScore));
  restore();
}

function updateScore(event) {
  const inputs = [...document.querySelectorAll('input[type="checkbox"]')];
  const checked = inputs.filter(i => i.checked).length;
  const finalChecked = document.querySelector('#q-67')?.checked;
  const score = Math.max(0, total - checked);
  document.querySelectorAll('.question').forEach(q => {
    q.classList.toggle('checked', q.querySelector('input')?.checked);
    q.classList.toggle('last-checked', q.querySelector('#q-67')?.checked);
  });
  if (finalChecked) {
    scoreValue.textContent = '';
    scoreTotal.textContent = '';
    scoreLine.classList.add('empty');
    meterFill.style.width = '0%';
    verdict.textContent = '';
    if (event?.target?.id === 'q-67') shake();
  } else {
    scoreLine.classList.remove('empty');
    scoreValue.textContent = score;
    scoreTotal.textContent = '/67';
    meterFill.style.width = `${(score / total) * 100}%`;
    verdict.textContent = verdicts.find(v => score >= v.minScore).text;
  }
  localStorage.setItem('seno-purity-checked', JSON.stringify(inputs.map(i => i.checked)));
}

function shake() {
  document.body.classList.remove('final-shake');
  void document.body.offsetWidth;
  document.body.classList.add('final-shake');
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

async function copyResult() {
  const finalChecked = document.querySelector('#q-67')?.checked;
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].length;
  const scoreText = finalChecked ? 'blank' : `${scoreValue.textContent}/67`;
  const text = `I got ${scoreText} on The Seno Purity Test (${checked}/67 Seno moments checked). ${verdict.textContent}`.trim();
  try {
    await navigator.clipboard.writeText(text);
    shareBtn.textContent = 'Copied';
  } catch {
    shareBtn.textContent = 'Copy failed';
  }
  setTimeout(() => shareBtn.textContent = 'Copy result', 1400);
}

render();
resetBtn.addEventListener('click', reset);
shareBtn.addEventListener('click', copyResult);
