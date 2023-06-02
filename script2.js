let a=document.getElementById("num")
let b=Math.random()*100+1
let c=Math.floor(b)
let d=document.getElementById("text")
let e=document.getElementById("game")
let f=document.getElementById("chan")
let g=document.getElementById("wincount")

let count=99
let count1=1
const guess=()=>{
if(a.value>c){
   d.innerHTML="Your Guess Is High"
   f.innerHTML=`${count--}`
   
}
else if(a.value<c){
    d.innerHTML="Your Guess Is Low"
    f.innerHTML=`${count--}`
   
}
else{
    d.innerHTML=" &#128525 &#128525Hurray You Won &#128525 &#128525"
   e.style.backgroundColor="green"
   a.style.backgroundColor="green"
   f.innerHTML=`${count--}`
   g.innerHTML=`${count1++}`
   
}
}
