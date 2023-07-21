function addNewWEField() {
    //console.log("adding")
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);
    
    let weOb = document.getElementById("we1");
    let weAddOb = document.getElementById("weAdd");

    weOb.insertBefore(newNode, weAddOb);
}
function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('eqField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute("placeholder", "Enter here");
    let aqOb = document.getElementById("aq1");
    let aqAddOb = document.getElementById("aqAdd");
    aqOb.insertBefore(newNode, aqAddOb);
}
function addNewINField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('inField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute("placeholder", "Enter here");
    let inOb = document.getElementById("in1");
    let inAddOb = document.getElementById("inAdd");
    inOb.insertBefore(newNode, inAddOb);
}
function addNewSKField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('skField');
    newNode.setAttribute('rows', 1);
    newNode.setAttribute("placeholder", "Enter here");
    let skOb = document.getElementById("skills");
    let skAddOb = document.getElementById("skAdd");
    skOb.insertBefore(newNode, skAddOb);
}
function addNewACField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('acField');
    newNode.setAttribute('rows', 2);
    newNode.setAttribute("placeholder", "Enter here");
    let acOb = document.getElementById("ac1");
    let acAddOb = document.getElementById("acAdd");
    acOb.insertBefore(newNode, acAddOb);
}
function generateResume() {
    let name = document.getElementById('name').value;
    //console.log(name);
    let nametemp = document.getElementById('nametemp');
    nametemp.innerHTML = name;
    let role = document.getElementById('role').value;
    let roletemp = document.getElementById('roletemp');
    roletemp.innerHTML = role;
    let contact = document.getElementById('contact').value;
    let contactT = document.getElementById('contactT');
    contactT.innerHTML = contact;
    document.getElementById('addresstemp').innerHTML = document.getElementById('address').value;
    document.getElementById('emailT').innerHTML = document.getElementById('email').value;

    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedin').value;
    document.getElementById('gfgT').innerHTML = document.getElementById('gfg').value;
    document.getElementById('hackerT').innerHTML = document.getElementById('hacker').value;
    document.getElementById('leetcodeT').innerHTML = document.getElementById('leetcode').value;
    document.getElementById('githubT').innerHTML = document.getElementById('github').value;

    document.getElementById('objT').innerHTML = document.getElementById('obj').value;

    let wes = document.getElementsByClassName('weField');
    let str = '';
    for (let e of wes) {
        str = str+`<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str;

    
    let aqs = document.getElementsByClassName('eqField');
    let str1 = '';
    for (let i of aqs) {
        str1 +=`<li>${i.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    let ins = document.getElementsByClassName('inField');
    let str2 = '';
    for (let i of ins) {
        str2 +=`<li>${i.value}</li>`;
    }
    document.getElementById('inT').innerHTML = str2;


    let sks = document.getElementsByClassName('skField');
    let str3 = '';
    for (let i of sks) {
        str3 +=`<li>${i.value}</li>`;
    }
    document.getElementById('skT').innerHTML = str3;

    let acs = document.getElementsByClassName('acField');
    let str4 = '';
    for (let i of acs) {
        str4 +=`<li>${i.value}</li>`;
    }
    document.getElementById('acT').innerHTML = str4;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

}


function printResume() {
    window.print();
}