import React, { Component } from "react";
import ReactDOM from "react-dom";

import Profile from "./profile"


import { Tab, Tabs ,Col } from "react-bootstrap"

import { Edit, Users, MessageSquare, User, Settings, Search, ChevronLeft, 
    MoreVertical,Paperclip, Smile, Send,Phone,Video ,
     Shield,Bell} from 'react-feather';

import { Form,Accordion,Button, InputGroup, FormControl, Media, Card, Badge, Thumbnail } from 'react-bootstrap';

import denver from '../../images/denver.png'
import helsinki from '../../images/helsinki.png'
import nairobi from '../../images/nairobi.jpg'
import tokyo from '../../images/tokyo.jpg'

import sey1 from '../../images/sey1.jpeg'
import sey2 from '../../images/sey2.jpeg'
import sey3 from '../../images/sey3.jpeg'


class Main extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Tabs activeKey={this.props.activeTabForMain}>

                <Tab eventKey={1}>
                    <div className={`chat-window`}>

                        <div className={`container`}>
                            <div className={`chat-header py-3 row align-items-center border-bottom justify-content-between`}>

                                <div className={`backBtn d-lg-none ml-2`} onClick={this.props.toggleChatWindow}>
                                    <ChevronLeft />
                                </div>

                                <div className={`user-header ml-lg-3`}>
                                    <Media>

                                        <div className={`avatar avatar-online avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={nairobi}></img>
                                        </div>

                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Nairobi </h6>
                                            </div>
                                            <p className={`text-muted small mb-0`}> Online </p>


                                        </Media.Body>
                                    </Media>
                                </div>

                                <div className={`options text-right`}>
                                    <Phone className={`text-muted`} />
                                    <Video className={`mx-4 text-muted`} />

                                </div>

                            </div>
                        </div>

                        <div className={`chat-content overflow-auto pb-3`}>
                            <div className={`container`}>


                                <div className={`message message-left mt-3  px-3 py-2 bg-light`}>
                                    <div className={`message-content`}>
                                        <p>  hey checkout these pics  😄  </p>
                                        <small className={`opacity-65 mt-2`} > 9.00pm</small>
                                    </div>
                                </div>

                                <div className={`message message-right mt-3  px-3 py-2 bg-primary text-light`}>
                                    <div className={`message-content`}>
                                        <p>   🤔🤔🤔🤔🤔  </p>
                                        <small className={`opacity-65 mt-2`} > 9.00pm</small>
                                    </div>
                                </div>

                                <div className={`message message-left mt-3 px-3 py-2 bg-light`}>
                                    <div className={`message-content`}>
                                        <div className={`d-flex flex-wrap img-holder align-items-center`}>
                                            <img className={`img-fluid`} src={sey1}></img>
                                            <img className={`img-fluid`} src={sey2}></img>
                                            <img className={`img-fluid`} src={sey3}></img>

                                            <span className={`MoreImageNumber p-3 `} > +5 </span>
                                        </div>
                                        <small className={`opacity-65 mt-2`} > 9.00pm</small>
                                    </div>
                                </div>

                                <div className={`message message-right mt-3  px-3 py-2 bg-primary text-light`}>
                                    <div className={`message-content`}>
                                        <p>  These are amazing 😍   </p>
                                        <small className={`opacity-65 mt-2`} > 9.00pm</small>
                                    </div>
                                </div>

                            </div>




                        </div>
                        <div className={`chat-footer py-2 border-top`}>

                            <div className={`container-fluid p-0`}>
                                <div className={`d-flex align-items-center justify-content-between`}>

                                    <div className={``}>
                                        <InputGroup>
                                            <InputGroup.Prepend >
                                                <InputGroup.Text className={`border-0 bg-transparent`}>
                                                    <Smile />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>

                                            <FormControl as="textarea" className={`border-0 bg-transparent`}
                                                placeholder="Type your message"
                                                aria-label="" />

                                            {/* <InputGroup.Append >
                                        <InputGroup.Text className={`border-0 bg-transparent`}>
                                        <Paperclip />
                                        </InputGroup.Text>
                                    </InputGroup.Append> */}
                                        </InputGroup>

                                    </div>

                                    <div className={` d-flex align-items-center pr-3`}>
                                        <Paperclip className={`mr-3 border-0 bg-transparent text-muted`} />
                                        <Button variant="primary" className={`btn-ico  rounded-circle`}>
                                            <Send style={{ width: '1.3em' }} />
                                        </Button>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                </Tab>


                <Tab className={`overflow-auto`} eventKey={2}>    
                <div  className={`fixed-header d-flex pt-3 pb-2 bg-white z-1 pl-lg-3`}>
                              
                              <div className={`backBtn d-lg-none ml-2 mt-1 mr-3`} onClick={this.props.toggleChatWindow}>
                                      <ChevronLeft />
                                  </div>
                                  <h3 className={`pb-1 m-0`}>Settings </h3>
                        
                          </div> 
                    <div className={`container-fluid py-4  mt-5`}>
                              

                                    <Accordion className={``} defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle className={`pb-1`} as={Card.Header} eventKey="0">
                                           

                                         <Media className={``}>
                                            <Media.Body>
                                                <p className={`mb-2` }> Account </p>
                                            </Media.Body>    

                                            <User  className={`icon-sm text-muted`}/>
                                        </Media>   

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            
                                        <Form>
                                        <Form.Row>
                                            <div className={`col-sm`}>
                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >Name</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>
                                            </div>
                                            <div className={`col-sm`}>
                                            <Form.Group >
                                                <Form.Label className={`text-secondary`}>Email</Form.Label>
                                                <Form.Control size="sm" type="email" placeholder="" />
                                             
                                            </Form.Group>
                                            </div>
                                            </Form.Row>
                                            <Form.Row className={`mb-4`}>
                                            <div className={`col-sm`}>

                                            <Form.Group >
                                                <Form.Label className={`text-secondary`}>Phone</Form.Label>
                                                <Form.Control size="sm" type="number" placeholder="" />
                                            </Form.Group>
                                            </div>
                                            <div className={`col-sm`}>

                                            <Form.Group >
                                                <Form.Label className={`text-secondary`}>Location </Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                            </Form.Group>

                                            </div>

                                            </Form.Row>

                                            <Button className={`btn-sm w-50 mr-2`} variant="primary" type="submit">
                                                Save 
                                            </Button>
                                            <Button className={`btn-sm  btn-light`} type="submit">
                                                Clear Fields 
                                            </Button>
                                           
                                        </Form>

                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className={`pb-1`} as={Card.Header} eventKey="1">
                                        <Media className={``}>
                                            <Media.Body>
                                                <p className={`mb-2` }> Privacy </p>
                                            </Media.Body>    

                                            <Shield  className={`icon-sm text-muted`}/>
                                        </Media> 

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Form>
                                            <Form.Row>
                                            <div className={`col-sm`}>
                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >Current password</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                
                                            </Form.Group>
                                            </div>
                                            <div className={`col-sm`}>
                                            </div>

</Form.Row>
                                            <Form.Row className={`mb-4`}>
                                            <div className={`col-sm`}>
                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >New password</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                
                                            </Form.Group>
                                            </div>
                                            <div className={`col-sm`}>

                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >Verify password</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                
                                            </Form.Group>
                                            </div>

</Form.Row>
                                            <Button className={`btn-sm w-50 mr-2`} variant="primary" type="submit">
                                                Save 
                                            </Button>
                                            <Button className={`btn-sm  btn-light`} type="submit">
                                                Clear Fields 
                                            </Button>

                                            </Form>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className={`pb-1`} as={Card.Header} eventKey="3">
                                        <Media className={``}>
                                            <Media.Body>
                                                <p className={`mb-2` }> Notification </p>
                                            </Media.Body>    

                                            <Bell  className={`icon-sm text-muted`}/>
                                        </Media> 

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle className={`pb-1`} as={Card.Header} eventKey="4">
                                        <Media className={``}>
                                            <Media.Body>
                                                <p className={`mb-2` }> Social </p>
                                            </Media.Body>    

                                            <Users  className={`icon-sm text-muted`}/>
                                        </Media> 

                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                        <Form>
                                            <Form.Row>
                                            <div className={`col-sm`}>
                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >Github</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                
                                            </Form.Group>
                                            </div>
                                            <div className={`col-sm`}>
                                            </div>

</Form.Row>
                                            <Form.Row className={`mb-4`}>
                                            <div className={`col-sm`}>
                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >LinkedIn</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                
                                            </Form.Group>
                                            </div>
                                            <div className={`col-sm`}>

                                            <Form.Group >
                                                <Form.Label className={`text-secondary`} >Instagram</Form.Label>
                                                <Form.Control size="sm" type="text" placeholder="" />
                                                
                                            </Form.Group>
                                            </div>

</Form.Row>
                                            <Button className={`btn-sm w-50 mr-2`} variant="primary" type="submit">
                                                Save 
                                            </Button>
                                            <Button className={`btn-sm  btn-light`} type="submit">
                                                Clear Fields 
                                            </Button>

                                            </Form>

                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>


                                
                                

                    </div>

                </Tab>

            </Tabs>
        )
    }

}


export default Main