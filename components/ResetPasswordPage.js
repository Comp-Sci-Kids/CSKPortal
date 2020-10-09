class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props)
        
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.resetPassword = this.resetPassword.bind(this)

        document.onkeypress = (e) => {
            if(e.keyCode == 13){
                this.resetPassword()
            }
        }
        this.state = {
            email: "",
            error: "",
            success: false
        }
    }
    valueChanged(e){
        this.updateState(e.target.name, e.target.value);
    }
    updateState(key, val) {
        this.state[key] = val;
        this.setState(this.state)
    }
    resetPassword() {

        if(confirm("Are you sure you want to reset your password?")){
            networkRequest("parent/resetPassword", "POST", {
                email: this.state.email
            }, d => {
                console.log(d)
                this.state["error"] = d.message;
                this.state["success"] = d.success;
                this.setState(this.state)
            })
            
        }
    }
   
      
    render() {
        let divStyle = {
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, rgba(8,58,134,1) 0%, rgba(8,58,194,1) 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0
        }
        let boxStyle = {
            width: "60vh",
            backgroundColor: "white",
            borderRadius: "30px",
            boxShadow: "10px 10px 18px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "20px 0",
            zIndex: "10"
        }
        let titleStyle = {
            margin: 0,
            fontFamily: "brandFont",
            fontSize: "40px",
            color: appRed
        }
        let inputStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "10px 20px", 
            width: "70%",
            height: "30px",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }

        let buttonStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "5px 5px", 
            width: "45%",
            height: "44px",
            outline: "none",
            fontSize: "20px",
            backgroundColor: "#083ab9",
            color: "white",
            marginTop: "15px",
            cursor: "pointer"
        }
        let errorBox = null

        var color = "red"
        if (this.state.success) {
            color = "green"
        }

        if(this.state.error != ""){
            let errorBoxStyle = {
                position: "fixed",
                width: "90%",
                margin: "auto",
                backgroundColor: color,
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                top: "20px",
                padding: "10px",
                boxSizing: "border-box",
                borderRadius: "8px",
                zIndex: "20"
            }
            errorBox = <div style={errorBoxStyle}>{this.state.error}</div>
        }
        return (
            <div className="area" style={divStyle}>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                {errorBox}
                <div style={boxStyle}>
                    <h1 style={titleStyle}>Reset Password</h1>
                    
                    <input style={inputStyle} type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.valueChanged}/>
                    <button style={buttonStyle} onClick={this.resetPassword}>Reset Password</button>
                    <button style={buttonStyle} onClick={() => this.props.changePage(1)}>Back</button>
                </div>
                
            </div>
        )
    }
}