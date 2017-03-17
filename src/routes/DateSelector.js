import React, { Component } from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd';

class DateSelector extends Component {
  render() {
    return (
      <div>
        <DatePicker />
      </div>
    );
  }
}

export default connect()(DateSelector);
