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
      <div class="body">
        <div class="aside">

        </div>
        <div class="plate">
          <nav className="row">
            <button className="col" value={0} onClick={e => this.handleClick(e)}>Home</button>
            <button className="col" value={1} onClick={e => this.handleClick(e)}>Projects</button>
          </nav>
          <main>
            {this.state.nav === 0
              ?  <Home/> 
              :  <Projects/>
            }
          </main>
          <footer>
            <a className="cred" href="mailto:sfcontra@gmail.com">
              <img name="mail"></img>
            </a>
            <a className="cred" href="https://github.com/StevenContreras">GitHub</a>
            <a className="cred" href="https://www.linkedin.com/in/steven-contreras-358b4a73/">LinkedIn</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;