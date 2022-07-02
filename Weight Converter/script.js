document.getElementById('output').style.visibility = 'hidden';
document.getElementById('btn').style.visibility = 'hidden';

// for clicking button event
document.getElementById('pound').addEventListener('click', lbsFunc);
document.getElementById('kg').addEventListener('click', kgFunc);
document.getElementById('oz').addEventListener('click', ozFunc);
document.getElementById('gm').addEventListener('click', gmFunc);


// Functions
function lbsFunc(e){
    e.preventDefault();
    document.getElementById('lbsInput').addEventListener('input', lbsFunc);

    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('lbsInput').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML =
    lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML =
    lbs/2.2046;
    document.getElementById('ozOutput').innerHTML =
    lbs*16;
}


function kgFunc(e){
    e.preventDefault();
    document.getElementById('kgInput').addEventListener('input', kgFunc);
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('kgInput').style.visibility = 'visible';
    let KG = e.target.value;
    document.getElementById('lbsOutput').innerHTML =
    KG/0.45359237;
    document.getElementById('ozOutput').innerHTML =
    KG/0.02834952;
    document.getElementById('gramsOutput').innerHTML =
    KG*1000;
}


function ozFunc(e){
    e.preventDefault();
    document.getElementById('ozInput').addEventListener('input', ozFunc);
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('ozInput').style.visibility = 'visible';
    let OZ = e.target.value;
    document.getElementById('lbsOutput').innerHTML =
    OZ/16;
    document.getElementById('kgOutput').innerHTML =
    OZ*0.02834952;
    document.getElementById('gramsOutput').innerHTML =
    OZ*28.34952;
}



function gmFunc(e){
    e.preventDefault();
    document.getElementById('gmInput').addEventListener('input', gmFunc);
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gmInput').style.visibility = 'visible';
    let GM = e.target.value;
    document.getElementById('lbsOutput').innerHTML =
    GM/453.59237;
    document.getElementById('kgOutput').innerHTML =
    GM/1000;
    document.getElementById('ozOutput').innerHTML =
    GM/28.34952;
}