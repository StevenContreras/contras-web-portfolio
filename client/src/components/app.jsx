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
        <nav class="row">
          <a class="col">Home</a>
          <a class="col">About</a>
          <a class="col">Projects</a>
          <a class="col">Contact</a>
        </nav>
        <main>
          <header class="section">
            <h1 class="h">Steven Contreras</h1>
            <h2 class="content">Software Engineer</h2>
          </header>
          <section class="section">
            <h2 class="h">About</h2>
            <p class="content" class="lead">sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section class="section">
            <h2 class="h">Projects</h2>
            <section class="content">
              <h3>Project Name</h3>
              <img src="" alt="image or gif of project"></img>
              <p>Summary/description of the project and or your role in it.</p>
              <a href="#" target="_blank">Link to project</a>
            </section>
          </section>
          <section class="section">
            <h2 class="h">Contact</h2>
            <address class="content">sfcontra@gmail.com</address>
          </section>
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