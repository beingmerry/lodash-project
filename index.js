
class _ {
  static name_of_method () {
    // code
  }
  static chunk (array, size = 1) {
    let newArray = []
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      newArray.push(chunk)
    }
    return newArray
  }

  static compact(array) {
    let newArray = array.filter( val => {return Boolean(val) === true} )
    return newArray
  }
}

module.exports = _;