// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const viewDemoBtn = document.getElementById("viewDemo");
const myVid = document.getElementById("myVid");
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

const comp = document.getElementById('compose-icon')

function composeEmail() {
  debugger;
  var emailAddress = 'rebecca71011@gmail.com';
  var subject = 'Portfolio Inquiry';
  var body = '';

  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

viewDemoBtn?viewDemoBtn.addEventListener("click", playPause) : false;
comp?comp.addEventListener('click', function() {
  composeEmail();
}) : false;

function playPause(){
  debugger;
  console.log("Inside");
  if (myVid.paused) {
    myVid.play();
   
    }
else  {
  myVid.pause(); 
    
    }

}

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
