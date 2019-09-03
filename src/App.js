import React from 'react';
import STORE from './STORE'
import './index.css';
import List from './List'

function App(props) {
  const lists = props.store.lists;
  const allCards = props.store.allCards;
  const cardsOne = lists.cardIds.map(id => allCards[id]);
  // const cardsObj = cards.filter(id => {})
  // const itemsArr = items.map(item => {
  //  return 
  // })
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
    </header>
      <div className="App-list">
        <List 
          header = {lists.header}
          cards = {cardsOne}
        />
      </div>
    </main>
  );
}

export default App;