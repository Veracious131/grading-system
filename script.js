function show(){
    var display = document.getElementById('display');
    var songPraise = new Audio('audio/Steve-Crown-Hosanna.mp3')
    var songFail = new Audio('audio/fail-144746.mp3')  
    var songDrum = new Audio('audio/failure-drum-sound-effect-2-7184.mp3') 
    var songSuccess = new Audio('audio/success-1-6297 (1).mp3') 
    var songeExellence = new Audio('audio/success-fanfare-trumpets-6185.mp3') 


    if( theInput.value==='' ){
        display.innerHTML = " Please enter a valid number"
        ;
        songFail.play()
    } else if(theInput.value < 0){
        display.innerHTML = "Invalid"
        songFail.play()
    }else if(theInput.value >=0 && theInput.value < 40){
        display.innerHTML = "F-Fail😭😭"
        songDrum.play()
    } else if(theInput.value >= 40 && theInput.value < 45){
        display.innerHTML = "E-Pass😕"
        songDrum.play()
    } else if(theInput.value >= 45 && theInput.value < 50){
        display.innerHTML = "D-Average😁"
        songSuccess.play()
    } else if(theInput.value >= 50 && theInput.value < 60){
        display.innerHTML = "C-Credit😚"
        songSuccess.play()
    } else if(theInput.value >= 60 && theInput.value < 70){
        display.innerHTML = "B-Good😘"
        songeExellence.play()
    } else if( theInput.value >=70 && theInput.value <=100){
        display.innerHTML = "A-Exellence😘😇"
        songPraise.play()
    } else if ( theInput.value > 100){
        display.innerHTML = "Not recognized"
        songFail.play()
    } 
}
// 0-39 F
// 40-45 E
// 46-49 D
// 50-59 C
// 60-69 B
// 70-100 A
 