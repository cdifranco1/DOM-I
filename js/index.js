const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Set links text
let links = Array.from(document.getElementsByTagName('a'))
for (let i = 0; i < links.length; i++){
  console.log(siteContent["nav"][`nav-item-${i + 1}`])
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// Update CTA header, button, img
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;

document.querySelector('.cta-text button').textContent = siteContent.cta.button;

document.querySelector('#cta-img').src = siteContent["cta"]["img-src"]


//Main content

//Features
document.querySelector('.top-content .text-content:first-child h4').textContent = siteContent["main-content"]["features-h4"]

document.querySelector('.top-content .text-content:first-child p').textContent = siteContent["main-content"]["features-content"]

//About
document.querySelector('.top-content .text-content:last-child h4').textContent = siteContent["main-content"]["about-h4"]

document.querySelector('.top-content .text-content:last-child p').textContent = siteContent["main-content"]["about-content"]

//Middle img
document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"]


//Bottom content

document.querySelector('.bottom-content .text-content:first-child h4').textContent = siteContent["main-content"]["services-h4"]

document.querySelector('.bottom-content .text-content:first-child p').textContent = siteContent["main-content"]["services-content"]

document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent["main-content"]["product-h4"]

document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent["main-content"]["product-content"]

document.querySelector('.bottom-content .text-content:last-child h4').textContent = siteContent["main-content"]["vision-h4"]

document.querySelector('.bottom-content .text-content:last-child p').textContent = siteContent["main-content"]["vision-content"]


//Contact

document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"]


document.querySelector('.contact p:nth-child(2)').textContent = siteContent.contact.address

document.querySelector('.contact p:nth-child(3)').textContent = siteContent.contact.phone

document.querySelector('.contact p:nth-child(4)').textContent = siteContent.contact.email

//Footer

document.querySelector('footer p').textContent = siteContent.footer.copyright



//Task 3

//Nav text to green

links.forEach((item) => item.style.color = 'green')


//Create new elements
const linkOne = document.createElement('a')
linkOne.textContent = 'First Link'
linkOne.href = '#'
document.querySelector('nav').prepend(linkOne)

const linkTwo = document.createElement('a')
linkTwo.href = '#'
linkTwo.textContent = 'Second Link'

document.querySelector('nav').appendChild(linkTwo)



//Stretch Task

const newButton = document.createElement("button");
newButton.textContent = 'Change background';

document.querySelector('.cta-text').appendChild(newButton).style.background = 'grey';

newButton.style.borderRadius = '5px'
newButton.style.border = '2px solid black'
newButton.style.width = '60%'

newButton.addEventListener("click", () => {
  let background = document.querySelector('.cta') 
  if (background.style.backgroundColor == ""){
    background.style.backgroundColor = "lightgrey"
  } else {background.style.backgroundColor = ""}
})


