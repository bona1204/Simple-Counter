import React from "react";
import propTypes from "prop-types";
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var uni = 0
var dec = 0
var cen = 0
var mil = 0
var dmil = 0
var cmil = 0

const Styles = {
    //write button styles here
    fontSize: 100,
};
const ClockStyles = {
    //write button styles here
    fontSize: 100,
};
const Contador = () => {
    return (
        <div className="container-fluid bg-black text-center">
            <div className="row justify-content-center gap-3 py-3 " >
                <div className="col-1 border border-secondary text-white rounded bg-dark " id="watch">
                    <p style={ ClockStyles}>
                    <FontAwesomeIcon icon={faClock} fixedWidth />
                    </p>
                </div>
                <div className="col-1 text-white border border-secondary rounded bg-dark" >
                    <p  id="cmil" style={Styles}>
                        {cmil}
                    </p>
                </div>
                <div className="col-1 text-white border border-secondary rounded bg-dark" >
                    <p id="dmil" style={Styles}>
                        {dmil}
                    </p>
                </div>
                <div className="col-1 text-white border border-secondary rounded bg-dark" >
                    <p id="mil" style={Styles}>
                        {mil}
                    </p>
                </div>
                <div className="col-1 text-white border border-secondary rounded bg-dark" >
                    <p id="cen" style={Styles}>
                        {cen}
                    </p>
                </div>
                <div className="col-1 text-white border border-secondary rounded bg-dark" >
                    <p id="dec" style={Styles}>
                        {dec}
                    </p>
                </div>
                <div className="col-1 text-white border border-secondary rounded bg-dark">
                    <p id="uni" style={Styles}>
                        {uni}
                    </p>
                </div>
            </div>
        </div>
    );
}

window.onload = funi()

function funi() {
    let time = setInterval(function () {
        if (uni == 10) {
            uni = 0
            fdec()
        }
        document.getElementById("uni").innerHTML = `${uni}`;
        uni += 1
    }, 1000)
}
function fdec() {
    dec += 1
    if (dec == 10) {
        dec = 0
        fcen()
    }
    document.getElementById("dec").innerHTML = `${dec}`;

}
function fcen() {
    cen += 1
    if (cen == 10) {
        cen = 0
        fmil()
    }
    document.getElementById("cen").innerHTML = `${cen}`;

}
function fmil() {
    mil += 1
    if (mil == 10) {
        mil = 0
        fdmil()
    }
    document.getElementById("mil").innerHTML = `${mil}`;

}
function fdmil() {
    dmil += 1
    if (dmil == 10) {
        dmil = 0
        fcmil()
    }
    document.getElementById("dmil").innerHTML = `${dmil}`;

}
function fcmil() {
    cmil += 1
    document.getElementById("cmil").innerHTML = `${cmil}`;
}
export default Contador