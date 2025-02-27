let visits = 0;

function addVisit() {
    visits++;
    console.log(visits);
}

function afficherNumber(number, element, message, duration){
    let a = 0;
    let time = duration / number ;
    if(message === undefined){
        message = "";
    }
    function incrementAndDisplay() {
        if (a < number) {
            a++;
            document.getElementById(element).innerText = a + " " + message;
            setTimeout(incrementAndDisplay, time);
        }
    }
    incrementAndDisplay();
}

/*document.addEventListener("DOMContentLoaded", function() {
    addVisit();
    afficherNumber(visits);
});*/


afficherNumber(10000, "customers", "Customers", 3);
afficherNumber(1000, "sold", "Sale", 3000);
afficherNumber(1000, "ca", "$", 3000);



