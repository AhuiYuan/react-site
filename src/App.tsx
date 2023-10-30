import React  from 'react';
import { Route, Routes} from 'react-router-dom';
import { Affix,FloatButton } from 'antd'
import Home from "./pages/home";
import Header from "./component/header";
import Footer from "./component/footer";
import menufacturers from "./pages/menufacturers";
import Product from "./pages/product";
import Bom from "./pages/other/bom";
import Rfqs from "./pages/other/rfqs"
import './App.css';
const App = () => {
    const [top] = React.useState<number>(0);

    return (
      <div className="App">
          <Affix offsetTop={top}>
          <div className="headerComp">
              <Header/>
          </div>
          </Affix>
          <div className="content">
              <Routes>
                  <Route path='/' Component={Home} />
                  <Route path='/product' Component={Product} />
                  <Route path='/manufacturers' Component={menufacturers} />
                  <Route path='/other/bom' Component={Bom} />
                  <Route path='/other/rfqs' Component={Rfqs} />
              </Routes>
          </div>
          <div className="footerComp">
              <Footer/>
          </div>
          <FloatButton.BackTop
              type="primary"
              style={{ right: 94,bottom:100 }}
          />
      </div>
  );
}

export default App;
