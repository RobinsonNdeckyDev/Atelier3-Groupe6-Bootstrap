var input = document.getElementById("password")
console.log(input);
var icone = document.getElementById("eyePass");
console.log(icone)

icone.addEventListener('click', () => {
    input.type === "password" ? (input.type = "text") : (input.type = "password");
})