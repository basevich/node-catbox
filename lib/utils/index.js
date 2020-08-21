const { parse } = require('url')

module.exports = class Utils {
  static resolveFiles(...files) {
    return [].concat.apply([], files)
      .filter((file) => !file.includes(' '))
      .map((file) => parse(file).slashes ? parse(file).path.slice(1) : file)
  }

  static resolveAlbum(short) {
    short = parse(short).path
    return short.slice(0, 3) === '/c/' ? short.slice(3) : short
  }
}