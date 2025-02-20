function home() {
    const content = document.querySelector("#content");

    const welcome = document.createElement("div");
    welcome.id = "welcome";
    welcome.innerHTML = `
        <p>welcome to</p>
        <h1>Matt's Cafe</h1>`;
    content.appendChild(welcome);

    const info = document.createElement("div");
    info.id = "info"
    info.innerHTML = `
        <p>Welcome to the ONLY cafe open late night, so you and your friends can satisfy those cravings at ANY time!<p>
        <p>We are open from 12pm - 3am, perfect for those: </p>
        <ul>
            <li>Late night cram sessions</li>
            <li>Midnight snack cravings</li>
            <li>or, stop by before your graveyard shift!</li>
        </ul>`;
    content.appendChild(info);

    const footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = `Serving Surrey's community since 2015`;
    content.appendChild(footer);
}

export { home }
