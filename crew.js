
const buttons = document.getElementById("navbar2").getElementsByTagName("div") ; 




function navbarOverOutClick() {


for( let i = 0 ; i<buttons.length ; i++ ) { 


    buttons[i].addEventListener("mouseover",function() {   if(window.getComputedStyle(buttons[i]).getPropertyValue("background-color") != "rgb(255, 255, 255)" ) buttons[i].style.backgroundColor = "#86878c" ;  } ) ; 


    buttons[i].addEventListener("mouseout",function() { 
        if(window.getComputedStyle(buttons[i]).getPropertyValue("background-color") != "rgb(255, 255, 255)" ) {
            buttons[i].style.backgroundColor = "#363841"  ; 
        }
    }   ) ;

   
    buttons[i].addEventListener("click",function() {
        if(window.getComputedStyle(buttons[i]).getPropertyValue("background-color") == 'rgb(134, 135, 140)'  )  {  
            
            
            buttons[i].style.backgroundColor = "white" ; 
         

            let skipIndex = i ; 
            for(let j = 0 ; j < buttons.length ; j++) {
                if(j == skipIndex) {
                    continue ; 
                }
                else {
                    buttons[j].style.backgroundColor = 'rgb(54, 56, 65)' ; 
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
                document.getElementById("img").setAttribute("src" , "images/crew/image-douglas-hurley.png");
                document.getElementById("img").style.top = "-27px" ;
                document.getElementById("head").innerHTML = "COMMANDER";
                document.getElementById("name").innerHTML = "DOUGLAS HURLEY";
                document.getElementById("description").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      

            }  


             if( i == 1  )  {
                    document.getElementById("img").setAttribute("src" ,"images/crew/image-mark-shuttleworth.png" ) ;

                    document.getElementById("img").style.top = "33px" ;
                    document.getElementById("head").innerHTML = "Mission Specialist ";
                    document.getElementById("name").innerHTML = " Mark Shuttleworth";
                    document.getElementById("description").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
             }  

             if( i == 2  )  {
                document.getElementById("img").setAttribute("src" , "images/crew/image-victor-glover.png");
                document.getElementById("img").style.top = "27px" ;
                document.getElementById("head").innerHTML = "Pilot  ";
                document.getElementById("name").innerHTML = "  Victor Glover";
                document.getElementById("description").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
         }  


         if( i == 3  )  {
            document.getElementById("img").setAttribute("src" , "images/crew/image-anousheh-ansari.png");
            document.getElementById("img").style.top = "70px" ;
            document.getElementById("head").innerHTML = " Flight Engineer  ";
            document.getElementById("name").innerHTML = "   Anousheh Ansari";
            document.getElementById("description").innerHTML = " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
     }  



        });
}

}

















navbarOverOutClick() ; 
changeContent() ; 

