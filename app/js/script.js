/*
let button = document.getElementById('button');
//let pricing = document.querySelector('.pricing--tag')
let master = document.getElementById('master')
let basic = document.getElementById('basic')
let pro = document.getElementById('pro');

function changePrice() {
    
    basic.innerHTML = '&dollar;199.99';
    pro.innerHTML = '&dollar;249.99';
    master.innerHTML = '&dollar;399.99';
}
button.addEventListener('click', changePrice); 


*/
const button = document.getElementById("button");
const pricingTags = document.querySelectorAll(".pricing--tag");
const pricingMonthly = ['$19.99', '$24.99', '$39.99'];
const pricingAnnually = ['$199.99', '$249.99', '$399.99'];
const dollar = document.querySelector('.dollar');
button.onclick = () => {
  button.classList.toggle("monthly");
  if (!button.classList.contains("monthly")) {
    pricingTags.forEach((pricingTag, index) => {
      pricingTag.innerHTML = pricingAnnually[index];
    });
  } else {
    pricingTags.forEach((pricingTag, index) => {
      pricingTag.innerHTML = pricingMonthly[index];
    });
  }
};