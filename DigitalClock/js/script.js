




setInterval(function getTime(){
    let second=new Date().getSeconds();
   let formattedSeconds=second.toString().padStart(2,'0');
   let minute=0;
   let formattedminute=second.toString().padStart(2,'0');
   let hour=new Date().getHours()/12;
    document.querySelector("#curret_second").innerHTML=formattedSeconds;
    document.querySelector("#curret_minute").innerHTML=minute=new Date().getMinutes();
    document.querySelector("#curret_hour").innerHTML=Math.ceil(hour);
},1000)


