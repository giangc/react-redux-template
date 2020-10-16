import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { RootState } from './redux/reducers'
import { update } from './redux/reducers/actions'
import { selectContent } from './redux/reducers/mySelector'

class App extends React.Component<React.PropsWithChildren<Props>, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      input: ""
    }
  }

  handleChangeInput = (value: string) => {
    this.setState({
      input: value
    })
  }

  handleEnter = (input: string) => {
    this.props.update(input)
  }

  render() {
    return (
      <div className="App">

        <label htmlFor="myInput">Input content: </label>
        <input
          id="myInput"
          type="text"
          placeholder="input here"
          onChange={event =>
            this.handleChangeInput(event.target.value)
          }
          value={this.state.input}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              this.handleEnter(event.currentTarget.value)
            }
          }}
        />
        <section>
          <h1>Content</h1>
          <p>
            {this.props.myReduxContent}
          </p>
        </section>
      </div>
    )
  }
}

export type OwnProps = {
  somethingElse?: string
}
export type DispatchProps = {
  update: (content: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

interface State {
  input: string
}

export type StateProps = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    myReduxContent: selectContent(state)
  }
}

export default connect(mapStateToProps, {
  update
})(App);
