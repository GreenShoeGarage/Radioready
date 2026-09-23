# Contributing to RADIOREADY

Thank you for helping improve RADIOREADY. The project favors small, understandable changes that strengthen the end-to-end engineering workflow.

## Before opening a change

1. Search existing issues for related work.
2. Describe the engineering outcome, not only the proposed interface control.
3. Identify any FCC rule, KDB publication, or other primary source supporting regulatory guidance changes.
4. Keep the application local-first, offline-capable, dependency-free, and free of telemetry.

## Development

RADIOREADY is a self-contained browser application. Edit `index.html`, then open it directly in a current browser or serve the repository locally:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## Required checks

- Load from a fresh browser state.
- Exercise every changed control with keyboard and pointer input.
- Confirm autosave survives reload.
- Confirm JSON export/import round-trips the project.
- Test dark, light, and high-contrast themes.
- Test narrow mobile and desktop widths.
- Confirm Print / Save PDF produces the release packet.
- Ensure no external script, stylesheet, telemetry, or network dependency was introduced.
- Update the visible version, changelog, and test report for user-facing releases.

## Pull requests

Keep pull requests focused. Include:

- the problem and intended outcome;
- the affected workflow;
- verification performed;
- screenshots for visible changes when practical;
- any migration or compatibility effect;
- citations to primary sources for regulatory-content changes.

Do not describe RADIOREADY as providing legal advice, performing compliance measurements, or guaranteeing FCC authorization.
