let switcher = document.querySelector('#switch');
let sun;

document.addEventListener('DOMContentLoaded', () => {
    sun = localStorage.getItem('sun');
 if(sun == undefined){
    document.body.setAttribute('data-theme', 'light');
    sun = false; 
 }
 else{
     sun = true;
     document.body.setAttribute('data-theme', 'dark');
 }
}); 

switcher.addEventListener('click', () => {
    if(!sun) {
        document.body.setAttribute('data-theme', 'dark');
        sun = true;
        localStorage.setItem('sun', 'false');
    }
    else{
        sun = false;
        document.body.setAttribute('data-theme', 'light');
        localStorage.removeItem('sun');
    }
});
