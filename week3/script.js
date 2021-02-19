var offset = 0; 

function readform(){
    var radioButtons = document.getElementsByName("tz");
    for (var i = 0; i < radioButtons.length; i++){
        if (radioButtons[i].checked == true){
            var output = radioButtons[i].value
        }
    document.getElementById("result").innerHTML = output;
            
    }

}

function getDate(){
    var day = new Date();
    var hour = day.getHours() + readform();
    var minute = day.getMinutes();
    var second = day.getSeconds();
    var time = hour + ":" + minute + ":" + second;
    setTimeout("getDate()",1000);
    document.getElementById("showtime").innerHTML = time;
}
// getDate()