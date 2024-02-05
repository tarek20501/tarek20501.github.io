class ProfessionalExperience
{
    /** @type HTMLDivElement */
    #container;

    constructor()
    {    
        this.#createContainer();
        this.#createExperience("Solidigm");
        this.#createExperience("Intel");
        this.#createExperience("Avigilon");
    }

    #createContainer()
    {
        this.#container = document.createElement('div');
        this.#container.id = 'content';
    }

    #createExperience(text)
    {
        const experience = document.createElement('div');
        experience.id = 'content';
        experience.textContent = text;
        experience.style.marginTop = '20px';
        experience.style.padding = '20px';
        experience.style.backgroundColor = "#5885AF";

        this.#container.appendChild(experience);
    }

    getContainer()
    {
        return this.#container;
    }
}