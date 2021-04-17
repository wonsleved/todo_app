import React from 'react';
import {NewNavBar} from '../components/NewNavBar'
import {MainPageMain} from "../components/MainPageMain"


export const MainPage = () => {



  return (
    <div className="page">
      <header>
        <NewNavBar />
      </header>
      <main className="startMain">
        <MainPageMain />
      </main>
    </div>



);
}
