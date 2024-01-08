class Portfolio {
    #body;
    #content;

    constructor()
    {
        this.#setupBody();
        this.#createMenu();
        this.#createContent();
    }

    #setupBody()
    {
        const body = document.body;
        body.style.backgroundColor = DARK_BLUE;
        body.style.color = LIGHT_BLUE;
        body.style.fontFamily = 'Consolas';
        
        this.#body = body;
    }

    #createMenu()
    {
        const menu = new Menu(this.#changeContent.bind(this));
        this.#body.appendChild(menu.getContainer());
    }

    #createContent()
    {
        const content = document.createElement('div');
        this.#content = content;
        this.#body.appendChild(this.#content);
        this.#content.appendChild(new AboutMe().getContainer());
    }

    #changeContent(newContent)
    {
        this.#content.replaceChildren(newContent);
    }
}
