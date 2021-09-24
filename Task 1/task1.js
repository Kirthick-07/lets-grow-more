var i=2;
var doc = document.querySelectorAll(".single-team");

document.querySelectorAll('.single-team').forEach(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".img-content").style.display = "block";
  })
  item.addEventListener('mouseleave', function() {
    item.querySelector(".img-content").style.display = "none";
  })
});

var a = 1;

document.querySelector(".rarrow").addEventListener("click",function(){
  j=a;
  document.querySelectorAll(".thumbnailbar img").forEach((item)=>{
    if((j+1)%8==0){
      item.src="images/img"+8+".jpg";
    }
    else{
      item.src="images/img"+(j+1)%8+".jpg";
    }
    j++;
  });
  var portSrc = document.querySelector("#img5").src;
  document.querySelector(".img-viewport img").src = portSrc;
  a+=1;
});

document.querySelector(".larrow").addEventListener("click",function(){
  j=a;
  document.querySelectorAll(".thumbnailbar img").forEach((item)=>{
    if((j-1)%8==0){
      item.src="images/img"+8+".jpg";
    }
    else{
      item.src="images/img"+(j-1)%8+".jpg";
    }
    j++;
  });
  var portSrc = document.querySelector("#img5").src;
  document.querySelector(".img-viewport img").src = portSrc;
  a+=1;
});