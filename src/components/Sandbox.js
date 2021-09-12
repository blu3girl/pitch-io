import React, { Component, createRef } from 'react';
import MIDISounds from 'midi-sounds-react';
import Nav from './Nav';
import SandboxKeyboard from './SandboxKeyboard';

import question from './question.svg';
import volume from './volume.svg';

import '../stylesheet/RP.css';

class RelativePitch extends Component {
    constructor(props) {
        super(props);

        this.keyRef = createRef();

        this.state = {
            instrument: 4,
            reference: 60,
            curStage: 1,
            score: 0,
            question: 0,
            octave: 4,
            selectedNote: null,
            keyRef: null,
        }

        this.onKeyClickHandler = this.onKeyClickHandler.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.playReference = this.playReference.bind(this);
    }

    note2Char(note) {
        var selectedNote = this.state.reference + parseInt(note);

        if(this.state.selectedNote === null) return ["",""];

        // 60: C4
        var octave = Math.floor(selectedNote / 12)-1;
        var rem = selectedNote % 12;
        var note = ''
        
        switch(rem) {
            case 0: note = 'C'; break;
            case 1: note = 'C#'; break;
            case 2: note = 'D'; break;
            case 3: note = 'D#'; break;
            case 4: note = 'E'; break;
            case 5: note = 'F'; break;
            case 6: note = 'F#'; break;
            case 7: note = 'G'; break;
            case 8: note = 'G#'; break;
            case 9: note = 'A'; break;
            case 10: note = 'A#'; break;
            case 11: note = 'B'; break;
        }

        return [note,octave];
    }

    char2note(note, octave) {
        var rem = 0;
        switch(note) {
            case 'C': rem = 0; break;
            case 'C#': rem = 1; break;
            case 'D': rem = 2; break;
            case 'D#': rem = 3; break;
            case 'E': rem = 4; break;
            case 'F': rem = 5; break;
            case 'F#': rem = 6; break;
            case 'G': rem = 7; break;
            case 'G#': rem = 8; break;
            case 'A': rem = 9; break;
            case 'A#': rem = 10; break;
            case 'B': rem = 11; break;
        }

        var o = (octave + 1)*12

        return rem + o;
    }

    componentDidMount() {
        this.loadNewStage();
    }

    loadNewStage() {
        var newQuestion = -1;
        do {
            newQuestion = Math.floor(Math.random() * 25) - 12 + this.state.reference;
        } while (newQuestion === this.state.question);

        this.playNote(newQuestion);
        this.setState({question: newQuestion});
    }

    playNote(note) {
		this.midiSounds.playChordNow(this.state.instrument, [note], 2);
	}

    onKeyClickHandler(note) {
        // this.setState({selectedNote: note});
        this.playNote(note);
    }

    submitAnswer() {
        if(this.state.selectedNote === null) return;
        console.log(this.state.selectedNote + this.state.reference, this.state.question);
        if (parseInt(this.state.selectedNote) + parseInt(this.state.reference) === this.state.question) {
            this.onCorrectKey();
        }
        else {
            this.onIncorrectKey();
        }
    }

    onCorrectKey() {
        this.setState({score: this.state.score + 1});
        this.keyRef.current.unHighlight();
        this.setState({selectedNote: null});
        this.loadNewStage();
    }

    onIncorrectKey() {
        this.playNote(20);
        this.keyRef.current.highlightIncorrect(this.state.selectedNote);
        // this.setState({score: this.state.score - 1});
    }

    playReference() {
        this.playNote(this.state.reference);
        this.keyRef.current.startBlink(0);
    }

    render() {
        const Button = (props) => { return(
            <div className="button" onClick={props.onClick}>
                <img src={props.img}></img>
                <a>{props.txt}</a>
            </div>
        )}

        const currNote = this.note2Char(this.state.selectedNote);

        console.log("ANSWER",this.note2Char(this.state.question - this.state.reference));
        return (
        <div className="main" style={{paddingTop:'200px'}}>
            <Nav/>
            
            <SandboxKeyboard ref={this.keyRef} onKeyClickHandler={this.onKeyClickHandler}/>
            {/* <p className="App-intro">Score: {this.state.score}</p>	
            <p className="App-intro">Note: {this.state.question}</p>				
            
            <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p> */}
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[this.state.instrument]}/>	
        </div>
        )
    }
} export default RelativePitch;