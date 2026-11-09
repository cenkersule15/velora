# VELORA 0.1.1 dependency maintenance — 2026-11-09

The original exported starter included outdated and unused dependencies. This release updates the packages actually used by VELORA and removes unused UI scaffolding and development tools. No application audit result is hidden or suppressed.

## Changes

| Component | Previous | Updated |
|---|---|---|
| Next.js compatibility dependency | 16.3.4 | 16.4.5 |
| React / React DOM | 19.2.6 | 19.3.1 |
| React Server DOM Webpack | 19.2.6 | 19.3.1 |
| Vinext | 1.0.0-beta.5 | 1.4.4 |
| Vite | 8.0.13 | 8.3.7 |
| Cloudflare Vite plugin | 1.37.1 | 1.68.0 |
| Wrangler | 4.92.0 | 4.157.0 |
| Zod | 3.25.76 | 4.6.7 |
| Node.js | older versions previously accepted | Node 24 required |

The vulnerable transitive ZIP parser is constrained to the compatible patched `fflate@0.7.5`. The previous vulnerable `sharp@0.35.4` override is removed. Unused generated component files, ESLint/Next lint configuration, UI/chart packages and Drizzle Kit are removed. Schema SQL and the existing database migration command are retained; future schema changes can be authored as new SQL migrations.

## Verification

- Clean npm installation using the committed lockfile.
- `npm audit`: **0 known reported vulnerabilities** at the time of this release; see `dependency-audit.json`.
- TypeScript check and catalog/localisation tests pass.
- Production build passes.
- Local API integration passes: rendered home page, photo response, demo sign-in, anonymous rejection, spoofed-header rejection, input validation, cross-origin rejection, draft/viewing persistence, authenticated read and protected deletion.

Audit results cover dependency advisories known to the registry at that time. They do not constitute a penetration test. macOS itself has not been tested in this authoring Linux environment. The hosted private preview is a separate deployment; this maintenance package updates the standalone local project.

## Update safety

Stop the dev server before applying the update. The updater backs up existing source files and `.wrangler` data, preserves `.env` and `.git`, and does not itself run package installation. Use Node 24 and `npm ci` afterward. No Docker is used.

Primary advisories inspected: https://github.com/advisories/GHSA-vcvr-r3jv-pc5j and https://github.com/advisories/GHSA-rq7h-c2jc-7f22. Exact versions and peer constraints were checked against npm registry metadata.
