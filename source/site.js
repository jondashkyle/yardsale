var html = require('choo/html')
var choo = require('choo')
var app = choo()

var model = require('./model')
var main = require('./containers/main')

app.model(model)
app.router(
  ['/', main],
  ['404', main]
)

exports.start = function () {
  var tree = app.start()
  document.body.appendChild(tree)
}
