const TOTAL = 67;
const ADMIN_PASSWORD = 'seno';
const STORAGE_KEY = 'seno-purity-leaderboard';
const CHECKED_KEY = 'seno-purity-checked-v2';

const questions = [
  'i have received a reply from seno within 2 minutes',
  'i have received a reply from seno within 1 hour',
  'i have visited seno on shift at hilly dining',
  'i have watched seno pick up chocolate milk like it was the most natural thing in the world. no explanation.',
  'seno has offered me chocolate milk like it was genuinely the move',
  'i have seen seno visibly disappointed when the chocolate milk ran out',
  'i have seen seno drink 2 glasses of chocolate milk in one sitting',
  'i have seen seno drink 4 glasses of chocolate milk in one sitting',
  'i have seen seno drink chocolate milk at a time where no reasonable person would drink chocolate milk',
  'seno has brought up free will vs determinism in a conversation i did not expect it to come up in',
  'seno has convinced me to go climbing and i actually went',
  "i have been to seno's room (860) at hillenbrand",
  'seno has said "nvm" over text and i never found out what he was going to say',
  'i have seen seno awake and active at 7am',
  'seno has asked me whether i think free will actually exists and genuinely waited for my answer',
  'i have seen seno do a v3',
  'i have seen seno do a v4',
  'i have seen seno do a v5',
  'i have seen seno do a v6',
  'i have seen seno do a v7',
  'i have seen seno do a v8',
  'i have walked across campus with seno at an hour where neither of us had a good reason to be outside',
  'seno has slid me something from the dining court without it being a whole thing',
  'seno has asked me something about existence or the meaning of life at a completely unreasonable time',
  'i have watched a horror movie with seno and seen him actually scared',
  'i have shaken hands with seno',
  'seno has said something to me that i still think about',
  'i have attended a hackathon with seno',
  'i have seen seno eye a completely random piece of furniture and then climb it',
  'seno has made me bleed',
  'seno has said something like "your purpose is to never have to think about your purpose" with a straight face',
  'i have run into seno in the hilly common area and he was clearly already there when i arrived',
  'seno has said something with complete confidence that was immediately wrong — and briefly stood by it',
  'seno has disagreed with me philosophically in a way that was calm, correct, and slightly annoying',
  'seno has done something quietly kind for someone without making it a thing',
  'i have watched seno go full lock-in mode overnight at a hackathon',
  'seno has followed me where i was going just to keep the conversation going',
  "i have been in seno's room past midnight talking about something that did not need to be discussed at that hour",
  'seno asked me a question that made me pause for 10+ seconds before i could even start answering',
  "i have heard seno talk about a climbing problem he's been projecting on for weeks",
  'i know which days seno works without having to ask',
  'seno has shown up to something on zero sleep and seemed completely fine about it',
  "i have been present for a seno moment i could never fully explain to someone who wasn't there",
  'i have walked past hilly dining, seen seno on shift through the window, and he has not noticed me',
  'seno went silent in a group for ages and then said something that derailed the whole conversation',
  'seno has come back from climbing mid-day like nothing happened and gone straight back to what he was doing',
  'i have seen seno at breakfast at an hour that did not match when i last saw him awake',
  'i have watched seno win something at a hackathon',
  'i have an inside reference with seno that requires zero context between us',
  'i have seen seno claim to quit diet coke and still drink diet coke',
  'seno did something completely unhinged while maintaining a totally calm face',
  'i have seen seno actively scream when about to enter water',
  'i have travelled on a bus or flight between cities with seno',
  "seno has changed my mind about something through a conversation i didn't expect to matter",
  'i have seen seno get angry',
  'seno has asked me to record him climb and then failed the climb',
  "i have watched seno look at something around campus and immediately assess whether it's climbable",
  'i have waited 6+ hours for a seno reply and it eventually came',
  'i have waited multiple days for a seno reply and it eventually came',
  'i have cooked food that seno — a known picky eater — actually ate and said he liked',
  'i have seen seno cry',
  'i have travelled to dubai with seno',
  'i have cycled somewhere with seno',
  'i sent seno a message and genuinely could not tell if he had seen it or not for 10+ days',
  'i have played catan with seno one on one. just the two of us.',
  'i have thrown hands at seno',
  'i have personally witnessed seno consume alcohol'
];

