/* =========================================================
   100 SONG MUSIC CHALLENGE — APP LOGIC
   Pure vanilla JavaScript. No frameworks, no backend.
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURATION
   Edit this section to rebrand the competition.
   --------------------------------------------------------- */
const competitionConfig = {
  competitionName: "100 Song Music Challenge",
  prize: "R50 Voucher",
  clipDuration: 30,       // seconds each clip plays for
  totalSongs: 100,        // target song count (app also works with fewer, for testing)
  midGameAdEvery: 10,     // show an inline ad every N songs (0 = never)
  storageKey: "musicChallenge_v1"
};

/* ---------------------------------------------------------
   2. SONG LIBRARY
   Replace title / artist / file for each entry.
   Only the songs actually present here are used — you do
   NOT need all 100 filled in to test the app.

   IMPORTANT: Do not put copyrighted commercial audio in a
   public repo unless you hold the rights to use it. File
   paths below are placeholders — put your own MP3s in
   /songs/ and update the "file" field to match.
   --------------------------------------------------------- */
// TIP FOR TESTING: while you're setting things up, it's fine to delete
// most of these lines and test with just 4-8 songs — the app adjusts
// automatically to however many entries are in this array.
const songs = [
  { title: "Song Title 01", artist: "Artist 01", file: "songs/song01.mp3" },
  { title: "Song Title 02", artist: "Artist 02", file: "songs/song02.mp3" },
  { title: "Song Title 03", artist: "Artist 03", file: "songs/song03.mp3" },
  { title: "Song Title 04", artist: "Artist 04", file: "songs/song04.mp3" },
  { title: "Song Title 05", artist: "Artist 05", file: "songs/song05.mp3" },
  { title: "Song Title 06", artist: "Artist 06", file: "songs/song06.mp3" },
  { title: "Song Title 07", artist: "Artist 07", file: "songs/song07.mp3" },
  { title: "Song Title 08", artist: "Artist 08", file: "songs/song08.mp3" },
  { title: "Song Title 09", artist: "Artist 09", file: "songs/song09.mp3" },
  { title: "Song Title 10", artist: "Artist 10", file: "songs/song10.mp3" },
  { title: "Song Title 11", artist: "Artist 11", file: "songs/song11.mp3" },
  { title: "Song Title 12", artist: "Artist 12", file: "songs/song12.mp3" },
  { title: "Song Title 13", artist: "Artist 13", file: "songs/song13.mp3" },
  { title: "Song Title 14", artist: "Artist 14", file: "songs/song14.mp3" },
  { title: "Song Title 15", artist: "Artist 15", file: "songs/song15.mp3" },
  { title: "Song Title 16", artist: "Artist 16", file: "songs/song16.mp3" },
  { title: "Song Title 17", artist: "Artist 17", file: "songs/song17.mp3" },
  { title: "Song Title 18", artist: "Artist 18", file: "songs/song18.mp3" },
  { title: "Song Title 19", artist: "Artist 19", file: "songs/song19.mp3" },
  { title: "Song Title 20", artist: "Artist 20", file: "songs/song20.mp3" },
  { title: "Song Title 21", artist: "Artist 21", file: "songs/song21.mp3" },
  { title: "Song Title 22", artist: "Artist 22", file: "songs/song22.mp3" },
  { title: "Song Title 23", artist: "Artist 23", file: "songs/song23.mp3" },
  { title: "Song Title 24", artist: "Artist 24", file: "songs/song24.mp3" },
  { title: "Song Title 25", artist: "Artist 25", file: "songs/song25.mp3" },
  { title: "Song Title 26", artist: "Artist 26", file: "songs/song26.mp3" },
  { title: "Song Title 27", artist: "Artist 27", file: "songs/song27.mp3" },
  { title: "Song Title 28", artist: "Artist 28", file: "songs/song28.mp3" },
  { title: "Song Title 29", artist: "Artist 29", file: "songs/song29.mp3" },
  { title: "Song Title 30", artist: "Artist 30", file: "songs/song30.mp3" },
  { title: "Song Title 31", artist: "Artist 31", file: "songs/song31.mp3" },
  { title: "Song Title 32", artist: "Artist 32", file: "songs/song32.mp3" },
  { title: "Song Title 33", artist: "Artist 33", file: "songs/song33.mp3" },
  { title: "Song Title 34", artist: "Artist 34", file: "songs/song34.mp3" },
  { title: "Song Title 35", artist: "Artist 35", file: "songs/song35.mp3" },
  { title: "Song Title 36", artist: "Artist 36", file: "songs/song36.mp3" },
  { title: "Song Title 37", artist: "Artist 37", file: "songs/song37.mp3" },
  { title: "Song Title 38", artist: "Artist 38", file: "songs/song38.mp3" },
  { title: "Song Title 39", artist: "Artist 39", file: "songs/song39.mp3" },
  { title: "Song Title 40", artist: "Artist 40", file: "songs/song40.mp3" },
  { title: "Song Title 41", artist: "Artist 41", file: "songs/song41.mp3" },
  { title: "Song Title 42", artist: "Artist 42", file: "songs/song42.mp3" },
  { title: "Song Title 43", artist: "Artist 43", file: "songs/song43.mp3" },
  { title: "Song Title 44", artist: "Artist 44", file: "songs/song44.mp3" },
  { title: "Song Title 45", artist: "Artist 45", file: "songs/song45.mp3" },
  { title: "Song Title 46", artist: "Artist 46", file: "songs/song46.mp3" },
  { title: "Song Title 47", artist: "Artist 47", file: "songs/song47.mp3" },
  { title: "Song Title 48", artist: "Artist 48", file: "songs/song48.mp3" },
  { title: "Song Title 49", artist: "Artist 49", file: "songs/song49.mp3" },
  { title: "Song Title 50", artist: "Artist 50", file: "songs/song50.mp3" },
  { title: "Song Title 51", artist: "Artist 51", file: "songs/song51.mp3" },
  { title: "Song Title 52", artist: "Artist 52", file: "songs/song52.mp3" },
  { title: "Song Title 53", artist: "Artist 53", file: "songs/song53.mp3" },
  { title: "Song Title 54", artist: "Artist 54", file: "songs/song54.mp3" },
  { title: "Song Title 55", artist: "Artist 55", file: "songs/song55.mp3" },
  { title: "Song Title 56", artist: "Artist 56", file: "songs/song56.mp3" },
  { title: "Song Title 57", artist: "Artist 57", file: "songs/song57.mp3" },
  { title: "Song Title 58", artist: "Artist 58", file: "songs/song58.mp3" },
  { title: "Song Title 59", artist: "Artist 59", file: "songs/song59.mp3" },
  { title: "Song Title 60", artist: "Artist 60", file: "songs/song60.mp3" },
  { title: "Song Title 61", artist: "Artist 61", file: "songs/song61.mp3" },
  { title: "Song Title 62", artist: "Artist 62", file: "songs/song62.mp3" },
  { title: "Song Title 63", artist: "Artist 63", file: "songs/song63.mp3" },
  { title: "Song Title 64", artist: "Artist 64", file: "songs/song64.mp3" },
  { title: "Song Title 65", artist: "Artist 65", file: "songs/song65.mp3" },
  { title: "Song Title 66", artist: "Artist 66", file: "songs/song66.mp3" },
  { title: "Song Title 67", artist: "Artist 67", file: "songs/song67.mp3" },
  { title: "Song Title 68", artist: "Artist 68", file: "songs/song68.mp3" },
  { title: "Song Title 69", artist: "Artist 69", file: "songs/song69.mp3" },
  { title: "Song Title 70", artist: "Artist 70", file: "songs/song70.mp3" },
  { title: "Song Title 71", artist: "Artist 71", file: "songs/song71.mp3" },
  { title: "Song Title 72", artist: "Artist 72", file: "songs/song72.mp3" },
  { title: "Song Title 73", artist: "Artist 73", file: "songs/song73.mp3" },
  { title: "Song Title 74", artist: "Artist 74", file: "songs/song74.mp3" },
  { title: "Song Title 75", artist: "Artist 75", file: "songs/song75.mp3" },
  { title: "Song Title 76", artist: "Artist 76", file: "songs/song76.mp3" },
  { title: "Song Title 77", artist: "Artist 77", file: "songs/song77.mp3" },
  { title: "Song Title 78", artist: "Artist 78", file: "songs/song78.mp3" },
  { title: "Song Title 79", artist: "Artist 79", file: "songs/song79.mp3" },
  { title: "Song Title 80", artist: "Artist 80", file: "songs/song80.mp3" },
  { title: "Song Title 81", artist: "Artist 81", file: "songs/song81.mp3" },
  { title: "Song Title 82", artist: "Artist 82", file: "songs/song82.mp3" },
  { title: "Song Title 83", artist: "Artist 83", file: "songs/song83.mp3" },
  { title: "Song Title 84", artist: "Artist 84", file: "songs/song84.mp3" },
  { title: "Song Title 85", artist: "Artist 85", file: "songs/song85.mp3" },
  { title: "Song Title 86", artist: "Artist 86", file: "songs/song86.mp3" },
  { title: "Song Title 87", artist: "Artist 87", file: "songs/song87.mp3" },
  { title: "Song Title 88", artist: "Artist 88", file: "songs/song88.mp3" },
  { title: "Song Title 89", artist: "Artist 89", file: "songs/song89.mp3" },
  { title: "Song Title 90", artist: "Artist 90", file: "songs/song90.mp3" },
  { title: "Song Title 91", artist: "Artist 91", file: "songs/song91.mp3" },
  { title: "Song Title 92", artist: "Artist 92", file: "songs/song92.mp3" },
  { title: "Song Title 93", artist: "Artist 93", file: "songs/song93.mp3" },
  { title: "Song Title 94", artist: "Artist 94", file: "songs/song94.mp3" },
  { title: "Song Title 95", artist: "Artist 95", file: "songs/song95.mp3" },
  { title: "Song Title 96", artist: "Artist 96", file: "songs/song96.mp3" },
  { title: "Song Title 97", artist: "Artist 97", file: "songs/song97.mp3" },
  { title: "Song Title 98", artist: "Artist 98", file: "songs/song98.mp3" },
  { title: "Song Title 99", artist: "Artist 99", file: "songs/song99.mp3" },
  { title: "Song Title 100", artist: "Artist 100", file: "songs/song100.mp3" }
];

