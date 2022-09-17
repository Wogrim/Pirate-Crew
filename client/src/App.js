import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ViewAllPirates from './views/ViewAllPirates';
import ViewAddPirate from './views/ViewAddPirate';
import ViewOnePirate from './views/ViewOnePirate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/pirates" />} />
        <Route path="/pirates" element={<ViewAllPirates />} />
        <Route path="/pirates/new" element={<ViewAddPirate />} />
        <Route path="/pirate/:id" element={<ViewOnePirate />} />
        <Route path="*" element={<Navigate to="/pirates" />} />
      </Routes>
    </div>
  );
}

export default App;
