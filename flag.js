


const flagsObj = {
    'CANADA': '/img/CANADA.jpg',
    'CHILE': '/img/CHILE.jpg',
    'CHINA': '/img/CHINA.jpg',
    'COLOMBIA': '/img/COLOMBIA.jpg',
    'EGYPT': '/img/EGYPT.jpg',
    'IRAN': '/img/IRAN.jpg',
    'IRAQ': '/img/ISRAEL.jpg',
    'ITALY': '/img/ITALY.jpg',
    'JAPAN': '/img/JAPAN.jpg',
    'JORDAN': '/img/JORDAN.jpg',
    'LEBANON': '/img/LEBANON.jpg',
    'SAUDIARABIA': '/img/SAUDIARABIA.jpg',
    'SPAIN': '/img/SPAIN.jpg',
    'SUDAN': '/img/SUDAN.jpg',
    'TURKEY': '/img/TURKEY.jpg',
    'UNITEDSTATES': '/img/UNITEDSTATES.jpg'
}

var imgflag = document.getElementById("imgflag");
var input = document.getElementById("input");
var submit = document.getElementById("submit");
let myObjKeys=Object.keys(flagsObj);

submit.addEventListener("click", submitMe);


var level = 0;
var countryName='';



function setCountry(){
    if(level == myObjKeys.length){

            alert(' WOOOOW You Have Finished The Game ');

    }else{

    countryName = myObjKeys[level];
    var srcImg =flagsObj[countryName];
    imgflag.src = srcImg;

    }
}

function submitMe(){

    if(submit.value === 'Start Game'){
        submit.value='Submit';
        input.style.display ='block';
        setCountry();
        return;
    }
    if(input.value.toLowerCase() === countryName.toLowerCase() ){
        level++;
        setCountry();
    }else{
        alert('Wrong !! Try Again ');
        
    }

    input.value = '';
}

