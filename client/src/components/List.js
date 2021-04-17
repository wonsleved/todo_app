import React, {useState} from 'react'
import "../styles/button&menu.css"

export const ListTasks = ({tasks, deleteTask}) => {
    const [clicks, setClicks] = useState(0)

    if (!tasks.length){
        return <p className="center"> No tasks already</p>
    }

    let normalizeDate = (mydate) => {
        let myDateObject = new Date(mydate);

    let dd = myDateObject.getDate();
    let mm = myDateObject.getMonth();
    let yyyy = myDateObject.getFullYear();
    return mm + '.' + dd + '.' + yyyy;  // Date format: 2.27.2020
    }

    return (

        <ul className="collection">
            {tasks.map(task => (
                <li
                    className="item"
                    key={task.id}>
                    <div className="oneTask">
                        <span className="taskTitle"> {task.text} </span>
                        <span className="taskDate">{ normalizeDate(task.date) }</span>
                    </div>

                    <button className="closebutton"
                            onClick={(event) => {
                                event.preventDefault();
                                console.log("ok", task._id);
                                deleteTask(task._id)
                            }}
                    >Delete</button>

                    {/*<div className="itemMenu">}
                        <div className="innerMenu">
                            <button
                              className="itemMenuButton"
                              onClick={(event) => {
                                  event.preventDefault();
                                  console.log("ok", task._id);
                                  deleteTask(task._id)
                              }}
                            >
                                <div>...</div>
                            </button>
                        </div>
                    </div>*/}



                    {/*<button*/}
                    {/*    className="waves-effect waves-red btn-flat"*/}
                    {/*    onClick={(event) => {*/}
                    {/*        event.preventDefault();*/}
                    {/*        deleteTask(task._id)*/}
                    {/*    }}*/}
                    {/*>Delete*/}
                    {/*</button>*/}
                </li>
            ))}
        </ul>

    )
}