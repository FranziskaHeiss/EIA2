var L02;
(function (L02) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log(_event);
        let fieldset = document.getElementsByTagName("fieldset")[0];
        fieldset.addEventListener("click", clickHandler);
        fieldset.addEventListener("click", clickHandler, true);
        let button = document.querySelector("button");
        button.addEventListener("click", clickHandler);
        fieldset = document.querySelectorAll("fieldset")[1];
        fieldset.addEventListener("mouseover", clickHandler);
        document.addEventListener("keydown", handleKeydown);
        window.setTimeout(handleTimeout, 2000);
    }
    function clickHandler(_event) {
        logEvent(_event);
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
            return;
        }
        console.group("EventInfo");
        let info = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info);
        console.log(_event);
        console.groupEnd();
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=Events.js.map