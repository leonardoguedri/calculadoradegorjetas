function calculatetip(event) {
  event.preventDefault();
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('service').value;
    let people = document.getElementById('people').value;

    if(bill == '' | service == 0){
        alert("Por favor preencha os valores")
        return;
    }
     
    if(people == "" | people <= 1){
        people = 1;
        document.getElementById('each').style.display = "none";
    }else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service)/ people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = "block";
}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculatetip);