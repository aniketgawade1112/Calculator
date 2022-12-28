(function () {

    // taken all the variables from the html file and now i have to make this variables working
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // addEventListener --> to find out which button is press 
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // 
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();