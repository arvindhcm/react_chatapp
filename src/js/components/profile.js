import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Tab, Tabs, Form } from "react-bootstrap"


import { Edit, Users, MessageSquare, User, Settings, Search, ChevronLeft, MoreVertical, 
    Paperclip, Smile, Send ,Globe ,GitHub ,Linkedin ,Instagram,
 Mail , Smartphone, LogOut } from 'react-feather';
import { Button, InputGroup, FormControl, Media, Card, Badge, Thumbnail,ListGroup } from 'react-bootstrap';


import berlin from '../../images/berlin.jpg'
import cm from '../../images/cm.jpg'


class Profile extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(<div className={`profile`}>
            
            <div className={`container-fluid py-3`}>
                    <h3 className={`pb-3`}> Profile </h3>

                    <Card className={`mb-3`}>
                        <Card.Body className={`text-center py-4`}>
                            <div className={`avatar avatar-md mx-auto mb-3`}>
                                <img className={ `avatar-img `} src={cm} /> 
                            </div>
                            <h6 className={`my-3`}>  Arvindh CM </h6>
                            <p className={`text-secondary medium`}>  Front end Developer, I focus on reusable and optimized code. </p>

                        </Card.Body>
                    </Card>


                    <ListGroup className={`mb-3`}>
                        <ListGroup.Item> 
                                <Media className={`align-items-center`}>
                                    <Media.Body>
                                       <p className={`small text-muted mb-2` }> country </p>
                                       <p className={``}>  India </p>

                                    </Media.Body>    

                                    <Globe className={`icon-sm text-muted`}/>
                                </Media>    
                         </ListGroup.Item>

                         <ListGroup.Item> 
                                <Media className={`align-items-center`}>
                                    <Media.Body>
                                       <p className={`small text-muted mb-2` }> Email </p>
                                       <p className={``}>  arvindhcm7@gmail.com </p>

                                    </Media.Body>    

                                    <Mail className={`icon-sm text-muted`}/>
                                </Media>    
                         </ListGroup.Item>

                         <ListGroup.Item> 
                                <Media className={`align-items-center`}>
                                    <Media.Body>
                                       <p className={`small text-muted mb-2` }> Phone </p>
                                       <p className={``}>  +91 8675135345 </p>

                                    </Media.Body>    

                                    <Smartphone className={`icon-sm text-muted`}/>
                                </Media>    
                         </ListGroup.Item>
                    </ListGroup>

                    <ListGroup className={`mb-3`}>
                        <ListGroup.Item> 
                                <Media className={`align-items-center`}>
                                    <Media.Body>

                                       <p className={`m-0`}>  Github </p>

                                    </Media.Body>    

                                    <GitHub className={`icon-sm text-muted`}/>
                                </Media>    
                         </ListGroup.Item>

                         <ListGroup.Item> 
                                <Media className={`align-items-center`}>
                                    <Media.Body>
                                       <p className={`m-0`}>  LinkedIn </p>

                                    </Media.Body>    

                                    <Linkedin className={`icon-sm text-muted`}/>
                                </Media>    
                         </ListGroup.Item>

                         <ListGroup.Item> 
                                <Media className={`align-items-center`}>
                                    <Media.Body>
                                       <p className={`m-0`}>  Instagram </p>

                                    </Media.Body>    

                                    <Instagram className={`icon-sm text-muted`}/>
                                </Media>    
                         </ListGroup.Item>
                    </ListGroup>

                    <Form.Row>
                        <div className={`col`}>
                        <Button size="lg" className={` btn-light btn-block d-flex align-items-center`} > Settings <Settings className={`ml-auto`}/></Button>

                        </div>
                        <div className={`col`}>

                        <Button size="lg" className={`btn-light btn-block d-flex align-items-center`} > Logout <LogOut  className={`ml-auto`}/></Button>

                        </div>


                    </Form.Row>



            </div>
            
            
              </div>)
    }
}

export default Profile