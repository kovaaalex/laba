import { useEffect } from 'react';
import './App.css';
import MainRouter from './router/MainRouter';
import { useLazyLoading } from './utils/lazyLoading';
function App() {
  useLazyLoading();
  return (
    <div className="App">
      <MainRouter/>
    </div>
  );
}

export default App;
