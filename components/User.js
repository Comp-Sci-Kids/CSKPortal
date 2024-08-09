class User extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = { hidden: true };
    }

    logOut() {
        sessionStorage.clear();
        window.localStorage.clear();
        location.reload();
    }

    render() {
        let divStyle = {
            position: "relative",
            display: "inline-block",
            marginRight: "2vw",  // Use viewport units for margin
        };
        
        let buttonStyle = {
            backgroundColor: appRed,
            borderRadius: "2vw",  // Use viewport units for border radius
            border: "0.2vw solid rgba(255,0,0,1)",  // Use viewport units for border width
            width: "12vw",  // Use viewport units for width
            height: "4vw",  // Use viewport units for height
            color: "white", // Use viewport units for padding
            fontSize: "1vw",  // Use viewport units for font size
            outline: "none",
            textAlign: "center",
            cursor: "pointer"
        };
        
        let dropdownStyle = {
            display: this.state.hidden ? "none" : "block",
            position: "absolute",
            backgroundColor: "#f1f1f1",
            boxShadow: "0px 0.8vw 1.6vw rgba(0,0,0,0.2)",  // Use viewport units for box shadow
            zIndex: 1,
            right: "1vw",  // Use viewport units for positioning
            borderRadius: "1vw",  // Use viewport units for border radius
            border: "0.1vw solid",  // Use viewport units for border width
        };

        let linkStyle = {
            color: "black",
            padding: "1vw 1.6vw",  // Use viewport units for padding
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            fontSize: "1.6vw",  // Use viewport units for font size
        };

        return (
            <div style={divStyle}>
                <button style={buttonStyle} onClick={() => this.setState({ hidden: !this.state.hidden })}>
                    {this.props.name}
                </button>
                <div style={dropdownStyle}>
                    <a href="" style={linkStyle} onClick={this.logOut}>Log Out</a>
                </div>
            </div>
        );
    }
}
