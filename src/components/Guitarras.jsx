import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from 'react-transition-group';

function mapStateToProps(state) {
  return {
    guitarras: state.guitarras
  }
}

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          this.props.guitarras.map((guitarra, index) => {
            return (
              <article className="guitarra" key={index}> 
                <CSSTransitionGroup transitionName="flicker" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                  <img className="guitarra-image" src={guitarra.image} key={guitarra.image} alt={guitarra.alt} width="350" />{/* data-src={`${guitarra.image}|${guitarra.image2x}`} */}
                </CSSTransitionGroup>
                <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeave={false}>
                  <div className="contenedor-guitarra" key={guitarra.name}>
                    <h3 className="guitarra-name">{guitarra.name}</h3>
                    <ol>
                      { 
                        guitarra.features.map((feature, index) => {
                          return (
                            <li key={index}>{feature}</li>
                          )
                        })
                      }
                    </ol>
                  </div>
                </CSSTransitionGroup>
              </article>
            )
          })
        }
        <div className="video-demo-contenedor">
          <div className="video-demo">
            <div className="video-responsive-contenedor">
              <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(mapStateToProps)(Guitarras);