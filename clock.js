window.onload = function(){
  function showTime(){
    let date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let d = document.getElementById("day").innerHTML = days[date.getDay()];
    let spans = document.querySelectorAll("#palette span");
    let h = date.getHours();
    let m =  date.getMinutes();
    let s = date.getSeconds();
    let am_pm = "AM";


    if(h == 0){
      h = 12;
    }

    if(h > 12){
      h -= 12
      am_pm = "PM";
    }

    h = h < 10 ? "0"+h :h;
    m = m < 10 ? "0"+m :m;
    s = s < 10 ? "0"+s :s;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s
    document.getElementById("session").innerHTML = am_pm;

    function animateClock(span){
      span.className = "turn";
      setTimeout(function(){
        span.className = "";
      }, 700)
    }

    animateClock(spans[3]);
    if(s == 59) animateClock(spans[2]);
    if(m == 59 && s == 59) animateClock(spans[1]);
    if(h == 11 && m == 59 && s == 59) animateClock(spans[0]);
    if(h == 11 && m == 59 && s == 59) animateClock(spans[4]);

      setTimeout(showTime, 1000);

  }
  showTime();
}
