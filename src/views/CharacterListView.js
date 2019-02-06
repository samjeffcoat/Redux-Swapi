import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Fetching my charchters!</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state); 
  return{
    charachters: state.charsReducer.charachters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {getCharacters
    /* action creators go here */
  }
)(CharacterListView);
