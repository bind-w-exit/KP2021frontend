import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import Main from './pages/Main';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '100%' }}>
        <header style={{ padding: 10, fontSize: 25 }}>
          <Header />
        </header>
        <section style={{ display: 'flex', height: '100%' }}>
          <NavBar />
          <Main />
        </section>
      </div>
    </BrowserRouter>
  );
}
