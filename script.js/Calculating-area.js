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