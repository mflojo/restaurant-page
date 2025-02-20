function menu() {
    const content = document.querySelector("#content");

    const welcome = document.createElement("div");
    welcome.id = "welcome";
    welcome.innerHTML = `
        <h1>Menu</h1>`;
    content.appendChild(welcome);
    
    const info = document.createElement("div");
    info.id = "info"
    info.innerHTML = `
        <p>Snacks: </p>
        <ul>
            <li>$5  - French Fries (large basket)</li>
            <li>$8  - Poutine</li>
            <li>$7  - Tater Tots (large basket)</li>
            <li>$10 - Tater Tots poutine</li>
            <li>$6  - Blueberry Pie (slice)</li>
            <li>$4  - Salted Pretzel</li>
        </ul>
        <p>Drinks: </p>
        <ul>
            <li>$2  - Soda</li>
            <li>$1  - Bottled Water</li>
            <li>$5  - Bubble Tea</li>
            <li>$5  - Milkshakes</li>
        </ul>`;
    content.appendChild(info);
    
    const footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = `Want to see some new items on the menu? Let us know!`;
    content.appendChild(footer);
}

export { menu }