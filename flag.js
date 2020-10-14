

const flagsObj = {
    'CANADA': 'img/CANADA.jpg',
    'CHILE': 'img/CHILE.jpg',
    // 'CHINA': 'img/CHINA.jpg',
    // 'COLOMBIA': 'img/COLOMBIA.jpg',
    // 'EGYPT': 'img/EGYPT.jpg',
    // 'IRAN': 'img/IRAN.jpg',
    // 'ISRAEL': 'img/ISRAEL.jpg',
    // 'ITALY': 'img/ITALY.jpg',
    // 'JAPAN': 'img/JAPAN.jpg',
    // 'JORDAN': 'img/JORDAN.jpg',
    // 'LEBANON': 'img/LEBANON.jpg',
    // 'SAUDI ARABIA': 'img/SAUDIARABIA.jpg',
    // 'SPAIN': 'img/SPAIN.jpg',
    // 'SUDAN': 'img/SUDAN.jpg',
    // 'TURKEY': 'img/TURKEY.jpg',
    // 'UNITEDSTATES': 'img/UNITEDSTATES.jpg'
}

var imgflag = document.getElementById("imgflag");
var input = document.getElementById("input");
input.style.display = 'none';
var submit = document.getElementById("submit");
let myObjKeys = Object.keys(flagsObj);

var levelText = document.getElementById("level");
levelText.style.display = 'none';


submit.addEventListener("click", submitMe);


var level = 0;
var countryName = '';



function setCountry() {

    if (level == myObjKeys.length) {


        alert(' WOOOOW You Have Finished The Game ');

    } else {


        levelText.textContent = " Level : " + (level + 1);

        countryName = myObjKeys[level];
        var srcImg = flagsObj[countryName];
        imgflag.src = srcImg;


    }
}

function submitMe() {

    if (submit.textContent === 'Start game') {
        submit.textContent = 'Submit';
        input.style.display = 'block';
        levelText.style.display = 'block';
        setCountry();

    } else {
        if (input.value.toLowerCase() === countryName.toLowerCase()) {
            level++;
            setCountry();

        } else {
            alert('Wrong !! Try Again ');

        }
    }


    input.value = '';
}


// Creating an input box  under the image  in//

// submit.addEventListener("click", submitMe);


// function submitMe() {

//     const diviHTML = document.querySelector('#divi')
//     const inputBox = document.createElement('input')

//     inputBox.setAttribute('type', 'text')
//     inputBox.setAttribute('name', 'input')
//     inputBox.setAttribute('id', 'input')
//     inputBox.placeholder = 'TEXT HERE!!'

//     // diviHTML.appendChild(inputBox)
//     diviHTML.insertBefore(inputBox, diviHTML.children[1]);

// }

