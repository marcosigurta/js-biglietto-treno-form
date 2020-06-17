var createTicket = document.getElementById("create-ticket");
var cancelTicket = document.getElementById("cancel-ticket");

createTicket.addEventListener("click", function () {
    var name = document.getElementById("name-form").value;
    var km = document.getElementById("km").value;
    var categories = document.getElementById("categories").value;
    var price = km * 0.21;
    var discount20 = (price * 20) / 100;
    var discount40 = (price * 40) / 100;

    if (categories == "underage") {
        price = price - discount20;
    } else if (categories == "65+") {
        price = price - discount40;
    } else {
        price = price;
    }

    var traincode = Math.floor(Math.random() * (10000 - 9000 + 1)) + 9000;
    var carriage = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    document.getElementById("ticket").style.opacity = "1";
    document.getElementById("name").innerHTML = name;
    document.getElementById("traincode").innerHTML = traincode;
    document.getElementById("carriageNumber").innerHTML = carriage;
    document.getElementById("age").innerHTML = categories;
    document.getElementById("ticketDetails").innerHTML =
        "Ticket Price: " + price.toFixed(2) + " €";
});

cancelTicket.addEventListener("click", function () {
    document.getElementById("ticket").style.opacity = "0";
    document.getElementById("name").innerHTML = "";
    document.getElementById("name-form").value = "";
    document.getElementById("km").value = "";
    document.getElementById("traincode").innerHTML = "";
    document.getElementById("carriageNumber").innerHTML = "";
    document.getElementById("age").innerHTML = "";
    document.getElementById("categories").value = "adult";

    document.getElementById("ticketDetails").innerHTML =
        "Ticket Price: " + price.toFixed(2) + " €";
});
