import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,Form,FormGroup,Label,Input,Button, Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';  

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
export class Dishdetail extends Component
{

    state={isModalOpen:false}
    toggleModal=()=> {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }  
      constructor(props){
        super(props)
      }          
    render(){
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.text model=".rating" id="rating" name="rating"
                                        placeholder="Your Rating"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Rating must be a number'
                                        }}
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" rows="6" name="comment" innerRef={(input) => this.comment = input}  />                                
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>                    
                    </ModalBody>
            </Modal>              
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={this.props.comments} />
                    <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                </div>
                
            </div>
            </div>
        );
    }
  }

const RenderComments=(dish)=>{
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

const RenderDish=(props)=>{
    let dish=props.dish;
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