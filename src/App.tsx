import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import AuthChecker from './auth/AuthChecker'





function App() {

  return (
    
<BrowserRouter> {/* ATTENTION Change this back to a HashRouter ATTENTION */}
      <Navbar />
      <Provider store = { store }>
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
          )) }
        </Routes>
        {/*Change this back to a HashRouter ATTENTION */}
        </Provider>
    </BrowserRouter>                   
  
  )
}

export default App