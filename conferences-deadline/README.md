# Conference Deadline Dashboard - CONTRIBUTING Guide

## Overview

This repository powers a **Conference Deadline Dashboard** that visualizes submission and notification deadlines for conferences across multiple fields (CS, EEE, ECE, ME, CE). The core data file is `conferences.js`, which you can edit directly. The dashboard auto-loads this file on refresh—no build step needed.

**Key Data Structure** (from `conferences.js`):

- **Majors**: Top-level fields (e.g., `CS`, `EEE`)
- **Domains**: Sub-areas within majors (e.g., `AI/ML`, `Security`)
- **Conferences**: Individual entries with `abbr`, `full`, `domain`, `year`, `if`, `tier`, `sub_dl`, `notif_dl`, `url`


## Adding New Content

Follow these steps to contribute updates. All changes go into `conferences.js`.

### 1. Add a New Major (e.g., Biomedical Engineering)

- Copy an existing major block (e.g., `CE` block).
- Paste before the closing `}` of `DASHBOARDDATA`.
- Edit:

```js
BME: {
  label: 'Biomedical Engineering',
  icon: '🧬',  // Optional emoji
  domains: {
    // Add domains (step 2)
  },
  conferences: []  // Add conferences (step 3)
}
```


### 2. Add a New Domain (e.g., "Quantum Computing")

- Inside a major's `domains` object, add:

```js
'Quantum Computing': {
  color: 'c084fc',     // Hex from PALETTE REFERENCE
  bg: 'rgba(192,132,252,0.1)',
  border: 'rgba(192,132,252,0.22)'
}
```

- **PALETTE REFERENCE** (at end of `conferences.js`):

```
Teal: 22d3ee | Orange: fb923c | Pink: f472b6 | Green: 4ade80 | etc.
```


### 3. Add/Update a Conference

- Append to a major's `conferences` array:

```js
{
  abbr: 'NeurIPS',              // Short name (table/cards)
  full: 'Conference on Neural Information Processing Systems',  // Full title
  domain: 'AI/ML',              // Must match domain key exactly
  year: 2026,
  if: 18.8,                     // Impact factor (number)
  tier: 'A*',                   // A*, A, B, C
  sub_dl: '2026-05-15',         // YYYY-MM-DD (submission)
  notif_dl: '2026-09-18',       // YYYY-MM-DD (notification)
  url: 'https://neurips.cc/Conferences/2026'  // Official site
}
```

- **Tips**:
    - Use `YYYY-MM-DD` format (e.g., `2026-02-20`).
    - Add notes in comments for predictions (e.g., `// Cycle 2 deadline [web:41]`).
    - Verify domains match exactly (case-sensitive).


## Workflow: Branch create, Commit \& Pull Request

```
git clone https://github.com/supreme-lab/supreme-lab.github.io.git
git checkout -b your-branch-name
open conferences-deadline folder
```

1. **Edit** `conferences.js` locally.
2. **Save** and test locally (dashboard auto-updates).
3. **Commit**:

```
cd conferences-deadline
git add conferences.js
git commit -m "Add Quantum Computing domain + 3 new conferences to CS
- Conferences: QIP 2026, TQC 2026, AQIS 2026
- Verified deadlines from official sites"
```

4. **Push** to your fork/branch:

```
git push origin your-branch-name
```

5. **Create Pull Request**:
    - Go to GitHub repo → "Pull requests" → "New pull request".
    - Title: "Add [Domain/Major/Conferences] for 2026"
    - Description: List changes + sources (e.g., "Updated from neurips.cc, sigir.org").
    - Submit.

## Review Process

- Your PR will be **reviewed** by maintainers for:
    - Data accuracy (deadlines verified?).
    - Format consistency (domains match? Dates YYYY-MM-DD?).
    - No duplicates/broken links.
- Approved PRs are **merged to main** automatically.
- Dashboard updates live within minutes of merge.


## Best Practices

- **Source Verification**: Cite official sites (e.g., `// [web:41] kdd2026.kdd.org`).
- **Predictions**: Note as "predicted based on historical patterns".
- **Multi-Round**: Specify cycle (e.g., "Round 2", "Fall cycle").
- **Keep Clean**: No trailing commas, valid JSON-like syntax.
- **Test**: Refresh dashboard after local edits.


## Example PR Description

```
**Changes:**
- Added "Quantum Computing" domain to CS (purple palette).
- Added 3 conferences: QIP'26, TQC'26, AQIS'26.
- Updated CHI 2026 deadlines from chi2026.acm.org.

**Sources:**
- CHI: https://chi2026.acm.org/papers/ [web:59]
- QIP: https://qipconference.org

Ready for review! 🚀
```

**Questions?** Open an issue or comment on your PR. Thanks for contributing! 🎉
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: paste.txt

