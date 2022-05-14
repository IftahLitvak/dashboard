

const items = document.querySelectorAll('.item');
const itemBars = document.querySelectorAll('#card-bar');
items.forEach(item => item.addEventListener('mouseenter', changeBarColorToBlue));
items.forEach(item => item.addEventListener('mouseleave', changeBarColorToGreen));


function changeBarColorToBlue(e){
    e.target.firstElementChild.classList.add('over');
    e.target.firstElementChild.classList.remove('not-over');
}

function changeBarColorToGreen(e){
    e.target.firstElementChild.classList.add('not-over');
    e.target.firstElementChild.classList.remove('over');
}