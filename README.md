# AY's Birthday Gift 🎀

A mobile-first "digital gift box" — envelope → hero → memories → letter + prayer + surprise.

## Make it yours (2 minutes)
1. **Photos** → drop her pictures into `public/photos/`
   named `photo1.jpg`, `photo2.jpg`, … (photo1 is the hero + first polaroid).
2. **Copy** → open `src/data/content.js` and edit. Everything lives there:
   name, letter, prayer, captions, the final surprise line, sign-off.
3. **Music (optional)** → drop an mp3 in `public/music/song.mp3`,
   or set `musicSrc = null` in `content.js` to hide the player.

## Run it
```bash
npm install
npm run dev
```

## Ship it
```bash
npm run build      # then drag the /dist folder to Vercel,
                   # or: vercel  (from this folder)
```

Notes: music is tap-to-play on purpose (phones block autoplay).
Screens use `100dvh` so iOS Safari's address bar won't cut off the first screen.
