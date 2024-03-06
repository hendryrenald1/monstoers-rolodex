import { useEffect, useState } from 'react'
import './App.css';

import CardList from './components/card-list/card-list.component'

import SearchBox from './components/search-box/search-box.component';


const App = () => {


  const [searchField, setSearchField] = useState('');
  const [monstors, setMonstors] = useState([]);
  const [filteredMonstors, setFilteredMonstors] = useState(monstors);

  console.log(searchField);

  useEffect(() => {

    console.log('calling fetch');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>  setMonstors(users))


  }, []);


  useEffect(() => {

    const newFilteredMonstors = monstors.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonstors(newFilteredMonstors)

  }, [monstors, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };



  return (

    <div className="App">

      <SearchBox onChangeHandler={onSearchChange} className='search' placeholder='search monstors' />
      <CardList monstors={filteredMonstors} />

    </div>
  )
}


export default App;
