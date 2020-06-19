import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
export const Dishdetail=(props) =>{
    return (
        <div className="row">
        <div  className="col-12 col-md-5 m-1">
            {renderDish(props.selectedDish)}
        </div>
        <div  className="col-12 col-md-5 m-1">
            {renderComments(props.selectedDish)}
        </div>
        </div>
    );
  }

const renderComments=(dish)=>{
    if (dish!=null){
    let comms=dish.comments;
    const menu = comms.map((comm) => {
        return (
          <div>
              {comm.comment}<br/><br/>--{comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}<br/><br/>
          </div>  
        );
    });
    return <div><h3>Comments</h3>{menu}</div>;
    }
}

const renderDish=(dish)=>{
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle><h3>{dish.name}</h3></CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}