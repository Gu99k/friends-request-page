const stranza = document.querySelector("#stn");
const remove = document.querySelector("#remove-btn");
const add = document.querySelector("#add-btn");
remove.addEventListener("click", () => {
    remove.style.background = "red";
    stranza.innerHTML = "Stranger"

    stranza.style.color = "red";

})
add.addEventListener("click", () => {

    stranza.innerHTML = "friends"
    stranza.style.color = "green";
    add.style.backgroundColor = "green";

})


