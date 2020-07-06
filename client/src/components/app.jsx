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
        </div>
      )
    }
};

export default App;