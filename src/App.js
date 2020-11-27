import React, { Component } from 'react';
import Search from './CustomComp/Search';
import List from './CustomComp/List';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const filterResults = (searchTerm) => item => {
  return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    }
  }

  onDismiss = (id) => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onChangeSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { 
      list,
      searchTerm
    } = this.state;

    return (
      <div className="App">
        <Search onSearch={ this.onChangeSearch }>
          Search
        </Search>

        { list.filter(filterResults(searchTerm)).map(item => 
          <List key={ item.objectID } item={item} onDismiss={ this.onDismiss } />   
        ) }
      </div>
    );
  }
}

export default App;
