import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';

const code = new URLSearchParams(window.location.search).get('code')
function App() {
  return (
    <>
      <Header />
      {code ? <Dashboard code={code} /> : <Login />}
    </>
  );
}

export default App;
