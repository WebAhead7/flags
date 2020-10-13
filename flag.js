// the flags' object >> key = countryname, flage = src
function createNewElement() {
    // First create a DIV element.
	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";

    // Finally put it where it is supposed to appear.
	document.getElementById("newElementId").appendChild(txtNewInputBox);
}
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



