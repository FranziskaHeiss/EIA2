namespace L02 {
    window.addEventListener("load", init); //lädt Inhalt im bezug auf das gesamte Fenster
   
    function init(_event: Event): void {
        console.log(_event);
        let fieldset: HTMLFieldSetElement = document.getElementsByTagName("fieldset")[0]; //Variable fieldset ist HTML Element, NodeLIst an der Stelle [0] -> erstes fieldset
        fieldset.addEventListener("click", clickHandler); //bei click auf fieldset 1 clickHandler ausgeführt werden
        fieldset.addEventListener("click", clickHandler, true); // -> wird in der capturing phase ausgeführt / false -> bubbling phase

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button"); //direkte Zuweisung auf Button Element
        //.querySelektor wählt das erste passende Element im Dokument aus
        button.addEventListener("click", clickHandler);
        
        fieldset = <HTMLFieldSetElement>document.querySelectorAll("fieldset")[1]; 
        //.querySelectorAll gibt alle ELemente zurück auf die, die Zuweiusng zutrifft. Zurückgegebenes Objekt ist eine NodeList -> wir können die Stelle mit [] auswählen      
        fieldset.addEventListener("mouseover", clickHandler); //bei mouseover auf filedset 2 wird clickHanlder ausgeführt

        document.addEventListener("keydown", handleKeydown);
        //DOM-Event-Types: keydown -> eine beliebige Taste wird gedrückt und der Listener hört darauf (wird in der Konsole angegeben 

        window.setTimeout(handleTimeout, 2000); //wird nur ausgeführt, wenn das Fenster neu geladen wird
    }

    function clickHandler(_event: MouseEvent): void {
        logEvent(_event); //Bei Aktion -> Funktionsaufruf logEvent
    }

    function handleKeydown(_event: KeyboardEvent): void {
        logEvent(_event);
    }

    function handleTimeout(_event: Event): void {
        logEvent(_event);
    }

    function logEvent(_event: Event): void {
        if (_event == undefined) { //wenn kein Event ausgefürht wird, wird console.log angezeigt
            console.log("No event object passed");
            return; //**********************************************wozu das return??
        }
        console.group("EventInfo"); // Wenn Event stattgefunden hat von User -> Gruppe "EventInfo" auf Konsole als inline Element ausgeben mit folgenden Infos:
        let info: string = "Type: " + _event.type; //.type -> Eigenschaften des Events aufrufen, die extra angezeigt werden sollen
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info); //Ausgabe von variable "info"
        console.log(_event); //*************************************wozu _event??
        console.groupEnd(); //beendet den .group Aufruf
    }
}