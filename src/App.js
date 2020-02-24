import React, { Component } from 'react';
import './App.css';

class DrumMachine extends Component {
  constructor(props){
    super(props)
    this.state = {
      pressed: "",
      bgColorQ: '',
      bgColorW: '',
      bgColorE: '',
      bgColorA: '',
      bgColorS: '',
      bgColorD: '',
      bgColorZ: '',
      bgColorX: '',
      bgColorC: '',
    }

    this.handlePressQ = this.handlePressQ.bind(this);
    this.handlePressW = this.handlePressW.bind(this);
    this.handlePressE = this.handlePressE.bind(this);
    this.handlePressA = this.handlePressA.bind(this);
    this.handlePressS = this.handlePressS.bind(this);
    this.handlePressD = this.handlePressD.bind(this);
    this.handlePressZ = this.handlePressZ.bind(this);
    this.handlePressX = this.handlePressX.bind(this);
    this.handlePressC = this.handlePressC.bind(this);
    this.handleLogic = this.handleLogic.bind(this);

  }
  componentDidMount(){
    document.addEventListener("keydown",this.handleLogic);
  }

  handleLogic(event) {
    switch(event.key) {
      case "q":
        this.handlePressQ()
        break;
      case "w": 
        this.handlePressW()
        break;
      case "e":
        this.handlePressE()
        break;
      case "a":
        this.handlePressA()
        break;
      case "s":
        this.handlePressS()
        break;
      case "d":
        this.handlePressD()
        break;
      case "z":
        this.handlePressZ()
        break;
      case "x":
        this.handlePressX()
        break;
      case "c":
        this.handlePressC()
        break;
        case "Q":
          this.handlePressQ()
          break;
        case "W": 
          this.handlePressW()
          break;
        case "E":
          this.handlePressE()
          break;
        case "A":
          this.handlePressA()
          break;
        case "S":
          this.handlePressS()
          break;
        case "D":
          this.handlePressD()
          break;
        case "Z":
          this.handlePressZ()
          break;
        case "X":
          this.handlePressX()
          break;
        case "C":
          this.handlePressC()
          break;
      default:
    }
  }

  handlePressQ() {
    this.setState({
      pressed: "Snare 1",
      bgColorQ: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorQ: " "
     }) 
    }, 300)
    document.getElementById("Q").play()
    };

  handlePressW() {
    this.setState({
      pressed: "Snare 2",
      bgColorW: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorW: " "
     }) 
    }, 300)
    document.getElementById("W").play()
    };
  
  handlePressE() {
    this.setState({
      pressed: "Snare 3",
      bgColorE: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorE: " "
     }) 
    }, 300)
    document.getElementById("E").play()
    };
    
  handlePressA() {
    this.setState({
      pressed: "Bass 1",
      bgColorA: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorA: " "
     }) 
    }, 300)
    document.getElementById("A").play()
    };

  handlePressS() {
    this.setState({
      pressed: "Bass 2",
      bgColorS: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorS: " "
     }) 
    }, 300)
    document.getElementById("S").play()
    };

  handlePressD() {
    this.setState({
      pressed: "Bass 3",
      bgColorD: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorD: " "
     }) 
    }, 300)
    document.getElementById("D").play()
    };

  handlePressZ() {
    this.setState({
      pressed: "Kick 1",
      bgColorZ: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorZ: " "
     }) 
    }, 300)
    document.getElementById("Z").play()
    };

  handlePressX() {
    this.setState({
      pressed: "Kick 2",
      bgColorX: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorX: " "
     }) 
    }, 300)
    document.getElementById("X").play()
    };

  handlePressC() {
    this.setState({
      pressed: "Kick 3",
      bgColorC: 'orange'
    });
    setTimeout(() => {
     this.setState({
       bgColorC: " "
     }) 
    }, 300)
    document.getElementById("C").play()
    };

  render(){
    return (
      <div id="mainContainer">
        <div id="drum-machine-title">Drum machine</div>
        <div id="drum-machine">
          <div id="display">{this.state.pressed}</div>
          <button style={{backgroundColor: this.state.bgColorQ}} id="snare1" className="drum-pad" onClick={this.handlePressQ}>Q
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorW}} id="snare2" className="drum-pad" onClick={this.handlePressW}>W
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorE}} id="snare3" className="drum-pad" onClick={this.handlePressE}>E
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorA}} id="Bass1" className="drum-pad" onClick={this.handlePressA}>A
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorS}} id="Bass2" className="drum-pad" onClick={this.handlePressS}>S
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorD}} id="Bass3" className="drum-pad" onClick={this.handlePressD}>D
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorZ}} id="Kick1" className="drum-pad" onClick={this.handlePressZ}>Z
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorX}} id="Kick2" className="drum-pad" onClick={this.handlePressX}>X
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>
          </button>
          <button style={{backgroundColor: this.state.bgColorC}} id="Kick3" className="drum-pad" onClick={this.handlePressC}>C
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          </button> 
      </div>
    </div>
    )
  }
}

export default DrumMachine;