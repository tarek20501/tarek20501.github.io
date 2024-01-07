class ProfessionalExperience
{
    #div;

    constructor()
    {
        const div = document.createElement('div');
        div.id = 'content';
        

        this.#div = div;
        this.#div.appendChild(this.createExperience("Solidigm"));
        this.#div.appendChild(this.createExperience("Intel"));
        this.#div.appendChild(this.createExperience("Avigilon"));
    }

    createExperience(text)
    {
        const div = document.createElement('div');
        div.id = 'content';
        div.textContent = text;
        div.style.marginTop = '20px';
        div.style.padding = '20px';
        div.style.backgroundColor = "#5885AF";
        return div;
    }

    getDiv()
    {
        return this.#div;
    }
}