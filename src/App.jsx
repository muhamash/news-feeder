import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import { NewsProvider } from './utilities/context/NewsProvider';

function App() {

  return (
    <>
      <NewsProvider>
        <div className='my-5 lg:my-10'>
          <Nav />
          <Main />
        </div>
        <Footer />
      </NewsProvider>
    </>
  );
}

export default App;