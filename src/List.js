import React from 'react';
import Card from './Card';
import './index.css';

function List(props){
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
         <div className="List-cards">
            {props.Card.map((card) =>
               <Card 
                    key = {card.id}
                    title = {card.title}
                    content = {card.content} />
            )}
            <button type="button" className="List-button">
                delete
            </button>
         </ div>
        </ section>     
    )
}

export default App;

