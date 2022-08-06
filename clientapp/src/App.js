import { BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/Pages/HomeComponent/HomeComponent';
import Footer from './components/shared/Footer/Footer';
import HeaderComponent from './components/shared/HeaderComponent/HeaderComponent';
import SocialMediaComponent from './components/shared/SocialMediaComponent/SocialMediaComponent';

function App() {

  const routes = [
    { name: "Statements", route: "/statements"},
    { name: "Projects", route: "/projects"},
    { name: "Experience", route: "/experiences"},
  ];

  return (
    <>
      <Router>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <HeaderComponent routes={routes} />
            <HomeComponent routes={routes} />
            <SocialMediaComponent />
          </div>
          <Footer routes={routes} />
        </div>
      </Router>
    </>
  );
}

export default App;
