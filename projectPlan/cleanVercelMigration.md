# Clean Vercel Migration Plan for DC20 Character Creator

## Overview
This document outlines a systematic approach to migrate the DC20 Character Creator from the current problematic setup to a fresh SvelteKit project that will deploy successfully on Vercel.

## Current Project Analysis

### Project Structure
```
dc20/
├── src/
│   ├── lib/
│   │   ├── components/ui/          # UI components (button, input, label, radio-group)
│   │   ├── rulesdata/             # Game logic and data files
│   │   └── stores/                # Svelte stores
│   ├── routes/
│   │   ├── api/character/progress/ # API endpoints for character data
│   │   ├── character-creator/      # Character creation pages
│   │   └── test-ui/               # UI testing page
│   ├── app.css                    # Global styles
│   └── app.html                   # HTML template
├── prisma/
│   ├── schema.prisma              # Database schema
│   └── migrations/                # Database migrations
├── memory-bank/                   # Project documentation
├── projectPlan/                   # Planning documents
└── Configuration files (package.json, svelte.config.js, etc.)
```

### Key Dependencies
- **Framework**: SvelteKit with Vite
- **Database**: Prisma with PostgreSQL (Prisma Accelerate)
- **UI**: Custom components + Melt UI + Tailwind CSS
- **Deployment**: Vercel (currently failing)

### Current Issues
- Permission denied errors with `node_modules/.bin/` executables
- Build process failing on Vercel despite multiple configuration attempts
- Inconsistent adapter configuration

## Revised Migration Strategy with Incremental Testing

This revised strategy incorporates more frequent testing to ensure issues are caught early. This section supersedes the previous "Migration Strategy" and "Migration Checklist" for a more robust, phased approach.

### Phase 1: Baseline Verification
1.  Create the new SvelteKit skeleton project.
2.  Install `@sveltejs/adapter-vercel` and configure `svelte.config.js`.
3.  **Test Point 1:** Deploy this completely empty project to Vercel.
    *   **Goal:** Confirm the fundamental build process and Vercel adapter are working correctly before adding any code.

### Phase 2: Database Layer Verification
1.  Copy the `prisma` directory and `.env` file.
2.  Install Prisma dependencies and run `npx prisma generate`.
3.  Create a temporary `src/routes/api/db-test/+server.ts` endpoint that performs a simple database query.
4.  **Test Point 2:** Run `npm run dev` and hit the `/api/db-test` endpoint.
    *   **Goal:** Isolate and confirm that the application can successfully connect to and query the database.

### Phase 3: API Logic Verification
1.  Copy `src/lib/rulesdata` and `src/lib/stores`.
2.  Copy the entire `src/routes/api/` directory.
3.  **Test Point 3:** Run `npm run dev` and test each of the real API endpoints.
    *   **Goal:** Verify that all backend logic works correctly before introducing the UI.

### Phase 4: UI and Integration Verification
1.  Configure `tailwind.config.js` and copy `app.css`, `app.html`.
2.  Copy `src/lib/components` and `src/routes/test-ui`.
3.  **Test Point 4 (Component Rendering):** Run `npm run dev` and navigate to the `/test-ui` page.
    *   **Goal:** Confirm individual UI components render correctly.
4.  Copy the remaining pages (`character-creator`, etc.).
5.  **Test Point 5 (Full Local Integration):** Run `npm run dev` and perform a full end-to-end test locally.
    *   **Goal:** Ensure UI, API, and database work together.

### Phase 5: Final Production Verification
1.  **Test Point 6 (Local Production Build):** Run `npm run build` and `npm run preview`.
    *   **Goal:** Catch any production-only build issues.
2.  **Test Point 7 (Staging Deployment):** Deploy to a Vercel preview environment (`vercel`).
    *   **Goal:** Conduct a final end-to-end test on live Vercel infrastructure.
3.  **Final Step:** Deploy to production with `vercel --prod`.

## Git and Repository Strategy

This migration will follow a "clean repository" approach to ensure a completely fresh start, free from any legacy configuration issues.

1.  **New Directory:** The entire migration will take place in a **new, separate directory** named `dc20-clean`, located alongside the original `dc20` project. This isolates the work and keeps the original project safe as a backup.
2.  **New GitHub Repository:** Upon successful migration and testing, the `dc20-clean` project will be pushed to a **new GitHub repository**.
    *   **Action:** You will need to create a new, empty repository on GitHub.
    *   **Reasoning:** This provides the cleanest possible history and avoids complex, risky `git push --force` operations on the existing repository. The old repository can be archived for historical purposes.
