var x = require('xtend')
var h = require('choo/html')

function image (opts) {
  var o = x({
    url: ''
  }, opts)

  return h`
    <div
      class="bgsct bgpc bgrn ar100"
      style="background-image: url(${o.url})"
    ></div>
  `  
}

module.exports = image