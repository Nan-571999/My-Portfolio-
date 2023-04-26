window.onload = function(){
    document.body.style.animationName ="bodyTop";
    document.getElementsByTagName("section")[0].style.cssText="animation-name:infoBlock;";
    document.getElementsByTagName("h1")[0].style.visibility ="visible";
    document.getElementsByTagName("p")[0].style.visibility ="visible";
    let textPrint = setInterval(printText(),1000);
}
let arr=["nancy mahmoud","a designer","full stack developer","freelancer"];

function blockView(k){
    document.body.style.animationName ="bodyreset";
    document.getElementsByClassName("block")[k].style.cssText="display:block;";
    document.getElementsByClassName("home")[0].style.cssText="opacity:0;";
    if(k==2)
    {
        document.getElementsByClassName("img1")[0].style.cssText="display:block;";
        document.getElementsByClassName("img2")[0].style.cssText="display:block;";
    }
    if(k==3)
    document.getElementsByTagName("input")[0].focus();
}
function blockHide(k){
    document.body.style.animationName ="bodyTop";
    document.getElementsByTagName("section")[0].style.cssText ="animation-name:infoBlock;";
    document.getElementsByClassName("block")[k].style.cssText ="display:none;";
    document.getElementsByClassName("home")[0].style.cssText="opacity:1; display:flex;";
    if(k==2)
    {
        document.getElementsByClassName("img1")[0].style.cssText="display:none;";
        document.getElementsByClassName("img2")[0].style.cssText="display:none;";
        document.getElementsByClassName("certificate")[0].style.cssText="visibility:hidden;";
        let b = document.getElementsByTagName("button");
    for(let y=0;y<b.length;y++)
        {
            document.getElementsByTagName("button")[y].classList.remove("clickbutton");
        }
    }
}
function viewVideo(s){
    document.getElementsByClassName("v1")[0].src= s;
    document.getElementsByClassName("video")[0].style.cssText="display:block;";
    document.getElementsByClassName("work")[0].style.cssText="opacity:-10;";
}
function hiddenVideo(){
    document.getElementsByClassName("video")[0].style.cssText="display:none;";
    document.getElementsByClassName("work")[0].style.cssText="opacity:0.7; display:block;";
}
function viewWork(){
    document.getElementsByClassName("block")[1].style.cssText="display:block;";
    document.getElementsByClassName("about")[0].style.cssText="opacity:-10;";
    document.getElementsByClassName("img1")[0].style.cssText="display:none;";
    document.getElementsByClassName("img2")[0].style.cssText="display:none;";
    document.getElementsByClassName("fa-xmark")[1].style.cssText="visibility:hidden;";
    document.getElementsByClassName("fa-arrow-left-long")[0].style.cssText="visibility:visible;";
}

function hiddenWork(){
    document.getElementsByClassName("block")[1].style.cssText="display:none;";
    document.getElementsByClassName("about")[0].style.cssText="opacity:0.7; display:block;";
    document.getElementsByClassName("img1")[0].style.cssText="display:block;";
    document.getElementsByClassName("img2")[0].style.cssText="display:block;";
    document.getElementsByClassName("fa-xmark")[1].style.cssText="visibility:visible;";
    document.getElementsByClassName("fa-arrow-left-long")[0].style.cssText="visibility:hidden;";
}

function viewButton(i){
    document.getElementsByTagName("button")[i].style.cssText="visibility:visible;";
    document.getElementsByClassName("courseP")[i].style.cssText="margin-bottom:70px !important;";
}
function hiddenButton(i){
    document.getElementsByTagName("button")[i].style.cssText="visibility:hidden;";
    document.getElementsByClassName("courseP")[i].style.cssText="margin-bottom:20px !important;";
}

function clickButton(i){
    let b = document.getElementsByTagName("button");
    for(let y=0;y<b.length;y++)
    {
        if(document.getElementsByTagName("button")[y].classList.contains("clickbutton"))
        {
            document.getElementsByTagName("button")[y].classList.remove("clickbutton");
            document.getElementsByClassName("certificate")[0].style.cssText="visibility:hidden;";
        }
    }
    document.getElementsByClassName("certificate")[0].style.cssText="visibility:visible;";
    document.getElementsByTagName("button")[i].classList.add("clickbutton");
    document.getElementsByClassName("courseP")[i].style.cssText="margin-bottom:70px !important;";
    document.getElementsByClassName("img1")[0].style.cssText="display:none;";
    document.getElementsByClassName("fa-xmark")[4].style.cssText="visibility:visible;";

    if(i==0)
    document.getElementsByClassName("certificateImg")[0].src="img/photoshop-course.png";
    if(i==1)
    document.getElementsByClassName("certificateImg")[0].src="img/ICDL-course.png";
    if(i==2)
    document.getElementsByClassName("certificateImg")[0].src="img/DataEntry-course.png";
    if(i==3)
    document.getElementsByClassName("certificateImg")[0].src="img/fullStack-course.png";
}
function hiddenCertificate(){
    document.getElementsByClassName("certificate")[0].style.cssText="visibility:hidden;";
    document.getElementsByClassName("img1")[0].style.cssText="display:block;";
    document.getElementsByClassName("fa-xmark")[4].style.cssText="visibility:hidden";

    let b = document.getElementsByTagName("button");
    for(let y=0;y<b.length;y++)
        {
            document.getElementsByTagName("button")[y].classList.remove("clickbutton");
        }
}
function printText(){
    if(arr.length ==0)
    {
        arr=["nancy mahmoud","a designer","full stack developer","freelancer"];
    }
    let value1=arr[0];
    let arrays=value1.split("");
    let interval = setInterval(function(){
        if(document.getElementById("infoTitle").innerHTML !== value1)
        document.getElementById("infoTitle").innerHTML += (arrays).shift();
        else
        {   
            value1 = arr[0];
            arrays = value1.split("");
            clearInterval(interval);
            let interval2 = setInterval(function(){
                if(document.getElementById("infoTitle").innerHTML !== "")
                {
                    setTimeout(function(){
                        arrays.pop();},1000);
                    arrays.join("");
                    document.getElementById("infoTitle").innerHTML=arrays.join("");
                }
                else
                {
                   clearInterval(interval2);
                   arr.shift();
                   printText();
                }
            },300);
        }
    },300);
}
