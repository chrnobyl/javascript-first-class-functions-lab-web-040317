function countdown(callback) {
  let time = window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, value) {
  return multiplierValue * value
}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)

// Instead of a function returning another function (like we did in the previous exercise), we can also write a function
// that takes two values right away: the multiplierValue and the value. However, we can't create the doubler and
// tripler functions by just calling this new function with two arguments! The trick is to partially apply the function.
// We can do this using .bind().
// Quick hint: you can forget about .bind()'s first argument (the this context) for now — you can use null as its value.
// To pass all tests, do the following:
// Create a multiplier() function that takes two arguments and multiplies them together.
// Create a doublerWithBind variable that partially applies the multiplier() function by passing in 2 as its first argument.
// Create a triplerWithBind variable that partially applies the multiplier() function by passing in 3 as its first argument.
