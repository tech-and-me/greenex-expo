window.onscroll = () => {
    const navbar = document.getElementsByTagName("nav")[0];
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.background = "#1b1c1b";
      } else {
        navbar.style.background = "none";
      }
}

const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    const OnOff=()=>{
        nav.classList.toggle("nav-active");

        navLinks.forEach((link,index)=>{
            if (link.style.animation){
                link.style.animation="";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    

    }

    //When Burger clicked
    burger.addEventListener("click",OnOff);


    //When navItem clicked
    navLinks.forEach((link)=>{
        link.addEventListener("click",OnOff)
    });


}










navSlide();




