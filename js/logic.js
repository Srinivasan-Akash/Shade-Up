const RGBFindbtn = () => {
  if (redInput.value == false || blueInput.value == false || greenInput.value == false) alert("Please Fill the three input box to view the color");

  if (redInput.value > 255 || blueInput.value > 255 || greenInput.value > 255) alert("All the input fields should be below 255")
  else rgbColorBox.style.background = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
}

const RangeSelector = () => {
  [RedSlider.ariaValueMax, BlueSlider.ariaValueMax, GreenSlider.ariaValueMax] = [255, 255, 255];
  rangeColorBox.style.background = `rgb(${RedSlider.value}, ${GreenSlider.value}, ${BlueSlider.value})`;
}

const hexFindbtn = () => {
  hexColorBox.style.background = hexInput.value;
}

const randompickerbtn = () => {
  let arrayOfDifferentColorMethods = ["hex", "rgb", "hsl"];
  let logic = Math.floor(Math.random() * arrayOfDifferentColorMethods.length)
  let randomColorMethod = arrayOfDifferentColorMethods[logic];
  if (randomColorMethod == "hex") {
    let randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
    randomValuePara.innerText = "#" + randomHexColor;
  }

  if (randomColorMethod == "rgb")  randomValuePara.innerText = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

  if (randomColorMethod == "hsl") randomValuePara.innerText = `hsl(${randomVal(0, 360)},${randomVal(30, 95)}%, ${randomVal(30, 80)}%)`
}

const hexConvbtn = () => {
    const specialChars = /[`!@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        
    if(specialChars.test(hexIn.value)) alert("PLease Remove Special Chars")
    else {
        hexIn.value.includes("#") ? alert("PLease Remove #"): null
        !(hexIn.value.includes("#")) && check()
    }
}


const ColorToHex = (color) => {
    return color.toString(16).length == 1 ? "0" + hexadecimal : hexadecimal;
}

const rgbConvbtn  = () => {
    if((RCInput.value > 255 || RCInput < 0) || (BCInput.value > 255 || BCInput < 0) || (GCInput.value > 255 || GCInput < 0)) alert("Input should be less than 255 and greater or equal to 0")
    else {
        let hex = "#" + getHex(RCInput.value) + getHex(GCInput.value) + getHex(BCInput.value)
        rgbOutput.innerText = hex
    }
}