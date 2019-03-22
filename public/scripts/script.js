/* No jquery only DOM */
/* global variables */
/*Select elements for tab panels*/
/* select links */
let tabLinks = document.querySelectorAll('.feature-tab__links  li');
let tabContents = document.querySelectorAll('.featureProduct  .feature-tab__content .tabPanel');
let tabImages = document.querySelectorAll('.featureProduct picture');

/* Set display on load */
tabLinks[0].classList.add('currentLink');
tabContents[0].classList.add('currentContent');
tabImages[0].classList.add('setFront');
/* Find the current Tab */



tabLinks.forEach(function(link){
  link.onclick = function(){
    if(tabLinks[0] == this){
      /* first click the link*/
      tabLinks[0].classList.add('currentLink');
      tabLinks[1].classList.remove('currentLink');
      tabLinks[2].classList.remove('currentLink');
      /* then seclect the tab content*/
      tabContents[0].classList.add('currentContent');
      tabContents[1].classList.remove('currentContent');
      tabContents[2].classList.remove('currentContent');
      /* then seclect the tab content*/
      tabImages[0].classList.add('setFront');
      tabImages[1].classList.remove('setFront');
      tabImages[2].classList.remove('setFront');

    }else if(tabLinks[1] == this){
      tabLinks[1].classList.add('currentLink');
      tabLinks[0].classList.remove('currentLink');
      tabLinks[2].classList.remove('currentLink');

      tabContents[1].classList.add('currentContent');
      tabContents[0].classList.remove('currentContent');
      tabContents[2].classList.remove('currentContent');

      tabImages[1].classList.add('setFront');
      tabImages[0].classList.remove('setFront');
      tabImages[2].classList.remove('setFront');
    }else{
      tabLinks[2].classList.add('currentLink');
      tabLinks[0].classList.remove('currentLink')
      tabLinks[1].classList.remove('currentLink');

      tabContents[2].classList.add('currentContent');
      tabContents[1].classList.remove('currentContent');
      tabContents[0].classList.remove('currentContent');

      tabImages[2].classList.add('setFront');
      tabImages[0].classList.remove('setFront');
      tabImages[1].classList.remove('setFront');
    }
  }
});




/*  */

let tabLists = document.querySelectorAll('.feature-tab__links--4 li');
let tabDescription = document.querySelectorAll('.featureMedia .feature-tab__content .tabPanel');
let tabPictures = document.querySelectorAll('.featureMedia picture');

/* Set display on load */
tabLists[0].classList.add('currentLink');
tabDescription[0].classList.add('currentContent');
tabPictures[0].classList.add('setFront');
/* Find the current Tab */

tabLists.forEach(function(link){
  link.onclick = function(){
    if(tabLists[0] == this){
      /* first click the link*/
      tabLists[0].classList.add('currentLink');
      tabLists[1].classList.remove('currentLink');
      tabLists[2].classList.remove('currentLink');
      tabLists[3].classList.remove('currentLink');
      /* then seclect the tab content*/
      tabDescription[0].classList.add('currentContent');
      tabDescription[1].classList.remove('currentContent');
      tabDescription[2].classList.remove('currentContent');
      tabDescription[3].classList.remove('currentContent');
      /* then seclect the tab content*/
      tabPictures[0].classList.add('setFront');
      tabPictures[1].classList.remove('setFront');
      tabPictures[2].classList.remove('setFront');
      tabPictures[3].classList.remove('setFront');

    }else if(tabLists[1] == this){
      tabLists[1].classList.add('currentLink');
      tabLists[0].classList.remove('currentLink');
      tabLists[2].classList.remove('currentLink');
      tabLists[3].classList.remove('currentLink');

      tabDescription[1].classList.add('currentContent');
      tabDescription[0].classList.remove('currentContent');
      tabDescription[2].classList.remove('currentContent');
      tabDescription[3].classList.remove('currentContent');

      tabPictures[1].classList.add('setFront');
      tabPictures[0].classList.remove('setFront');
      tabPictures[2].classList.remove('setFront');
      tabPictures[3].classList.remove('setFront');
    }else if(tabLists[2] == this){
      tabLists[2].classList.add('currentLink');
      tabLists[0].classList.remove('currentLink')
      tabLists[1].classList.remove('currentLink');
      tabLists[3].classList.remove('currentLink');

      tabDescription[2].classList.add('currentContent');
      tabDescription[1].classList.remove('currentContent');
      tabDescription[0].classList.remove('currentContent');
      tabDescription[3].classList.remove('currentContent');

      tabPictures[2].classList.add('setFront');
      tabPictures[0].classList.remove('setFront');
      tabPictures[1].classList.remove('setFront');
      tabPictures[3].classList.remove('setFront');
    }else{
      tabLists[3].classList.add('currentLink');
      tabLists[0].classList.remove('currentLink')
      tabLists[1].classList.remove('currentLink');
      tabLists[2].classList.remove('currentLink');

      tabDescription[3].classList.add('currentContent');
      tabDescription[1].classList.remove('currentContent');
      tabDescription[0].classList.remove('currentContent');
      tabDescription[2].classList.remove('currentContent');

      tabPictures[3].classList.add('setFront');
      tabPictures[0].classList.remove('setFront');
      tabPictures[1].classList.remove('setFront');
      tabPictures[2].classList.remove('setFront');
    }
  }
});

/* No jquery only DOM */
/* global variables */
/*Select elements for tab panels*/
/* select links */
let tabs = document.querySelectorAll('.feature-tab__links--2 li');
let contents = document.querySelectorAll('.featureAccess  .feature-tab__content .tabPanel');
let images = document.querySelectorAll('.featureAccess picture');

