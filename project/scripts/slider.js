const buttons = document.querySelectorAll("#menuButton");
const slider = document.querySelector("#slider");
const growth = 30;

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        const sliderWidth = (button.clientWidth + growth) + "px";
        const sliderLeft = (button.getBoundingClientRect().left + window.pageXOffset - growth / 2) + "px";
        slider.style.position = "relative";
        slider.style.width = sliderWidth;
        slider.style.left = sliderLeft;
    });
});



//bug when resize window to 25%




