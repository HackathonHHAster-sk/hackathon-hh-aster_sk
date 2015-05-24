
var form = document.getElementById("form");
var textArea = document.getElementById("triggerlist");



form.addEventListener('submit', function onsubmit(event) {
    text = textArea.value;
    self.port.emit("text-saved", text);
}, false);


self.port.on("show", function onShow(storage) {
	textArea.value = storage;
  	//textArea.focus();
});

/*
function getList() {
    document.getElementById("triggerlist").value = localStorage.getItem("triggerwords");
    //hidePopup();
}*/

