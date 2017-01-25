var ov = require('object.values')
var h = require('choo/html')
var x = require('xtend')

var elImage = require('../components/image')

function getLines (line) {
  if (line) {
    var el = h`<div></div>`
    el.innerHTML = line.split(' ').join('<br>')
    return el
  } else {
    return ''
  }
}

function elImages (imgs) {
  var col = imgs.length >= 5
    ? 4
    : imgs.length >= 2
    ? 6
    : 12

  return imgs.map(img => h`
    <div class="db c${col} p0-5">
      ${elImage({
        url: img
      })}
    </div>
  `)
}

function elItem (o, i) {
  var id = h`<div id="${o.type}"></div>`
  return h`
    <div
      class="c12 x xw psr"
      id="${o.id}"
    >
      ${o.showCategory ? id : ''}
      <div class="c5 p0-5" sm="c12">
        <div class="x xjb c12 bt1b pt0-5">
          <strong>${o.title}</strong>
          <strong class="tc-red">${o.sold ? 'SOLD' : ''}</strong>
        </div>
        <div class="x xw mt1">
          <div class="c6">New</div>
          <div class="c6">Asking</div>
          <div class="c6"><strike>${getLines(o.new)}</strike></div>
          <div class="c6"><strong>${getLines(o.asking)}</strong></div>
        </div>
        <div class="c10 mt2 ti3">${o.text}</div>
      </div>
      <div class="c7 x xw" sm="c12">
        ${elImages(o.image)}
      </div>
    </div>
  `
}

module.exports = function(opts) {
  var o = x({
    items: { },
    pathImages: opts.pathImages
  }, opts)

  var items = ov(o.items)
  var categories = { }

  var elsItems = items
    .map(item => {
      var el = elItem(
        x({
          showCategory: !categories[item.type]
        }, item)
      )
      categories[item.type] = true
      return el
    })

  return h`
    <div class="x xw px1">  
      ${elsItems}
    </div>
  `
}