/* ---------------------------------------------------------
   3. STATE
   Held in memory for the current session. A trimmed copy is
   mirrored to localStorage purely so an accidental refresh
   doesn't lose progress — see SECURITY note near saveProgress().
   --------------------------------------------------------- */
const state = {
  playerName: "",
  order: [],          // shuffled indexes into `songs`, one full pass
  currentIndex: 0,     // pointer into `order`
  score: 0,
  answered: false,
  currentChoices: [],  // the 4 answers shown for the current song
  correctChoice: "",
  resultId: "",
  clipTimer: null,
  clipSecondsLeft: competitionConfig.clipDuration,
  autoStopTimeout: null
};

/* ---------------------------------------------------------
   4. DOM REFERENCES
   --------------------------------------------------------- */
const el = {
  screens: {
    home: document.getElementById("screen-home"),
    rules: document.getElementById("screen-rules"),
    game: document.getElementById("screen-game"),
    results: document.getElementById("screen-results")
  },
  btnOpenStart: document.getElementById("btnOpenStart"),
  btnOpenRules: document.getElementById("btnOpenRules"),
  btnRulesBack: document.getElementById("btnRulesBack"),
  btnRulesStart: document.getElementById("btnRulesStart"),
  statTotalSongs: document.getElementById("statTotalSongs"),
  prizeText: document.getElementById("prizeText"),

  modalName: document.getElementById("modalName"),
  inputPlayerName: document.getElementById("inputPlayerName"),
  nameError: document.getElementById("nameError"),
  btnCancelName: document.getElementById("btnCancelName"),
  btnConfirmName: document.getElementById("btnConfirmName"),

  modalResume: document.getElementById("modalResume"),
  resumeSummary: document.getElementById("resumeSummary"),
  btnStartNew: document.getElementById("btnStartNew"),
  btnContinue: document.getElementById("btnContinue"),

  songCounter: document.getElementById("songCounter"),
  scorePill: document.getElementById("scorePill"),
  progressBar: document.getElementById("progressBar"),
  progressFill: document.getElementById("progressFill"),

  phaseListen: document.getElementById("phaseListen"),
  phaseAnswer: document.getElementById("phaseAnswer"),
  discSpinner: document.getElementById("discSpinner"),
  countdownRing: document.getElementById("countdownRing"),
  countdownNum: document.getElementById("countdownNum"),
  tapPlayMsg: document.getElementById("tapPlayMsg"),
  btnManualPlay: document.getElementById("btnManualPlay"),
  clipHint: document.getElementById("clipHint"),
  loadError: document.getElementById("loadError"),
  btnRetryLoad: document.getElementById("btnRetryLoad"),

  choicesWrap: document.getElementById("choicesWrap"),
  typeAnswerWrap: document.getElementById("typeAnswerWrap"),
  inputAnswer: document.getElementById("inputAnswer"),
  btnSubmitTyped: document.getElementById("btnSubmitTyped"),
  answerFeedback: document.getElementById("answerFeedback"),

  midGameAd: document.getElementById("midGameAd"),
  audioPlayer: document.getElementById("audioPlayer"),

  resultCard: document.getElementById("resultCard"),
  resultPlayer: document.getElementById("resultPlayer"),
  resultScore: document.getElementById("resultScore"),
  resultPercent: document.getElementById("resultPercent"),
  resultId: document.getElementById("resultId"),
  resultPrizeText: document.getElementById("resultPrizeText"),
  btnShareWhatsapp: document.getElementById("btnShareWhatsapp"),
  btnPlayAgain: document.getElementById("btnPlayAgain"),

  toast: document.getElementById("toast")
};

