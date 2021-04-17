import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
import {MainPage} from "./pages/MainPage"


export const useRoutes = isAthenticated => {
    if (isAthenticated){
        return (
            <Switch>
              <Route path="/links" exact>
                  <LinksPage />
              </Route>
              <Route path="/create" exact>
                  <CreatePage />
              </Route>
              <Route path="/detail/:id">
                  <DetailPage />
              </Route>
              <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/auth">
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}