var RandomNo1 = Math.floor((Math.random() * 6) + 1);
 var randomimg="dice"+RandomNo1+".png";
 var imagesrc= "images/" +randomimg;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",imagesrc);

 var RandomNo2 = Math.floor((Math.random() * 6) + 1);
 var randomimg="dice"+RandomNo2+".png";
 var imagesrc2= "images/" +randomimg;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",imagesrc2);
  
 if(RandomNo1>RandomNo2){
  
  var x =document.querySelector("h1").innerHTML="player1wins";

 }

else{
  
 if(RandomNo1<RandomNo2){
  var x =document.querySelector("h1").innerHTML="player2wins";

 }

 
 else{
  var x =document.querySelector("h1").innerHTML="ops draw";


 }
}

