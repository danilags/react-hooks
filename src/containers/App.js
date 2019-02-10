import React from 'react';

class App extends React.Component {
  state = { resource: 'posts' };

  onChanges(resource) {
    this.setState({ resource });
  }
  render () {
    return (
      <div>
        <div>
          <button onClick={() => this.onChanges('posts')}>Posts</button>
          <button onClick={() => this.onChanges('todos')}>Todos</button>
        </div>
        {
          this.state.resource
        }
      </div>
    )
  }
};

export default App;
