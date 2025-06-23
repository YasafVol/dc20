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

## Migration Strategy

### Phase 1: Fresh Project Setup (30 minutes)

#### 1.1 Create New SvelteKit Project
```bash
# Create new project in parent directory
cd ..
npm create svelte@latest dc20-clean
cd dc20-clean

# Select options:
# - SvelteKit demo app: No
# - Type checking: TypeScript
# - Additional options: ESLint, Prettier, Playwright, Vitest
```

#### 1.2 Install Core Dependencies
```bash
# Install Vercel adapter
npm install @sveltejs/adapter-vercel

# Install Prisma
npm install prisma @prisma/client

# Install UI dependencies
npm install @melt-ui/svelte @melt-ui/pp
npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography

# Initialize Tailwind
npx tailwindcss init -p
```

#### 1.3 Configure for Vercel
Create `vercel.json`:
```json
{
  "framework": "sveltekit"
}
```

Update `svelte.config.js`:
```javascript
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI } from '@melt-ui/pp';

const config = {
  preprocess: [preprocessMeltUI(), vitePreprocess()],
  kit: {
    adapter: adapter()
  }
};

export default config;
```

#### 1.4 Test Initial Deployment
```bash
# Deploy to Vercel
vercel

# Verify deployment works
```

### Phase 2: Database Migration (45 minutes)

#### 2.1 Copy Prisma Configuration
```bash
# Copy from old project
cp ../dc20/prisma/schema.prisma ./prisma/
cp -r ../dc20/prisma/migrations ./prisma/
```

#### 2.2 Update Environment Variables
Copy `.env` and update Vercel environment variables:
- `DATABASE_URL` (your Prisma Accelerate connection string)

#### 2.3 Generate Prisma Client
```bash
npx prisma generate
npx prisma db push  # Verify database connection
```

#### 2.4 Test Database Connection
Create test API route to verify Prisma works:
```typescript
// src/routes/api/test/+server.ts
import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const count = await prisma.characterInProgress.count();
    return json({ success: true, count });
  } catch (error) {
    return json({ success: false, error: error.message }, { status: 500 });
  }
}
```

### Phase 3: Core Logic Migration (1 hour)

#### 3.1 Copy Game Data Files
```bash
# Copy all rules data
cp -r ../dc20/src/lib/rulesdata ./src/lib/

# Copy stores
cp -r ../dc20/src/lib/stores ./src/lib/
```

#### 3.2 Copy and Update API Routes
```bash
# Copy API routes
cp -r ../dc20/src/routes/api ./src/routes/

# Update imports if needed (check for any path issues)
```

#### 3.3 Test API Endpoints
Test each endpoint:
- `/api/character/progress/stageA`
- `/api/character/progress/stageB`
- `/api/character/progress/complete`

### Phase 4: UI Components Migration (1.5 hours)

#### 4.1 Setup Tailwind Configuration
Copy and update `tailwind.config.js`:
```javascript
// Copy from old project and verify paths
```

#### 4.2 Copy UI Components
```bash
# Copy component library
cp -r ../dc20/src/lib/components ./src/lib/

# Copy global styles
cp ../dc20/src/app.css ./src/
cp ../dc20/src/app.html ./src/
```

#### 4.3 Copy Character Creator Pages
```bash
# Copy main pages
cp -r ../dc20/src/routes/character-creator ./src/routes/
cp ../dc20/src/routes/+layout.svelte ./src/routes/
cp ../dc20/src/routes/+page.svelte ./src/routes/
```

#### 4.4 Copy Test UI (Optional)
```bash
cp -r ../dc20/src/routes/test-ui ./src/routes/
```

### Phase 5: Configuration & Styling (30 minutes)

#### 5.1 Copy Configuration Files
```bash
# Copy PostCSS config
cp ../dc20/postcss.config.js ./

# Copy TypeScript config (if different)
cp ../dc20/tsconfig.json ./

# Update package.json scripts if needed
```

#### 5.2 Verify All Imports
Check and fix any import path issues in:
- API routes
- Svelte components
- Store imports
- Type imports

### Phase 6: Testing & Verification (45 minutes)

#### 6.1 Local Development Test
```bash
npm run dev
```

Verify:
- [ ] Home page loads
- [ ] Character creator pages load
- [ ] API endpoints respond correctly
- [ ] Database operations work
- [ ] UI components render properly
- [ ] Styling is correct

#### 6.2 Build Test
```bash
npm run build
npm run preview
```

Verify build works locally.

#### 6.3 Vercel Deployment Test
```bash
vercel --prod
```

Verify:
- [ ] Deployment succeeds
- [ ] All pages load in production
- [ ] API endpoints work in production
- [ ] Database operations work in production

### Phase 7: Final Migration Steps (30 minutes)

#### 7.1 Update Git Repository
```bash
# Initialize new git repo or update existing
git init
git add .
git commit -m "Initial clean migration from dc20"

# If updating existing repo:
# git remote set-url origin <your-repo-url>
# git push --force-with-lease
```

#### 7.2 Update Vercel Project
- Connect new repository to Vercel project
- Verify environment variables are set
- Test final deployment

#### 7.3 DNS/Domain Update (if applicable)
- Update custom domain settings
- Verify SSL certificates

## Migration Checklist

### Pre-Migration
- [ ] Backup current project
- [ ] Document current environment variables
- [ ] Note any custom configurations
- [ ] Test current database connection

### Phase 1: Fresh Setup
- [ ] Create new SvelteKit project
- [ ] Install dependencies
- [ ] Configure Vercel adapter
- [ ] Test initial deployment

### Phase 2: Database
- [ ] Copy Prisma schema
- [ ] Copy migrations
- [ ] Update environment variables
- [ ] Test database connection

### Phase 3: Core Logic
- [ ] Copy rules data
- [ ] Copy stores
- [ ] Copy API routes
- [ ] Test API endpoints

### Phase 4: UI Components
- [ ] Setup Tailwind
- [ ] Copy components
- [ ] Copy pages
- [ ] Test UI rendering

### Phase 5: Configuration
- [ ] Copy config files
- [ ] Fix import paths
- [ ] Update package.json

### Phase 6: Testing
- [ ] Local development test
- [ ] Local build test
- [ ] Production deployment test

### Phase 7: Final Steps
- [ ] Update git repository
- [ ] Update Vercel project
- [ ] Update domain settings

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
