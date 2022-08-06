import HomeComponent from './components/Pages/HomeComponent/HomeComponent';
import Footer from './components/shared/Footer/Footer';
import HeaderComponent from './components/shared/HeaderComponent/HeaderComponent';
import SocialMediaComponent from './components/shared/SocialMediaComponent/SocialMediaComponent';

function App() {

  const routes = [
    { name: "News", route: "/" },
    { name: "Statements", route: "/" },
    { name: "Live/Event", route: "/" },
    { name: "Media", route: "/" },
    { name: "Artist", route: "/" },
    { name: "Discography", route: "/" },
    { name: "Store", route: "/" },
    { name: "Project", route: "/" },
  ];

  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <HeaderComponent routes={routes} />
          <HomeComponent />
          <SocialMediaComponent />
        </div>
        <Footer routes={routes} />
      </div>
    </>
  );
}

export default App;
