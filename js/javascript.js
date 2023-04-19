function toggleElements() {
    const greydiv = document.getElementsByClassName('GreyDiv')[0];
    const navBarLinks = document.getElementById('navbarLinks');
  
    if (greydiv.style.height === '150%') {
      greydiv.style.height = '100%';
      navBarLinks.classList.remove('active');
    } else {
      greydiv.style.height = '150%';
      navBarLinks.classList.add('active');
    }
  
    burgerIcon.classList.toggle('active');
  }
  
  const burgerIcon = document.getElementById('burgerIcon');
  burgerIcon.addEventListener('click', toggleElements);