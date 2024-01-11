document.addEventListener("DOMContentLoaded", function() {
    const span = [document.querySelectorAll('.rotator__case')]
    let check = 0;
    function next(){

        if (check == 0 && span[0][check].classList.contains('rotator__case_active')) {
            check++;
        }
        else if (check < span[0].length) {
            span[0][check-1].classList.remove('rotator__case_active');
            span[0][check].classList.add('rotator__case_active');
            check++;
        }
        else if (check >= span[0].length) {
            span[0][check-1].classList.remove('rotator__case_active');
            check = 0
            span[0][check].classList.toggle('rotator__case_active');
            check++;
        }
    }


    setInterval(()=> {next()},1000)
})