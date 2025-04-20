const menuBtn = document.getElementById("menu-btn");
const crossBtn = document.getElementById("cross-btn");
const mobileMenu = document.getElementById("mbl-menu")

menuBtn.addEventListener("click", () => {
    mobileMenu.style.display = "block"
});
crossBtn.addEventListener("click",()=>{
    mobileMenu.style.display = "none"
})