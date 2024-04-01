import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <div className=''>
        <Nav />
        <div className='container mx-auto grid grid-cols-12 gap-8'>
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
