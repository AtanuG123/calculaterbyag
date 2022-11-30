alert("Enter values before sin ,cos,tan or √ to use them, means atfirst type '90' then 'tan' to calculate 'tan90'");

document.querySelector("#output").disabled = true;
let string ="";

let button =document.querySelectorAll(".buton");


function calcutate(string){
    let stringeva = eval(string);
    document.querySelector("#previous").value =string +"="+stringeva;
    document.querySelector("#output").value =stringeva;
    return stringeva;
}


Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML =="="){
            try{
                document.getElementById("previous").value="";
               string= calcutate(string);   
            }
            catch(err){
                document.querySelector("#output").value ="error";
            }
        }
        else if (e.target.innerHTML =="AC"){
            string = "";
            document.querySelector("#output").value =string;

            document.querySelector("#previous").value ="";
        }



        else if(e.target.innerHTML=="sin"){
            let stringsin= Math.sin((Math.PI/180)*string);
            let newstring =e.target.innerHTML+string;
            string = stringsin;
            document.querySelector("#output").value =newstring;
          
        }
        else if(e.target.innerHTML=="tan"){
            let stringtan= Math.tan((Math.PI/180)*string);
            let newstring =e.target.innerHTML+string;
            string = stringtan;
            document.querySelector("#output").value =newstring;
            
           
        }
        else if(e.target.innerHTML=="√"){
            let stringtan= Math.pow(string,0.5);
            let newstring =e.target.innerHTML+string;
            string = stringtan;
            document.querySelector("#output").value =newstring;
        }
        else if(e.target.innerHTML=="cos"){
            let stringcos= Math.cos((Math.PI/180)*string);
            let newstring =e.target.innerHTML+string;
            string = stringcos;
            document.querySelector("#output").value =newstring;
        }
        else{
            string =string +e.target.innerHTML;
            console.log(string);
            document.querySelector("#output").value =string;
        }      
});
});

