import { Route, Routes } from 'react-router-dom';
import Authenticated from './Routes/Authenticated';
import Gate from './Routes/Gate';
import { Homepage, Login } from './Pages';

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/login" element={<Gate />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<Authenticated />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
