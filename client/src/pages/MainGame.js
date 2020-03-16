// import React from 'react';
import React, { Component } from 'react';
import Phaser from "phaser";
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import theme from '../utils/themeUtil';

function MainGame(){

    return(
        <ThemeProvider theme={ theme }>
            <Grid container component="main" >
            <Grid item xs={12} sm={8} md={8} elevation={6}>
            </Grid>
            <Grid item xs={false} sm={4} md={4}>I'm Bubba Pratt!</Grid>
            </Grid>
        </ThemeProvider>
    )
}

import React from "react";
import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() { this.load.image("logo", logoImg); }

function create() {
    const logo = this.add.image(400, 150, "logo");
    this.tweens.add(
        {
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        }
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// specific wrapper
/*
import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
 
class App extends Component {
  state = {
    initialize: false,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {}
    }
  }
  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
}
*/

// Web Component
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
import Phaser from 'phaser'
 
const game = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scene: {}
}
 
ReactDOM.render(<ion-phaser ref={el => el.game = game} />, document.getElementById('root'));
 
defineIonPhaser(window);
*/

/*
import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
 
class App extends Component {
 
  state = {
    initialize: true,
    game: {
      width: "50%",
      height: "50%",
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#24252A')
        },
        create: function() {
          this.helloWorld = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            "Hello World", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
          );
          this.helloWorld.setOrigin(0.5);
        },
        update: function() {
          this.helloWorld.angle += 1;
        }
      }
    }
  }
 
  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
}
 
export default App;
*/

export default MainGame