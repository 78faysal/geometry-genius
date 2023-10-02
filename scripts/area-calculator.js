function calculateTriangleArea(){
    // get triangle base value 
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);

    // get triangle height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);

    baseField.value ='';
    heightField.value ='';

    const area = 0.5 * baseValue * heightValue;

    // show triangle area 
    document.getElementById('triangle-area').innerText = area;
}


function calculateRectangleArea(){
    // get triangle width value 
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const widthValue = parseFloat(widthValueText);

    // get triangle length value 
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const lengthValue = parseFloat(lengthValueText);

    widthField.value ='';
    lengthField.value ='';

    const area = widthValue * lengthValue;

    // show triangle area 
    document.getElementById('rectangle-area').innerText = area;
}



// reuseable function 
function calculateParallelogramArea(){
    const baseValue = getInputValue('parallelogram-base');
    const heightValue = getInputValue('parallelogram-height');
    
    const area = baseValue * heightValue;
    setElementInnerText('parallelogram-area', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;

    setElementInnerText('ellipse-area', area);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

// reuseable set span, p, div, etc text 
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}