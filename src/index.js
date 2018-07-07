import React from 'react';
import ReactDOM from 'react-dom';
import './css/invie.css';
import "./css/animations.css";
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';

import logoPortada from "./images/invie.png";
import logoPortada2x from "./images/invie2x.png";
import logoPlatzi from "./images/platzi.png";

import acustica from "./images/invie-acustica.png";
import acustica2x from "./images/invie-acustica2x.png";
import classic from "./images/invie-classic.png";
import classic2x from "./images/invie-classic2x.png";

import cheet from "cheet.js";

import { Provider } from "react-redux";
import { createStore } from "redux";

import easterA from "./images/easter-a.png";
import easterB from "./images/easter-b.png";

const inicialState = {
  isAnimated: false,
  menu: [
    {
      href: "index.html",
      title: "Home"
    },
    {
      href: "#guitarras",
      title: "Guitarras"
    },
    {
      href: "precios.html",
      title: "Precios"
    }
  ],
  logoPortada: logoPortada,
  logoPortada2x: logoPortada2x,
  guitarras: [
    {
      image: acustica,
      image2x: acustica2x,
      alt: "Guitarra Invie Acustica",
      name: "Invie Acustica",
      features: [
        "Estilo vintage",
        "Madera pura",
        "Incluye estuche invisible de aluminio"
      ]
    },
    {
      image: classic,
      image2x: classic2x,
      alt: "Guitarra Invie Classic",
      name: "Invie Classic",
      features: [
        "Estilo vintage",
        "Liviana",
        "Inicia tu camino como Rockstar"
      ]
    }
  ]
}

const easter = {
  isAnimated: "is-animated",
  menu: [
  ],
  logoPortada: logoPlatzi,
  guitarras: [
    {
     image: easterA,
     alt: 'Guitarra padre de familia',
     name: 'Invie Familiar',
     features: [
      'Lista para copiar a los Simpsons',
      'Aire puro',
      'Chistes malos',
     ]
    },
    {
     image: easterB,
     alt: 'Guitarra Invie Anime',
     name: 'Invie Anime',
     features: [
      'Estilo vintage',
      'Liviana',
      'Empieza tu camino como rockstar',
     ]
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case "UPDATE_PROPS": {
      const newProps = action.payload.props;
      return { ...state, ...newProps };
    }
    default:
      return state;
  }
}

const store = createStore(reducer, inicialState);

cheet("i n v i e", () => {
  store.dispatch({
    type: "UPDATE_PROPS",
    payload: {
      props: easter
    }
  });
});

cheet("g o b a c k", () => {
  store.dispatch({
    type: "UPDATE_PROPS",
    payload: {
      props: inicialState
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
