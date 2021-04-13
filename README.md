This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Description

Vanilla redux: reducer, combineReducers, selectors 
Turns into Redux Toolkit(RTK): slice => createSlice(): slice.reducer, slice.actions

Some incremental bricks:

* Axios component
* Async test.

# Problems

Work: 

* Axios request from github
* Test jest with axios

``` 

test("calling axios", done => {
  axios.get().then({ res =>
    
    done()
  })
}) 
```

* Parsing response object. The response in JSON format, it can just be read directly.

for example response = {name: "Giang" , age: 18} --> just read it directly: const {name, age} = response

* axios config stuff
