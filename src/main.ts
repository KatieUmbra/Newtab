const motd = [
    "welcome back. <b>angel.</b> ᨳଓ",
    "hope you return to. <b>heaven</b>",
    "may your soul be. <b>protected</b>",
    "<b>cherry. </b><b>rosemary</b> and <b>thyme</b>"
];

const random = ~~(Math.random() * motd.length);

const decoText = document.getElementById("deco-text") as HTMLParagraphElement;

decoText.innerHTML = motd[random];
