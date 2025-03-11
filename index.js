const faqHeaders = document.querySelectorAll(".card__faq-header");
const firstAnswer = document.querySelector(".card__answer");
faqHeaders.forEach((faqHeader) => {
  faqHeader.addEventListener("click", () => {
    const answer = faqHeader.nextElementSibling;
    const icon = faqHeader.querySelector("img");

    answer.classList.toggle("active");
    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
      answer.style.maxHeight = "0px";
      answer.style.opacity = "0";
      icon.src = "assets/images/icon-plus.svg";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = "1";
      icon.src = "assets/images/icon-minus.svg";
    }
  });
});
