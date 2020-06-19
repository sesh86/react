import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Dishdetail } from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, BrowserRouter,Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';




class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
      };
  }


  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    }

    
  render(){
    const DishWithId = ({match}) => {
        return(
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };

    const HomePage = () => {
        return(
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
  return (<BrowserRouter>
            <React.Fragment>
            <Header/>
            <div className="container">
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onDishSelect={(dishId)=>this.onDishSelect(dishId)} />} />
                <Route exact path='/contactus' component={Contact} />
  <Route exact path='/aboutus' component={()=><About leaders={this.state.leaders} />} />
                {/* <Redirect to="/home" /> */}
                <Route path='/menu/:dishId' component={DishWithId} />
                {/* <Dishdetail selectedDish={this.state.dishes.filter((dish)=>{return dish.id===this.state.selectedDish})[0]}/> */}
            </div>
            <Footer/>
            </React.Fragment>
        </BrowserRouter>
  );
}
}

export default MainComponent;
