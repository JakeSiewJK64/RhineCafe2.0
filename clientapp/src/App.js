import { BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/Pages/HomeComponent/HomeComponent';
import ProjectsComponent from './components/Pages/ProjectsComponent/ProjectsComponent';
import StatementComponent from './components/Pages/StatementComponent/StatementComponent';
import Footer from './components/shared/Footer/Footer';
import HeaderComponent from './components/shared/HeaderComponent/HeaderComponent';
import SocialMediaComponent from './components/shared/SocialMediaComponent/SocialMediaComponent';

function App() {

  const routes = [
    { name: "Statements", route: "/statement", component: StatementComponent },
    { name: "Projects", route: "/projects", component: ProjectsComponent },
    { name: "Live/Event", route: "/" },
    { name: "Media", route: "/" },
    { name: "Artist", route: "/" },
    { name: "Discography", route: "/" },
    { name: "Store", route: "/" },
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
