const form = document.getElementById("search-form") as HTMLFormElement;
const formTxtbox = document.getElementById("search-box") as HTMLInputElement;

addEventListener("focus", (_) => {
    formTxtbox.focus();
});

form.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = new FormData(form);
    const inputText: string = data.get("query") as string;
    const searchType: string = data.get("searches") as string;
    console.log(data);
    let url: string = "";
    if (inputText == "") {
        formTxtbox.focus();
        return;
    };
    if (URL.canParse(inputText)) url = inputText;
    else {
        if (inputText.includes('.')) {
            url = `https://${inputText}`
        } else {
            const searchEncoded = encodeURI(inputText);
            switch (searchType) {
                case "default":
                    url = `https://www.startpage.com/sp/search?query=${searchEncoded}`;
                    break;
                case "reddit":
                    url = `https://www.startpage.com/sp/search?query=${searchEncoded}%20site:reddit.com`
                    break;
                case "google":
                    url = `https://www.google.com/search?q=${searchEncoded}%20-ai&udm=14`
                    break;
                case "booru":
                    url = `https://gelbooru.com/index.php?page=post&s=list&tags=${searchEncoded}`
                    break;
                case "safebooru":
                    url = `https://safebooru.org/index.php?page=post&s=list&tags=${searchEncoded}`
                    break;
                case "youtube":
                    url = `https://www.youtube.com/results?search_query=${searchEncoded}`
                    break;
                case "torrent":
                    url = `https://1337x.to/search/${searchEncoded}/1/`
                    break;
                default:
                    break;
            }
        }
    }
    window.open(url, "_blank")?.focus();
    formTxtbox.value = "";
}
