import React, { Component } from 'react';
import PlaceHolderOne from './PlaceHolderOne.js';

class PlaceHolder extends Component {
  render() {
    return (
      <div className="PlaceHolder">
      <p>currently in ph</p>
      <PlaceHolderOne />
      </div>
    );
  }
}

export default PlaceHolder;
