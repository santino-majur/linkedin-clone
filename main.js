function handleClick(){
    const showMore = document.getElementById('hidden');
    const buttonText = document.getElementById('btn-prim')
    if(showMore.style.display === 'none'){
        showMore.style.display = 'flex'
        buttonText.innerHTML = 'Show less' + '<span class="material-symbols-outlined">expand_less</span>'
    }else{
        showMore.style.display = 'none'
        buttonText.innerHTML = 'Show more' + '<span class="material-symbols-outlined">expand_more</span>'
    }
}
function showMore(){
    const showMore = document.getElementById('hidden-two');
    const buttonText = document.getElementById('btn-sec')
    if(showMore.style.display === 'none'){
        showMore.style.display = 'flex'
        buttonText.innerHTML = 'Show less' + '<span class="material-symbols-outlined">expand_less</span>'
    }else{
        showMore.style.display = 'none'
        buttonText.innerHTML = 'Show more' + '<span class="material-symbols-outlined">expand_more</span>'
    }
}

function toggleMenu(){
    const toggle = document.getElementById('nav__menu');
    if(toggle.className === 'nav__menu'){
        toggle.className += ' responsive'
    }else{
        toggle.className = 'nav__menu'
    }
}