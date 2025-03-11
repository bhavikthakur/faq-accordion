const faqHeaders = document.querySelectorAll(".card__faq-header");

faqHeaders.forEach((faqHeader) => {
  faqHeader.addEventListener("click", () => {
    const answer = faqHeader.nextElementSibling;
    const icon = faqHeader.querySelector("img");

    answer.classList.toggle("active");

    // Toggle between plus and minus icons
    if (answer.classList.contains("active")) {
      icon.src = "assets/images/icon-minus.svg";
      icon.alt = "A minus icon to collapse the answer";
    } else {
      icon.src = "assets/images/icon-plus.svg";
      icon.alt = "A plus icon to expand the answer";
    }
  });
});
