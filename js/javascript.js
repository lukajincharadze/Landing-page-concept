function toggleElements() {
    const greydiv = document.getElementsByClassName('GreyDiv')[0];
    const navBarLinks = document.getElementById('navbarLinks');
    const shapeContainer = document.getElementsByClassName('shape-container')[0];
  
    if (greydiv.style.height === '65%') {
      greydiv.style.height = '55%';
      navBarLinks.classList.remove('active');
      shapeContainer.style.height = '420px';
      
    } else {
      greydiv.style.height = '65%';
      navBarLinks.classList.add('active');
      shapeContainer.style.height = '582px';

    }
  
    burgerIcon.classList.toggle('active');
  }
  
  const burgerIcon = document.getElementById('burgerIcon');
  burgerIcon.addEventListener('click', toggleElements);