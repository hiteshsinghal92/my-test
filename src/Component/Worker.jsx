import { createPortal } from "react-dom";
import React, { Component, PureComponent } from 'react';

// Component Example
class MyComponent extends Component {
  render() {
    console.log('MyComponent Rendered');
    return <div>{this.props.text}</div>;
  }
}

// PureComponent Example
class MyPureComponent extends PureComponent {
  render() {
    console.log('MyPureComponent Rendered');
    return <div>{this.props.text}</div>;
  }
}

const Worker = () => {
  const [text, setText] = React.useState('Hello');

  return (
    <div>
      <MyComponent text={text} />
      <MyPureComponent text={text} />
      <button onClick={() => setText('Hell')}>Set Text</button>
    </div>
  );
}
export default Worker;