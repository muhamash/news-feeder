import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <div className=''>
        <Nav />
        <div className='container mx-auto py-10'>
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
