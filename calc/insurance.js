var base = new Array();
base["18"]=3200;
base["19"]=3000;
base["20"]=2800;
base["21"]=2600;
base["22"]=2400;
base["23"]=2200;
base["24"]=2000;
base["25"]=1800;

function getBasePrice() {
    var basePrice=0;
    var theForm = document.forms["calculator"];
    var selectedAge = theForm.elements["age"];
    basePrice = base[selectedAge.value];
    return basePrice;
}

function printTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+basePrice;   
}