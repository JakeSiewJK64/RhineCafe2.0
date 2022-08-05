import HomeComponent from './components/HomeComponent/HomeComponent';
import HeaderComponent from './components/shared/HeaderComponent/HeaderComponent';
import SocialMediaComponent from './components/shared/SocialMediaComponent/SocialMediaComponent';

function App() {
  return (
    <div className="d-flex flex-row">
      <HeaderComponent />
      <HomeComponent />
      <SocialMediaComponent />
    </div>
  );
}

export default App;
