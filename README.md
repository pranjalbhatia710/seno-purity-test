# The Seno Purity Test

A personalized rice-purity-style static website for Seno.

## Run locally

```bash
cd /home/pranjalbhatia/seno-purity
python3 -m http.server 4173
```

Open: http://127.0.0.1:4173

## Photos

The live site now includes downloaded images from the shared Google Photos album:

- `assets/seno-1.jpg` through `assets/seno-3.jpg` feed the floating hero cards.
- `assets/seno-gallery-1.jpg` through `assets/seno-gallery-9.jpg` feed the evidence-wall collage.

## Notes

- No API keys are needed for the current build.
- Do not commit API keys. Configure model/image providers locally through environment variables.
- This is pure HTML/CSS/JS, so it can be deployed to GitHub Pages, Netlify, Vercel, or any static host.
