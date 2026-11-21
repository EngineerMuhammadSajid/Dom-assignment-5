// ================Task 1 =================

const clickme_btn = document.getElementById("clickme-btn");
clickme_btn.addEventListener("click", () => {
  alert("Button Clicked Successfully");
});

// ================Task 2 =================

const para1 = document.getElementById("para1");
const chngText_btn = document.getElementById("change-text");
chngText_btn.addEventListener("click", () => {
  para1.innerText = "Text Updated Successfully";
});

// ================Task 3 =================

const bg_color_btn = document.getElementById("bgcolor");
const body = document.getElementById("body");
bg_color_btn.addEventListener("click", () => {
  body.style.backgroundColor = "lightblue";
});

// ================Task 4 =================

const typing = document.getElementById("typing");
const showTyping = document.getElementById("show-typing");

typing.addEventListener("input", (e) => {
  showTyping.innerText = e.target.value;
});

// ================Task 5 =================

const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.classList.add("box-active");
});

box.addEventListener("mouseleave", () => {
  box.classList.remove("box-active");
});

// ================Task 6 =================

const btn = document.getElementById("dbl_btn");
btn.addEventListener("dblclick", () => {
  alert("Double Click Detected");
});
