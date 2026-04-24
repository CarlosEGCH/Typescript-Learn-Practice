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

## Project Insight Instructions

When the user asks for insight about the project — e.g. "what topics should I add", "what should I learn next", "what's missing" — always start by:
1. Listing all files under `src/` (using a glob or directory listing) to see what topics exist and their order.
2. Reading the contents of the relevant files to understand what has already been covered before making suggestions.

This ensures recommendations are grounded in what the user has actually practiced, not just the filenames.
