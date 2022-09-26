
import './App.css';
import Left from './components/leftpart/Left';
import Mid from './components/midpart/Mid';
import Right from './components/rightpart/Right';

function App() {
  return (
    <div className='app'>
      <div className="messenger">
        <Left />
        <Mid />
        <Right />
      </div>
    </div>
  );
}

export default App;
