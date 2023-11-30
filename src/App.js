import Cards from './components/CardSection/';
import './styles.css'
import {cards} from './models/cardData';
import { useEffect, useState } from 'react';

function Main() {
  function shuffle(array) {
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }

  const [faction, setFaction] = useState('');
  const [cardArray, setCardArray] = useState(cards());
  const [filteredClasses, setFilteredClasses] = useState([]);

  const handleFilterChange = (playerClass) => {
    console.log(playerClass, filteredClasses)
    if(filteredClasses.some((e) => e === playerClass)){
      setFilteredClasses([...filteredClasses.filter(e => e !== playerClass)])
    } else {
      setFilteredClasses([...filteredClasses, playerClass])
    }
    
  }

  useEffect(() => {
    setCardArray(shuffle(cards().concat(cards(), cards(), cards(), cards(), cards()).filter((card) => {
      if(filteredClasses.some((fc) => fc === card.content))return false; 
      if(faction === 'horde'){
        return card.faction === 'horde'
      }
      if(faction === 'alliance'){
        return card.faction === 'alliance'
      }
        return true;
    })))
  }, [faction, filteredClasses])


  
  return (
  <>
    <h1 className="main__heading">Random Classic Wow Race And Class Picker</h1>
      <div className="buttonContainer">
        <button onClick={() => setFaction('horde')}>Horde</button>
        <button onClick={() => setFaction('alliance')}>Alliance</button>
        <button onClick={() => setFaction('')}>Both</button>
        <div>
          <h2>Class filter(check those you don't want)</h2>
          <div className='classFilter'>
            <label className="switch">
            <input type="checkbox" onChange={() => handleFilterChange('Warrior')}/>
              Warrior
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Druid')}/>
              Druid
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Warlock')}/>
              Warlock
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Hunter')}/>
              Hunter
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Paladin')}/>
              Paladin
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Priest')}/>
              Priest
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Mage')}/>
              Mage
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Rogue')}/>
              Rogue
            </label>
            <label className="switch">
              <input type="checkbox" onChange={() => handleFilterChange('Shaman')}/>
              Shaman
            </label>
          </div>
        </div>
      </div>
    <Cards cards={cardArray}/>
  </>
  );
}

export default Main;
