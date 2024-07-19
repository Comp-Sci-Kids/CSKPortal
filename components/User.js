class User extends React.Component {
    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this)
        this.state = { hidden: true }
    }
    logOut(){
        sessionStorage.clear()
        window.localStorage.clear()
        location.reload()
    }
    
    render() {
        let divStyle = {
            position: "relative",
            display: "inline-block",
            marginRight: "20px",
        }
        let buttonStyle = {
            backgroundColor: appRed,
            borderRadius: "27px",
            border: "2px solid rgba(255,0,0,1)",
            width: "115px",
            height: "55px",
            color: "white",
            padding: "5px",
            fontSize: "16px",
            outline: "none",
            textAlign: "center",
            cursor: "pointer"
        }
        let dropdownStyle = {
            display: "none",
            position: "absolute",
            backgroundColor: "#f1f1f1",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1,
            right: "5px",
            borderRadius: "10px",
            border: "0.5px solid",
        }
        let linkStyle = {
            color: "black",
            padding: "12px 16px",
            textDecoration: "none",
            display: "block",
            textAlign: "center"
        }
        if (!this.state.hidden) {
            dropdownStyle.display = "block"
        }
        return (<div style={divStyle}>
            <button style={buttonStyle} onClick={() => { this.setState({ hidden: !this.state.hidden }) }}>
                    {this.props.name}
                </button>
            <div style={dropdownStyle}>
                <a href="" style={linkStyle} onClick={this.logOut}>Log Out</a>
            </div>
        </div>)
    }
}