import React, { Component, createRef } from 'react';
import MIDISounds from 'midi-sounds-react';
import Nav from './Nav';
import Keyboard from './Keyboard';

import question from './question.svg';
import volume from './volume.svg';

import '../stylesheet/RP.css';

class Chords extends Component {
    constructor(props) {
        super(props);

        this.keyRef = createRef();

        this.state = {
            instrument: 3,
            reference: {
                base: 60, 
                variant: "major"
            },
            curStage: 1,
            score: 0,
            question: {
                base: 0, 
                variant: "major"
            },
            notes: [],
            octave: 4,
            selectedNote: null,
            keyRef: null,
        }

        this.chordIntervals = {
            "major": [-12, -8, -5, 0, 4, 7, 12],
            "minor": [-12, -9, -5, 0, 3, 7, 12],
        }

        this.playChord = this.playChord.bind(this);
        this.onKeyClickHandler = this.onKeyClickHandler.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.playReference = this.playReference.bind(this);
    }

    note2Char(note) {
        var selectedNote = this.state.reference.base + parseInt(note);

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
        var newQuestion = {
            base: -1, 
            variant: -1
        }
        do {
            newQuestion.base = Math.floor(Math.random() * 25) - 12 + this.state.reference.base;
            // change to * 2 later
            newQuestion.variant = "major";
        } while (newQuestion.base === this.state.question.base && newQuestion.variant === this.state.question.variant);

        var base = this.state.reference.base;
        var notes = this.chordIntervals[newQuestion.variant]
            .map(function(value) {return value + newQuestion.base;});
            
        var startIdx = 0;
        for (let i = 0; i < notes.length; i++) {
            if (notes[i] === (newQuestion.base > 60) ? newQuestion.base - 12 : newQuestion.base) {
                startIdx = i;
                break;
            }
        }

        this.playChord(newQuestion, 2);
        this.setState({question: newQuestion, notes: notes.slice(startIdx,startIdx + 3)});
    }

    playChord(chord, time) {
        chord.variant = ((chord.variant in this.chordIntervals) ? chord.variant : "major");

        // Calculate notes in chord that fit on keyboard
        // NOTE: assumes that keyboard is centered around reference - only works for C rn
        var base = this.state.reference.base;
        var notes = this.chordIntervals[chord.variant]
            .map(function(value) {return value + chord.base;});

        var startIdx = 0;
        for (let i = 0; i < notes.length; i++) {
            if (notes[i] === (chord.base > 60) ? chord.base - 12 : chord.base) {
                startIdx = i;
                break;
            }
        }

        this.midiSounds.playChordNow(this.state.instrument, notes.slice(startIdx,startIdx + 3), time);
	}

    onKeyClickHandler(note) {
        this.setState({selectedNote: note});
    }

    submitAnswer() {
        if(this.state.selectedNote === null) return;
        console.log(this.state.selectedNote + this.state.reference, this.state.question);
        if (parseInt(this.state.selectedNote) + parseInt(this.state.reference.base) === this.state.question.base ||
            parseInt(this.state.selectedNote) + parseInt(this.state.reference.base) + 12 === this.state.question.base||
            parseInt(this.state.selectedNote) + parseInt(this.state.reference.base) - 12 === this.state.question.base) {
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
        // this.setState({score: this.state.score - 1});
        this.keyRef.current.highlightIncorrect(this.state.selectedNote);
        this.playChord({base: 20, variant: "minor"}, 1);
    }

    playReference() {
        this.playChord(this.state.reference, 2);
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

        return (
        <div className="main" style={{paddingTop:'200px'}}>
            <Nav/>
            
            <div className="buttonHolder">
                <Button onClick={this.playReference} txt={"Play Reference"} img={volume}/>
                <Button onClick={this.playChord.bind(this, this.state.question, 2)} txt={"Play Mystery"} img={question}/>
            </div>
            <span>{this.state.selectedNote}</span>
            
            <Keyboard ref={this.keyRef} onKeyClickHandler={this.onKeyClickHandler}/>
            {/* <p className="App-intro">Score: {this.state.score}</p>	
            <p className="App-intro">Note: {this.state.question}</p>				
            
            <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p> */}
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[this.state.instrument]}/>	
            
            <div className="score">Correct: {this.state.score}</div>
            <div className="inputs">
            <div className="board">{currNote[0]}</div>
            <div className="board">{currNote[1]}</div>
            </div>
            <div className="submitBtn" onClick={this.submitAnswer}>Submit</div>
        </div>)
        // return (
        // <div className="App">
        //     <p className="App-intro">Score: {this.state.score}</p>	
        //     <p className="App-intro">Note: {this.state.question.base} {this.state.question.variant}</p>				
        //     <p><button href="/" onClick={this.playChord.bind(this, this.state.reference)}>Reference Note</button></p>
        //     <p><button href="/" onClick={this.playChord.bind(this, this.state.question)}>Question Note</button></p>
        //     <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p>
        //     <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
        //     <hr/>
        // </div>
        
        // )
    }
}; export default Chords;
