const menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const triangleLeft = item.querySelector(".triangle-left");
    const triangleRight = item.querySelector(".triangle-right");

    let rectBound = e.currentTarget.getBoundingClientRect();
    const angle =
      (Math.atan(rectBound.width / rectBound.height) * 180) / Math.PI;
    console.log(angle);
    console.log(e.clientX);

    if (e.clientX <= rectBound.left + rectBound.width / 2) {
      triangleLeft.style.transform = "rotate(-" + angle + "deg)";
    } else {
      triangleRight.style.transform = "rotate(" + angle + "deg)";
    }
  });
});

menuItem.forEach((item) => {
  item.addEventListener("mouseleave", (e) => {
    const triangleLeft = item.querySelector(".triangle-left");
    const triangleRight = item.querySelector(".triangle-right");
    triangleLeft.style.transform = null;
    triangleRight.style.transform = null;
  });
});
