function triggered(){
    // this code for seclecting input and take value and value convert to Number
    let getValueIntuB = document.getElementById("IdForB");
    let getBaseTextForB = getValueIntuB.value;
    let convertBFOrStringToNumber = parseFloat(getBaseTextForB);

    // this code for seclecting input and take value and value convert to Number
    let getInputH = document.getElementById('IdForH');
    let getInputHValue = getInputH.value;
    let convertHFOrStringToNumber = parseFloat(getInputHValue)

    let Area = 0.5 * convertBFOrStringToNumber * convertHFOrStringToNumber;
    let result = document.getElementById("result")
    result.innerText = Area;
}