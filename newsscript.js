document.getElementById("reset").disabled=true;
document.getElementById("submit").onclick = function execute(){
    document.getElementById("submit").disabled=true;
    document.getElementById("reset").disabled=false;
    const targat = document.getElementById("datetime").value;
   
    let intervalid = setInterval(function updatetimer(){
        let current = new Date();
        let diff = new Date(targat).getTime()-current.getTime();
        document.getElementById("reset").onclick=function execute(){
         clearInterval(intervalid);
         document.getElementById("days").innerText=" "

         document.getElementById("hours").innerText=" "

         document.getElementById("mins").innerText=" "

         document.getElementById("secs").innerText=" "
         document.getElementById("submit").disabled=false;
         document.getElementById("reset").disabled=true;
        }    
        document.getElementById("days").innerText= Math.floor(diff/(1000*24*60*60));

        document.getElementById("hours").innerText= Math.floor((diff%(1000*24*60*60))/(1000*60*60));

        document.getElementById("mins").innerText= Math.floor((diff%(1000*60*60))/(1000*60));

        document.getElementById("secs").innerText= Math.floor((diff%(1000*60))/(1000));

        if(diff<=0 ){
            clearInterval(intervalid);
            document.getElementById("days").innerText="NA"

            document.getElementById("hours").innerText="NA"

            document.getElementById("mins").innerText="NA"

            document.getElementById("secs").innerText="NA"
            
            document.getElementById("submit").disabled=false;
            document.getElementById("reset").disabled=true;
            
    }},1000);
}