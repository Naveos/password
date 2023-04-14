const majuscules = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const minuscules = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ' h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const caracteres_speciaux = ['^', '¨', "*", "µ", "$", '£', '¤', '&', 'é', '"', "'", '(', '-', 'è', '_', 'ç', 'à',')', '=', '~', '#', '{', '[', '|', '`', '@', ']', '}', ',', '?', '<', '>', '.', ';', ':', '/', '§', '!', ' '];

document.getElementById('maj').checked = true;
document.getElementById('min').checked = true;
document.getElementById('nmb').checked = true;
document.getElementById('spcchar').checked = true;

function generate_password(){
    mdp = ''
    maj = document.getElementById('maj').checked;
    minu = document.getElementById('min').checked;
    nmb = document.getElementById('nmb').checked;
    spcchar = document.getElementById('spcchar').checked;
    mdpSize = document.getElementById('password_size').value;
    do {
        var check = false
        do {
            var min = Math.ceil(0);
            var max = Math.floor(5);
            type = Math.floor(Math.random() * (max - min)) + min;
            if (type === 1 && maj == true){
                min1 = Math.ceil(0);
                max1 = Math.floor(26);
                Maj = Math.floor(Math.random() * (max1 - min1)) + min1;
                mdp += majuscules[Maj];
                console.log(Maj)
                check = true
            };
            if (type === 2 && minu == true){
                min2 = Math.ceil(0);
                max2 = Math.floor(26);
                minus = Math.floor(Math.random() * (max2 - min2)) + min2;
                mdp += minuscules[minus];
                check = true
            }
            if (type === 3 && nmb == true) {
                min3 = Math.ceil(0);
                max3 = Math.floor(9);
                nmbr = Math.floor(Math.random() * (max3 - min3)) + min3;
                mdp += numeros[nmbr];
                check = true;
            };
            if (type === 4 && spcchar == true){
                min4 = Math.ceil(0);
                max4 = Math.floor(39);
                spchar = Math.floor(Math.random() * (max4 - min4)) + min4;
                mdp += caracteres_speciaux[spchar];
                check = true;
            };
        }while(check == false)
        mdpSize -= 1;
    }while(mdpSize>0)
    document.getElementById('password').innerHTML = mdp;
}