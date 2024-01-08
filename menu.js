class Menu 
{
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
        const container = document.createElement('div');
        container.id = 'menu';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignContent = 'center';
        container.style.backgroundColor = MID_LIGHT_BLUE;
        container.style.padding = '10px';
        container.style.borderBottomLeftRadius = '20px';
        container.style.borderBottomRightRadius = '20px';
        container.style.overflow = 'hidden';
        container.style.boxShadow = SHADOW;

        this.#container = container;
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