var Aufgabe00;
(function (Aufgabe00) {
    function Textbox() {
        var name = prompt("Bitte gib deinen Namen ein?", "");
        if (name != null) {
            document.getElementById("Name").innerHTML = "Hi " + name + ". Hier gibts noch nichts spannendes zu sehen.";
        }
    }
})(Aufgabe00 || (Aufgabe00 = {}));
