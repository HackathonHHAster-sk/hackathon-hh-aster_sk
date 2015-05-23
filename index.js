
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("jquery.min.js"),
                      data.url("runner.js")]
});

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./aster_sk-16.png",
    "32": "./aster_sk-32.png",
    "64": "./aster_sk-64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});

}

function saveList() {
    
localStorage.setItem("triggerwords", document.getElementById("triggerlist").value);
document.getElementById("panel").hidePopup();

}

function getList() {
    document.getElementById("triggerlist").value = localStorage.getItem("triggerwords");
    //hidePopup();
}

