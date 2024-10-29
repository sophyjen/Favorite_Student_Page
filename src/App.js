import StudentList from './StudentList';
import FavoriteList from './FavoriteList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentContextProvider from './StudentContextProvider';


function App() {
  return (
    <BrowserRouter>
      <nav className='bg-red-300  text-white font-medium  p-5 text-'>
        <Link to={"/"}>List of Student</Link>
        {"                                   "}
        <Link to={"/favoritelist"}>Favorite Student</Link>
      </nav>
      <StudentContextProvider>
      <Routes>
        
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/favoritelist" element={<FavoriteList />}></Route>
        
      </Routes>
      </StudentContextProvider>
    </BrowserRouter>
  );
}

export default App;
