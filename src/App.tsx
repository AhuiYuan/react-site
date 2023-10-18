import  React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Header from "./component/header";
import Footer from "./component/footer";
import './App.css';
const App = () => {
  return (
      <div className="App">
          <div className="headerComp">
              <Header/>
          </div>
          <div className="content">
              <Routes>
                  <Route path='/' Component={Home} />
                  <Route  path='/product' Component={Product} />
                  <Route  path='/about' Component={About} />
              </Routes>
          </div>
          <div className="footerComp">
              <Footer/>
          </div>
      </div>
  );
}

export default App;
