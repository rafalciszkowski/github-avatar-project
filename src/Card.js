import React from 'react';

const Card = (props) => {
    return (
        <div className="mainBox">
            <img src={props.avatarUrl} alt="user" style={{width: 50, height: 50}}/>
            <div className="textBlock">
                <div className="nameText">{props.name}</div>
                <div className="nameText">{props.company}</div>
            </div>
            <button onClick={() => props.removeCard(props.index)}>Remove</button>
        </div>
    );
}

export default Card;