3.  **Vercel Re-linking:** The existing Vercel project will need to be updated to point to the new GitHub repository.

This strategy is the safest and most effective way to achieve the "clean install" objective.

## Rollback Plan

If migration fails:
1. Keep original project intact
2. Use git to revert changes
3. Switch back to original Vercel deployment
4. Analyze what went wrong and retry specific phases

## File-by-File Migration Map

### Critical Files (Copy First)
1. `prisma/schema.prisma` → Database schema
2. `src/lib/rulesdata/` → Game logic
3. `src/routes/api/` → API endpoints
4. `src/lib/stores/` → Application state

### UI Files (Copy Second)
1. `src/lib/components/` → Reusable components
2. `src/routes/character-creator/` → Main application pages
3. `src/app.css` → Global styles
4. `tailwind.config.js` → Styling configuration

### Configuration Files (Copy Last)
1. `svelte.config.js` → Framework configuration
2. `vite.config.js` → Build configuration
3. `tsconfig.json` → TypeScript configuration
4. `postcss.config.js` → CSS processing

## Expected Timeline

- **Total Time**: 4-5 hours
- **Critical Path**: Database → API → UI → Testing
- **Parallel Tasks**: Can copy files while testing previous phases
- **Buffer Time**: Add 1 hour for unexpected issues

## Success Criteria

✅ **Deployment Success**: Project deploys without errors on Vercel
✅ **Functionality**: All character creator features work
✅ **Database**: All API endpoints connect to database successfully
✅ **UI**: All pages render correctly with proper styling
✅ **Performance**: Build times are reasonable (<5 minutes)

## Post-Migration Tasks

1. **Monitor**: Watch for any runtime errors in production
2. **Optimize**: Review bundle size and performance
3. **Document**: Update project documentation
4. **Cleanup**: Archive or delete old project after verification
5. **Team**: Update team with new repository/deployment URLs

## Notes

- Keep the old project as backup until new one is fully verified
- Test each phase thoroughly before moving to the next
- Document any deviations from this plan
- If any phase fails, troubleshoot before continuing

---

## Revised Migration Strategy with Incremental Testing

This revised strategy incorporates more frequent testing to ensure issues are caught early. This section supersedes the previous "Migration Strategy" and "Migration Checklist" for a more robust, phased approach.

### Phase 1: Baseline Verification
1.  Create the new SvelteKit skeleton project.
2.  Install `@sveltejs/adapter-vercel` and configure `svelte.config.js`.
3.  **Test Point 1:** Deploy this completely empty project to Vercel.
    *   **Goal:** Confirm the fundamental build process and Vercel adapter are working correctly before adding any code.

### Phase 2: Database Layer Verification
1.  Copy the `prisma` directory and `.env` file.
2.  Install Prisma dependencies and run `npx prisma generate`.
3.  Create a temporary `src/routes/api/db-test/+server.ts` endpoint that performs a simple database query.
4.  **Test Point 2:** Run `npm run dev` and hit the `/api/db-test` endpoint.
    *   **Goal:** Isolate and confirm that the application can successfully connect to and query the database.

### Phase 3: API Logic Verification
1.  Copy `src/lib/rulesdata` and `src/lib/stores`.
2.  Copy the entire `src/routes/api/` directory.
3.  **Test Point 3:** Run `npm run dev` and test each of the real API endpoints.
    *   **Goal:** Verify that all backend logic works correctly before introducing the UI.

### Phase 4: UI and Integration Verification
1.  Configure `tailwind.config.js` and copy `app.css`, `app.html`.
2.  Copy `src/lib/components` and `src/routes/test-ui`.
3.  **Test Point 4 (Component Rendering):** Run `npm run dev` and navigate to the `/test-ui` page.
    *   **Goal:** Confirm individual UI components render correctly.
4.  Copy the remaining pages (`character-creator`, etc.).
5.  **Test Point 5 (Full Local Integration):** Run `npm run dev` and perform a full end-to-end test locally.
    *   **Goal:** Ensure UI, API, and database work together.

### Phase 5: Final Production Verification
1.  **Test Point 6 (Local Production Build):** Run `npm run build` and `npm run preview`.
    *   **Goal:** Catch any production-only build issues.
2.  **Test Point 7 (Staging Deployment):** Deploy to a Vercel preview environment (`vercel`).
    *   **Goal:** Conduct a final end-to-end test on live Vercel infrastructure.
3.  **Final Step:** Deploy to production with `vercel --prod`.
