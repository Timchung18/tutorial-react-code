import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.youtube.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>Like { likes } times</p>
        <a href={ link }>Youtube</a>
      </div>
    </div>
  );
}

export default App;
