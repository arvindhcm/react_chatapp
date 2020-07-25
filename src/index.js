import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Edit, Users, MessageSquare, User, Settings, Search, ChevronLeft, MoreVertical, Paperclip, Smile, Send, Phone ,Video} from 'react-feather';
import { Button, InputGroup, FormControl, Media, Card, Badge } from 'react-bootstrap';

import './main.scss';

import Sidebar from "./js/components/sidebar"
import Main from "./js/components/main"

import berlin from './images/berlin.jpg'
import denver from './images/denver.png'
import helsinki from './images/helsinki.png'
import nairobi from './images/nairobi.jpg'
import tokyo from './images/tokyo.jpg'
import { Thumbnail } from "react-bootstrap";

import { isMobile } from "react-device-detect";

class Game extends React.Component {

  constructor(props){
    super(props);

    this.toggleChatWindow = this.toggleChatWindow.bind(this);
    this.switchTab = this.switchTab.bind(this);
    this.switchTabForMain = this.switchTabForMain.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);

    this.state = {
      mainOpen:true,
      activeTab:1,
      isDesktop: false,
      activeTabForMain:1
    }
  }

  toggleChatWindow ()  {

      let mainOpen = this.state.mainOpen
      this.setState({mainOpen:!mainOpen})
      console.log(mainOpen)

  }

  switchTab (e,activeTab){


    e.preventDefault();

    let currentState = this.state.activeTab
    currentState = activeTab;

    this.setState({activeTab:currentState});
  }

  switchTabForMain (e,activeTab){


    e.preventDefault();
console.log(activeTab)
    let currentState = this.state.activeTabForMain
    currentState = activeTab;

    this.setState({activeTabForMain:currentState});
    
    this.setState({mainOpen:true});
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);

    if(isMobile){
      this.setState({mainOpen:false});
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 });
  }

  render() {
    const isDesktop = this.state.isDesktop;


    return (

      <div className={`layout-bg ` + (isDesktop? 'py-5':'')}>

      <div className={`layout ` + (isDesktop? 'container':'') }>

<div className={`navigation navbar py-3 px-4 border-top`}>
          <ul className={`nav navbar-nav flex-row flex-lg-column flex-grow-1 justify-content-between justify-content-lg-center root-nav`} >

            <li><a>  <Edit onClick={e => this.switchTab(e,2) }/>  </a></li>
            <li className={`mt-lg-5`}>  <a>  <Users onClick={e => this.switchTab(e,3) }/>  </a> </li>
            <li className={`mt-lg-5`}> <a>  <MessageSquare onClick={ e => this.switchTab(e,1)} />  </a> </li>
            <li className={`mt-lg-5`}> <a>  <User onClick={e => this.switchTab(e,4) }/>  </a> </li>
            <li className={`mt-lg-5`}>  <a>  <Settings onClick={e => this.switchTabForMain(e,2) }/>  </a> </li>

          </ul>

        </div>

        <div className={`sidebar`}>

         <Sidebar  switchTabForMain={this.switchTabForMain} activeTab = {this.state.activeTab} ></Sidebar>

        </div> {/*sidebar*/}


        <div className={`main ${this.state.mainOpen? 'main-visible':'main-hidden'}`}>

          
        <Main  toggleChatWindow={this.toggleChatWindow} activeTabForMain = {this.state.activeTabForMain} ></Main>

        </div>

      </div>

      </div>
    );
  }

}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
