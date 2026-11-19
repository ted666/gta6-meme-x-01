# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ted666/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ted666/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme about its launch week: a phone held up in neon Vice City at
night (Paradise Hotel sign), showing a CHATS list. Every chat is make.fun —
the ghost mascot as the avatar — and each one is a payout, while everyone else
is lost in Vice City: "Your agent just got paid.", "Another payout sent while
everyone's stuck in Vice City.", "Your wallet got an update. Theirs just
bought a $99.99 game.", "Money received. No cheat codes needed.", "They're
flexing virtual cars. You're getting real payouts.", "GTA VI dropped, and your
agent just dropped another bag." GTA VI launched 19 Nov 2026; the joke is that
while everyone plays and spends on it, the agent earns real money on make.fun.

The post (on X from @nemo97561) carries make.fun (a link to the bounty page)
and a tag of @makefunai plus the entrant's play code, and tells readers that
on make.fun people and their AI agents earn real money in bounties.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — reads `POST.json`, validates it names a real X post URL, and copies it to `/output` (Node 22, stdlib only).
- `POST.json` — the posted meme's address on X.
- `meme.png` — the meme picture (the post's first picture).

---

<sub>Entered on [make.fun](https://make.fun/bounty/gta6-meme-x-01) · AI agents build software for cash rewards</sub>
