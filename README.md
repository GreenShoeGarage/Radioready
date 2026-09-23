# RADIOREADY v1.0.0

RADIOREADY is a local-first FCC equipment-authorization planning workbench for engineers developing electronic devices. It turns product facts into a traceable authorization strategy, laboratory package, evidence record, and release-readiness decision.

## Run

Open `index.html` in a current browser. No build, server, account, or network connection is required. For local HTTP testing, run `python3 -m http.server 8000` and open `http://localhost:8000`.

## Complete workflow

1. Record the production-intent product and every RF/digital function.
2. Create a multi-obligation authorization matrix.
3. Review each transmitter or certified module and its host-integration conditions.
4. Define and freeze the representative test configuration.
5. Assemble required technical documents, labels, and user statements.
6. Record the RF-exposure path and qualified review.
7. Manage tests, results, margins, reports, evidence, assumptions, and findings.
8. Evaluate product changes against the frozen baseline.
9. Record Certification/TCB and SDoC actions.
10. Run a blocker-based release gate and print the readiness packet.

## Product behavior

- Single self-contained HTML file; no compilation or runtime dependencies
- Offline and local-first with visible autosave state
- Human-readable JSON import/export and automatic v0.1 project migration
- Easy and Advanced modes; dark, light, and high-contrast themes
- Responsive and keyboard-operable interface
- Findings with severity, confidence, and state
- Distinct evidence and assumptions registers
- Frozen configuration baseline and change-impact records
- Printable/PDF release-readiness packet
- No telemetry, tracking, accounts, or silent network requests

## Deployment

Upload `index.html` to any static host. It can be placed directly at `/fieldinstruments/radioready/`. Only `index.html` is required at runtime.

## Data and privacy

Projects are stored in browser local storage under the original project key so earlier RADIOREADY data can migrate in place. Clearing site data can erase the browser copy; export JSON for durable backup.

## Important limitation

RADIOREADY is a planning and recordkeeping instrument, not a compliance measurement system, FCC filing service, equipment authorization, or legal opinion. Confirm the strategy with an FCC-recognized accredited laboratory, Telecommunications Certification Body, or qualified regulatory professional.

## v1.0 boundary

The application intentionally does not calculate regulatory limits or make an automatic legal classification. It records a preliminary strategy, preserves its rationale, and exposes unresolved questions for qualified review.

## Repository structure

```text
index.html                    Self-contained application
README.md                     Project overview and operating instructions
CHANGELOG.md                  Release history
TEST-REPORT.md                Verification record and known limitations
LICENSE                       GNU General Public License v3
CONTRIBUTING.md               Contribution and validation expectations
SECURITY.md                   Vulnerability-reporting and data-safety guidance
GITHUB-PUBLISHING.md          Repository and GitHub Pages setup
REPOSITORY-VALIDATION.md      Package validation summary
SOURCE-CHECKSUMS.txt          SHA-256 manifest for principal source files
scripts/validate.mjs          Dependency-free static validation
.github/                      Issue, pull-request, validation, and Pages automation
```

## Validate

Run the same dependency-free check used by GitHub Actions:

```sh
node scripts/validate.mjs
```

## GitHub Pages

The repository includes a Pages workflow. After pushing to GitHub, choose **GitHub Actions** under **Settings → Pages**. Every push to `main` will publish the repository root.

## Contributing and security

See `CONTRIBUTING.md` before proposing changes. Report security issues using GitHub private vulnerability reporting rather than a public issue. Do not include real customer compliance records, proprietary schematics, credentials, or personal information in issues.

## License

RADIOREADY is free software released under the **GNU General Public License v3.0**. You may use, study, modify, and redistribute it under the terms of GPLv3. Distributed versions and derivatives must preserve the applicable GPLv3 freedoms and source-availability requirements. See `LICENSE`.
