// Fetching elements for `rgb range` section
const [RedSlider, GreenSlider, BlueSlider, rangeColorBox] = [
  document.getElementById("RrInput"),
  document.getElementById("GrInput"),
  document.getElementById("BrInput"),
  document.getElementById("range-color-box"),
];

// Fetching elements for `color by hex code` section
const [hexInput, hexColorBox] = [
  document.getElementById("hexInput"),
  document.getElementById("color-box"),
];

// Fetching elements for `color by rgb` section
const [redInput, greenInput, blueInput, rgbColorBox] = [
    document.getElementById("RInput"),
    document.getElementById("GInput"),
    document.getElementById("BInput"),
    document.getElementById("rgb-color-box")
];

// Fetching rgb input (rgb to hex covert) section
const [RCInput, GCInput, BCInput, rgbOutput] = [
  document.getElementById("RCInput"),
  document.getElementById("GCInput"),
  document.getElementById("BCInput"),
  document.getElementById("rgbCOut"),
];

// Fetching hex input (hex to rgb covert) section
const [hexIn, hexOutput] = [
  document.getElementById("hexCInp"),
  document.getElementById("hexCOut"),
];

const randomValuePara = document.getElementById("randomValuePara")