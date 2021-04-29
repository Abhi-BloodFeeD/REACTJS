
import './App.css';
// import Header from './components/Header'
import Navbar from './components/js/Navbar'
import Head from './components/js/Head'
import Body from './components/js/Body'
// import Bottom from './components/js/Bottom'
// import Footer from './components/js/Footer'

function App() {

  return (

    <div className="app">
      <div className="app__cover">
      <Navbar className="navbar"/>
      <Head className='head'></Head>
      <Body className='body'></Body>
      </div>
    </div>
  );
}

export default App;
