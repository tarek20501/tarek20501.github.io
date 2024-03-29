class AboutMe
{
    /** @type HTMLDivElement */
    #container;

    constructor()
    {
        this.#createContainer();
        this.#createProfileImage();
        this.#createText();
    }

    #createContainer()
    {
        this.#container = document.createElement('div');
        this.#container.id = 'content';
        this.#container.style.marginTop = '20px';
        this.#container.style.padding = '20px';
        this.#container.style.backgroundColor = MID_DARK_BLUE;
        this.#container.style.justifyContent = 'center';
        this.#container.style.display = 'grid';
        this.#container.style.borderRadius = '10px';
        this.#container.style.boxShadow = SHADOW;
    }

    #createProfileImage()
    {
        const imageContainer = document.createElement('div');

        const image = document.createElement('img');
        image.src = 'assets/profile.jpg';
        image.width = 300;
        image.style.display = 'block';
        image.style.margin = '0 auto';
        image.style.borderRadius = '50%';
        image.style.overflow = 'hidden';
        image.style.boxShadow = SHADOW;

        imageContainer.appendChild(image);
        this.#container.appendChild(imageContainer);
    }

    #createText()
    {
        const textContainer = document.createElement('div');
        textContainer.style.textAlign = "center";

        const name  = document.createElement('h1');
        name.textContent = "Tarek Al Ayoubi, BASc";
        textContainer.appendChild(name);

        const title = document.createElement('h2');
        title.textContent = "Software Engineer"
        textContainer.appendChild(title);

        const location = document.createElement('h3');
        location.textContent = "Vancouver, B.C. Canada"
        textContainer.appendChild(location);

        this.#container.appendChild(textContainer);
    }

    getContainer()
    {
        return this.#container;
    }
}
