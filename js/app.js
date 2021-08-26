const navbar = document.querySelector(".header-navbar");
const openNavbar = document.querySelector(".fa-bars.open-icon");
const closeNavbar = document.querySelector(".close-icon");

    // openList.style.display = "block";
    // closeNavbar.style.display = "none";
  function openlist() {
    const openList = document.querySelector(".fa-bars.open-icon");
    const closeNavbar = document.querySelector(".close-icon");
    navbar.style.left = "0%";
    openList.style.display = "none";
    closeNavbar.style.display = "block";
  };


function closelist() {
    const openList = document.querySelector(".fa-bars.open-icon");
    const closeNavbar = document.querySelector(".close-icon");
    navbar.style.left = "-100%";
    openList.style.display = "block";
    closeNavbar.style.display = "none";
  };






  console.log(closeNavbar);