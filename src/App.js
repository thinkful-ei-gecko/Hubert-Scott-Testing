import React from 'react';
import './index.css';
import List from './List'
import './style.css';

function App(props) {
  const lists = props.store.lists;
  const allCards = props.store.allCards;
  const cardsOne = lists[0].cardIds.map(id => allCards[id]);
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
    </header>
      <div className="App-list">
        {lists.map((list, i) => (
            <List 
              key = {list.id} 
              header = {list.header}
              cards = {lists[i].cardIds.map(id => allCards[id])} />
        ))}
      </div>
    </main>
  );
}

export default App;