const RING_CIRCUMFERENCE = 2 * Math.PI * 54; // matches r=54 in the SVG

/* ---------------------------------------------------------
   5. SCREEN NAVIGATION
   --------------------------------------------------------- */
function showScreen(name){
  Object.values(el.screens).forEach(s => s.classList.remove("active"));
  el.screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function openModal(modal){ modal.classList.add("active"); }
function closeModal(modal){ modal.classList.remove("active"); }

function showToast(msg, duration = 2200){
  el.toast.textContent = msg;
  el.toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { el.toast.hidden = true; }, duration);
}

/* ---------------------------------------------------------
   6. INITIAL SETUP
   --------------------------------------------------------- */
function init(){
  const activeSongCount = songs.length;
  el.statTotalSongs.textContent = activeSongCount;
  el.prizeText.textContent = competitionConfig.prize.toUpperCase();
  el.resultPrizeText.textContent = `PRIZE: ${competitionConfig.prize.toUpperCase()}`;
  document.title = competitionConfig.competitionName;

  bindEvents();
  checkForResumableProgress();
}

function bindEvents(){
  el.btnOpenStart.addEventListener("click", handleStartRequest);
  el.btnRulesStart.addEventListener("click", handleStartRequest);
  el.btnOpenRules.addEventListener("click", () => showScreen("rules"));
  el.btnRulesBack.addEventListener("click", () => showScreen("home"));

  el.btnCancelName.addEventListener("click", () => closeModal(el.modalName));
  el.btnConfirmName.addEventListener("click", confirmNameAndBegin);
  el.inputPlayerName.addEventListener("keydown", e => {
    if (e.key === "Enter") confirmNameAndBegin();
  });

  el.btnStartNew.addEventListener("click", () => {
    clearProgress();
    closeModal(el.modalResume);
    requestNameThenStart();
  });
  el.btnContinue.addEventListener("click", () => {
    closeModal(el.modalResume);
    resumeSavedGame();
  });

  el.btnManualPlay.addEventListener("click", playCurrentClip);
  el.btnRetryLoad.addEventListener("click", playCurrentClip);
  el.btnSubmitTyped.addEventListener("click", () => submitTypedAnswer());
  el.inputAnswer.addEventListener("keydown", e => {
    if (e.key === "Enter") submitTypedAnswer();
  });

  el.btnShareWhatsapp.addEventListener("click", shareToWhatsapp);
  el.btnPlayAgain.addEventListener("click", () => {
    clearProgress();
    showScreen("home");
  });

  el.audioPlayer.addEventListener("error", handleAudioError);
}

