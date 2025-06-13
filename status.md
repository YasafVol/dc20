# DC20 Character Creator - Project Status

## Current Status (May 27, 2025)

The project is in the planning and initial setup phase for the DC20 Character Creator MVP. The core requirements, scope, and technical approach are defined. Detailed plans for the first two stages of the wizard are documented.

### Completed Tasks

1. __Project Planning__:

   - Defined project scope, requirements, and architecture in memory bank documentation
   - Created detailed plans for Stage A (Attributes) and Stage B (Ancestry) of the character creation wizard
   - Established UI design principles and color palette

2. __Database Setup__:

   - Installed and configured PostgreSQL locally
   - Created `dc20-local` database
   - Set up environment variables in `.env` file
   - Generated Prisma client
   - Applied initial migration to create database schema

3. __Static Data Implementation__:

   - Defined TypeScript interfaces in `src/lib/rulesdata/types.ts`
   - Created initial rule data files for attributes, ancestries, traits, classes, skills, trades, and languages
   - Set up Svelte store structure in `src/lib/stores/characterInProgressStore.ts`

### Current Work

The project is now ready for frontend and backend implementation. The database is set up, and the static rule data is in place.

### Next Steps

1. __Frontend Implementation__:

   - Implement the Svelte component for Stage A (Attributes) based on `projectPlan/stage1.md`
   - Create UI components using Melt UI primitives styled with TailwindCSS
   - Implement the attribute point allocation system with real-time validation

2. __Backend Implementation__:

   - Create the SvelteKit Form Action for Stage A data persistence
   - Implement validation logic for attribute point allocation
   - Connect the frontend to the backend using the Prisma client

3. __Continue Development__:

   - Implement Stage B (Ancestry) components and logic
   - Implement the attribute overflow helper panel for trait selection
   - Detail and implement Stage C (Class)

## Project Context

The DC20 Character Creator is a web application designed to help players create Level 1 characters for the DC20 tabletop roleplaying game. The application follows a guided wizard approach, breaking down character creation into manageable steps.

### Key Features (MVP)

- Character Creation Wizard (Stages A, B, C)
- Point Buy system for attributes
- Ancestry selection and trait allocation
- Class selection and feature choices
- Data persistence using PostgreSQL
- Dark mode UI with a modern aesthetic

### Technology Stack

- __Frontend__: SvelteKit, Melt UI, TailwindCSS
- __Backend__: SvelteKit Form Actions/API Routes
- __Database__: PostgreSQL with Prisma ORM
- __State Management__: Svelte stores

### Architecture

The application follows a full-stack architecture using SvelteKit. Frontend components handle the user interface and client-side logic, while backend endpoints handle data persistence, validation, and final calculations. The database stores both in-progress character data and finalized character sheets.

## Resources

- Detailed planning documents in `projectPlan/` directory
- Memory bank documentation in `memory-bank/` directory
- Static rule data in `src/lib/rulesdata/` directory
- Database schema in `prisma/schema.prisma`


Here's an additional section about Prisma that you can add to your status.md file:

## Prisma Database Setup Details

### Completed Prisma Setup

- Installed Prisma dependencies:
  - `prisma` (v6.7.0) as a dev dependency
  - `@prisma/client` (v6.7.0) as a runtime dependency
- Created and configured `prisma/schema.prisma` with:
  - PostgreSQL database provider
  - `CharacterInProgress` and `CharacterSheetData` models
- Set up local PostgreSQL database:
  - Created `dc20-local` database
  - Configured connection string in `.env` file: `POSTGRES_URL="postgresql://postgres:123456789@localhost:5432/dc20-local"`
- Generated Prisma client: `npx prisma generate`
- Applied initial migration: `npx prisma migrate dev --name init`
- Database tables are now created and ready for use

### Using Prisma in the Application

To use Prisma in your SvelteKit application:

1. **Import the Prisma client**:
   ```typescript
   import { PrismaClient } from '@prisma/client'
   const prisma = new PrismaClient()
   ```

2. **Create records** (example for saving character progress):
   ```typescript
   // In a SvelteKit Form Action or API endpoint
   const character = await prisma.characterInProgress.create({
     data: {
       attribute_might: -1,
       attribute_agility: 0,
       attribute_charisma: 1,
       attribute_intelligence: 2,
       pointsSpent: 12,
       // other fields as needed
     }
   })
   ```

3. **Query records** (example for loading character progress):
   ```typescript
   const character = await prisma.characterInProgress.findUnique({
     where: { id: characterId }
   })
   ```

4. **Update records** (example for updating after a wizard step):
   ```typescript
   const updatedCharacter = await prisma.characterInProgress.update({
     where: { id: characterId },
     data: {
       ancestry1Id: selectedAncestryId,
       selectedTraitIds: JSON.stringify(selectedTraits),
       // other fields to update
     }
   })
   ```

### Prisma Utilities

- **Prisma Studio**: A visual database editor
  - Run with `npx prisma studio`
  - Allows viewing and editing database records through a web interface
  - Useful for debugging and manual data management

- **Schema Updates**: When you modify your Prisma schema
  - Run `npx prisma migrate dev --name descriptive_name` to create and apply a new migration
  - This keeps your database schema in sync with your code

### Next Steps for Prisma

- Implement database access in SvelteKit Form Actions/API Routes
- Create helper functions for common database operations
- Consider setting up a connection pool for production deployment
- Plan for database backup and recovery strategies
