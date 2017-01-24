var recsst = require('recsst')
var gr8 = require('gr8')
var h = require('choo/html')

var css = gr8({
  lineHeight: [1, 1.35, 1.5],
  responsive: true,
  fontSize: [1, 1.25, 1.3, 1.75, 2],
  spacing: [0.25, 0.5, 1, 1.5, 2, 3]
})

var custom = `
  p {
    margin-top: 1.35em;
    margin-bottom: 1.35em;
  }
  p:first-child { margin-top: 0; text-indent: 0; }
  p:last-child { margin-bottom: 0; text-indent: 0; }

  .em {
    display: inline-block;
    position: relative;
    margin-right: 0.5rem;
    height: 0.75em;
    width: 2.5rem;
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

  a .em:before {
    content: '';
    position: absolute;
    top: 0;
    right: 1px;
    border: 1px solid #000;
    border-left: 0;
    border-bottom: 0;
    height: 0.75em;
    width: 0.75em;
    transform: rotate(45deg) translateY(0.55px);
    opacity: 0;
  }

  a:hover .em:before {
    opacity: 1;
  }
`

css.add({
  prop: 'color',
  prefix: 'tc',
  hyphenate: true,
  vals: [{
    black: '#000'
  }, {
    red: '#f00'
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

css.add({
  prop: 'text-indent',
  unit: 'em',
  vals: [1, 1.5, 2, 3]
})

css.add({
  prop: 'text-indent',
  suffix: ' p',
  unit: 'rem',
  vals: [3]
})

exports.start = function () {
  var elCustom = h`<style></style>`
  elCustom.innerHTML = custom

  css.attach()
  recsst.attach()

  document.head.appendChild(elCustom)
}

