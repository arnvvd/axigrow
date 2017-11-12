'use strict'

const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: "u1ER1lKqRJshq0fQfr7yBsbgP",
  consumer_secret: "QuKb5xXwlNXPCDa41Re9j5JGH6dPojvYM4ZNzf4nK5rB2nj409",
  access_token_key: "2199125736-y864ovtO7ZFtJlU9EoIP2TWD4bVGRYcewVnvqns",
  access_token_secret: "FxWIQMIUCt96HQtfyRaewYwtoiws1P5xJiDvbMIqdfF8i"
})

module.exports = client