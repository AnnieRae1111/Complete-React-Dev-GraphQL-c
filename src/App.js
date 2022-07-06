import { Component } from 'react';

import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      //set searchField as an empty string in state so we can use it throughout the component
    };
  }

  componentDidMount() {
    //code in here runs when component mounts/is placed on DOM
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((data) =>
        this.setState(
          () => {
            return { monsters: data };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }

  onSearchChange = (e) => {
    console.log(e.target.value, 'e');
    const searchField = e.target.value.toLowerCase();
    //run toLowerCase to make the search not case sensitive
    //calling this from above where we set in state
    // better to move the method/function outside of render so the function is not called each time the component renders

    this.setState(() => {
      return { searchField };
      //writing an object like this means that searchField is the name, and the value of it is the value. Key value pair
      //setting the state to whatever is in the searchField?
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    //destructuring so we don't have to use this keyword so often
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
      //if the monsters name includes the search string, then return it
      //otherwise it will not be returend
      //filter give us back a new array
    });

    return (
      <div className="App">
        <SearchBox onSearchChange={onSearchChange} />
        <CardList monsters={filteredMonsters} />;
      </div>
    );
  }
}

export default App;
