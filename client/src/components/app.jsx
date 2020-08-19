import React from "react";

class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {

      };
    };

    render() {
      return (
        <div class="container-fluid">
          <header>
            <nav class="row">
              <a class="col">Home</a>
              <a class="col">About</a>
              <a class="col">Projects</a>
              <a class="col">Contact</a>
            </nav>
          </header>
          <main>
            <div>
              <h1 class="align-middle">Steven Contreras</h1>
              <h2>Software Engineer</h2>
            </div>
            <div>
              <h2 class="align-middle">About</h2>
              <p>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h2 class="align-middle">Projects</h2>
              <ul>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
              </ul>
            </div>
            <div>
              <h2 class="align-middle">Contact</h2>
              <address>sfcontra@gmail.com</address>
            </div>
          </main>
          <footer>
            <a class="cred" href="https://github.com/StevenContreras">GitHub</a>
            <a class="cred" href="https://www.linkedin.com/in/steven-contreras-358b4a73/">LinkedIn</a>
          </footer>
        </div>
      )
    }
};

export default App;