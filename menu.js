class Menu 
{
    #div;
    #button1;
    #button2;

    constructor(button1Func, button2Func)
    {
        const div = document.createElement('div');
        div.id = 'menu';
        div.style.display = 'flex';
        div.style.backgroundColor = '#41729F';
        div.style.padding = '10px';

        const button1 = this.createButton('About Me', button1Func);
        const button2 = this.createButton('Professional Experience', button2Func);
        div.appendChild(button1);
        div.appendChild(button2);

        this.#div = div;
        this.#button1 = button1;
        this.#button2 = button2;
    }

    createButton(text, clickHandler)
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