alert('Just a landing page no SignIn or SignUp Required')
// Constant Elements
const menuIcon = document.getElementById('menuIcon');
const phoneNav = document.getElementById('phoneNav');

// Toggle NavBar Phones

menuIcon.addEventListener('click', () =>{   
    if(menuIcon.innerHTML === 'menu'){
        menuIcon.innerHTML = 'close'
        phoneNav.classList.remove('hidden');
    }
    else{
        menuIcon.innerHTML = 'menu';
        phoneNav.classList.add('hidden');
    }
});

