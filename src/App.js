import React, {  useState, Component} from 'react'
import './App.css';


class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return null
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }
  

  render() {
    return (<div>Hello

      <button onClick={() => {
        this.setState({ counter: this.state.counter + 1 });
       
      }}>increment</button>
    </div>)
  }
}
function App() {
  let [show, setShow] = useState(true);
  console.log({show})
  return (
    <div className="App">
      Sree
      {show ? <Hello />: undefined}
      <button onClick={() => setShow(!show)}>Click</button>
      <button onClick={() =>show = !show}>Click</button>
    </div>
  );
}

export default App;
