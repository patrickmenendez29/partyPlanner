import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import CreateNew from './pages/CreateNew';
import { useState, useEffect, createContext } from 'react';
import { auth } from './firebaseConfig';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Details';


interface authContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  displayName: string | null;
  setDisplayName: React.Dispatch<React.SetStateAction<string | null>>;
}


export const AuthContext = createContext<authContext | null>(null);



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setDisplayName(user.displayName);
      } else {
        setIsLoggedIn(false);
      }
    })
  }, []);

  return (
    <>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, displayName, setDisplayName}}>
        <Header />    
        <Router>
    
          <Navigation></Navigation>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/list' element={<List />}/>
              <Route path='/create' element={<CreateNew />}/>
              <Route path='/details' element={<Details />}/>
            </Routes>
        </Router>
    
        <Footer />
      </AuthContext.Provider>
    </>
    
  );
}

export default App;
