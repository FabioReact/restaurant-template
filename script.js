// Objectif du weekend

// Une fois votre vignette créer en html, faire en sorte de créer une autre vignette mais en la générant via le javascript

// customElements.define('word-count', WordCount, { extends: 'p' });

// Create a class for the element
class FoodCard extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		console.log(this.getAttribute("name"));

		// Create a shadow root
		const shadow = this.attachShadow({ mode: "open" });

		const linkElem = document.createElement("link");
		linkElem.setAttribute("rel", "stylesheet");
		linkElem.setAttribute(
			"href",
			"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
		);

		const wrapper = document.createElement("article");
		wrapper.setAttribute(
			"class",
			"m-4 w-64 overflow-hidden rounded-lg shadow-lg"
		);

		const img = document.createElement("img");
		img.src =
			"assets/img/foodiesfeed.com_breakfast-sandwich-with-hummus-spread-and-fresh-vegetables.jpg";
		img.style.height = "200px";

		const p = document.createElement("p");
		p.textContent = this.getAttribute("name");
		p.className = "text-red-500";

		wrapper.appendChild(linkElem);
		wrapper.appendChild(img);
		wrapper.appendChild(p);

		// Attach the created elements to the shadow dom
		shadow.appendChild(wrapper);
	}

	static get observedAttributes() {
		return ["name"];
	}

	attributeChangedCallback(name, oldValue, newValue) {}
}

// Define the new element
customElements.define("popup-info", FoodCard);
