class ProfessionalExperience
{
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
        const container = document.createElement('div');
        container.id = 'content';
        this.#container = container;
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