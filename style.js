const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');

    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();

//.submit-btn button {
  //  font-size: 20px;
    //border: 1px solid #3498db;
    //border-radius: 25px;
    //background-color: #0098aa;
    //color: white;
    //padding: 10px 20px;
    //cursor: pointer;
    //outline: 0;
//}
