This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Description

Vanilla redux: reducer, combineReducers, selectors 
Turns into Redux Toolkit(RTK): slice => createSlice(): slice.reducer, slice.actions

# Problems

**13th March 2021**
1/ While unit testing counter increment action, having an issue of getting result bellow:

```typescript 
  const result = increment() {

    type: 'Counter',
    payload: initialState

  }

``` 

Questions:

* How to test the increment() action?
* What is the underlying info on the typescript error?

```typescript
(alias) increment(): {
    payload: undefined;
    type: string;
}
import increment
Calling this {@link redux#ActionCreator} will return a {@link PayloadAction} of type T with a payload of undefined
```

2 parts: 
 1 - PayloadAction will be passed to a reducer in order to update redux state ...
  -> Needs to extract reducer in order to run PayloadAction
  -> A reducer takes 2 things to work: initialState, PayloadAction. PayloadAction is predefined to transform initialState
 
 2 - Typescript language issue
  -> alias
  -> Anonymous type(type T) return
  What does this means as a whole?
