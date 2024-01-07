class ProfessionalExperience
{
    #div;

    constructor()
    {    
        this.#div = ProfessionalExperience.#createDiv();
        this.#div.appendChild(ProfessionalExperience.#createExperience("Solidigm"));
        this.#div.appendChild(ProfessionalExperience.#createExperience("Intel"));
        this.#div.appendChild(ProfessionalExperience.#createExperience("Avigilon"));
    }

    static #createDiv()
    {
        const div = document.createElement('div');
        div.id = 'content';
        return div;
    }

    static #createExperience(text)
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