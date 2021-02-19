// FUNCTIONS WITH ALERTS

function showFirstMessage(text) {
    // here you can not write alert message
    alert(text);
}
showFirstMessage("Hello, John Brown!");

//******************************** */
function showMessage(from, text) {
    alert(from + ": " + text);
}
showMessage("Vasya", "Hallo!");
showMessage("Game starts at", "17:00");

//******************************** */

let from = "Anna"; // elsli peredajom v funkciju v vide parametra, to globaljnaja peremenaja ostajotsja neizmennoj

function showSecondMessage(from, text) {
    // esli ne peredatj from, to v dvuh sluchaeh Anna viveditsja so svjozdochkami *Anna*. Esli peredavatj, to pro alert viveditsja Anna bez zvjozdochek
    from = "*" + from + "*";
    alert(from + ": " + text);
}

showSecondMessage(from, "Hello"); // will display *Anna*, Hello
alert(from); // will display just Anna, without stars. Simply the global variable

//******************************** */