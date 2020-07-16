/* TODO fix the storage and add exp. data https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username */
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
	cookieContainer.classList.remove("active");
	localStorage.setItem("AutremisCookieBannerDisplayed", "true");
});

setTimeout(() => {
	if (!localStorage.getItem("AutremisCookieBannerDisplayed")) {
		cookieContainer.classList.add("active");
		}
}, 2000);
