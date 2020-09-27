import React from "react";
import Home from './home.jsx';
import Projects from './Projects.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let int = parseInt(e.target.value);
    this.setState({
      nav: int,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="row">
          <button className="col" value={0} onClick={e => this.handleClick(e)}>Home</button>
          <button className="col" value={1} onClick={e => this.handleClick(e)}>Projects</button>
        </nav>
        <main>
          {this.state.nav === 0
            ?  <Home></Home> 
            :  <Projects></Projects>
          }
        </main>
        <footer>
          <a className="cred">sfcontra@gmail.com</a>
          <a className="cred" href="https://github.com/StevenContreras">GitHub</a>
          <a className="cred" href="https://www.linkedin.com/in/steven-contreras-358b4a73/">LinkedIn</a>
        </footer>
      </div>
    );
  }
}

export default App;