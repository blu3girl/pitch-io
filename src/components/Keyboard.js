import { Component } from "react";
import "../stylesheet/key.css";

class Keyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mid: 60,
            activeKey: 1000,
        }

        this.highlightKey = this.highlightKey.bind(this);
    }

    unHighlight() {
        if(this.state.activeKey < 1000) {
            document.getElementById(this.state.activeKey).classList.remove('active', 'wrong');
            this.setState({activeKey: 1000});
        }
    }

    highlightKey(id) {
        id = String(id);
        document.getElementById(id).classList.add('active');
        if(this.state.activeKey < 1000)
            document.getElementById(this.state.activeKey).classList.remove('active', 'wrong');
        if(this.state.activeKey === id) {
            this.setState({activeKey: 1000});
            this.props.onKeyClickHandler(null);
        }
        else {
            this.setState({activeKey: id});
            this.props.onKeyClickHandler(id);
        }
    }

    highlightIncorrect(id) {
        id = String(id);
        console.log(id);
        document.getElementById(id).classList.remove('active');
        document.getElementById(id).classList.add('wrong');
    }

    startBlink(id) {
        document.getElementById(id).classList.add('blink');
    }

    removeBlink(id) {
        document.getElementById(id).classList.remove('blink');
    }

    render() {
        return (
            <div className="keyboard">

            <svg width="802" height="214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{color:"#CFDEE7"}} id="12" className="key" onClick={() => {this.highlightKey(12)}} onAnimationEnd={() => {this.removeBlink(12)}}>
            <path d="M770.25 23C770.25 17.4771 774.727 13 780.25 13H791.75C797.273 13 801.75 17.4772 801.75 23V119V204C801.75 209.523 797.273 214 791.75 214H780.25C774.727 214 770.25 209.523 770.25 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="11" className="key" onClick={() => {this.highlightKey(11)}} onAnimationEnd={() => {this.removeBlink(11)}}>
            <path d="M762 23C762 17.4771 757.523 13 752 13H740.5C734.977 13 730.5 17.4772 730.5 23V110.75C730.5 115.306 726.806 119 722.25 119V119C717.694 119 714 122.694 714 127.25V204C714 209.523 718.477 214 724 214H752C757.523 214 762 209.523 762 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="10" className="key" onClick={() => {this.highlightKey(10)}} onAnimationEnd={() => {this.removeBlink(10)}}>
            <path d="M695 10C695 4.47715 699.477 0 705 0H717C722.523 0 727 4.47715 727 10V107C727 112.523 722.523 117 717 117H705C699.477 117 695 112.523 695 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="9" className="key" onClick={() => {this.highlightKey(9)}} onAnimationEnd={() => {this.removeBlink(9)}}>
            <path d="M698.5 119C694.358 119 691 115.642 691 111.5V21.25C691 16.6937 687.306 13 682.75 13V13C678.194 13 674.5 16.6937 674.5 21.25V110.75C674.5 115.306 670.806 119 666.25 119V119C661.694 119 658 122.694 658 127.25V204C658 209.523 662.477 214 668 214H696C701.523 214 706 209.523 706 204V126.5C706 122.358 702.642 119 698.5 119V119Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="8" className="key" onClick={() => {this.highlightKey(8)}} onAnimationEnd={() => {this.removeBlink(8)}}>
            <path d="M639 10C639 4.47715 643.477 0 649 0H661C666.523 0 671 4.47715 671 10V107C671 112.523 666.523 117 661 117H649C643.477 117 639 112.523 639 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="7" className="key" onClick={() => {this.highlightKey(7)}} onAnimationEnd={() => {this.removeBlink(7)}}>
            <path d="M642.5 119C638.358 119 635 115.642 635 111.5V21.25C635 16.6937 631.306 13 626.75 13V13C622.194 13 618.5 16.6937 618.5 21.25V110.75C618.5 115.306 614.806 119 610.25 119V119C605.694 119 602 122.694 602 127.25V204C602 209.523 606.477 214 612 214H640C645.523 214 650 209.523 650 204V126.5C650 122.358 646.642 119 642.5 119V119Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="6" className="key" onClick={() => {this.highlightKey(6)}} onAnimationEnd={() => {this.removeBlink(6)}}>
            <path d="M583 10C583 4.47715 587.477 0 593 0H605C610.523 0 615 4.47715 615 10V107C615 112.523 610.523 117 605 117H593C587.477 117 583 112.523 583 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="5" className="key" onClick={() => {this.highlightKey(5)}} onAnimationEnd={() => {this.removeBlink(5)}}>
            <path d="M548 23C548 17.4771 552.477 13 558 13H569.5C575.023 13 579.5 17.4772 579.5 23V110.75C579.5 115.306 583.194 119 587.75 119V119C592.306 119 596 122.694 596 127.25V204C596 209.523 591.523 214 586 214H558C552.477 214 548 209.523 548 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="4" className="key" onClick={() => {this.highlightKey(4)}} onAnimationEnd={() => {this.removeBlink(4)}}>
            <path d="M542 23C542 17.4771 537.523 13 532 13H520.5C514.977 13 510.5 17.4772 510.5 23V110.75C510.5 115.306 506.806 119 502.25 119V119C497.694 119 494 122.694 494 127.25V204C494 209.523 498.477 214 504 214H532C537.523 214 542 209.523 542 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="3" className="key" onClick={() => {this.highlightKey(3)}} onAnimationEnd={() => {this.removeBlink(3)}}>
            <path d="M475 10C475 4.47715 479.477 0 485 0H497C502.523 0 507 4.47715 507 10V107C507 112.523 502.523 117 497 117H485C479.477 117 475 112.523 475 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="2" className="key" onClick={() => {this.highlightKey(2)}} onAnimationEnd={() => {this.removeBlink(2)}}>
            <path d="M478.5 119C474.358 119 471 115.642 471 111.5V21.25C471 16.6937 467.306 13 462.75 13V13C458.194 13 454.5 16.6937 454.5 21.25V110.75C454.5 115.306 450.806 119 446.25 119V119C441.694 119 438 122.694 438 127.25V204C438 209.523 442.477 214 448 214H476C481.523 214 486 209.523 486 204V126.5C486 122.358 482.642 119 478.5 119V119Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="1" className="key" onClick={() => {this.highlightKey(1)}} onAnimationEnd={() => {this.removeBlink(1)}}>
            <path d="M419 10C419 4.47715 423.477 0 429 0H441C446.523 0 451 4.47715 451 10V107C451 112.523 446.523 117 441 117H429C423.477 117 419 112.523 419 107V10Z" fill="#92B4F4"/>
            </g>
            
            {/* MIDDLE C */}
            <g style={{color:"#CFDEE7"}} id="0" className="key" onClick={() => {this.highlightKey(0)}} onAnimationEnd={() => {this.removeBlink(0)}}>
            <path d="M394 15.5H405.5C409.642 15.5 413 18.8579 413 23V110.75C413 116.687 417.813 121.5 423.75 121.5C426.926 121.5 429.5 124.074 429.5 127.25V204C429.5 208.142 426.142 211.5 422 211.5H394C389.858 211.5 386.5 208.142 386.5 204V23C386.5 18.8579 389.858 15.5 394 15.5Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-1" className="key" onClick={() => {this.highlightKey(-1)}} onAnimationEnd={() => {this.removeBlink(-1)}}>
            <path d="M378 23C378 17.4771 373.523 13 368 13H356.5C350.977 13 346.5 17.4772 346.5 23V110.75C346.5 115.306 342.806 119 338.25 119V119C333.694 119 330 122.694 330 127.25V204C330 209.523 334.477 214 340 214H368C373.523 214 378 209.523 378 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="-2" className="key" onClick={() => {this.highlightKey(-2)}} onAnimationEnd={() => {this.removeBlink(-2)}}>
            <path d="M311 10C311 4.47715 315.477 0 321 0H333C338.523 0 343 4.47715 343 10V107C343 112.523 338.523 117 333 117H321C315.477 117 311 112.523 311 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-3" className="key" onClick={() => {this.highlightKey(-3)}} onAnimationEnd={() => {this.removeBlink(-3)}}>
            <path d="M314.5 119C310.358 119 307 115.642 307 111.5V21.25C307 16.6937 303.306 13 298.75 13V13C294.194 13 290.5 16.6937 290.5 21.25V110.75C290.5 115.306 286.806 119 282.25 119V119C277.694 119 274 122.694 274 127.25V204C274 209.523 278.477 214 284 214H312C317.523 214 322 209.523 322 204V126.5C322 122.358 318.642 119 314.5 119V119Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="-4" className="key" onClick={() => {this.highlightKey(-4)}} onAnimationEnd={() => {this.removeBlink(-4)}}>
            <path d="M255 10C255 4.47715 259.477 0 265 0H277C282.523 0 287 4.47715 287 10V107C287 112.523 282.523 117 277 117H265C259.477 117 255 112.523 255 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-5" className="key" onClick={() => {this.highlightKey(-5)}} onAnimationEnd={() => {this.removeBlink(-5)}}>
            <path d="M258.5 119C254.358 119 251 115.642 251 111.5V21.25C251 16.6937 247.306 13 242.75 13V13C238.194 13 234.5 16.6937 234.5 21.25V110.75C234.5 115.306 230.806 119 226.25 119V119C221.694 119 218 122.694 218 127.25V204C218 209.523 222.477 214 228 214H256C261.523 214 266 209.523 266 204V126.5C266 122.358 262.642 119 258.5 119V119Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="-6" className="key" onClick={() => {this.highlightKey(-6)}} onAnimationEnd={() => {this.removeBlink(-6)}}>
            <path d="M199 10C199 4.47715 203.477 0 209 0H221C226.523 0 231 4.47715 231 10V107C231 112.523 226.523 117 221 117H209C203.477 117 199 112.523 199 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-7" className="key" onClick={() => {this.highlightKey(-7)}} onAnimationEnd={() => {this.removeBlink(-7)}}>
            <path d="M164 23C164 17.4771 168.477 13 174 13H185.5C191.023 13 195.5 17.4772 195.5 23V110.75C195.5 115.306 199.194 119 203.75 119V119C208.306 119 212 122.694 212 127.25V204C212 209.523 207.523 214 202 214H174C168.477 214 164 209.523 164 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-8" className="key" onClick={() => {this.highlightKey(-8)}} onAnimationEnd={() => {this.removeBlink(-8)}}>
            <path d="M158 23C158 17.4771 153.523 13 148 13H136.5C130.977 13 126.5 17.4772 126.5 23V110.75C126.5 115.306 122.806 119 118.25 119V119C113.694 119 110 122.694 110 127.25V204C110 209.523 114.477 214 120 214H148C153.523 214 158 209.523 158 204V23Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="-9" className="key" onClick={() => {this.highlightKey(-9)}} onAnimationEnd={() => {this.removeBlink(-9)}}>
            <path d="M91 10C91 4.47715 95.4772 0 101 0H113C118.523 0 123 4.47715 123 10V107C123 112.523 118.523 117 113 117H101C95.4772 117 91 112.523 91 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-10" className="key" onClick={() => {this.highlightKey(-10)}} onAnimationEnd={() => {this.removeBlink(-10)}}>
            <path d="M94.5 119C90.3579 119 87 115.642 87 111.5V21.25C87 16.6937 83.3063 13 78.75 13V13C74.1937 13 70.5 16.6937 70.5 21.25V110.75C70.5 115.306 66.8063 119 62.25 119V119C57.6937 119 54 122.694 54 127.25V204C54 209.523 58.4772 214 64 214H92C97.5228 214 102 209.523 102 204V126.5C102 122.358 98.6421 119 94.5 119V119Z" fill="#CFDEE7"/>
            </g>
            <g style={{color:"#92B4F4"}} id="-11" className="key" onClick={() => {this.highlightKey(-11)}} onAnimationEnd={() => {this.removeBlink(-11)}}>
            <path d="M35 10C35 4.47715 39.4772 0 45 0H57C62.5228 0 67 4.47715 67 10V107C67 112.523 62.5228 117 57 117H45C39.4772 117 35 112.523 35 107V10Z" fill="#92B4F4"/>
            </g>
            <g style={{color:"#CFDEE7"}} id="-12" className="key" onClick={() => {this.highlightKey(-12)}} onAnimationEnd={() => {this.removeBlink(-12)}}>
            <path d="M0 23C0 17.4771 4.47715 13 10 13H21.5C27.0228 13 31.5 17.4772 31.5 23V110.75C31.5 115.306 35.1937 119 39.75 119V119C44.3063 119 48 122.694 48 127.25V204C48 209.523 43.5228 214 38 214H10C4.47715 214 0 209.523 0 204V23Z" fill="#CFDEE7"/>
            </g>
            </svg>
            </div>            
        )
    }
} export default Keyboard;