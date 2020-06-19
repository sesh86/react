import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
export function DishdetailComponent(props) {

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

function renderComments(dish){
    if (dish!=null){
    let comms=dish.comments;
    const menu = comms.map((comm) => {
        return (
          <div>
              {comm.comment}<br/><br/>--{comm.author}, {formatDate(comm.date)}<br/><br/>
          </div>  
        );
    });
    return <div><h3>Comments</h3>{menu}</div>;
    }
}

export const formatDate=(p_date)=>{
    var myDate = new Date(p_date);

    var month=new Array();
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Aug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    // e.g. "13 Nov 2016 11:00pm";
    return(month[myDate.getMonth()]+" "+myDate.getDate()+","+" "+myDate.getFullYear());
  }
function renderDish(dish){
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