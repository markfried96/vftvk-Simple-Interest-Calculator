function compute()
{
    var principal = document.getElementById("principal").value;

    if(!principal || principal <= 0){
        alert("You need to set an amount and it has to be more then zero.");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    p = document.getElementById("principal").value;
    
    document.getElementById("result").innerHTML="If you deposit <span class='info'>"+principal+"</span>,\<br\>at an interest rate of <span class='info'>"+rate+"%</span>\<br\>You will receive an amount of <span class='info'>"+amount+"</span>,\<br\>in the year <span class='info'>"+year+"</span>\<br\>"
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}