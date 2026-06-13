# The Seno Purity Test

A personalized Rice Purity Test-style static website for everyone in Seno lore.

## Live site

https://pranjalbhatia710.github.io/seno-purity-test/

## Run locally

```bash
cd /home/pranjalbhatia/seno-purity
python3 -m http.server 4173
```

Open: http://127.0.0.1:4173

## Current format

- 67-question Rice Purity-style continuous checklist
- Score starts at 100 and drops as boxes are checked
- Category breaks for texting, chocolate milk, climbing, Hilly, room 860, hackathons, etc.
- Goofy per-question hover/check captions
- Actual Seno photos from the shared album in the header shrine and background collage
- Copy result, reset, and random friend-fill buttons

## Secret note

Do not commit or paste API keys. If image generation is needed, configure a rotated key locally via environment variables outside chat/tool logs.
