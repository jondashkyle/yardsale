var xhr = require('xhr')
var ov = require('object.values')
var x = require('xtend')

module.exports = {
  state: {
    note: '',
    site: {
      pathImages: 'images'
    },
    items: { },
    categories: { }
  },
  subscriptions: {
    items: function (send, done) {
      xhr({
        uri: 'items.json'
      }, function (err, resp, body) {
        try {
          send('init', formatItems(body), done)
        } catch (err) {
          alert('unable to load items, sorry')
          console.log(err)
        }
      })
    }
  },
  reducers: {
    items: function (state, data) {
      return { items: data }
    },
    init: function (state, data) {
      return x(state, data)
    }
  }
}

function formatItems (body) {
  var formatted = JSON.parse(body)
  var categories = { }

  var items = ov(formatted.items).map(item => {
    categories[item.type] = item.type
    return x(
      item,
      {
        image: item.image.map(img =>
          ['images/', img].join('')
        ) 
      }
    )
  })

  return {
    note: formatted.note.join('<br><br>'),
    items: items,
    categories: categories
  }
}