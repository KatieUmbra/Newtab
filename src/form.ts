const form = document.getElementById("search-form") as HTMLFormElement;
const formTxtbox = document.getElementById("search-box") as HTMLInputElement;

addEventListener("focus", (_) => {
    formTxtbox.focus();
});

form.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = new FormData(form);
    const inputText = data.get("query") as string;
    let url = "";
    if (inputText == "") {
        formTxtbox.focus();
        return;
    };
    if (URL.canParse(inputText) || URL.canParse("https://" + inputText)) url = inputText;
    else {
        console.log("URL is invalid!");
        const searchEncoded = encodeURI(inputText);
        url = `https://www.startpage.com/sp/search?query=${searchEncoded}`;
    }
    window.open(url, "_blank")?.focus();
    formTxtbox.value = "";
}
