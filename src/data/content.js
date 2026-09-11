// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE — you shouldn't need to touch any other file.
// ─────────────────────────────────────────────────────────────

export const name = "AY";
export const signoff = "soft chaos";
export const letterFrom = "Debby";   

 export const messages = [
  { from: "Juleehorse", text: `Hi, kekere mi, it’s your day! 🥹❤️

I’m so glad I get to celebrate you today, and honestly, I’m grateful that life gave me the chance to know you. Knowing you has come with so much fun, laughter, random experiences, crazy moments and memories that I never even knew I needed. 😂 From the silly moments to the serious ones, and especially the ones where you behave like an “evil spirit” 😂, you’ve brought a different kind of energy into my life, and I genuinely wouldn’t trade that for anything.

I pray and hope you never lose that part of yourself. Keep being the fun, goofy, loud, crazy and sometimes questionable person that you are. 😂 Keep bringing your own kind of light and energy everywhere you go because Omo mehn 😂, the friend group genuinely wouldn’t be the same without you.

As you step into this new age, I pray that life is kind to you. May this year bring you more happiness, more beautiful experiences, genuine people, answered prayers and opportunities that take you to places you’ve always wanted to be. May lines continue to fall in pleasant places for you, and may you always have reasons to smile, laugh and be grateful.

And don’t worry, we are getting richer soon 😂, so we’ll finally be able to have all the fun adventures we’ve planned and create even more memories together. There’s still a lot of craziness ahead of us, and I’m looking forward to all of it. 😂❤️

That Jollof rice and fried rice with fish, meat, egg, turkey , Chicken, roundabout, saki, Edo, fuku, ogunfe you asked for, we will fulfill it soon you just wait abit😂🤗🌚

Kekere mi! 🥳❤️ I hope your day is as amazing, fun and crazy as you are. You deserve all the good things this new chapter has to offer, and I genuinely pray that this year turns out to be one of your best yet.

Enjoy your day, My Ruminant Animal . ❤️🥳

Juleehorse.` },
  { from: "oluwasewa", text: `Happy birthday to an amazing friend and an even more amazing person🤭🎊🎉

You were the first friend I met when I came to OAU, and I honestly feel so lucky that you were the person I got to start this journey with.

From the very beginning, you’ve been kind, supportive, and genuinely amazing. You’ve made so many moments brighter just by being yourself, and I’m really grateful for all the memories, laughter, conversations, and beautiful moments we’ve shared.

On your special day, I pray that this new chapter brings you success, peace of mind and everything beautiful you deserve. May God continue to guide and protect you, and may all your heart desires come to pass.

I pray God grant you more sense in this new year 🥰

I love yah so much, enjoy your day💗🌸` },

];

// ── PHOTOS ──
// Drop her photos into  public/photos/  and list them here.
// caption shows under each polaroid. Keep captions short.
export const memories = [
  { src: "/photos/main-ayo3.jpg", caption: "This smile >>>" },
  { src: "/photos/main-ayo1.png", caption: "One of my favourites of you." },
  { src: "/photos/Ayomi4.jpg", caption: "You don't even know how beautiful you are here." },
  { src: "/photos/main-all1.png", caption: "A moment worth keeping." },
];

// ── OPTIONAL MUSIC ──
// Drop an mp3 into public/music/ and put its filename here, or set to null.
export const musicSrc = "/music/song.mp3"; // e.g. "/music/song.mp3" or null

// ── THE LETTER ──
export const letter = [
  `I still think about the day we met — standing outside the lecture hall, waiting for class, somehow talking like we'd known each other for years. No awkwardness, no trying. It just worked.`,
  `Then NACOS congress happened, we exchanged contacts, and you never really left after that. You just… slipped into my life. And I'm so glad you did.`,
  `Being around you is laughter, endless gist, learning, and prayers. You have this way of making someone forget their worries just by being there. You're beautiful, you're intelligent, you're courageous — and there has genuinely never been one awkward moment between us.`,
  `So today isn't just about your birthday. It's about you — the person who makes ordinary days feel lighter.`,
];

// ── THE PRAYER ── (each line reveals as she scrolls)
export const prayer = [
  `I pray this new year comes with more blessings, more flavour, and all-round goodness.`,
  `As you clock 17, may the Lord be with you. He has kept you to see this age — and from here, it only goes higher, into more blessings.`,
  `May He protect you, guide you, and never leave your side.`,
  `May your parents never have cause to cry over you.`,
  `You — the first-born of your family — may you continue to come first in everything you put your hand to.`,
  `And may everything your hand touches multiply.`,
];

// ── THE FINAL SURPRISE ── (your inside joke)
export const finalSurprise = `hello vero nah abigail the gal wey you choose has your best friend through thick and thin`;

// ── THE MONTAGE GALLERY ── (the "one more thing" slideshow, 4 photos at a time)
// Drop g1.jpg … g20.jpg into public/photos/  (or fewer — just delete extra lines).
// Order is shuffled randomly each time she opens it.
export const gallery = Array.from({ length: 20 }, (_, i) => `/photos/g${i + 1}.jpg`);