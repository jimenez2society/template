---
name: pnpm-default
description: Use this skill for ALL JavaScript/Node.js package management tasks. ALWAYS use pnpm instead of npm, yarn, or npx. This applies to installing dependencies, running scripts, and executing CLI tools. Replace 'npm install' with 'pnpm install', 'npx' with 'pnpm dlx', and 'yarn' with 'pnpm'.
---

# pnpm Default Package Manager

This skill enforces pnpm as the default package manager for all JavaScript/Node.js projects.

## Rules

1. **ALWAYS use pnpm** - Never use npm, yarn, or npx
2. **Replace commands:**
   - `npm install` → `pnpm install`
   - `npm run <script>` → `pnpm <script>`
   - `npx <package>` → `pnpm dlx <package>`
   - `yarn add` → `pnpm add`
   - `yarn <script>` → `pnpm <script>`

## Examples

```bash
# Installing dependencies
pnpm install

# Adding a package
pnpm add lodash
pnpm add -D typescript

# Running scripts
pnpm dev
pnpm build

# Executing CLI tools
pnpm dlx shadcn@latest init
pnpm dlx prisma migrate dev
```
