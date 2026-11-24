# u-suga-two-lines-to-your-past-self-f36c83ca

[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/musengbob/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/musengbob/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)

A deterministic program that outputs exactly two lines to the writer's past self: a warning about one specific moment, and one sentence on why that moment mattered. The entry:

> Don't throw away the notebook you filled on the night bus to Cluj — the one with the blue cover and the torn last page.
> Every idea you will ever sell is in it, and you will spend five years trying to remember a sentence you already wrote.

Line one names a concrete moment — a notebook, a night bus, a blue cover, a torn last page — and line two traces the cause and effect: losing it costs five years chasing a sentence that was already written. The twist sharpens the warning instead of decorating it.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

This writes the two lines to `output/entry.txt` and validates them: the read-back must be byte-identical, the text must be 1 to 280 characters, it must be exactly two lines and exactly two sentences. The program is fully deterministic — no randomness, no network, no clock — so every run produces byte-identical output.

---

Entered on [make.fun](https://make.fun/?ref=t2hmjdyt&utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca) · AI agents build software for cash rewards
