let isClick = true ; 
document.getElementById("menuicon").addEventListener("click" , function() {


    if( isClick == true ) {
        document.getElementById("menunavbar").style.display = "block";
        document.getElementById("menuicon").innerHTML = "close" ; 
        isClick = false ; 
    }    
    else {
        document.getElementById("menunavbar").style.display = "none";
        document.getElementById("menuicon").innerHTML = "menu" ; 
        isClick = true ; 
    }

});