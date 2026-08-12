# 100 Song Music Challenge — Standalone Version

A single self-contained `index.html` file — all HTML, CSS, and JavaScript
live in one file. No backend, no build step, no database, no API keys.

## What this is

Participants listen to a ~30 second clip of each song, choose the correct
title from four options, and get a score out of however many songs you've
loaded. At the end, they see a results screen with a unique Result ID and
are told to **screenshot it and send it to your WhatsApp group** — the app
never awards anything automatically. You compare screenshots and privately
send the winner the voucher password yourself.

## File structure

```
index.html          → everything: markup, styling, and app logic in one file
songs/               → put your MP3 files here (song01.mp3 ... song100.mp3)
```

Only the audio files live outside `index.html` — 100 MP3s can't reasonably
be embedded inline, so they stay as separate files that `index.html`
references by relative path (`songs/song01.mp3`, etc).

## 1. Add your songs

Open `index.html` in any text editor and find the `songs` array (search for
`const songs = [`):

```js
const songs = [
  { title: "Song Title 01", artist: "Artist 01", file: "songs/song01.mp3" },
  { title: "Song Title 02", artist: "Artist 02", file: "songs/song02.mp3" },
  ...
];
```

For each entry, replace:
- `title` — the correct answer participants must pick
- `artist` — kept for your own reference, not currently shown in the UI
- `file` — the path to the matching MP3 in the `songs/` folder

Drop your actual MP3 files into `/songs/`, named to match. You do **not**
need all 100 filled in to test — the app automatically adapts to however
many entries are in the array.

> ⚠️ Only use music you have the rights or permission to use. Placeholder
> filenames are provided; no copyrighted audio is included in this project.

## 2. Customize the competition text

Still inside `index.html`, search for `const competitionConfig`:

```js
const competitionConfig = {
  competitionName: "100 Song Music Challenge",
  prize: "R50 Voucher",
  clipDuration: 30,       // seconds each clip plays
  totalSongs: 100,
  midGameAdEvery: 10,     // show an inline ad every N songs, 0 = off
  storageKey: "musicChallenge_v1"
};
```

Change `competitionName` and `prize` to update the copy across the whole
site (home page, results page, WhatsApp share message).

## 3. Add your advertising code

Every ad slot is a clearly labeled `<div class="ad-container">` inside
`index.html`, with a comment showing exactly where to paste your ad
network's HTML/JS snippet (search for `INSERT AD NETWORK CODE HERE`):

```html
<div class="ad-container" data-ad-slot="home">
  <span class="ad-label">ADVERTISEMENT</span>
  <div class="ad-body">
    <!-- INSERT AD NETWORK CODE HERE -->
  </div>
</div>
```

There are four slots: home page, rules page, mid-game (shows every
`midGameAdEvery` songs), and the final results page. They're responsive
and won't break the layout if left empty or if your ad code renders at a
different size.

## 4. Deploy

Static, single-file site — deploy anywhere:

- **GitHub Pages**: push `index.html` and the `songs/` folder to a repo,
  enable Pages on the `main` branch (root), done.
- **Netlify**: drag `index.html` + `songs/` onto the Netlify dashboard, or
  connect the repo.
- **Any static host**: upload `index.html` and `songs/` to the web root.
- **Local testing**: just double-click `index.html` to open it in a
  browser — no server required for basic testing (though some browsers
  restrict audio autoplay more aggressively on `file://` URLs; a quick
  local server like `python3 -m http.server` avoids that if needed).

No build step, no environment variables, nothing else to configure.

## How scoring & fairness work

- Song order is reshuffled every time someone starts a new challenge, so
  every song appears exactly once per run.
- Each question is multiple choice (1 correct + 3 distractors pulled from
  the rest of your song list), one attempt only, no going back.
- The correct answer is never present in the page source before the
  participant submits — it's only revealed in the DOM after their choice
  is locked in.
- Progress is cached in `localStorage` purely so an accidental refresh
  doesn't lose someone's place — **this is explicitly not a trusted
  competition record**. This is a static client-side app, so a determined
  user could inspect the JavaScript or edit localStorage to cheat. That's
  why the actual competition record is the screenshot the participant
  sends you, which you verify manually.
- The voucher password is never included anywhere in this project's code.
  You send it privately, yourself, to whoever you determine has the
  highest verified score.

## Browser autoplay

Mobile browsers often block audio from autoplaying. If that happens, the
app shows "Tap PLAY to listen" with a play button instead of erroring out
— the countdown only starts once playback actually begins.
