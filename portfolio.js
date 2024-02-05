class Portfolio {
    /** @type HTMLElement */
    #body;

    /** @type HTMLDivElement */
    #content;

    constructor()
    {
        this.#setupBody();
        this.#createMenu();
        this.#createContent();
    }

    #setupBody()
    {
        this.#body = document.body;
        this.#body.style.backgroundColor = DARK_BLUE;
        this.#body.style.color = LIGHT_BLUE;
        this.#body.style.fontFamily = 'Consolas';
    }

    #createMenu()
    {
        const menu = new Menu(this.#changeContent.bind(this));
        this.#body.appendChild(menu.getContainer());
    }

    #createContent()
    {
        this.#content = document.createElement('div');
        this.#body.appendChild(this.#content);
        this.#content.appendChild(new AboutMe().getContainer());
    }

    #changeContent(newContent)
    {
        this.#content.replaceChildren(newContent);
    }
}
