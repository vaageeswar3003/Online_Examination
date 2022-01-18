import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './AddItem/AddItem';
import Dashboard from './Dashboard/dashboard';
import Papers from './Papers/papers';

function App() {
     return (
          <>
               <Header></Header>
               <Router>
                    <Routes>
                         <Route exact path="/papers" element={<Papers/>} />
                         <Route exact path="/createPaper" element={<Dashboard />} />
                         <Route exact path="/addItem" element={<AddItem />} />
                    </Routes>
               </Router>
          </>
     );
}

export default App;