const rare = new Set([18, 19, 61, 59, 60, 63, 62]);
const legendary = new Set([20, 21, 65, 66, 67, 64]);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function verdictFor(percent) {
  if (percent < 25) return 'bro do you even know seno';
  if (percent < 45) return "you've met seno";
  if (percent < 65) return 'you know seno-adjacent';
  if (percent < 85) return 'yeah you actually know him';
  return "bro you ARE seno's person";
}

function slugName(name) {
  return encodeURIComponent((name || 'anonymous').trim().slice(0, 32));
}

function readScoreFromUrl() {
  const pathMatch = location.pathname.match(/\/score\/(\d+)/);
  const query = new URLSearchParams(location.search);
  const raw = pathMatch?.[1] || query.get('score');
  if (raw === null || raw === undefined) return null;
  const checked = Math.max(0, Math.min(TOTAL, Number.parseInt(raw, 10) || 0));
  return {
    checked,
    name: query.get('name') || 'someone'
  };
}

function renderSharedCard() {
  const shared = readScoreFromUrl();
  if (!shared) return;
  const percent = Math.round((shared.checked / TOTAL) * 100);
  $('#sharedName').textContent = shared.name || 'someone';
  $('#sharedPercent').textContent = `${percent}%`;
  $('#sharedRaw').textContent = `${shared.checked}/67`;
  $('#sharedVerdict').textContent = verdictFor(percent);
  $('#sharedView').classList.remove('hidden');
}

function renderQuestions() {
  const list = $('#questionList');
  const template = $('#questionTemplate');
  questions.forEach((text, index) => {
    const n = index + 1;
    const row = template.content.firstElementChild.cloneNode(true);
    row.dataset.number = String(n);
    if (rare.has(n)) row.classList.add('rare');
    if (legendary.has(n)) row.classList.add('legendary');
    const input = row.querySelector('input');
    input.id = `q-${n}`;
    input.dataset.number = String(n);
    row.querySelector('label').setAttribute('for', `q-${n}`);
    row.querySelector('.question-text').textContent = text;
    input.addEventListener('change', saveChecks);
    list.appendChild(row);
  });

  const custom = document.createElement('li');
  custom.className = 'question-row custom-row';
  custom.innerHTML = '<div class="custom-box"><span class="custom-number">68.</span><span>this one\'s yours — fill it in</span></div>';
  list.appendChild(custom);
  restoreChecks();
}

function currentChecked() {
  return $$('input[type="checkbox"]:checked').length;
}

function saveChecks() {
  localStorage.setItem(CHECKED_KEY, JSON.stringify($$('input[type="checkbox"]').map(input => input.checked)));
}

function restoreChecks() {
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(CHECKED_KEY) || '[]'); } catch {}
  $$('input[type="checkbox"]').forEach((input, i) => { input.checked = Boolean(saved[i]); });
}

function getResult() {
  const checked = currentChecked();
  const percent = Math.round((checked / TOTAL) * 100);
  const verdict = verdictFor(percent);
  return { checked, percent, verdict };
}

