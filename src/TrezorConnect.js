import React, { Component } from 'react';

export default class TrezorConnect extends Component {

  render() {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "#5383ad",
            zIndex: 99,
            color: "white"
        }}>
            <div style={{
                textAlign: "center",
                height: "100%",
                paddingTop: "12rem"
            }}>

                <h2 style={{margin: 0}}>Please connect your trezor..</h2>

                <div style={{paddingTop: "10rem"}}>
                    <img
                        src="http://media.coindesk.com/uploads/2014/10/trezor-confirm1.jpg"
                        height="250px"
                        style={{borderRadius: "10px"}}
                    />
                </div>

            </div>
        </div>
    );
  }
}
