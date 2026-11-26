# AI Usage Log

## Tools used

- **Claude Code (VS Code extension):** fixing build and emulator errors, setting up the project, writing the project rules file (CLAUDE.md), running Git commands, and explaining each step in simple English.

## Session log

### 2026-11-26 - Project setup and first Android run

- **What I asked Claude for:** Run the app on the Android emulator and fix the errors, then set up project rules (CLAUDE.md) and push to GitHub.
- **What Claude produced:** Fixed the `gradlew.bat` error (a shell setting) and the install error (cold-booted the emulator); deleted stray empty files; created `CLAUDE.md`; committed and pushed it; created `AI_USAGE.md`.
- **What I changed, rejected or corrected, and why:** No changes this session
- **What I learned:** Native build errors can come from the computer or the emulator, not just from the app's code.

### 2026-11-26 - Code quality setup

- **What I asked Claude for:** Make TypeScript strict, set up ESLint and Prettier so `npm run lint` passes, add a `typecheck` script, create the feature folder structure, and explain each config file.
- **What Claude produced:** Extra strict TypeScript checks in `tsconfig.json`; ignore patterns and comments in `.eslintrc.js`; comments and `endOfLine: 'lf'` in `.prettierrc.js`; new `.prettierignore` and `.gitattributes`; `typecheck`, `format` and `format:check` scripts; empty `src/features/{auth,books,favourites,profile}` and `src/theme` folders. Typecheck, lint, format check and tests all pass.
- **What I changed, rejected or corrected, and why:** No changes this session
- **What I learned:** Prettier 2 doesn't read `.gitignore`, so it needs its own `.prettierignore`. Git doesn't save empty folders, so each folder needs a `.gitkeep` file.

## Corrections summary

- None yet.
