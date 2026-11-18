---
description: Implement a task (from a pasted Jira story or free-form instructions), write unit tests, verify, and open a PR
---

You are given a task as $ARGUMENTS. It will be either:
- a Jira story (title/description/acceptance criteria, pasted as text), or
- free-form implementation instructions typed directly by the user.

Treat $ARGUMENTS as the authoritative spec for what to build. If it contains a Jira key (e.g. `NEX-123`), keep that key handy for the commit message and PR title/body — but never fetch or invent ticket details beyond what was pasted.

Run steps 1-4 in order without stopping to ask permission between them. **Stop after step 4 and wait for the user's explicit go-ahead before doing step 5 or 6** — they want to manually test the change themselves before anything is committed or pushed.

## 1. Plan
Read $ARGUMENTS and restate the concrete, testable requirements in a short internal plan before touching code. If the instructions are too ambiguous to implement safely (e.g. missing a target component/endpoint, contradictory acceptance criteria), stop here and ask the user instead of guessing.

## 2. Implement
Make the code change in this repo (Angular 22 app) following existing conventions — check neighboring components/services for style, module structure, and naming before writing new code. Keep the change scoped to what $ARGUMENTS actually asks for; no unrelated refactors.

## 3. Write unit tests
Add or update unit tests (vitest, under the same convention as existing `*.spec.ts` files) that cover the new/changed behavior — new components/services need new spec files, not just a tweak to an existing passing test. Tests must actually exercise the acceptance criteria from $ARGUMENTS, not just assert trivial truths.

## 4. Run tests and gate
Run:
```
npm test
```
- If tests fail: read the failure output, fix the implementation or the test (whichever is actually wrong), and re-run.
- Retry at most 3 times total. If tests still fail after 3 attempts, **stop immediately** — do not commit, push, or open a PR. Report exactly what's failing and what you tried instead.
- Never proceed to step 5 on a red test run.

## Checkpoint — stop here
Once `npm test` is green, **stop and end your turn.** Do not run any `git` or `gh` command yet. Report to the user:
- what you implemented and which files changed
- that the change is sitting uncommitted in the working tree, ready for them to manually run/click through
- that `npm test` passes, with the count

Then wait. Only continue to step 5 when the user replies with something that clearly means "go ahead" (e.g. "push it", "looks good, ship it", "go ahead") — not a vague acknowledgment. If they instead report a problem, fix it and return to this checkpoint; do not push a fix without a fresh go-ahead.

## 5. Branch, commit, push
Only after tests pass AND the user has given the go-ahead at the checkpoint above:
```
git checkout -b ship/<short-kebab-slug-of-the-task>
git add <only the files you changed>
git commit -m "<concise summary>"
git push -u origin ship/<short-kebab-slug-of-the-task>
```
Never commit to `main` directly. Never use `git add -A`/`git add .` — stage the specific files you touched.

## 6. Open a PR
```
gh pr create --title "<concise title>" --body "<summary>"
```
PR body must include:
- What changed and why (from $ARGUMENTS)
- The Jira key, if one was present in $ARGUMENTS
- A short test-plan checklist (what the new/updated tests cover)
- Note that `npm test` passes locally

Finish by reporting the PR URL back to the user. Do not merge the PR yourself.
