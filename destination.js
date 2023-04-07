
const buttons = document.getElementById("navbar2").getElementsByTagName("a") ; 




function navbarOverOutClick() {


for( let i = 0 ; i<buttons.length ; i++ ) {


    buttons[i].addEventListener("mouseover",function() {   if(window.getComputedStyle(buttons[i]).getPropertyValue("border-bottom-color") != "rgb(255, 255, 255)" ) buttons[i].style.borderBottom = "3px solid gray" ;  } ) ; 


    buttons[i].addEventListener("mouseout",function() { 
        if(window.getComputedStyle(buttons[i]).getPropertyValue("border-bottom-color") != "rgb(255, 255, 255)" ) {
            buttons[i].style.borderBottom = "none"  ; 
        }
    }   ) ;

   
    buttons[i].addEventListener("click",function() {
        if(window.getComputedStyle(buttons[i]).getPropertyValue("border-bottom-color") == "rgb(128, 128, 128)"  )  {  
            
            
            buttons[i].style.borderBottom = "3px solid white" ; 
         

            let skipIndex = i ; 
            for(let j = 0 ; j < buttons.length ; j++) {
                if(j == skipIndex) {
                    continue ; 
                }
                else {
                    buttons[j].style.borderBottom = "none" ; 
                }
            }
        }
        
    });


    




}
}



function changeContent() { 

for(let i = 0 ; i<buttons.length ; i++ ) {
        buttons[i].addEventListener("click", function() {

            if( i == 0  )  {
                document.getElementById("img").setAttribute("src" , "images/destination/image-moon.png");
                document.getElementById("planethead").innerHTML = "MOON";
                document.getElementById("planetdescription").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites";
                document.getElementById("planetdistance").innerHTML = "384,400 KM";
                document.getElementById("planettraveltime").innerHTML = "3 DAYS";

            }  


             if( i == 1  )  {
                    document.getElementById("img").setAttribute("src" , "images/destination/image-mars.png");
                    document.getElementById("planethead").innerHTML = "MARS";
                    document.getElementById("planetdescription").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,  the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
                    document.getElementById("planetdistance").innerHTML = "225 MIL. KM";
                    document.getElementById("planettraveltime").innerHTML = "9 MONTHS";
             }  

             if( i == 2  )  {
                document.getElementById("img").setAttribute("src" , "images/destination/image-europa.png");
                document.getElementById("planethead").innerHTML = "EUROPA";
                document.getElementById("planetdescription").innerHTML = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a     winter lover’s dream. With an icy surface, it’s perfect for a bit of  ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin.";
                document.getElementById("planetdistance").innerHTML = "628 MIL. KM";
                document.getElementById("planettraveltime").innerHTML = "3 YEARS";
         }  


         if( i == 3  )  {
            document.getElementById("img").setAttribute("src" , "images/destination/image-titan.png");
            document.getElementById("planethead").innerHTML = "TITAN";
            document.getElementById("planetdescription").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan    is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
            document.getElementById("planetdistance").innerHTML = "1.6 BIL. KM";
            document.getElementById("planettraveltime").innerHTML = "7 YEARS";
     }  



        });
}

}

















navbarOverOutClick() ; 
changeContent() ; 