/* ---------------------------------------------------------
   7. START FLOW (name capture + resume check)
   --------------------------------------------------------- */
function handleStartRequest(){
  if (songs.length === 0){
    showToast("No songs configured yet — add songs in js/app.js");
    return;
  }
  const saved = loadProgress();
  if (saved && saved.currentIndex < saved.order.length && !saved.finished){
    el.resumeSummary.textContent =
      `Your challenge is in progress. Continue?`;
    openModal(el.modalResume);
    return;
  }
  requestNameThenStart();
}

function requestNameThenStart(){
  el.inputPlayerName.value = state.playerName || "";
  el.nameError.hidden = true;
  openModal(el.modalName);
  setTimeout(() => el.inputPlayerName.focus(), 150);
}

function confirmNameAndBegin(){
  const name = el.inputPlayerName.value.trim();
  if (!name){
    el.nameError.hidden = false;
    return;
  }
  el.nameError.hidden = true;
  state.playerName = name.slice(0, 24);
  closeModal(el.modalName);
  startNewChallenge();
}

/* ---------------------------------------------------------
   8. CHALLENGE LIFECYCLE
   --------------------------------------------------------- */
function shuffledIndexes(count){
  // Fisher-Yates shuffle — guarantees every song appears exactly once.
  const arr = Array.from({ length: count }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateResultId(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars
  const block = () => Array.from({ length: 4 }, () =>
    chars[Math.floor(Math.random() * chars.length)]).join("");
  return `${block()}-${block()}`;
}

function startNewChallenge(){
  state.order = shuffledIndexes(songs.length);
  state.currentIndex = 0;
  state.score = 0;
  state.resultId = "";
  saveProgress();
  showScreen("game");
  loadQuestion();
}

function resumeSavedGame(){
  const saved = loadProgress();
  if (!saved){ requestNameThenStart(); return; }
  state.playerName = saved.playerName;
  state.order = saved.order;
  state.currentIndex = saved.currentIndex;
  state.score = saved.score;
  showScreen("game");
  loadQuestion();
}

/* ---------------------------------------------------------
   9. QUESTION FLOW
   --------------------------------------------------------- */
function loadQuestion(){
  resetAnswerUI();

  const total = state.order.length;
  const songNum = state.currentIndex + 1;

  el.songCounter.textContent = `SONG ${songNum} / ${total}`;
  el.scorePill.textContent = `SCORE: ${state.score} / ${state.currentIndex}`;
  updateProgressBar();
  toggleMidGameAd(songNum);

  el.phaseListen.hidden = false;
  el.phaseAnswer.hidden = true;
  el.loadError.hidden = true;
  el.tapPlayMsg.hidden = true;
  el.btnManualPlay.hidden = true;
  el.clipHint.textContent = "Playing 30-second clip…";
  el.discSpinner.classList.remove("paused");

  resetCountdownRing();
  playCurrentClip();
}

function currentSong(){
  const songIndex = state.order[state.currentIndex];
  return songs[songIndex];
}

function updateProgressBar(){
  const total = state.order.length;
  const pct = total ? Math.round((state.currentIndex / total) * 100) : 0;
  el.progressFill.style.width = pct + "%";
  el.progressBar.setAttribute("aria-valuenow", String(pct));
}

function toggleMidGameAd(songNum){
  const every = competitionConfig.midGameAdEvery;
  const show = every > 0 && songNum > 1 && (songNum - 1) % every === 0;
  el.midGameAd.hidden = !show;
}

/* ---------------------------------------------------------
   10. AUDIO PLAYBACK — 30s clip, custom controls only
   --------------------------------------------------------- */
function playCurrentClip(){
  const song = currentSong();
  if (!song){ return; }

  clearTimers();
  el.loadError.hidden = true;
  el.tapPlayMsg.hidden = true;
  el.btnManualPlay.hidden = true;

  const audio = el.audioPlayer;
  audio.pause();
  audio.removeAttribute("src");
  audio.load(); // release previous resource before loading the next one

  audio.src = song.file;
  audio.currentTime = 0;
  audio.controls = false; // never expose native controls

  const playPromise = audio.play();

  if (playPromise !== undefined){
    playPromise
      .then(() => beginCountdown())
      .catch(() => {
        // Autoplay blocked by the browser — ask for a manual tap.
        el.tapPlayMsg.hidden = false;
        el.btnManualPlay.hidden = false;
        el.discSpinner.classList.add("paused");
      });
  } else {
    beginCountdown();
  }
}

function handleAudioError(){
  clearTimers();
  el.discSpinner.classList.add("paused");
  el.loadError.hidden = false;
  el.tapPlayMsg.hidden = true;
  el.btnManualPlay.hidden = true;
  el.clipHint.textContent = "";
}

function beginCountdown(){
  el.discSpinner.classList.remove("paused");
  el.clipHint.textContent = "Playing 30-second clip…";
  state.clipSecondsLeft = competitionConfig.clipDuration;
  updateCountdownDisplay();

  state.clipTimer = setInterval(() => {
    state.clipSecondsLeft -= 1;
    updateCountdownDisplay();
    if (state.clipSecondsLeft <= 0){
      finishListenPhase();
    }
  }, 1000);

  // Hard stop as a safety net in case setInterval drifts.
  state.autoStopTimeout = setTimeout(finishListenPhase, (competitionConfig.clipDuration + 1) * 1000);
}

function updateCountdownDisplay(){
  const s = Math.max(0, state.clipSecondsLeft);
  el.countdownNum.textContent = s;
  const fraction = s / competitionConfig.clipDuration;
  const offset = RING_CIRCUMFERENCE * (1 - fraction);
  el.countdownRing.style.strokeDashoffset = offset;
}

function resetCountdownRing(){
  state.clipSecondsLeft = competitionConfig.clipDuration;
  el.countdownNum.textContent = competitionConfig.clipDuration;
  el.countdownRing.style.strokeDashoffset = "0";
}

function clearTimers(){
  if (state.clipTimer){ clearInterval(state.clipTimer); state.clipTimer = null; }
  if (state.autoStopTimeout){ clearTimeout(state.autoStopTimeout); state.autoStopTimeout = null; }
}

function finishListenPhase(){
  clearTimers();
  const audio = el.audioPlayer;
  audio.pause();
  el.discSpinner.classList.add("paused");
  showAnswerPhase();
}

/* ---------------------------------------------------------
   11. ANSWER PHASE — multiple choice (default) with a typed
   fallback available if you set USE_TYPED_ANSWER = true.
   --------------------------------------------------------- */
const USE_TYPED_ANSWER = false;

function buildChoices(correctSong){
  const pool = songs
    .map(s => s.title)
    .filter(title => title !== correctSong.title);

  // Shuffle the distractor pool, then take up to 3 unique wrong answers.
  const shuffledPool = shuffledIndexes(pool.length).map(i => pool[i]);
  const wrongAnswers = [];
  for (const title of shuffledPool){
    if (wrongAnswers.length >= 3) break;
    if (!wrongAnswers.includes(title)) wrongAnswers.push(title);
  }
  // If the library is too small for 3 distractors (testing mode),
  // pad with clearly-fake placeholders so the UI never breaks.
  while (wrongAnswers.length < 3){
    wrongAnswers.push(`Not "${correctSong.title}" #${wrongAnswers.length + 1}`);
  }

  const all = [correctSong.title, ...wrongAnswers];
  const order = shuffledIndexes(4);
  return order.map(i => all[i]);
}

function showAnswerPhase(){
  const song = currentSong();
  state.answered = false;
  state.correctChoice = song.title;

  el.phaseListen.hidden = true;
  el.phaseAnswer.hidden = false;
  el.answerFeedback.hidden = true;
  el.answerFeedback.className = "answer-feedback";

  if (USE_TYPED_ANSWER){
    el.typeAnswerWrap.hidden = false;
    el.choicesWrap.hidden = true;
    el.choicesWrap.innerHTML = "";
    el.inputAnswer.value = "";
    el.inputAnswer.disabled = false;
    el.btnSubmitTyped.disabled = false;
    setTimeout(() => el.inputAnswer.focus(), 100);
  } else {
    el.typeAnswerWrap.hidden = true;
    el.choicesWrap.hidden = false;
    state.currentChoices = buildChoices(song);
    renderChoices();
  }
}

function renderChoices(){
  const letters = ["A", "B", "C", "D"];
  el.choicesWrap.innerHTML = "";
  state.currentChoices.forEach((choiceText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.setAttribute("data-choice", choiceText);
    btn.innerHTML = `<span class="choice-btn__letter">${letters[idx]}</span><span>${escapeHtml(choiceText)}</span>`;
    btn.addEventListener("click", () => submitChoice(choiceText, btn));
    el.choicesWrap.appendChild(btn);
  });
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function submitChoice(choiceText, btnEl){
  if (state.answered) return; // one attempt only
  state.answered = true;

  const isCorrect = choiceText === state.correctChoice;
  revealAnswerButtons(choiceText, isCorrect);
  finalizeAnswer(isCorrect);
}

function revealAnswerButtons(selectedText, isCorrect){
  const buttons = el.choicesWrap.querySelectorAll(".choice-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    const text = btn.getAttribute("data-choice");
    if (text === state.correctChoice){
      btn.classList.add("is-correct");
    } else if (text === selectedText && !isCorrect){
      btn.classList.add("is-wrong");
    } else {
      btn.classList.add("is-dimmed");
    }
  });
}

function submitTypedAnswer(){
  if (state.answered) return;
  const typed = el.inputAnswer.value.trim();
  if (!typed) return;
  state.answered = true;
  el.inputAnswer.disabled = true;
  el.btnSubmitTyped.disabled = true;

  const isCorrect = normalize(typed) === normalize(state.correctChoice);
  finalizeAnswer(isCorrect);
}

function normalize(str){
  return str.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
}

function finalizeAnswer(isCorrect){
  if (isCorrect) state.score++;

  el.answerFeedback.hidden = false;
  el.answerFeedback.classList.add(isCorrect ? "correct" : "wrong");
  el.answerFeedback.textContent = isCorrect ? "✅ CORRECT! +1 POINT" : "❌ WRONG";

  el.scorePill.textContent = `SCORE: ${state.score} / ${state.currentIndex + 1}`;

  saveProgress();

  setTimeout(advanceToNextSong, 1400);
}

function resetAnswerUI(){
  el.choicesWrap.innerHTML = "";
  el.answerFeedback.hidden = true;
  el.inputAnswer.value = "";
}

/* ---------------------------------------------------------
   12. ADVANCE / FINISH
   --------------------------------------------------------- */
function advanceToNextSong(){
  state.currentIndex++;
  saveProgress();

  if (state.currentIndex >= state.order.length){
    finishChallenge();
  } else {
    loadQuestion();
  }
}

function finishChallenge(){
  clearTimers();
  el.audioPlayer.pause();

  state.resultId = generateResultId();
  markProgressFinished();

  const total = state.order.length;
  const pct = total ? Math.round((state.score / total) * 100) : 0;

  el.resultPlayer.textContent = state.playerName || "Player";
  el.resultScore.textContent = `${state.score} / ${total}`;
  el.resultPercent.textContent = `${pct}%`;
  el.resultId.textContent = state.resultId;

  showScreen("results");
}

/* ---------------------------------------------------------
   13. WHATSAPP SHARE
   --------------------------------------------------------- */
function shareToWhatsapp(){
  const total = state.order.length;
  const message =
    `🎵 I just completed the ${competitionConfig.competitionName}!\n\n` +
    `My score: ${state.score}/${total}\n` +
    `Result ID: ${state.resultId}\n\n` +
    `Highest score wins the ${competitionConfig.prize}! 🏆`;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

/* ---------------------------------------------------------
   14. LOCAL STORAGE (progress convenience only)

   SECURITY / FAIRNESS NOTE:
   This is a static, fully client-side application. Anything
   stored here — or anywhere in the page's HTML/CSS/JS — is
   visible and editable by a sufficiently determined user via
   browser devtools or localStorage. This progress cache exists
   purely so an accidental refresh doesn't lose someone's place
   in the challenge — it is NOT a trusted competition record and
   is never treated as one. The screenshot the participant sends
   to the WhatsApp group, verified manually by the organizer, is
   the only official result. The voucher password is never
   stored anywhere in this app; it is sent privately and
   separately by the organizer to the winner.
   --------------------------------------------------------- */
function saveProgress(){
  try {
    const payload = {
      playerName: state.playerName,
      order: state.order,
      currentIndex: state.currentIndex,
      score: state.score,
      finished: false,
      savedAt: Date.now()
    };
    localStorage.setItem(competitionConfig.storageKey, JSON.stringify(payload));
  } catch (e){
    // localStorage may be unavailable (private browsing etc.) — fail silently,
    // the challenge still works, it just won't survive a refresh.
  }
}

function markProgressFinished(){
  try {
    const raw = localStorage.getItem(competitionConfig.storageKey);
    if (!raw) return;
    const payload = JSON.parse(raw);
    payload.finished = true;
    localStorage.setItem(competitionConfig.storageKey, JSON.stringify(payload));
  } catch (e){ /* no-op */ }
}

function loadProgress(){
  try {
    const raw = localStorage.getItem(competitionConfig.storageKey);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    if (!payload || !Array.isArray(payload.order)) return null;
    return payload;
  } catch (e){
    return null;
  }
}

function clearProgress(){
  try { localStorage.removeItem(competitionConfig.storageKey); } catch (e){ /* no-op */ }
  state.order = [];
  state.currentIndex = 0;
  state.score = 0;
  state.resultId = "";
}

function checkForResumableProgress(){
  const saved = loadProgress();
  if (saved && !saved.finished && saved.currentIndex < saved.order.length && saved.order.length > 0){
    state.playerName = saved.playerName || "";
    // Resume offer surfaces the next time the user presses START —
    // see handleStartRequest(). We don't interrupt the landing page itself.
  }
}

/* ---------------------------------------------------------
   15. BOOT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", init);
