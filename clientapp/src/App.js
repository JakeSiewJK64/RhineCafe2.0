import HomeComponent from './components/HomeComponent/HomeComponent';
import HeaderComponent from './components/shared/HeaderComponent/HeaderComponent';

function App() {
  return (
    <div className="d-flex flex-row">
      <HeaderComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
