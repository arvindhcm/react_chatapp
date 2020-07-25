import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Nav,Tab, Tabs, Form } from "react-bootstrap"


import { Image } from 'react-feather';
import { Button, InputGroup, FormControl, Media, Card, Badge, Thumbnail,ListGroup } from 'react-bootstrap';


import berlin from '../../images/berlin.jpg'
import denver from '../../images/denver.png'
import helsinki from '../../images/helsinki.png'
import nairobi from '../../images/nairobi.jpg'
import tokyo from '../../images/tokyo.jpg'


class NewGroup extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            activeTab : 1
        }
    }

    setActiveTab(e,activeTab){
        e.preventDefault();

        let currentState = this.state.activeTab
        currentState = activeTab;
    
        this.setState({activeTab:currentState});
    }

    render(){
        return(
        <div className={`NewGroup`}>
            
            <div className={`container-fluid py-3`}>
                    <h4 className={`pb-3`}> Create Group </h4>

                    <Card className={`mb-3 bg-light`}>
                        <Card.Body className={`text-center py-4`}>
                            <div className={`groupimgHolder d-flex mx-auto mb-3`}>
                                {/* <img className={ `avatar-img `} src={berlin} />  */}
                                <Form.Label htmlFor="fileUpload" className={`m-auto`} >
                                    <Image  className={`m-auto`} />
                                    </Form.Label>
                                    <Form.Control id={`fileUpload`} className={`d-none`}  type="file" placeholder="" />

                            </div>
                            {/* <h6 className={`my-3`}>  Arvindh CM </h6> */}
                            <p className={`text-secondary medium`}>  Max file size 3MB <br/> jpg or png . </p>

                        </Card.Body>
                    </Card>

                    <Nav className={`p-2 mb-3`} variant="pills" defaultActiveKey="1">
                        <Nav.Item>
                            <Nav.Link onClick={e=>this.setActiveTab(e,1)} eventKey="1" >Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={e=>this.setActiveTab(e,2)} eventKey="2"> Memebers </Nav.Link>
                        </Nav.Item>
                    
                    </Nav>

                    <Tabs activeKey={this.state.activeTab} >

                    <Tab  eventKey={1} >
                    <Form>
                        <Form.Group>
                                <Form.Label className={`text-secondary`} >Name</Form.Label>
                                <Form.Control  type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label className={`text-secondary`} > Topic </Form.Label>
                                <Form.Control  type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label className={`text-secondary`} > Description </Form.Label>
                                <Form.Control  as="textarea" placeholder="" />
                        </Form.Group>
                    </Form>
                    <div className={``}>
                    <Button className={`w-100`} >  Create Group </Button>
                </div>
                    </Tab>
                    <Tab eventKey={2} > 
                   
                   <nav>

                            <div className={`py-3`}><small className={`text-uppercase`}> B </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                <Media className={`align-items-center`}>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={berlin}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Berlin </h6>
                                            </div>
                                            <small className={`text-truncate  text-muted mb-0`}> last seen 2 hours ago </small>
                                        </Media.Body>
                                        <Form.Check label="" />

                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> D </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                    <Media className={`align-items-center`}>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={denver}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Denver </h6>
                                            </div>
                                        </Media.Body>

                                        <Form.Check label="" />
                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> H </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                <Media className={`align-items-center`}>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={helsinki}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Helsinki </h6>
                                            </div>
                                        </Media.Body>
                                        <Form.Check label="" />

                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> N </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                <Media className={`align-items-center`}>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={nairobi}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Nairobi </h6>
                                            </div>
                                        </Media.Body>
                                        <Form.Check label="" />

                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> T </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                <Media className={`align-items-center`}>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={tokyo}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Tokyo </h6>
                                            </div>
                                        </Media.Body>
                                        <Form.Check label="" />

                                    </Media>

                                </Card.Body>
                            </Card>

                            </nav>
                    </Tab>
                    </Tabs>

                   
                
              </div>
              </div>

              )
    }
}

export default NewGroup