var recsst = require('recsst')
var gr8 = require('gr8')
var h = require('choo/html')

var css = gr8({
  lineHeight: [1, 1.35, 1.5],
  responsive: true,
  fontSize: [1, 1.25, 1.3, 1.75, 2],
  spacing: [0.25, 0.5, 1, 1.5, 2, 3],
})

var custom = `
  p {
    text-indent: 1rem;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  p:first-child { margin-top: 0 }
  p:last-child { margin-bottom: 0 }

  .em {
    display: inline-block;
    position: relative;
    height: 0.75em;
    width: 2rem;
  }

  .em:after {
    background: #000;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
  }
`

css.add({
  prop: 'color',
  prefix: 'tc',
  hyphenate: true,
  vals: [{
    black: '#000'
  }]
})

css.add({
  prop: 'letter-spacing',
  unit: 'rem',
  vals: [{
    2: 0.035
  }]
})

css.add({
  prop: 'font-family',
  hyphenate: true,
  vals: [{
    sans: '"Helvetica Neue", arial, sans-serif',
  }, {
    mono: 'menlo, monaco, monospace'
  }]
})

css.add({
  prop: 'border',
  hyphenate: false,
  vals: [{
    '1b': '1px solid #000',
  }]
})

css.add({
  prop: 'border-top',
  hyphenate: false,
  vals: [{
    '1b': '1px solid #000',
  }]
})

css.add({
  prop: 'display',
  prefix: 'di',
  vals: [{
    n: 'none !important',
  }]
})

exports.start = function () {
  var elCustom = h`<style></style>`
  elCustom.innerHTML = custom
  document.head.appendChild(elCustom) 

  css.attach()
  recsst.attach()
}