function calculateTriangleArea(){

    const baseField=document.getElementById('triangle-base');
    const baseFieldValueText= baseField.value;
    const base= parseFloat(baseFieldValueText);
    console.log(base);

    const heightField=document.getElementById('triangle-height');
    const heightFieldValueText= heightField.value;
    const height= parseFloat(heightFieldValueText);
    console.log(height);

    const area = 0.5 * base * height;
    

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea(){

    const widthField=document.getElementById('rectangle-width');
    const widthFieldValueText= widthField.value;
    const width= parseFloat(widthFieldValueText);

    const heightField=document.getElementById('rectangle-height');
    const heightFieldValueText= heightField.value;
    const height= parseFloat(heightFieldValueText);

    const area = width * height;

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}



    

    // const baseField=document.getElementById('parallelogram-base');
    // const baseFieldValueText= baseField.value;
    // const base= parseFloat(baseFieldValueText);

    // const heightField=document.getElementById('parallelogram-height');
    // const heightFieldValueText= heightField.value;
    // const height= parseFloat(heightFieldValueText);

    // const area = base * height;

    // const areaSpan = document.getElementById('parallelogram-area');
    // areaSpan.innerText = area;

// reusable-function

function getInput(inputId){
    const inputField=document.getElementById(inputId);
    const inputFieldText=inputField.value;
    const inputValue=parseFloat(inputFieldText);
    return inputValue;
}

function calculateparallelogramArea(){

    const base= getInput('parallelogram-base');
    const height= getInput('parallelogram-height');

    const parallelogramArea= base * height;

    const areaSpan=document.getElementById('parallelogram-area');

    areaSpan.innerText= parallelogramArea;}