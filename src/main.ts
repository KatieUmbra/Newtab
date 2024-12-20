const motd = [
    "welcome back. <b>angel.</b> ʚɞ",
    "hope you return to. <b>heaven</b> 𓂋",
    "may your soul be. <b>safe</b> 🕊",
    "<b>cherry rosemary</b> and <b>thyme</b> ☘",
    "I love. <b>you</b> and <b>you</b> and <b>you</b> ♡",
    "I'm. <b>watching</b> over. <b>you</b> 𓁹",
    "<b>hush</b> little angel ♱"
];

const random = ~~(Math.random() * motd.length);

const decoText = document.getElementById("deco-text") as HTMLParagraphElement;

decoText.innerHTML = motd[random];
