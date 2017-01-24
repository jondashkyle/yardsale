var ov = require('object.values')
var x = require('xtend')
var h = require('choo/html')

var elImage = require('../components/image')

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = function (opts) {
  var o = x({
    items: { }
  }, opts)

  var items = ov(o.items)
  var elGrid = items
    .map(item => {
      return item.image.map(img => {
        return h`<a href="#${item.id}" class="c3 p0-5" md="c4" sm="c6">${elImage({ url: img })}`
      })
    })
    .reduce((a, b) => a.concat(b), [])

  return h`
    <div class="x xw p0-5">
      ${shuffle(elGrid)}
    </div>
  `
}