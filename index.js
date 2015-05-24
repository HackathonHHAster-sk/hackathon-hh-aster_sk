
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var ss = require("sdk/simple-storage");

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("jquery.min.js"),
                      data.url("runner.js")],
  onAttach: function(worker){
  	var storage = ss.storage.triggerList;
  	worker.port.emit("sendStorage", storage);
  }
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

function handleHide() {
  button.state('window', {checked: false});
}

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  contentScriptFile: self.data.url("panel.js"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

panel.on("show", function() {
  var storage = ss.storage.triggerList;
  panel.port.emit("show",storage);
});

panel.port.on("text-saved", function (text) {
  console.log(text);
  ss.storage.triggerList = text;
  console.log("from storage: " + ss.storage.triggerList);
  panel.hide();
});

