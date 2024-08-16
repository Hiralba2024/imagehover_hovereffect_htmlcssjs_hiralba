const image1 = document.getElementById("top-left");
const image2 = document.getElementById("top-right");
const image3 = document.getElementById("bottom-left");
const image4 = document.getElementById("bottom-right");
const image5 = document.getElementById("middle-image");

image1.addEventListener("mouseover", function() {
    [image1.src, image5.src] = [image5.src, image1.src];
});

image2.addEventListener("mouseover", function() {
    [image2.src, image5.src, image1.src] = [image1.src, image2.src, image5.src];
});

image4.addEventListener("mouseover", function() {
    [image4.src, image5.src, image2.src] = [image2.src, image4.src, image5.src];
});

image3.addEventListener("mouseover", function() {
    [image3.src, image5.src, image4.src] = [image4.src, image3.src, image5.src];
});
