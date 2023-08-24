// Create Change Background

var changebg = document.getElementById("icon");
changebg.onclick = function () {
  document.body.classList.toggle("dark-them");
  if (document.body.classList.contains("dark-them")) {
    icon.src = "Image/Image_Bands/sun.png";
  } else {
    icon.src = "Image/Image_Bands/moon.png";
  }
};
