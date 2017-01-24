var ov = require('object.values')
var h = require('choo/html')
var x = require('xtend')

var listItems = require('./list-items')
var gridThumbs = require('./grid-thumbs')

function navigation (opts) {
  var o = x({
    items: { }
  }, opts)

  var items = ov(o.items)
    .map(item => h`<div class="c12" sm="c4">
      <span class="em mr0-5" sm="din"></span>
      <a href="#${item}" class="tdn tc-black">${item}</a>
    </div>`)

  return h`
    <div class="x xw">
      <div class="c12 x xw" sm="c12">
        <div class="c12" sm="fwb">categories</div>
        ${items}
      </div>
      <div class="c12 pt2" sm="c12">
        <div class="c12" sm="fwb">contact</div>
        <div class="c12">
          <span class="em mr0-5" sm="din"></span>
          <a href="mailto:contact@jon-kyle.com" class="tdn tc-black">email</a>
        </div>
      </div>
    </div>
  `
}

module.exports = function (state, prev, send) {
  var elNavigation = navigation({
    items: state.categories
  })

  var elThumbs = gridThumbs({
    items: state.items,
    pathImages: state.site.pathImages
  })

  var elItems = listItems({
    items: state.items,
    pathImages: state.site.pathImages
  })

  var elNote = h`<div class="c6" md="c8" sm="c12"></div>`
  elNote.innerHTML = state.note

  return h`
    <div class="x xw ff-sans ls2 fs1-3 lh1-35">
      <div class="c2" sm="c12">
        <div class="psf t0 l0 p1 c2" sm="psr c12">
          ${elNavigation}
        </div>
      </div>
      <div class="c10" sm="c12">
        <div class="p1">
          <div class="">
            ${elNote}
          </div>
        </div>
        <div>
          ${elThumbs}
        </div>
        <div class="mt2">
          ${elItems}
        </div>
      </div>
    </div>
  `
}