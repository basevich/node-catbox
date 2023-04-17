const { parse } = require('url')
const { createHash } = require('crypto')

module.exports = class Utils {
  /**
   * Tells whether the input is a URL or a path
   * @param {string} input
   * @returns {Object}
   */
  static isURL (input) {
    const { slashes, href, path } = parse(input)

    return {
      is: slashes,
      url: href,
      path
    }
  }

  /**
   * Converts buffer into a hashed file name with proper file extension
   * @param {Object} buffer
   * @returns {string}
   */
  static filenameFromBuffer (buffer) {
    return import('file-type').then(({ fileTypeFromBuffer }) => fileTypeFromBuffer(buffer).then((response) => `${createHash('md5').update(buffer).digest('hex')}.${response.ext}`))
  }
}

module.exports.Constants = require('./Constants.js')
module.exports.Resolvers = require('./Resolvers.js')
