let screen = document.getElementById('ecran');
let equal = document.getElementById('equal')
let btn = document.querySelectorAll('.btn');
console.log(btn);
for(conteneur of btn) {
    conteneur.addEventListener('click', (e) => {
        btnText = e.target.value;
        if(btnText == 'X'){
            btnText = '*';
        }
        if(btnText == 'CE') {

            screen.value = 0;
        }
        screen.value += btnText;
    }, false);
}

equal.addEventListener('click', () => {
    screen.value = eval(screen.value);
}, false);



