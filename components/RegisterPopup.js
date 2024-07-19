class RegisterPopup extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.state = 
        {
            error: ""
        }
    }

    valueChanged(e){
        this.updateState(e.target.name, e.target.value);
    }
    updateState(key, val) {
        this.state[key] = val;
        this.setState(this.state)
    }
    render() {
        var popupStyle = {
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

        }
        var boxStyle = {
            width: "1500px",
            height: "700px",
            backgroundColor: appBlue,
            borderRadius: "75px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflowY: "hidden" ,
            overflowX : 'hidden',
            color: "white",
            fontSize: "45px",
            alignItems: "center"
        }
        var contentDiv = {
            width: "90%"
        }
        var buttonDivStyle = {
            position: "absolute",
            top: "25px",
            left: "10px",
            transform: "scale(1.5)"  
        };

        var divStlye = {
            boxSizing: "border-box",
            width: "100%",
            padding: "5px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }

        var labelStyle = {
            margin: 0,
            marginRight: "40px",
            fontSize: "25px",
            fontWeight: "bold"
        }

        var inputStyle = {
            height: "20px",
            fontSize: "18px",
            width: "200px"
        }

        var headerStyle = {
            fontSize: "35px",
        }

        if(window.screen.width < 1280) {
             popupStyle = {
                position: "fixed",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                top: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // overflowY: 'scroll',
            }

             boxStyle = {
                width: "fit-content",
                height: "fit-content",
                backgroundColor: appBlue,
                borderRadius: "25px",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                // overflowY: 'auto',
                // overflowX : 'auto'
            }
             contentDiv = {
                width: "95vw",
            }
             buttonDivStyle = {
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                boxSizing: "border-box",
                paddingBottom: "10px",
                paddingRight: "10px"
            }
    
             divStlye = {
                boxSizing: "border-box",
                width: "100%",
                padding: "5px 0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end"
            }
    
            labelStyle = {
                margin: 0,
                marginRight: "20px",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "7px"
            }
    
            inputStyle = {
                height: "15px",
                fontSize: "10px",
                width: "100px",
                marginRight: "7px"
            }

            headerStyle = {
                fontSize: "22px",
                marginLeft: "7px"
            }

        }

        var errorMessage = null
        if(this.state.error != ""){
            var errorStyle = {
                color: "red",
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "bold"
            }
            errorMessage = <p style={errorStyle}>{this.state.error}</p>
        }

        var hrStyle = {
            border: '5px dotted ' + appRed,
            borderStyle: 'none none dotted',
            color: '#fff',
            backgroundColor: '#fff' 
        }

        return (
            <div style={popupStyle}>
                <div style={boxStyle}>
                    <div style={contentDiv}>
                        <p>
                            <br></br>
                            <a href="https://www.youtube.com/watch?v=-h3o3GXP_2c" style={{ color: 'white' }}>Tutorial Link</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            1.Go to the Children tab 
                            <br></br>
                            2.Click the plus button and add your child's information
                            <br></br>
                            3.Go to the Register tab
                            <br></br>
                            4.Click the register button and select the child you would like to register for the session.
 
                        </p>
                        {errorMessage}
                    </div>
                    <div style={buttonDivStyle}>
                        <IconButton src="images/close.png" onClick={this.props.closeCallback}/>
                    </div>
                </div>
            </div>
        )
    }
}