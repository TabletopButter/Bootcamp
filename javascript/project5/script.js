var imgArray = ['assets/1.jpg','assets/2.jpg','assets/3.jpg','assets/4.jpg','assets/5.jpg','assets/6.jpg'];

var newImg;


var counter =1;

function nextImg(index){
    counter+=index;
    newImg="assets/"+counter+".jpg";

    if (counter<=imgArray.length){
        img.src=newImg;
        return;
    }
    else{
        counter=1;
        newImg="assets/"+counter+".jpg";
        img.src=newImg;
        return;
    }
}

function prevImg(index){
    counter-=index;
    newImg="assets/"+counter+".jpg";

    if(counter>=1){
        img.src=newImg;
        return;
    }
    else{
        counter=imgArray.length;
        newImg="assets/"+counter+".jpg";
        img.src=newImg;
        return;
    }
}