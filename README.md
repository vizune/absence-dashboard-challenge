# Absence Dashboard

A single-page React application that displays employee absences in a sortable, filterable table. This solution was built as part of a front-end technical challenge.

---

## Features

- ✅ **Displays absences** with start/end dates, status, type, and employee name
- ✅ **Visual indicator** for absences that have scheduling conflicts
- ✅ **Click employee name** to view all their absences
- ✅ Built with **React, TypeScript, Tailwind CSS, and Vite**
- ✅ **TDD-first** using Vitest and Testing Library

---

## How it works

- Absences are fetched from the provided API
- Conflict data is fetched in parallel per absence and cached in state
- Local state handles filtering and basic interactions
- Components are typed and tested independently
- Custom hook `useAbsences()` encapsulates all data-fetching logic

---

## Tech stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Run tests
npm run test
