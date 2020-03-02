function calculate(){
    var total = document.getElementById("total").value;
    var rate = document.getElementById("rate").value;
    var tip = parseFloat(total)*parseFloat(rate/100);
    var tax = parseFloat(total)*0.0550;
    var grand = parseFloat(total)+(tip)+(tax);
    
if(!isNaN(grand)){
    document.getElementById("t").innerHTML = "$ "+tip;
    document.getElementById("sam").innerHTML = "$ "+tax;
    document.getElementById("sum").innerHTML = "$ "+grand;
    event.preventDefault();
    

}
}