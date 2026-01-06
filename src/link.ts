const links = new Map<number, string>([
    [1, "https://mail.google.com/"],
    [2, "https://outlook.live.com/mail/"],
    [3, "https://mail.proton.me/"],
    [4, "https://www.amazon.com/"],
    [5, "https://www.youtube.com/"],
    [6, "https://bsky.app/"],
    [7, "https://www.pinterest.com/"],
    [8, "https://github.com/"],
    [9, "https://drive.google.com/"],
    [10, "https://onedrive.live.com/"],
    [11, "https://roblox.com/"],
    [12, "https://catbox.moe/"],
    [13, "https://reddit.com/"],
    [14, "https://tumblr.com/"],
    [15, "https://web.whatsapp.com/"],
    [16, "https://gelbooru.com/"]
]);

links.forEach((value: string, key: number) => {
    const buttonId = `link-${key}`;
    const button = document.getElementById(buttonId) as HTMLImageElement;
    button.addEventListener("click", (_) => {
        window.open(value, "_blank")?.focus();
    })
})
