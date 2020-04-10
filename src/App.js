import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
        <Route exact path="/employee-directory-pmd" component={Directory} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
