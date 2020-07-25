import React, { Component } from "react";
import ReactDOM from "react-dom";

import Profile from "./profile"
import NewGroup from "./newgroup"


import { Tab, Tabs } from "react-bootstrap"



import { Edit, Users, MessageSquare, User, Settings, Search, ChevronLeft, MoreVertical, Paperclip, Smile, Send } from 'react-feather';
import { Button, InputGroup, FormControl, Media, Card, Badge, Thumbnail } from 'react-bootstrap';

import berlin from '../../images/berlin.jpg'
import denver from '../../images/denver.png'
import helsinki from '../../images/helsinki.png'
import nairobi from '../../images/nairobi.jpg'
import tokyo from '../../images/tokyo.jpg'

class Sidebar extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Tabs activeKey={this.props.activeTab}>

                <Tab eventKey={1}>
                    <div className={`container-fluid py-3`}>

                        <h3 className={`mb-4`}>  chat </h3>
                        <form className="mb-3">
                            <InputGroup >
                                <FormControl
                                    placeholder="Search"
                                    aria-label=""
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>
                                        <Search />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                        </form>
                        <div className={`d-flex text-center my-3 overflow-auto`}>

                            <a className={`mr-3`}>
                                <div className={`avatar avatar-offline avatar-sm mb-1`}>
                                    <img className={`avatar-img`} src={berlin} />
                                </div>
                                <div className={`small `}> Berlin </div>

                            </a>
                            <a className={`mr-3`}>
                                <div className={`avatar avatar-online avatar-sm mb-1`}>
                                    <img className={`avatar-img`} src={denver}></img>
                                </div>
                                <div className={`small`}> Denver </div>

                            </a>
                            <a className={`mr-3`}>
                                <div className={`avatar avatar-sm mb-1`}>
                                    <img className={`avatar-img`} src={helsinki}></img>
                                </div>
                                <div className={`small`}> Helsinki </div>

                            </a>

                            <a className={`mr-3`}>
                                <div className={`avatar avatar-online avatar-sm mb-1`}>
                                    <img className={`avatar-img`} src={nairobi}></img>
                                </div>
                                <div className={`small`}>  Nairobi </div>

                            </a>

                            <a className={`mr-3`}>
                                <div className={`avatar avatar-online avatar-sm mb-1`}>
                                    <img className={`avatar-img`} src={tokyo}></img>
                                </div>
                                <div className={`small`}> Tokyo </div>

                            </a>

                        </div>


                        <div className={`chat-list`}>
                            <a className={`nav-link p-0 mb-3`} onClick={e => this.props.switchTabForMain(e,1)}>
                                <Card>
                                    <Card.Body>

                                        <Media >
                                            <div className={`avatar avatar-sm mr-3`}>
                                                <img className={`avatar-img`} src={nairobi}></img>
                                            </div>
                                            <Media.Body>
                                                <div className={`d-flex align-items-center mb-1`}>
                                                    <h6 className={`text-truncate mb-0 mr-auto`}> Nairobi </h6>
                                                    <p className={`small text-truncate text-muted mb-0 `}> 10:00 PM</p>
                                                </div>
                                                <p className={`text-truncate text-secondary mb-0`}> Hey whatsup </p>
                                            </Media.Body>

                                            <Badge variant="primary" className={`badge-circle badge-border-light badge-top-right`}>
                                                3
      </Badge>
                                        </Media>

                                    </Card.Body>
                                </Card>
                            </a>

                            <a className={`nav-link p-0 mb-3`}>
                                <Card>
                                    <Card.Body>

                                        <Media >
                                            <div className={`avatar avatar-sm mr-3`}>
                                                <img className={`avatar-img`} src={denver}></img>
                                            </div>
                                            <Media.Body>
                                                <div className={`d-flex align-items-center mb-1`}>
                                                    <h6 className={`text-truncate mb-0 mr-auto`}> Denver </h6>
                                                    <p className={`small text-truncate text-muted mb-0 `}> 10:00 PM</p>
                                                </div>
                                                <p className={`text-truncate text-secondary mb-0`}> See you soon  </p>
                                            </Media.Body>

                                            <Badge variant="primary" className={`badge-circle badge-border-light badge-top-right`}>
                                                1
             </Badge>
                                        </Media>

                                    </Card.Body>
                                </Card>
                            </a>

                            <a className={`nav-link p-0 mb-3`}>

                                <Card>
                                    <Card.Body>

                                        <Media >
                                            <div className={`avatar avatar-sm mr-3`}>
                                                <img className={`avatar-img`} src={berlin}></img>
                                            </div>
                                            <Media.Body>
                                                <div className={`d-flex align-items-center mb-1`}>
                                                    <h6 className={`text-truncate mb-0 mr-auto`}> Berlin </h6>
                                                    <p className={`small text-truncate text-muted mb-0 `}> 10:00 PM</p>
                                                </div>
                                                <p className={`text-truncate text-secondary mb-0`}> get ready for heist </p>
                                            </Media.Body>

                                            {/* <Badge variant="primary" className={`badge-circle badge-border-light badge-top-right`}>
                                                3
      </Badge> */}
                                        </Media>

                                    </Card.Body>
                                </Card>
                            </a>

                          

                        </div>

                    </div>  {/*con-fluid*/}
                </Tab>


                <Tab eventKey={2}>   <NewGroup />  </Tab>
                <Tab eventKey={3}>
                    <div className={`container-fluid py-3 `}>
                        <h3 className={`pb-3 mb-0`}> People </h3>
                        <InputGroup className={`pb-3`} >
                            <FormControl as="input" placeholder="search for users" />

                            <InputGroup.Append>
                                <InputGroup.Text>
                                    <Search />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>


                        <Button variant="light" type="button" className={`d-flex `} block> Invite People <Users className={`ml-auto`} /> </Button>


                        <nav>

                            <div className={`py-3`}><small className={`text-uppercase`}> B </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                    <Media>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={berlin}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Berlin </h6>
                                            </div>
                                            <small className={`text-truncate  text-muted mb-0`}> last seen 2 hours ago </small>
                                        </Media.Body>
                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> D </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                    <Media>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={denver}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Denver </h6>
                                            </div>
                                            <small className={`text-truncate  text-muted mb-0`}> last seen 2 hours ago </small>
                                        </Media.Body>
                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> H </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                    <Media>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={helsinki}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Helsinki </h6>
                                            </div>
                                            <small className={`text-truncate  text-muted mb-0`}> online </small>
                                        </Media.Body>
                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> N </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                    <Media>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={nairobi}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Nairobi </h6>
                                            </div>
                                            <small className={`text-truncate  text-muted mb-0`}> online </small>
                                        </Media.Body>
                                    </Media>

                                </Card.Body>
                            </Card>

                            <div className={`py-3`}><small className={`text-uppercase`}> T </small></div>

                            <Card>
                                <Card.Body className={`p-3`}>

                                    <Media>
                                        <div className={`avatar avatar-sm mr-3`}>
                                            <img className={`avatar-img`} src={tokyo}></img>
                                        </div>
                                        <Media.Body>
                                            <div className={`d-flex align-items-center mb-1`}>
                                                <h6 className={`text-truncate mb-0 mr-auto`}> Tokyo </h6>
                                            </div>
                                            <small className={`text-truncate  text-muted mb-0`}> last seen 3 days ago </small>
                                        </Media.Body>
                                    </Media>

                                </Card.Body>
                            </Card>

                        </nav>
                    </div>

                </Tab>
                <Tab eventKey={4}>   <Profile />  </Tab>
                <Tab eventKey={5}>   Tab 55 content  </Tab>

            </Tabs>
        )
    }

}


export default Sidebar