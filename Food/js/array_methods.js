// ForEach -------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 2, 2]
// arr[10] = 10

Array.prototype.myForEach = function(callback, thisArg) {
  let obj = Object(this),
      context = this

  if(this == null || this == undefined) {
    throw new Error('Cant iterate over undefined or null')
  }
  if(typeof callback !== 'function') {
    throw new Error('Callback is not a function')
  }
  if(arguments.length > 1) {
    context = thisArg
  }

  for(let i = 0; i < context.length; i++) {
    if(i in obj) {
      callback.call(context, context[i], i, context)
    }
  }
} 

//arr.myForEach((element, index) => console.log(index, element))



// Filter --------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 2, 2]
// arr[10] = 10

Array.prototype.myFilter = function(callback, thisArg) {
  let result = [],
      context = this,
      obj = Object(context)

  if(this === null || this === undefined) {
    throw new Error('Cant iterate over undefined or null')
  }
  if(typeof callback  !== 'function') {
    throw new Error('This is not a function')
  }
  if(arguments.length > 1) {
    context = thisArg
  }

  for(let i = 0; i < this.length; i++) {
    if(i in obj) {
      if(callback.call(context ,this[i], i, this)) {
        result.push(this[i])
      }
    }
  }
  return result
}

// let newArr = arr.myFilter(element => element === 2)
// console.log(newArr)


// Map -------------------------------------------------------------

let arr = [1, 2, 3, 4, 5, 2, 2]
arr[10] = 10

Array.prototype.myMap = function(callback, thisArg) {
  let result = [],
      context = this,
      obj = Object(context)
      
  if(context === null || context === undefined) {
    throw new Error('Cant iterate over undefined or null')
  }
  if(typeof callback !== 'function') {
    throw new Error('This is not a function')
  }
  if(arguments.length > 1) {
    context = thisArg
  }

  for(let i = 0; i < context.length; i++) {
    if(i in obj) {
      result.push(callback.call(context, context[i], i, context))
    }
  }
  return result
}

let newArr = arr.myMap(element => element * 2)
console.log(newArr)