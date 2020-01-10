import React, { Component } from 'react';

import Reader from '../Reader/Reader';
import publications from '../publications';

export default class App extends Component {
  render() {
    return (
      <div>
        <Reader publicationsItems={publications} />
      </div>
    );
  }
}
