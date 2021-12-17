var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);


function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);
    

  

    var seconddiff=Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);
    var hoursdiff=Math.floor(minutediff/60);
    console.log(hoursdiff);

    var daydiff=Math.floor(hoursdiff/24);
    console.log(daydiff);

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);

      console.log(currentdate.getMonth());
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

   }
   else{
     console.log("give a proper valid date")  
   }
   var div6=document.createElement("div");
   div6.innerHTML=`${currentdate}`;
   document.body.append(div6)

   var div7=document.createElement("div");
div7.innerHTML=`${inputdate}`;
document.body.append(div7)

var div=document.createElement("div");
div.innerHTML=`this is milli seconds  ${millisecdiff}`;
document.body.append(div)

var div1=document.createElement("div");
div1.innerHTML=`this is seconds diff ${seconddiff}`;
document.body.append(div1)

var div2=document.createElement("div");
div2.innerHTML=`this is hours diff ${hoursdiff}`;
document.body.append(div2)

var div3=document.createElement("div");
div3.innerHTML=`this is day diff ${daydiff}`;
document.body.append(div3)

var div4=document.createElement("div");
div4.innerHTML=`this is month diff ${monthdiff}`;
document.body.append(div4)

var div5=document.createElement("div");
div5.innerHTML=`this is year diff ${yeardiff}`;
document.body.append(div5)

}
