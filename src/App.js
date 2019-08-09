import React from 'react'
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
} from 'react-router-dom'

// import Generos from './components/generos/Generos'
import Header from './components/header/Header'
// import Home from './components/home/Home'
// import NovoGenero from './components/generos/NovoGenero'
// import EditarGenero from './components/generos/EditarGenero'
// import Series from './components/series/Series'
// import NovaSerie from './components/series/NovaSerie'
// import InfoSerie from './components/series/InfoSerie'
import { Index as RouteIdx } from './router/Index'

function App() {
  // const configsRouter = [
  //   { path: '/', component: Home },
  //   { path: '/genres', component: Generos },
  //   { path: '/genres/new', component: NovoGenero },
  //   { path: '/genres/:id', component: EditarGenero },
  //   { path: '/series', component: Series },
  //   { path: '/series/new', component: NovaSerie },
  //   { path: '/series/:id', component: InfoSerie },
  // ]
  // const renderRouterLine = routerInfo => {
  //   // <Route path='/' exact component={Home} />
  //   // <Route path='/genres' exact component={Generos} />
  //   // <Route path='/genres/new' exact component={NovoGenero} />
  //   // <Route path='/genres/:id' exact component={EditarGenero} />
  //   // <Route path='/series' exact component={Series} />
  //   // <Route path='/series/new' exact component={NovaSerie} />
  //   return (
  //     <Route
  //       key={routerInfo.component}
  //       path={routerInfo.path}
  //       exact
  //       component={routerInfo.component}
  //     />
  //   )
  // }

  return (
    <Router>
      <div>
        <Header />
        <RouteIdx />
      </div>
    </Router>
  )
  //   <Switch>
  //   {configsRouter.map(renderRouterLine)}
  // </Switch>
}

export default App
