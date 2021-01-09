import React from 'react';
import './styles.css';


export default function Card ({id, name}) {
    return (
        <div className="card">
        <img src="https://picsum.photos/200/300" alt="" />
        <br />
        <span>{id}</span>
        <br />
        <span>
            {name}
        </span>
      </div>
    )
}