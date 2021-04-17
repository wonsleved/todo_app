import React, {useState} from 'react'
import "../styles/button&menu.css"

export const DeskList = ({desks, setNewDesk}) => {

    if (!desks.length){
        return <p className="center"> No desks already</p>
    }

    return (
        <ul className="collection">
            {desks.map(board => (
                <li
                className="item">
                    <div className="oneDesk">
                        <span
                            className="deskTitle"
                            onClick={(event) => {
                                event.preventDefault()
                                setNewDesk(board)
                            }}
                        > {board.text} </span>
                    </div>
                </li>
            ))}
        </ul>

    )
}