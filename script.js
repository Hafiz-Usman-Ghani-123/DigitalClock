 
function showTime() {
    var date = new Date();
    var Hours = date.getHours();
    var mins = date.getMinutes();
    var sec = date.getSeconds();
    var am_or_pm = "AM"

    // zero ko khatam karny k liye 
    if (Hours == 0) {
        Hours = 12;
    }

    // 24 ghantoo ko 12  ghanto me change krny k liye 
    if (Hours > 12) {
        Hours = Hours - 12;
        am_or_pm = "PM"
    }

    // Zero Add krny k liye
    Hours = (Hours < 10) ? "0" + Hours : Hours;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;

    // time dekhany ka format 
    var time = Hours + ":" + mins + ":" + sec + " " + am_or_pm;

    // time div me prit krny k liye 
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}showTime();

// print my name 
//document.write("<h2 style='text-align : center;'> Usman Ghani  <h3/>");

