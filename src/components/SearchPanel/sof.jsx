class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      checked: false
    };
    this.timer = null;
  }
  
  componentDidUpdate (prevProps, prevState) {
    if(prevState.text !== this.state.text) {
      this.handleCheck();
    }
  }
  
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  
  handleCheck = () => {
    // Clears running timer and starts a new one each time the user types
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.toggleCheck();
    }, 1000);
  }
  
  toggleCheck = () => {
    this.setState( prevState => ({ checked: !prevState.checked }));
  }
  
  render () {
    return (
      <div>
        <input value={this.state.text} onChange={this.onChange} placeholder="Start typing..." /><br/>
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={this.toggleCheck} />
          Toggle checkbox after user stops typing for 1 second
        </label>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));