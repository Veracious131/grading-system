function show(){
    let display = document.getElementById('display');
    var songFailure = new Audio('audio/Steve-Crown-Hosanna.mp3')
    if( theInput.value==='' ){
        display.innerHTML = " Please enter a valid number"
        ;
    } else if(theInput.value < 0){
        display.innerHTML = "Invalid"
    }else if(theInput.value >=0 && theInput.value < 40){
        display.innerHTML = "F9"
        songFailure.play()
    } else if(theInput.value >= 40 && theInput.value < 45){
        display.innerHTML = "E"
        
    } else if(theInput.value >= 45 && theInput.value < 50){
        display.innerHTML = "D"
    } else if(theInput.value >= 50 && theInput.value < 60){
        display.innerHTML = "C"
    } else if(theInput.value >= 60 && theInput.value < 70){
        display.innerHTML = "B"
    } else if( theInput.value >=70 && theInput.value <=100){
        display.innerHTML = "A+sharp guy, you self try"
    } else if ( theInput.value > 100){
        display.innerHTML = "Not recognized"
    } 
}
// 0-39 F
// 40-45 E
// 46-49 D
// 50-59 C
// 60-69 B
// 70-100 A
 