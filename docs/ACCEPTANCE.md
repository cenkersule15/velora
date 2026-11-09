# VELORA acceptance record

## Verified

- TypeScript compilation (`tsc --noEmit`).
- Production Worker build via supported Sites build helper.
- Catalog/filter and complete translation-key checks (`node tests/catalog.mjs`).
- Browser: Turkish home page, English language switch, text-to-filter query `automatic BMW under 3 million`, matching BMW result.
- Browser: favourite creation, appearance in the garage, two-car comparison with specification rows.
- Browser: vehicle detail and selecting the repainted rear-right body panel.
- Browser: German language switch, garage and authenticated-action gate in anonymous local preview.
- Local D1 schema migration executes successfully.

## Not verified end-to-end

The original hosted preview was tested anonymously. The standalone local API flow is now tested separately as recorded below; hosted authenticated browser interactions remain unverified.

Responsive breakpoints are implemented for desktop/tablet/mobile; browser visual review was at desktop size. Dedicated mobile-device testing remains outstanding.

## Functional boundaries

Six sample catalog records; one illustrative photograph per record. No false gallery controls. Maximum three-car comparison. Favourites are device-local. Text search is deterministic filter parsing, not an AI model. User-owned drafts and demo requests use authenticated hosting headers with server-side ownership filters. No public listing publication, actual seller messages, moderation, uploads, notifications or payment processing.


## Standalone VS Code export validation

- Portable production build and TypeScript check passed.
- Local D1 migration command passed.
- Local demo sign-in and API integration passed using `node tests/run-local-api.mjs`.
- Verified anonymous requests and spoofed identity headers return 401, malformed fields/JSON return 400, cross-origin writes return 403, authenticated drafts/viewing requests return 201, saved records can be read, and protected deletion/cleanup works.
- This local emulator supplies one identity. Hosted multi-user isolation and real seller communication have not been tested by this local suite.
- macOS execution itself was not tested; packaging includes a portable npm lockfile and no platform-specific dependencies or runtime data.


## 0.1.1 dependency maintenance

Re-ran clean installation, audit, TypeScript, catalogue/localisation, database setup, production build and local API integration with the updated dependency lockfile. See SECURITY_UPDATE.md for exact scope.
