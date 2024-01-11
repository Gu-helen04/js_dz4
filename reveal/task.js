document.addEventListener("DOMContentLoaded", function() {
    
    function isVisible (massElements){
        for (el of massElements){
            const {top,button} = el.getBoundingClientRect();
        if (button < 0) {
            return;
        }
        if(top > window.innerHeight){
            return;
        }
        el.classList.add('reveal_active')
        }
    }


const reveal = [...document.querySelectorAll('.reveal')]
console.log(reveal)

setInterval(() => {
   isVisible(reveal)
},1000)

})