function calculateScore(scroll = true) {
  const result = getResult();
  $('#resultPercent').textContent = `${result.percent}%`;
  $('#resultRaw').textContent = `${result.checked}/67`;
  $('#resultVerdict').textContent = result.verdict;
  $('#resultPanel').classList.remove('hidden');
  updateShareText();
  if (scroll) $('#resultPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  return result;
}

function scoreLink() {
  const { checked } = getResult();
  const name = slugName($('#nameInput').value);
  return `${location.origin}${location.pathname.replace(/404\.html$/, '')}?score=${checked}&name=${name}`;
}

function updateShareText() {
  const { checked, percent, verdict } = getResult();
  const link = scoreLink();
  $('#shareText').value = `i scored ${checked}/67 (${percent}%) on the seno purity test — ${verdict}. take it here: ${link}`;
}

async function shareScore() {
  updateShareText();
  const text = $('#shareText').value;
  const url = scoreLink();
  if (navigator.share) {
    try {
      await navigator.share({ title: 'the seno purity test', text, url });
      return;
    } catch {}
  }
  await navigator.clipboard.writeText(url);
  temporaryButtonText($('#shareBtn'), 'link copied');
}

async function copyShareText() {
  updateShareText();
  await navigator.clipboard.writeText($('#shareText').value);
  temporaryButtonText($('#copyTextBtn'), 'copied');
}

function temporaryButtonText(button, text) {
  const old = button.textContent;
  button.textContent = text;
  setTimeout(() => { button.textContent = old; }, 1300);
}

function getLocalEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function setLocalEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

async function submitScore() {
  const result = calculateScore(false);
  const name = ($('#nameInput').value || 'anonymous').trim().slice(0, 32) || 'anonymous';
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name,
    score: result.checked,
    percent: result.percent,
    verdict: result.verdict,
    created_at: new Date().toISOString()
  };
  const entries = getLocalEntries();
  entries.push(entry);
  setLocalEntries(entries);
  renderLeaderboard();
  temporaryButtonText($('#submitScoreBtn'), 'submitted');
}

function renderLeaderboard() {
  const entries = getLocalEntries()
    .sort((a, b) => b.score - a.score || new Date(a.created_at) - new Date(b.created_at));
  const total = entries.length;
  const average = total ? Math.round(entries.reduce((sum, e) => sum + Number(e.percent || 0), 0) / total) : 0;
  $('#totalTaken').textContent = String(total);
  $('#averageScore').textContent = `${average}%`;
  const rows = $('#boardRows');
  rows.innerHTML = '';
  if (!entries.length) {
    rows.innerHTML = '<p class="empty-board">no submissions yet. be the first data point.</p>';
    return;
  }
  entries.forEach((entry, index) => {
    const row = document.createElement('article');
    row.className = `board-row rank-${index + 1}`;
    row.innerHTML = `
      <div class="rank">#${index + 1}</div>
      <div class="who"><strong>${escapeHtml(entry.name)}</strong><span>${new Date(entry.created_at).toLocaleDateString()}</span></div>
      <div class="score"><strong>${entry.score}/67</strong><span>${entry.percent}%</span></div>
      <div class="board-verdict">${escapeHtml(entry.verdict)}</div>
      <button class="delete-btn hidden" data-id="${entry.id}" type="button">delete</button>
    `;
    rows.appendChild(row);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function unlockAdmin() {
  if ($('#adminPassword').value !== ADMIN_PASSWORD) {
    temporaryButtonText($('#unlockAdminBtn'), 'wrong password');
    return;
  }
  $$('.delete-btn').forEach(btn => btn.classList.remove('hidden'));
  temporaryButtonText($('#unlockAdminBtn'), 'unlocked');
}

function deleteEntry(id) {
  setLocalEntries(getLocalEntries().filter(entry => entry.id !== id));
  renderLeaderboard();
  if ($('#adminPassword').value === ADMIN_PASSWORD) $$('.delete-btn').forEach(btn => btn.classList.remove('hidden'));
}

function resetTest() {
  $$('input[type="checkbox"]').forEach(input => { input.checked = false; });
  saveChecks();
  $('#resultPanel').classList.add('hidden');
}

renderSharedCard();
renderQuestions();
renderLeaderboard();

$('#calculateBtn').addEventListener('click', () => calculateScore(true));
$('#resetBtn').addEventListener('click', resetTest);
$('#shareBtn').addEventListener('click', shareScore);
$('#copyTextBtn').addEventListener('click', copyShareText);
$('#submitScoreBtn').addEventListener('click', submitScore);
$('#refreshBoardBtn').addEventListener('click', renderLeaderboard);
$('#unlockAdminBtn').addEventListener('click', unlockAdmin);
$('#nameInput').addEventListener('input', updateShareText);
$('#boardRows').addEventListener('click', event => {
  if (event.target.matches('.delete-btn')) deleteEntry(event.target.dataset.id);
});
