namespace L02 {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log(_event);
        let fieldset: HTMLFieldSetElement = document.getElementsByTagName("fieldset")[0];
        fieldset.addEventListener("click", clickHandler);
        fieldset.addEventListener("click", clickHandler, true);

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        button.addEventListener("click", clickHandler);
        
        fieldset = <HTMLFieldSetElement>document.querySelectorAll("fieldset")[1];
        fieldset.addEventListener("mouseover", clickHandler);

        document.addEventListener("keydown", handleKeydown);

        window.setTimeout(handleTimeout, 2000);
    }

    function clickHandler(_event: MouseEvent): void {
        logEvent(_event);
    }

    function handleKeydown(_event: KeyboardEvent): void {
        logEvent(_event);
    }

    function handleTimeout(_event: Event): void {
        logEvent(_event);
    }

    function logEvent(_event: Event): void {
        if (_event == undefined) {
            console.log("No event object passed");
            return;
        }
        console.group("EventInfo");
        let info: string = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info);
        console.log(_event);
        console.groupEnd();
    }
}