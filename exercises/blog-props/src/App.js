import React, { Component } from 'react';
// import Header from './Header';
// import BlogList from '.BlogList';
import Footer from './Footer';
// import GitHub from './GitHub';

function App() {
  const footie = {
    social:  <a href= "http://www.github.com/TaylorBurke" target = "blank"><img src = "https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67" alt="git" width = "50px"/></a>,
    email: "twillyb@gmail.com"
  }

    return (
      <div>
      {/* <Header /> */}
        {/* <Navbar /> */}
      {/* <BlogList /> */}
        {/* <BlogPost /> */}
      <Footer {...footie}/>  
      </div >
    );
}

export default App;
