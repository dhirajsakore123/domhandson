
let count=0
const getelement=()=>{
    if(count%2===0){
        let a=document.getElementsByTagName("h1")
        a[0].innerHTML="Hello World"
        count++
    }
    else{
        let a=document.getElementsByTagName("h1")
        a[0].innerHTML="Hello "
        count--   
    }
    
  }
  let count1=0
  const change=()=>{
    if(count1%2===0){
        let a=document.getElementsByTagName("p")
        a[0].innerHTML="Hello World"
        count1++
    }
    else{
        let a=document.getElementsByTagName("p")
        a[0].innerHTML="Welcome to Elevation academy "
        count1--   
    }
    
  }
  

  const changecolor=()=>{
    
        let a=document.getElementsByTagName("h1")
        a[1].setAttribute("id","heading")
      
}


let count2=0
let a=document.getElementById("flexcontainer")
  const changeflex=()=>{
   if(count2%2===0){
       
        a.style.flexDirection="column"
        count2++
    } 
    else{
       
        a.style.flexDirection="row"
        count2--
    } 
  }
  let display = document.getElementById('time');
  let clock = document.getElementById('clock');
  
  
  

    function startClock(){
    
    let time = new Date();
    
    let hrs =time.getHours();
    
    let mins = time.getMinutes();
    
    let secs =time.getSeconds();

    if(hrs>12){
        hrs=hrs-12
    }
    clock.innerHTML=`${hrs}:${mins}:${secs}`
    
    }
    setInterval(()=>{
        startClock();
    },1000)
    
    
  
    
        

    
  

  