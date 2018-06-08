const fetch = require('node-fetch');
const parser = require('xml2json');

const getXML = async (url) => {

  const response = await fetch(url, {
    method: 'GET'
  })
  const text = await response.text()

  if (response.ok) {
    return parser.toJson(text)
  } else {
    throw new Error(response.status)
  }
}

module.exports = getXML