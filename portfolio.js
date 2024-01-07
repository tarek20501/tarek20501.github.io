// Baby Blue
// #C3E0E5
// Midnight Blue
// #41729F
// Blue Gray
// #5885AF
// Dark Blue
// #274472

class Portfolio {
    #body;
    #menu;
    #content;

    constructor() {
        this.#body = document.body;
        this.#body.style.backgroundColor = '#274472';
        this.#body.style.color = '#C3E0E5';
        this.#body.style.fontFamily = 'Consolas';

        this.#menu = new Menu(this.changeContent.bind(this));
        this.#body.appendChild(this.#menu.getDiv());

        this.#content = document.createElement('div');
        this.#body.appendChild(this.#content);
        this.#content.appendChild(new AboutMe().getDiv());
    }

    changeContent(newContent)
    {
        this.#content.replaceChildren(newContent);
    }
}
