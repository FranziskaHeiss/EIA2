var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "rgba(0,153,255)";
        crc2.fillRect(0, 0, 600, 400);
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map