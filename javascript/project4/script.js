var ImageArray = ["assets/background1.jpg","assets/background2.jpg","assets/background3.jpg"];
var index=0;

function rotateImage(){
    document.querySelector(".background").setAttribute("url", ImageArray[index])
    index++;
    if(index >= ImageArray.length) {
        index=0;
    }
}

setInterval(rotateImage, 3000);