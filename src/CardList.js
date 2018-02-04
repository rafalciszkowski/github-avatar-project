import React from 'react';
import Card from './Card.js';


const CardList = (props) => {
    return (
        <div>
            {props.cards.map((card, i) => {
                return (
                    <div key={i}>
                        <span>{i + 1}</span>
                        <Card {...card} index={i} removeCard={props.removeCard} />
                        <br />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default CardList;