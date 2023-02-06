const questions = document.querySelectorAll(".faqs");

questions.forEach((question) => {
     question.addEventListener("click", () => {
       question.classList.toggle("show-text");
     });
});