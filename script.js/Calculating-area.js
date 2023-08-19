function calculateTriangleArea(){
    const baseField=document.getElementById('triangle-base');
    // console.log("clicked")
    const baseFieldValueText= baseField.value;
    const base= parseFloat(baseFieldValueText);
    console.log(base);

    const heightField=document.getElementById('triangle-height');
    // console.log("clicked")

    const heightFieldValueText= heightField.value;
    const height= parseFloat(heightFieldValueText);
    console.log(height);
    const area = 0.5 * base * height;
    console.log(area);

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