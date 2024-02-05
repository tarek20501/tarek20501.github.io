class Menu 
{
    /** @type HTMLDivElement */
    #container;

    constructor(changeContentFunc)
    {
        this.#createContainer();

        this.#createButton('About Me', 
            () => changeContentFunc(new AboutMe().getContainer()));
        this.#createButton('Professional Experience', 
            () => changeContentFunc(new ProfessionalExperience().getContainer()));
    }

    #createContainer()
    {
        this.#container = document.createElement('div');
        this.#container.id = 'menu';
        this.#container.style.display = 'flex';
        this.#container.style.justifyContent = 'center';
        this.#container.style.alignContent = 'center';
        this.#container.style.backgroundColor = MID_LIGHT_BLUE;
        this.#container.style.padding = '10px';
        this.#container.style.borderBottomLeftRadius = '20px';
        this.#container.style.borderBottomRightRadius = '20px';
        this.#container.style.overflow = 'hidden';
        this.#container.style.boxShadow = SHADOW;
    }

    #createButton(text, clickHandler)
    {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.marginRight = '10px';
        button.style.padding = '10px';
        button.style.fontFamily = 'Consolas';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = LIGHT_BLUE;
        button.style.color = DARK_BLUE;
        button.style.boxShadow = SHADOW;
        button.style.border = 'none';
        button.style.borderRadius = '10px';
        button.addEventListener('click', clickHandler);

        this.#container.appendChild(button);
    }

    getContainer()
    {
        return this.#container;
    }
}