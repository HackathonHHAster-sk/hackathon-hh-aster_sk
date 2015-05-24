
var form = document.getElementById("form");
var textArea = document.getElementById("triggerlist");

form.addEventListener('submit', saveList());


function saveList() {

console.log("saveList entered");
text = textArea.value;
//localStorage.setItem("triggerwords", document.getElementById("triggerlist").value);
//ss.storage.value = document.getElementById("triggerlist").value;
//document.getElementById("panel").hidePopup();
self.port.emit("text-saved", text);
}

self.port.on("show", function onShow() {
	//alert("fu!");
  //textArea.focus();
});

function getList() {
    document.getElementById("triggerlist").value = localStorage.getItem("triggerwords");
    //hidePopup();
}

