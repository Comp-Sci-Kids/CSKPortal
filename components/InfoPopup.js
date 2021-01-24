class InfoPopup extends React.Component {
    constructor(props) {
        super(props)
        this.stopRecur = this.stopRecur.bind(this)
        this.setCookie = this.setCookie.bind(this)
    }

    stopRecur(){
        console.log("stop")
        this.props.closeCallback()
        this.setCookie('cskparent','visitort',30);
    }
    setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
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
            zIndex: "15"
        }
        var boxStyle = {
            width: "60%",
            height: "fit-content",
            backgroundColor: "white",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflowY: "auto" 
        }
        var contentDiv = {
            width: "90%"
        }
        var buttonDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxSizing: "border-box",
            paddingBottom: "10px",
            paddingRight: "10px"
        }
        var labelStyle = {
            margin: 0,
            marginRight: "40px",
            fontSize: "25px",
            fontWeight: "bold"
        }
        var headerStyle = {
            fontSize: "35px",
        }
        var titleStyle2 = {
            margin: 0,
            fontSize: "20px",
            color: "blue",
            textDecoration: "underline",
            marginTop: '7.5px'
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
                zIndex: "15"
                // overflowY: 'scroll',
            }
            boxStyle = {
                width: "fit-content",
                height: "fit-content",
                backgroundColor: "white",
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
            labelStyle = {
                margin: 0,
                marginRight: "20px",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "7px"
            }
            headerStyle = {
                fontSize: "22px",
                marginLeft: "7px"
            }
            titleStyle2 = {
                margin: 0,
                fontSize: "20px",
                color: "blue",
                textDecoration: "underline",
                marginTop: '7.5px'
            }

        }
        return (
            <div style={popupStyle}>
                <div style={boxStyle}>
                    <div style={contentDiv}>
                        <h1 style = {headerStyle}>Welcome to the CompSci Kids Portal!</h1>
                        <hr></hr>
                        <p style = {labelStyle}>We at CompSci Kids have created a new page 
                        designed for the CompSci Parents! Here, parents can add and modify 
                        their children information and quickly register for a new CompSci 
                        Kids Session with just a few clicks. Create your account and get started!</p>
                    </div>
                    <div style={buttonDivStyle}>
                        <button style={titleStyle2} onClick={this.stopRecur}>I don’t want to see this again</button>
                        <button style={titleStyle2} onClick={this.props.closeCallback}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}