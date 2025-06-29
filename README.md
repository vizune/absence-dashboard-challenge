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
```

The app will be available at http://localhost:5173

---

## API Endpoints

- `GET /api/absences`  
  Returns a list of all employee absences.

- `GET /api/conflict/:id`  
  Returns whether a specific absence (by ID) has a scheduling conflict.

See `src/constants.ts` for how these endpoints are used in the application.

---

## Testing

This project uses [Vitest](https://vitest.dev/) as the test runner, along with [Testing Library](https://testing-library.com/) for DOM-based React testing.

### Key testing features

- `@testing-library/react` for rendering components
- `@testing-library/user-event` for simulating real user interactions
- `@testing-library/jest-dom` for useful assertions (e.g. `.toBeInTheDocument()`)
- `jsdom` environment for full DOM support in tests

### Setup

All test setup is handled in:

- `vite.config.ts` — configures Vitest with `globals`, `jsdom`, and `setupFiles`
- `src/test/setup.ts` — imports `@testing-library/jest-dom` globally

### Running tests

```bash
# Run all tests once
npm run test

# Watch tests as you edit
npm run test:watch

# Open interactive UI (optional)
npm run test:ui
```

---

## Future Improvements

- **Responsive Layout for Mobile**  
  Instead of using a traditional `<table>`, I would refactor the table into a grid or card-based layout for small screens. This would allow each absence entry to display as a vertically stacked block, improving readability and touch interaction on mobile devices.

- **Light/Dark Mode Toggle**  
  Add a theme switcher to allow users to toggle between light and dark modes. While the current implementation respects system preferences, giving users control improves accessibility and user comfort — especially in different lighting environments.

- **Sticky Table Headers**  
  Keep column headers visible when scrolling through long lists of absences for better context.

- **Search & Filtering**  
  Allow filtering absences by employee name, date range, type, or approval status for faster data discovery.

- **Pagination**  
  Improve performance and usability for large datasets by adding pagination or lazy loading.