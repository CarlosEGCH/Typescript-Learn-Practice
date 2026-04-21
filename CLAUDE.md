# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx ts-node src/01-basics/basic-types.ts  # run a single file
npx tsc --noEmit                           # type-check without emitting
npx tsc                                    # compile src/ → dist/
```

## tsconfig highlights

- `strict: true` with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` — stricter than typical strict mode
- `module: nodenext` — imports require explicit file extensions (e.g. `./foo.js`) when using ES modules
- `rootDir: ./src`, `outDir: ./dist` — compiled output goes to `dist/`, which is gitignored

## Architecture

A personal TypeScript learning repo structured by topic progression: `src/01-basics/` → `src/02-intermediate/` → `src/03-advanced/` → `src/04-exercises/`, with `notes/` for reference material. Files within each folder are numbered to signal intended practice order and are self-contained.
