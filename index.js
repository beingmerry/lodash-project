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
}
