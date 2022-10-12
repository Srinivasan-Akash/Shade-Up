String.prototype.convertToRGB = function(){
    let HexToRgb = this.match(/.{1,2}/g);
    let rgb = `rgb(${parseInt(HexToRgb[0], 16)}, ${parseInt(HexToRgb[1], 16)}, ${parseInt(HexToRgb[2], 16)})`
    return rgb;
}

const randomVal = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

const check = () => {
    if(hexIn.value.length == 6){
        if(hexIn.value == false) alert("Please Fill The Hex input box")
        else hexOutput.innerText = hexIn.value.convertToRGB()
    } else alert("Make Sure the input is 6 digit !!")
}

const getHex = (value) => {
    let hex = parseInt(value).toString(16)
    return hex.length == 1 ? "0" + hex: hex
}