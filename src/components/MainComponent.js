import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { DishdetailComponent } from './DishdetailComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    }

  render(){
  return (
    <div className="App">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
                <Menu dishes={this.state.dishes} onDishSelect={(dishId)=>this.onDishSelect(dishId)} />
                <DishdetailComponent selectedDish={this.state.dishes.filter((dish)=>{return dish.id===this.state.selectedDish})[0]}/>
        </div>
      </div>
    </div>
  );
}
}

export default MainComponent;
