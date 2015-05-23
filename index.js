var self = require("sdk/self");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("jquery.min.js"),
                      data.url("runner.js")]
});

