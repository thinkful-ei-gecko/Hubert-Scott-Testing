import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

function List(props){

    const title = props.cards[0].title;
    const content = props.cards[0].content;

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>

            <div className='List-cards'>
                <Card
                title = {title}
                content = {content}
                ></Card>

            </div>

         {/* <div className="List-cards">
            {props.cards.map((card) => {
                return <Card 
                key = {card.id}
                title = {card.title}
                content = {card.content} />
            })}
            <button type="button" className="List-button">
                delete
            </button>
         </ div> */}
        </ section>     
    )
}

export default List;

