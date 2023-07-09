import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Watch from './component/Watch'

function App() {
  return (
    <div>
      <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="/Watch/:id" element={<Watch/>}></Route>
      <Route></Route>
      </Routes>
    
    </div>
  );
}

export default App;
