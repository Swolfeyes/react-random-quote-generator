import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames/bind';

import QuoteBox from '../quote-box/main.js';

import styles from './main.scss';
import fade from './animate.scss';

const cx = classnames.bind(styles);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchRequestStatus: undefined,
      data: "",
    };

    this.handleFetchRequestPending = this.handleFetchRequestPending.bind(this);
    this.handleFetchRequestSuccess = this.handleFetchRequestSuccess.bind(this);
    this.handleFetchRequestFail = this.handleFetchRequestFail.bind(this);
  }

  componentDidMount() {
    this.handleFetchRequestPending();

    this.getQuote();
  }

  handleClick() {
    this.setState({
      clicked: true,
    });

    this.getQuote();
  }

  getQuote() {
    fetch("https://talaikis.com/api/quotes/random")
      .then(res => res.json())
      .then(this.handleFetchRequestSuccess)
      .catch(this.handleFetchRequestFail)
  };

  handleFetchRequestSuccess(response) {

    this.setState({
      fetchRequestStatus: 'success',
      data: response,
    });
  }

  handleFetchRequestPending() {
    this.setState({
      fetchRequestStatus: 'pending',
    });
  }

  handleFetchRequestFail() {
    this.setState({
      fetchRequestStatus: 'error',
    })
  }


  render() {
    const { fetchRequestStatus, data } = this.state;

    return (
      <div className={styles['app']}>
        <div className={styles['app__body']}>
          {fetchRequestStatus === 'error' &&
            <div className={styles['app__body__error']}>
              <span>Couldn't retrieve quotes</span>
            </div>
          }
          {fetchRequestStatus === 'pending' &&
            <div className={styles['app__body__pending']}>
                <span>Loading...</span>
            </div>
          }
          {fetchRequestStatus === 'success' &&
            <div className={styles['app__body__success']}>
              <ReactCSSTransitionGroup
                 transitionAppear={true}
                 transitionName={'fade'}
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={500}
                 transitionAppearTimeout={500}
                >
                  <QuoteBox
                    text={data.quote}
                    author={data.author}
                    onClick={() => this.handleClick()}
                  />
              </ReactCSSTransitionGroup>
            </div>
          }

        </div>
      </div>
    );
  }
}

App.displayName = 'App';

export default App;
