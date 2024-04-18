import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';
import MealList from './components/MealList';
import CategoryList from './components/CategoryList';
import AreaList from './components/AreaList';
import IngredientList from './components/IngredientList';

function App() {
 return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home" style={{ marginLeft: '20px' }}>My Homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <MealList />
      <CategoryList />
      <AreaList />
      <IngredientList />

    </div>
 );
}

export default App;
