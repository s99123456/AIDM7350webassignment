function show1() {
  document.getElementById("box1").style.display = "block";
  document.getElementById("box2").style.display = "none";
  document.getElementById("box3").style.display = "none";
}

function show2() {
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "block";
  document.getElementById("box3").style.display = "none";
}
function show3() {
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "none";
  document.getElementById("box3").style.display = "block";
}
// 获取图片路径做合集
const sliderData = [
  { url: "./images/img1.jpg" },
  { url: "./images/img2.jpg" },
  { url: "./images/img3.jpg" },
];
// 设置变量
let i = 0;
// 获取图片
const img = document.querySelector(".nav-images img");
// 开启定时器（2s自动换一次）
setInterval(function () {
  i++;
  if (i >= sliderData.length) {
    i = 0;
  }
  // 更改图片
  img.src = sliderData[i].url;
}, 2000);
