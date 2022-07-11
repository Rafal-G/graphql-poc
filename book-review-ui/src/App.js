import './App.css';
import TopNav from './components/TopNav';
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  );
}

export default App;
