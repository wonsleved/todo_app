import React, {Fragment, useContext} from 'react'
import {Navbar} from "../components/Navbar";
import {FormNewTask} from "../components/Form";
import {DeskList} from "../components/DeskList"
import {AuthContext} from "../context/AuthContex";

export const LinksPage = () => {
    const auth = useContext(AuthContext)

    let desks = []
    for (let i = 0;i < 3; i++){
        desks[i] = i
    }

    return (
        <main className="mainApp">
            <Navbar />
            <Fragment>
                <div className="sectionContainer">
                    <section className="mainSection">
                        <section className="tasksMain">
                            <section className="taskList">
                                <DeskList
                                    desks={desks}
                                />
                            </section>
                        </section>
                        <aside className="asideMenu">

                        </aside>
                    </section>
                </div>
            </Fragment>
        </main>
    )
}