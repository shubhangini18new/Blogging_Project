/*function setDetails() {
    var BookTitle=document.getElementById("btitle").value;
       var BookContent=document.getElementById("bcontent").value;
       var imagePath=document.getElementById("imagepath").value;
  
}

function getDetails() {
    var BookTitle = sessionStorage.getItem("objTitle");
    var BookContent = sessionStorage.getItem("objContent");
    var imagePath = sessionStorage.getItem("objImagepath");
console.log(BookTitle)
console.log(BookContent)
console.log(imagePath)
   
}*/

function addData(){
    var BookTitle=document.getElementById("btitle").value;
    var BookContent=document.getElementById("bcontent").value;
    var imagePath=document.getElementById("imagepath").value;
    
    var Div = document.getElementById("main");    // point to div tag using id main 
    var divTag = document.createElement("div"); 
   
    var empTag = document.createElement("div"); 
     var empTag2 = document.createElement("div"); 
    var ImgTag = document.createElement("img"); 
 divTag.setAttribute("class","contain")
    var empTagContent = document.createTextNode(BookTitle);
  // var empTagContent2=document.createTextNode(BookContent)
    empTag.appendChild(empTagContent);

    
    //var empTagContent2 = document.createTextNode(BookContent);
    //empTag.appendChild(brk);
   
    
    empTag2.append(BookContent)
  
    
    divTag.appendChild(empTag) ;
    divTag.appendChild(empTag2)
    divTag.appendChild(ImgTag);  
    Div.appendChild(divTag);
   

    empTag.setAttribute("class","bookTitle");
    empTag2.setAttribute("class","bookcontent");
    ImgTag.setAttribute("src",imagePath)
    ImgTag.setAttribute("class","img_styles");

//reset();
}

function reset(){
    var BookTitle=document.getElementById("btitle").value="";
    var BookContent=document.getElementById("bcontent").value="";
    var imagePath=document.getElementById("imagepath").value="";
}

