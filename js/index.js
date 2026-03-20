const backToTopElement = document.getElementById("back-to-top-button");

const handleBackToTop = () => {
  window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  backToTopElement.style.visibility = 'hidden';
};

backToTopElement.addEventListener("click", handleBackToTop);

const elementToObserve = document.querySelector('#tecnologias')

const options = {
  root: null,
  threshold: 0
};

const handleBackToTopVisibility = entries => {
  entries.forEach(entry => {

    if (entry.boundingClientRect.top < 0) {
      backToTopElement.style.visibility = 'visible';
      return
    }
    backToTopElement.style.visibility = 'hidden';

  })
}

const observer = new IntersectionObserver(handleBackToTopVisibility, options);

observer.observe(elementToObserve);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const title_names = [
  "Dhiogo Frutuoso",
  "Programador",
  "Full-Stack Developer",
  "Penta Medalhista Olímpico de Matemática",
  "Estudante de Ciência da Computação",
  "Admirador da Tecnologia",
];

const title_text = document.querySelector(
  "#banner .banner-content .banner-content-title .text",
);

const cursor = document.querySelector(
  "#banner .banner-content .banner-content-title .cursor",
);

let indexName = 0;
let caracters = 0;
let isDeleting = false;

async function typeWriter() {
  while (indexName <= title_names.length) {
    const currentName = title_names[indexName];
    while (true) {
      if (isDeleting) {
        title_text.innerHTML = currentName.substring(0, caracters - 1);
        caracters--;
      } else {
        title_text.innerHTML = currentName.substring(0, caracters + 1);
        caracters++;
      }

      await wait(100);

      if (!isDeleting && caracters === currentName.length) {
        await wait(300);
        isDeleting = true;
        indexName++;
      } else if (isDeleting && caracters === 0) {
        await wait(300);
        isDeleting = false;
        break;
      }
    }

    if (indexName === title_names.length) {
      indexName = 0;
    }
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

document.addEventListener("DOMContentLoaded", function (event) {
  let slider = tns({
    container: ".my-slider",
    items: 4,
    loop: true,
    rewind: false,
    swipeAngle: false,
    prevButton: "#customPrev",
    nextButton: "#customNext",
    responsive: {
      350: {
        items: 1,
      },
      500: {
        items: 3,
      },
    },
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});
