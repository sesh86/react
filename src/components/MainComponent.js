import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Dishdetail } from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, BrowserRouter } from 'react-router-dom';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId) {
      console.log(dishId)
    this.setState({ selectedDish: dishId});
    }

  render(){
    const HomePage = () => {
        return(<Home/>);
        }      
  return (<BrowserRouter>
            <React.Fragment>
            <Header/>
            <div className="container">
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onDishSelect={(dishId)=>this.onDishSelect(dishId)} />} />
                {/* <Redirect to="/home" /> */}
                <Dishdetail selectedDish={this.state.dishes.filter((dish)=>{return dish.id===this.state.selectedDish})[0]}/>
            </div>
            <Footer/>
            </React.Fragment>
        </BrowserRouter>
  );
}
}

export default MainComponent;
