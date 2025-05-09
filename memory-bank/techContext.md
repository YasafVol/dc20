# Technical Context

This document details the technologies, development setup, and technical constraints of the project.

## Technologies Used

- **Framework:** SvelteKit (Full-stack JavaScript/TypeScript)
- **UI Primitives:** Melt UI (Primary), potentially `shadcn-svelte` (using Bits UI) / Bits UI as fallback.
- **Styling:** TailwindCSS
- **ORM & Migrations:** Prisma
- **Database:** PostgreSQL (hosted on Render Free tier)
- **Frontend State Management:** Svelte stores (writable and derived)
- **Rule Data Storage:** TypeScript objects/arrays (initially hardcoded in `src/lib/rulesdata/`)

## Development Setup

- Requires Node.js and npm/yarn/pnpm.
- Prisma CLI for database migrations.
- Standard SvelteKit development environment.
- TailwindCSS setup (configuration in `tailwind.config.js`).

## Technical Constraints

- Render Free tier database limitations (e.g., connection limits, sleep times).
- Initial static rule data is hardcoded, requiring code changes for rule updates.
- Level 1 attribute cap of +3.
- Ancestry Point allocation rules (5 points, 1 Minor Trait limit, +2 points max from Negative Traits).

## Dependencies

- SvelteKit
- Melt UI
- TailwindCSS
- Prisma
- PostgreSQL driver (e.g., `pg`)
- Other standard SvelteKit dependencies.

## Tool Usage Patterns

- Using Prisma CLI for schema definition and migrations.
- Using TailwindCSS for styling components.
- Using SvelteKit's built-in features for routing, API endpoints (Form Actions), and server-side logic.
- Using Melt UI primitives for building accessible UI components.
