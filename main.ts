import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 220 characters max: a ridiculous invention that fixes a
// tiny everyday annoyance. The joke is a fridge that fights midnight
// snacking by telling on you — it texts your mother every time you open
// it after midnight, then locks itself until she replies. The twist
// lands on the last words ("let them eat"): the fridge needs a parent's
// permission slip before it lets you eat — the machine enforces the rule
// by telling on you, not by beeping. The file holds exactly this
// line: no trailing newline, so the gate counts the line alone.
const LINE =
  "A fridge that texts your mother every time you open it after midnight, then locks itself until she replies 'let them eat'.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
