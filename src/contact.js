function contact() {
    const content = document.querySelector("#content");

    const welcome = document.createElement("div");
    welcome.id = "welcome";
    welcome.innerHTML = `
        <h1>Contact Us</h1>`;
    content.appendChild(welcome);
    
    const info = document.createElement("div");
    info.id = "info"
    info.innerHTML = `
        <p>Have any questions? Comments? Concerns? Want to leave us a kind review? Contact us here:</p>
        <p>Phone: 555-5555</p>
        <p>email: matt@cafe.com</p>
        <p>Or leave a comment on our socials: @mattscafe on X and Instagram</p>
        `;
    content.appendChild(info);
    
    const footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = `Don't forget to leave us a 5star review to help us grow!`;
    content.appendChild(footer);
}

export { contact }