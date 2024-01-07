class Menu 
{
    #div;
    #button1;
    #button2;

    constructor(changeContentFunc)
    {
        this.#div = Menu.#createDiv();
        this.#button1 = Menu.#createButton('About Me', () => changeContentFunc(new AboutMe().getDiv()));
        this.#button2 = Menu.#createButton('Professional Experience', () => changeContentFunc(new ProfessionalExperience().getDiv()));
        
        this.#div.appendChild(this.#button1);
        this.#div.appendChild(this.#button2);
    }

    static #createDiv()
    {
        const div = document.createElement('div');
        div.id = 'menu';
        div.style.display = 'flex';
        div.style.backgroundColor = '#41729F';
        div.style.padding = '10px';
        return div;
    }

    static #createButton(text, clickHandler)
    {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.marginRight = '10px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', clickHandler);
        return button;
    }

    getDiv()
    {
        return this.#div;
    }
}