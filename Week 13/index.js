var app = $.spapp({
  defaultView: "#page1",
  templateDir: "./tpl/",
});

app.route({
  view: "#page2",
  onCreate: function () {
    console.log("About page created!");
  },
  onReady: function () {
    console.log("About page ready!");
  },
});

app.run();
