import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectedQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined; //03.4:43
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
  /**
   * Returns an integer representing an index in state.quotes
   * if state.quotes is empty, returns undefined
   */
  generateNewQuoteIndex() {//in terminal  npm install lodash, npm install @typescript-eslint/parser --save-dev
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }


  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container >
        <Grid xs={11} lg={8} item>
          {
            this.selectedQuote ? 
            <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />: 
            null}
        </Grid>
      </Grid>

    );
  }
}

export default withStyles(styles)(App);

/**
 * $ npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
 */
