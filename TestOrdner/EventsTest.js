var L02;
(function (L02) {
    window.addEventListener("load", init); //l�dt Inhalt im bezug auf das gesamte Fenster
    function init(_event) {
        console.log(_event);
        let fieldset = document.getElementsByTagName("fieldset")[0]; //Variable fieldset ist HTML Element, NodeLIst an der Stelle [0] -> erstes fieldset
        fieldset.addEventListener("click", clickHandler); //bei click auf fieldset 1 clickHandler ausgef�hrt werden
        fieldset.addEventListener("click", clickHandler, true); // -> wird in der capturing phase ausgef�hrt / false -> bubbling phase
        let button = document.querySelector("button"); //direkte Zuweisung auf Button Element
        //.querySelektor w�hlt das erste passende Element im Dokument aus
        button.addEventListener("click", clickHandler);
        fieldset = document.querySelectorAll("fieldset")[1];
        //.querySelectorAll gibt alle ELemente zur�ck auf die, die Zuweiusng zutrifft. Zur�ckgegebenes Objekt ist eine NodeList -> wir k�nnen die Stelle mit [] ausw�hlen      
        fieldset.addEventListener("mouseover", clickHandler); //bei mouseover auf filedset 2 wird clickHanlder ausgef�hrt
        document.addEventListener("keydown", handleKeydown);
        //DOM-Event-Types: keydown -> eine beliebige Taste wird gedr�ckt und der Listener h�rt darauf (wird in der Konsole angegeben 
        window.setTimeout(handleTimeout, 2000); //wird nur ausgef�hrt, wenn das Fenster neu geladen wird
    }
    function clickHandler(_event) {
        logEvent(_event); //Bei Aktion -> Funktionsaufruf logEvent
    }
    function handleKeydown(_event) {
        logEvent(_event);
    }
    function handleTimeout(_event) {
        logEvent(_event);
    }
    function logEvent(_event) {
        if (_event == undefined) {
            console.log("No event object passed");
            return; //**********************************************wozu das return??
        }
        console.group("EventInfo"); // Wenn Event stattgefunden hat von User -> Gruppe "EventInfo" auf Konsole als inline Element ausgeben mit folgenden Infos:
        let info = "Type: " + _event.type; //.type -> Eigenschaften des Events aufrufen, die extra angezeigt werden sollen
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info); //Ausgabe von variable "info"
        console.log(_event); //*************************************wozu _event??
        console.groupEnd(); //beendet den .group Aufruf
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=EventsTest.js.map