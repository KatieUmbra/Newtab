// https://stackabuse.com/loading-animation-in-vanilla-javascript/

const loader = document.getElementById("loader") as HTMLDivElement;

window.addEventListener("load", () => {
    loader.parentElement?.removeChild(loader);
});