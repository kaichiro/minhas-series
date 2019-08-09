import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'

import Home from '../components/home/Home';
import Generos from '../components/generos/Generos';
import NovoGenero from '../components/generos/NovoGenero';
import EditarGenero from '../components/generos/EditarGenero';
import Series from '../components/series/Series';
import NovaSerie from '../components/series/NovaSerie';
import InfoSerie from '../components/series/InfoSerie';

export function Index() {
    const configsRouter = [
        { path: '/', component: Home },
        { path: '/genres', component: Generos },
        { path: '/genres/new', component: NovoGenero },
        { path: '/genres/:id', component: EditarGenero },
        { path: '/series', component: Series },
        { path: '/series/new', component: NovaSerie },
        { path: '/series/:id', component: InfoSerie },
    ]

    const renderRouterLine = routerInfo => {
        return (
            <Route
                key={routerInfo.component}
                path={routerInfo.path}
                exact
                component={routerInfo.component}
            />
        )
    }

    return (
        <Switch>
            {configsRouter.map(renderRouterLine)}
        </Switch>
    )
}

// export default Index
