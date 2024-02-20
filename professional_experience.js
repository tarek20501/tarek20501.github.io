class Placement
{
    /**@type string */
    company;
    /**@type string */
    location;
    /**@type Date */
    startDate;
    /**@type Date */
    endDate;
    /**@type string */
    title;
    /**@type string[] */
    achievements;
}

class ProfessionalExperience
{
    /** @type HTMLDivElement */
    #container;
    /** @type Placement[] */
    #placements;

    constructor()
    {    
        this.#createContainer();
        this.#fetchPlacements();
        this.#createExperience();
    }

    #createContainer()
    {
        this.#container = document.createElement('div');
        this.#container.id = 'content';
    }

    /**
     * 
     * @param {string} string1 
     * @param {string} string2 
     * 
     * @returns {HTMLDivElement}
     */
    #createRowOfTwoStrings(string1, string2)
    {
        const element1 = document.createElement('span');
        element1.textContent = string1;

        const element2 = document.createElement('span');
        element2.textContent = string2;

        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.appendChild(element1);
        row.appendChild(element2);
        return row;
    }

    /**
     * 
     * @param {Date} date 
     * @returns {string}
     */
    static #formatDate(date)
    {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${year}`;
    }

    /**
     * 
     * @param {Placement} placement 
     */
    #createExperience()
    {
        for (let placement of this.#placements)
        {
            const placementElement = document.createElement('div');
            placementElement.style.marginTop = '20px';
            placementElement.style.padding = '20px';
            placementElement.style.backgroundColor = "#5885AF";
            placementElement.style.borderRadius = "10px";

            const companyAndDate = this.#createRowOfTwoStrings(placement.company,
                ProfessionalExperience.#formatDate(placement.startDate) + " - " + ProfessionalExperience.#formatDate(placement.endDate));
            placementElement.appendChild(companyAndDate);

            const titleAndLocation = this.#createRowOfTwoStrings(placement.title, placement.location);
            placementElement.appendChild(titleAndLocation);

            const achievements =  document.createElement('ul');
            for (let achievement of placement.achievements)
            {
                const achievementElement = document.createElement('li');
                achievementElement.textContent = achievement;
                achievements.appendChild(achievementElement);
            }
            placementElement.appendChild(achievements);

            this.#container.appendChild(placementElement);
        }
    }

    #fetchPlacements()
    {
        this.#placements = new Array();
        // TODO: fetch the array from JSON file
        let intel = new Placement();
        intel.company = "Intel of Canada";
        intel.location = "Vancouver BC";
        intel.startDate = new Date(2021, 5);
        intel.endDate = new Date(2021, 12);
        intel.title = "Firmware Engineer Coop";
        intel.achievements = new Array();
        intel.achievements.push("Worked in a scrum team contributing to the development of SSDs' bootloader");
        intel.achievements.push("Evaluated different compilers by comparing compiled assembly to make a data driven decision");
        intel.achievements.push("Developed an API from scratch in C and unit-tested it with 100% coverage to enable cross core communication in the bootloader");
        intel.achievements.push("Wrote and modified Python scripts to automate processes in the build system");
        intel.achievements.push("Assisted my co-workers with CMake to debug the issues they faced in the build system");
        intel.achievements.push("Delivered a technical presentation to my team sharing new workflow to advance project");
        this.#placements.push(intel);

        let avigilon = new Placement();
        avigilon.company = "Avigilon Corporation";
        avigilon.location = "Vancouver BC";
        avigilon.startDate = new Date(2020, 1);
        avigilon.endDate = new Date(2020, 8);
        avigilon.title = "Firmware Developer Coop";
        avigilon.achievements = new Array();
        avigilon.achievements.push("Developed surveillance cameras' firmware in C++ contributing to my team's projects");
        avigilon.achievements.push("Worked in Linux and utilized VSCode and GDB to develop, debug and build firmware");
        avigilon.achievements.push("Modified and wrote Python scripts to reproduce bugs and test my solutions");
        avigilon.achievements.push("Used TortoiseHg to manage branches and submit pull requests to Mercurial repositories");
        avigilon.achievements.push("Participated in scrum meetings, did code reviews, and used Jira to follow the Agile development practices");
        this.#placements.push(avigilon);
    }

    getContainer()
    {
        return this.#container;
    }
}