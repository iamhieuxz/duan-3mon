// shopping carts 

let carts = document.querySelectorAll('.add-cart')

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {

        cartNumbers();
    })
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers'); 
  if (productNumbers) {
    document.querySelector('.cart-logo span').textContent =  productNumbers;
  }
}

function cartNumbers(){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers +1)
      document.querySelector('.cart-logo span').textContent = productNumbers + 1   ;
    } else {
      localStorage.setItem('cartNumbers',1 );
      document.querySelector('.cart-logo span').textContent = 1;
    }
    

}

onLoadCartNumbers() 



// navSilde animation 
const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li')

     burger.addEventListener('click', () => {
        // Toggle Nav
        
          nav.classList.toggle('nav-active');

          // animation 
          navLink.forEach((link,index) => {
              if(link.style.animation) {
                link.style.animation = '';
              }else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 +.7}s`;
        }
        });
          // animation burger 

          burger.classList.toggle('toggle');

      });

}


// // meida social 

// const socialTag = document.querySelector('.media-tag');
// const socialList = document.querySelector('.media-social')

// socialTag.addEventListener('click', () => {
//   socialList.classList.toggle('media-social-active');
// })