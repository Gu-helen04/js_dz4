document.addEventListener("DOMContentLoaded", function() {
const buttonMenu = document.querySelector('.book__control');
const bookContent = document.querySelector('.book__content');

function click (event){
    for (el of buttonMenu.childNodes){ 
        if (el.contains(document.querySelector('.font-size_active'))) {
            el.classList.remove('font-size_active')
        }
    }
    for (el of buttonMenu.childNodes){
        if (el.className == event.target.className){
            el.classList.add('font-size_active')
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.remove('book_fs-big'); 
            switch (true){
                case el.contains(document.querySelector('.font-size_small')):
                    bookContent.classList.add('book_fs-small');
                    break;
                case el.contains(document.querySelector('.font-size_big')): 
                    bookContent.classList.add('book_fs-big') ;  
                    break;
                }
            }   
        }
    }

buttonMenu.addEventListener('click', (event) => {event.preventDefault()});
buttonMenu.addEventListener('click', click);
    
})