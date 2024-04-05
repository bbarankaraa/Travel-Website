function sendwhatsapp(){
    var phonenumber = "+905325662729";
    var name = document.querySelector('.name').value;
    var departure = document.querySelector('.departure').value;
    var arrive = document.querySelector('.arrive').value;
    var number=document.querySelector('.number').value;
    var message=document.querySelector('.message').value;
    var url = "https://wa.me/"+ phonenumber + "?text="
    +"*Name :*"+name+"%0a"
    +"*Departure Address :*"+departure+"%0a"
    +"*Arrive Address :*"+arrive+"%0a"
    +"*Number Of Passengers :*"+number+"%0a"
    +"*Explanation :*"+message+"%0a%0a"
    +"This is message";
    window.open(url,'_blank').focus();
}