let score =120 ; 

if (score >= 70 && score <= 100) {
console.log("A")
}
else if  (score >= 60 && score <= 69){
console.log("B")
}
else if (score >= 50 && score <= 59){
console.log("C")
}
else if (score >= 45 && score <= 49){
console.log("D")
}
else if  (score >= 40 && score <= 45){
console.log("E")
}else if(score >=0 && score <= 40){
    console.log('fail')
}

else {
console.log("invalid")
}

if(score >= 70 && score <= 100){
    document.getElementById("output").innerHTML="A"
    document.getElementById("output").style.color="black";
}
else if(score >= 60 && score <= 69){
    document.getElementById("output").innerHTML="B"
    document.getElementById("output").style.color="blue";
    }
    else if (score >= 50 && score <= 59){
        document.getElementById("output").innerHTML="C"
        document.getElementById("output").style.color="yellow";
        
        }

        else if (score >= 45 && score <= 49){
            document.getElementById("output").innerHTML="D"
        document.getElementById("output").style.color="red";
        
            }
            else if  (score >= 40 && score <= 45){
                document.getElementById("output").innerHTML="E"
                document.getElementById("output").style.color="puple";  
            }

            else {
                document.getElementById("output").innerHTML="invalid"
                document.getElementById("output").style.color="gray";  

                }