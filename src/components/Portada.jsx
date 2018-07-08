import React, { Component } from "react";
import {connect} from "react-redux";
import { CSSTransitionGroup } from 'react-transition-group';
import Heart from "./Heart.jsx";

function mapStateToProps(state) {
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}

class Portada extends Component {
  renderHeart() {
    const hearts = new Array(100).fill({});
    return (
      hearts.map((element, index) => {
        const style = {
          left: Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + "px",
          animationDelay: Math.floor(Math.random() * (10000 - 0)) + 0 + "ms"
        }
        return (
          <Heart key={index} style={style}/>
        )
      })
    )
  }
  
state = {
  menu: ""
}

  toggleMenu() {
    if(this.state.menu === "")
      this.setState({
        menu: "active"
      })
    else
      this.setState({
        menu: ""
      })
  }

  render() {
    
    return(
      <section id="portada" className={`portada background ${this.props.isAnimated}`}>
        <header id="header" className="header contenedor">
          <figure className="logotipo">
            <img src={this.props.logo} width="186" height="60" alt="Invie logotipo"/> {/*srcSet={`${this.props.logo} 1x, ${this.props.logo2x} 2x`}*/}
          </figure>
          <span className="burger-button icon-menu" id="burger-button" onClick={this.toggleMenu.bind(this)}></span>
          <nav className={`menu ${this.state.menu}`} id="menu">
            <ul>
              {this.props.menu.map((item, index) => {
                return (
                <li key={index}>
                  <a href={item.title}>{item.title}</a>
                </li>
                )
              })}
            </ul>
          </nav>
        </header>
        <CSSTransitionGroup transitionName="animationInOut" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
          { !this.props.isAnimated && 
            <div className="contenedor" key="portada">
              <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
              <h3 className="title-a">Se la estrella de rock que siempre quisiste ser</h3>
              <a className="button" href="#guitarras">Conoce mas</a>
            </div>
          }
        </CSSTransitionGroup>
        {
          this.props.isAnimated &&
          this.renderHeart()
        }
      </section>
    )
  }
}

export default connect(mapStateToProps)(Portada);