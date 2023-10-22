const bodyHTML = document.body;
const headline = document.body.querySelector("h1");

function ballUni(bgColor, textColor) {
    console.log("ball")
    console.log(bgColor, textColor);
    bodyHTML.style.backgroundColor = bgColor;
    headline.style.color = textColor;
}