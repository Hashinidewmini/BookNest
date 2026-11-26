# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About this project

BookNest is a React Native CLI app (not Expo) built for the IN3210 assignment. The theme is **Books & Reading**, and the twist is **Smart search**.

The user is a beginner learning React Native. Explain every change in simple English: what changed, why, and how it fits into the app. Avoid unexplained jargon.

Current state: the app is still the unchanged template. `App.tsx` renders `NewAppScreen`, and none of the libraries below are installed yet. Install each one as the feature that needs it is built.

## Stack (required)

- TypeScript in strict mode. React Native 0.88.1, React 19.3, New Architecture, Hermes, edge-to-edge display. Node >= 22.11.
- Navigation: React Navigation, using a native stack plus bottom tabs.
- State and API: Redux Toolkit, with RTK Query for all API calls.
- Forms: react-hook-form with zod schemas for validation.
- Auth token: stored with react-native-keychain. Never put it in AsyncStorage or Redux persist.
- Favourites: persisted with redux-persist on AsyncStorage.
- Icons: Feather only (via react-native-vector-icons). Don't use other icon sets.
- Tests: Jest.

## Project rules

- **Folder structure:** code is grouped by feature under `src/features/` (`auth`, `books`, `favourites`, `profile`). Code shared by several features goes outside the feature folders (for example `src/theme`).
- **Theme:** every colour, spacing value and font size comes from `src/theme`. Never hard-code colours or magic numbers in styles.
- **Accessibility:** touch targets are at least 44pt (use `hitSlop` or a minimum size if needed).
- **Lists:** every list shows a loading state, an error state with a **Retry** button, and an empty state.
- **Separation:** keep API calls (RTK Query endpoints), state (slices and the store) and UI (screens and components) in separate files. Screens use hooks and don't call `fetch` directly.

## Commands

```sh
npm start                  # Metro dev server (this machine has used port 8083)
npm run android            # build, install, and launch on emulator/device
npm run lint               # ESLint (@react-native config)
npm test                   # Jest (@react-native/jest-preset)
npx jest __tests__/App.test.tsx        # single test file
npx jest -t "renders correctly"        # single test by name
npx tsc --noEmit           # type-check
```

**Definition of done:** before saying a task is finished, run `npx tsc --noEmit`, `npm run lint` and `npm test`, and report the results honestly.

## Git

Never commit or push. When a task is finished, suggest a commit message in Conventional Commits format (for example `feat(books): add smart search screen`) and let the user commit it.

## AI usage log (AI_USAGE.md)

The assignment requires a log of how AI was used. Maintain `AI_USAGE.md` in the project root:

- At the end of every task, add or update today's entry (`### YYYY-MM-DD - <phase or feature>`), newest at the bottom.
- Fill in "What I asked Claude for" and "What Claude produced" yourself.
- For "What I changed, rejected or corrected", **never invent anything**. Ask the user what they changed or rejected, and write only what they say. If they say nothing, write "No changes this session".
- Whenever the user rejects a suggestion, undoes a change, or fixes Claude's code, remind them to log it.
- When a correction is significant, also add it to "Corrections summary". The assignment needs at least one strong example.
- Keep entries short and in simple English.

## Architecture notes

- `index.js` registers `App` with `AppRegistry` under the name in `app.json` (`BookNest`). That name must match the native project.
- `App.tsx` is the root component and wraps the app in `SafeAreaProvider`. Because edge-to-edge is on, screens must apply safe-area insets themselves. Providers (Redux store, PersistGate, NavigationContainer) belong here.
- Android: package `com.booknest`, written in Kotlin (`android/app/src/main/java/com/booknest/`). Native modules are autolinked, so after installing a package with native code (keychain, AsyncStorage, vector icons, React Navigation deps), rebuild with `npm run android`. Reloading Metro isn't enough. Vector icons also need their font set up in Gradle; check the library's README.
- Tests live in `__tests__/`. Native modules (keychain, AsyncStorage) need Jest mocks once they're installed.

## Windows / emulator gotchas (seen on this machine)

- `'gradlew.bat' is not recognized` during `run-android` means `NoDefaultCurrentDirectoryInExePath=1` is set in the shell. Clear it first: in PowerShell `Remove-Item Env:NoDefaultCurrentDirectoryInExePath`.
- `InstallException: Failure calling service package: Broken pipe (32)` means the emulator's package manager is hung. Cold-boot it: `adb emu kill`, then `emulator -avd Medium_Phone_API_37.0 -no-snapshot-load`. `adb reboot` didn't fix it.
- When testing with `adb shell pm ...` in PowerShell, don't pipe to `Select-Object -First`. Closing the pipe early can give a misleading broken-pipe error.
