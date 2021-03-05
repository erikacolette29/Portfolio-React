
import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route
          exact
          path="/"
          render={() => (
            <main>
             <HomePage
             />
            </main>
          )}
        />
    </div>
  );
}

export default App;
