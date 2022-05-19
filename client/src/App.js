import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Error, Register, Landing } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
