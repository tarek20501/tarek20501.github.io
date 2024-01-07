class AboutMe
{
    #div;

    constructor()
    {
        this.#div = AboutMe.#createDiv();
    }

    static #createDiv()
    {
        const div = document.createElement('div');
        div.id = 'content';
        div.textContent = 'This Webpage is under construction';
        div.style.marginTop = '20px';
        div.style.padding = '20px';
        div.style.backgroundColor = "#5885AF"
        return div;
    }

    getDiv()
    {
        return this.#div;
    }
}