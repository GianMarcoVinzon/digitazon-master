sum = newState


[1,2,3,4].map((n) => n * 2)

function map(arr, fn) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]))
  }
  return res
}


// -------

function useState(initial) {
  let state = buildState(initial)
  return [
    state,
    (newState) => {
      if (isFunction(newState)) {
        state = newState(state)
      } else {
        state = newState()
      }
      renderComponent()
    }
  ]
}

// ------------