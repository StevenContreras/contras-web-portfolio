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
          <header class="row">
            <a class="col">Home</a>
            <a class="col">About</a>
            <a class="col">Projects</a>
            <a class="col">Contact</a>
          </header>
          <main>
            <div>
              <h1 class="align-middle">Steven Contreras</h1>
              <h2>Software Engineer</h2>
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