const { NOW_URL } = process.env
const { alias } = require('./now.json')

module.exports = {
  // host: NOW_URL ? `https://${alias}` : 'http://localhost:3000',
  basePath: '/account',
}
