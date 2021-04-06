> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

The template creates environment for experimenting react redux problem set. Please follow strictly how to use those branches.

# Branching

* Default: `git checkout main`
* Stage: Blank project with one file App.tsx `stage/main` -> `git checkout stage/blank-project`
* Stage: react-redux and formal store setup `stage/main` -> `git checkout stage/react-redux`
* Stage: Project with setup of reduxjs-toolkit `git checkout stage/react-redux-reduxjs-toolkit`
* Stage: reduxjs and testing `stage/main` -> `git checkout stage/reduxjs-testing`
* Stage: css
  + `stage/main` -> `git checkout stage/styled-components`
* Experiment: todo list `git checkout experiment/todo-list`
* Experiment: todo list testing: `experiment/todo-list` -> `git checkout experiment/todo-list-testing`
* Experiment: form validation `git checkout experiment/form`
* Experiment: financial pocket `git checkout experiment/financial-pocket`

# Reading list

**About business logic**

* https://medium.com/@jeffbski/where-do-i-put-my-business-logic-in-a-react-redux-application-9253ef91ce1#.y09fsp98t

# Glossary

**Core**

* action: 
* actionCreator:
* actionTypes:
* reducer:
* enhancedReducer:
* store:
* middleware:
* connect(): 

**Fundamental**

* side effect: "any kind of asynchronous logic (AJAX calls, timeouts, promises), generate random values (Date.now(), Math.random()), modify variables outside the reducer, or run other code that affects things outside the scope of the reducer function." - [Redux guideline](https://redux.js.org/style-guide/style-guide#reducers-must-not-have-side-effects).
* splitting reducer: Act of splitting reducer into parts that only taking care of. For example, todo, visibilityFilters, etc.
* Curried reducers: Concept immer(immutability mutation lib), when you passing a function to a produce. Produce is a API which help to 'produce' immutable state using draftState. Draftstate is a param that you do mutation in it. Draft state info will then be used to produce a new state with change using copy-on-write mechanism
