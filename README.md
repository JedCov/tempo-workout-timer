# tempo-workout-timer

A browser-based workout timer app for tempo-based training, interval sessions, and structured exercise routines. Built as an AI-assisted beginner coding project using GitHub, ChatGPT, Gemini, and Codex.

## Project structure

```text
tempo-workout-timer/
├── README.md              # Start here: what the project is and how to run it
├── .gitignore             # Files Git should ignore
├── docs/                  # Planning notes and progress notes
│   ├── idea.md            # Original app idea and feature notes
│   ├── dev-log.md         # Change history / learning log
│   └── roadmap.md         # Next small steps
├── src/                   # Main app code that runs in the browser
├── assets/                # Images, audio, and fonts for the app
│   ├── images/
│   ├── audio/
│   └── fonts/
├── tests/                 # Automated checks for the repo
└── prototypes/            # Early experiments that are not part of the main app
```

## Run the app

Open `src/index.html` in your browser.

If you prefer using a local web server, run one from the repo root and open the printed URL:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/src/`.

## Run tests

This repo currently uses a small Node.js smoke test. It checks that the beginner-friendly folders exist and that `src/index.html` links to files that are present.

```bash
npm test
```
