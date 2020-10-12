import { carouselConfiguration } from "./carouselConfiguration.js";
import { slides } from "./slides.js";

const carousel = document.querySelector("#carousel");
const carouselPrev = carousel.querySelector("#carousel-prev");
const carouselNext = carousel.querySelector("#carousel-next");
const carouselDots = carousel.querySelector("#carousel-dots");

slides.forEach((slide) => {
    // const html = `
    //     <div class="carousel-slide">
    //         <h1>${slide.title}</h1>
    //         <p>${slide.text}</p>
    //         <img src="${slide.background}" alt="${slide.title}" />
    //     </div>
    // `;

    // carousel.innerHTML += html;

    const carouselSlide = document.createElement("div");
    carouselSlide.id = slide.id;
    carouselSlide.classList.add("carousel-slide");

    const textContainer = document.createElement("div");
    textContainer.classList.add("carousel-slide-text");

    const carouselTitle = document.createElement("h1");
    carouselTitle.innerText = slide.title;

    const carouselText = document.createElement("p");
    carouselText.innerText = slide.text;

    const carouselBackground = document.createElement("img");
    carouselBackground.src = slide.background;
    carouselBackground.alt = slide.title;

    const carouselDot = document.createElement("button");
    carouselDot.classList.add("carousel-dot");
    carouselDot.addEventListener("click", () => goToSlide(carouselSlide));

    carouselDots.append(carouselDot);
    textContainer.append(carouselTitle, carouselText);
    carouselSlide.append(textContainer, carouselBackground);
    carousel.append(carouselSlide);
});

carouselPrev.addEventListener("click", () =>
    handleArrowNavigation(carousel.scrollLeft - carousel.clientWidth)
);

carouselNext.addEventListener("click", () =>
    handleArrowNavigation(carousel.scrollLeft + carousel.clientWidth)
);

function goToSlide(slide) {
    //   slide.scrollIntoView();
    carousel.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
    });
}

function handleArrowNavigation(direction) {
    carousel.scrollTo({
        left: direction,
        behavior: "smooth",
    });
}

// configuración de intersection observer

const intersectionObserver = new IntersectionObserver(function(entries) {
    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    if (entries[0].intersectionRatio <= 0) return;
  
    loadItems(10);
    console.log('Loaded new items');
  });
  // start observing
  intersectionObserver.observe(document.querySelector('.scrollerFooter'));