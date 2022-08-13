import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './routes/home';
import store from './store/store';

function Index() {
  return (
    <div className="App">
      <div>
        <Link to="/home" >Home</Link> | {" "}
        <Link to="/home1" >Home 1</Link>
      </div>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Index />}>
            <Route path='home' element={<Home text="Home" />} />
            <Route path='home1' element={<Home text="My Home" />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