/* Set display on load */
tabs[0].classList.add('currentLink');
contents[0].classList.add('currentContent');
images[0].classList.add('setFront');
/* Find the current Tab */

tabs.forEach(function(link){
  link.onclick = function(){
    if(tabs[0] == this){
      /* first click the link*/
      tabs[0].classList.add('currentLink');
      tabs[1].classList.remove('currentLink');
      /* then seclect the tab content*/
      contents[0].classList.add('currentContent');
      contents[1].classList.remove('currentContent');
      /* then seclect the tab content*/
      images[0].classList.add('setFront');
      images[1].classList.remove('setFront');
    }else{
      tabs[1].classList.add('currentLink');
      tabs[0].classList.remove('currentLink');

      contents[1].classList.add('currentContent');
      contents[0].classList.remove('currentContent');

      images[1].classList.add('setFront');
      images[0].classList.remove('setFront');
    }
  }
});


/* Drop down menu with javascript DOM*/

let dropdownMenu = document.getElementById('dropDown');
let dropdown = document.querySelector('.headerNav .dropdown-menu .dropdown');
let menuClicked = document.querySelector('.headerNav .dropdown-menu');
let hideDropdown = document.querySelector('.wrapper');

dropdownMenu.onclick = function(){
    hideDropdown.onclick = function(){
      if(dropdown.classList.contains('dropdown-visible')){
          dropdown.classList.remove('dropdown-visible');
          location.reload();
      }else{
        dropdown.classList.add('dropdown-visible');
        menuClicked.classList.add('dropdown-menu__clicked');
      }
    }
}

/* Drop down menu with javascript DOM*/

let dropdownSubMenu= document.getElementById('subdropDown');
let subdropdown = document.querySelector('.subdropDown');
let subMenuClicked = document.querySelector('.dropdown-submenu .subdropDown');
let dropdownIcon = document.querySelector('.dropdown-icon');
let hideSubDropdown = document.querySelector('.wrapper');

dropdownSubMenu.onclick = function(){
    hideSubDropdown.onclick = function(){
      if(subdropdown.classList.contains('subdropdown-visible')){
          subdropdown.classList.remove('subdropdown-visible');
          location.reload();
      }else{
        subdropdown.classList.add('subdropdown-visible');
        subMenuClicked.classList.add('subdropdown-menu__clicked');
        dropdownIcon.classList.toggle('dropdown-icon_flip');
      }
    }
}

/* subheader placement with pure javascript DOM */
window.onscroll = function(){

   if(window.scrollY >=60) { // change target to number
      document.getElementById('subheader-trigger').classList.add('sticky-subheader');
      document.querySelector('.headerHero').classList.add('marginTop');
      document.querySelector('.dropdown-submenu__mobile').classList.add('sticky-subheader__mobile');
   }else{
     document.getElementById('subheader-trigger').classList.remove('sticky-subheader');
     document.querySelector('.headerHero').classList.remove('marginTop');
     document.querySelector('.dropdown-submenu__mobile').classList.remove('sticky-subheader__mobile');
   }

};

/* Adding classes with the elements on mouseout*/
let subNavLinks = document.querySelectorAll('.links');
let subLink = document.querySelectorAll('.sublinks');

subNavLinks[0].onmouseover = function(){
  this.classList.add('links-position');
  subLink[0].classList.add('show-sublinks__dropdown');
}
subNavLinks[1].onmouseover = function(){
  this.classList.add('links-position');
  subLink[1].classList.add('show-sublinks__dropdown');
}
subNavLinks[2].onmouseover = function(){
  this.classList.add('links-position');
  subLink[2].classList.add('show-sublinks__dropdown');
}
subNavLinks[3].onmouseover = function(){
  this.classList.add('links-position');
  subLink[3].classList.add('show-sublinks__dropdown');
}
/* removing classes with the elements on mouseout*/
subNavLinks[0].onmouseout = function(){
  this.classList.remove('links-position');
  subLink[0].classList.remove('show-sublinks__dropdown');
}
subNavLinks[1].onmouseout = function(){
  this.classList.remove('links-position');
  subLink[1].classList.remove('show-sublinks__dropdown');
}
subNavLinks[2].onmouseout = function(){
  this.classList.remove('links-position');
  subLink[2].classList.remove('show-sublinks__dropdown');
}
subNavLinks[3].onmouseout = function(){
  this.classList.remove('links-position');
  subLink[3].classList.remove('show-sublinks__dropdown');
}


/* mobile menu display */

let mobileMenu = document.querySelector('.header-mobile__expanded');
let menuIcon = document.querySelector('.hamburger');

menuIcon.onclick = function(){
  mobileMenu.classList.toggle('show-mobile__menu');
}

let mobileDropdown = document.querySelector('.links-mobile');
let mobileDropdownLinks = document.querySelector('.sublinks-mobile');
mobileDropdown.onclick = function(){
  mobileDropdownLinks.classList.toggle('show-dropdown__links');
}

/* FooterLink Modal*/
let footerLinkModal = document.querySelector('.footerLinks-modal__link');
let footerModal = document.querySelector('.modal1');
let footerModalclose = document.querySelector('.close');

footerLinkModal.onclick = function(){
  footerModal.classList.add('modal1-visible');
  footerModal.classList.remove('modal-close');
}
footerModalclose.onclick = function(){
  footerModal.classList.add('modal-close');
  footerModal.classList.remove('modal1-visible');
}
