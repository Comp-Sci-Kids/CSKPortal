class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.getCookie = this.getCookie.bind(this)
        this.signIn = this.signIn.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.closePopup = this.closePopup.bind(this)
        document.onkeypress = (e) => {
            if(e.keyCode == 13){
                this.signIn()
            }
        }
        this.state = {
            popup: false,
            username: "",
            password: "",
            error: "",
            missingInfo: false,
            incorrect: 0
        }
        var x = this.getCookie('cskparent');            //checks if user has the cookie that states that they don't want a popup, and if it doesn't exist a popup shows
        if (!x) {
            this.updateState("popup", 'true')
        }
    }
    valueChanged(e){
        this.updateState(e.target.name, e.target.value);
    }
    updateState(key, val) {
        this.state[key] = val;
        this.setState(this.state)
    }
    closePopup() {
        this.updateState("popup", false)
    }
    signIn(){
        if(this.state.username == ""){
            this.updateState("error", "Missing Field: Email")
            return;
        }

        networkRequest("parent/login", "POST", {
            username: this.state.username,
            password: this.state.password,
            incorrect: this.state.incorrect
        }, d => {
            if(!d.success){
                this.setState({
                    username: this.state.username,
                    password: this.state.password,
                    error: d.message,
                    missingInfo: this.state.missingInfo,
                    incorrect: this.state.incorrect + 1
                })
            }else{

                //This here takes the token and saves it to local storage

                let token = d.token
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                let payload = JSON.parse(jsonPayload);
                localStorage.setItem("token", token)
                localStorage.setItem("account", "parent")
                localStorage.setItem("email", payload.email)
                localStorage.setItem("firstName", payload.firstName)
                localStorage.setItem("lastName", payload.lastName)
                localStorage.setItem("fetchTime", new Date().getTime())
                this.props.callback()
            }
        })
    }
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    render() {

        var divStyle = {
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, rgba(190,58,0,1) 0%, rgba(255,58,0,1) 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0
        }

        var boxStyle = {
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
        var titleStyle1 = {
            margin: 0,
            fontFamily: "brandFont",
            fontSize: "40px",
            color: appRed,
            textAlign: "center"
        }
        var titleStyle2 = {
            margin: 0,
            fontSize: "20px",
            color: "blue",
            textDecoration: "underline",
            marginTop: '7.5px'
        }
        var inputStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(254,58,0,1)",
            padding: "10px 20px", 
            width: "70%",
            height: "30px",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }
        var buttonStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(254,58,0,1)",
            padding: "5px 5px", 
            width: "45%",
            height: "44px",
            outline: "none",
            fontSize: "20px",
            backgroundColor: "#fe3a01",
            color: "white",
            marginTop: "15px",
            cursor: "pointer"
        }
        var errorBoxStyle = {
            position: "fixed",
            width: "90%",
            margin: "auto",
            backgroundColor: "rgba(8,58,194,1)",
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            top: "20px",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "8px"
        }
        var errorBox = null

        if(window.screen.width < mobileThreshold) {

            boxStyle = {
                width: "90vw",
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
            titleStyle1 = {
                margin: 0,
                fontFamily: "brandFont",
                fontSize: "30px",
                color: appRed,
                textAlign: "center"
            }
            titleStyle2 = {
                margin: 0,
                fontSize: "15px",
                color: "blue",
                textDecoration: "underline",
                marginTop: '7.5px'
            }
            inputStyle = {
                borderRadius: "17px",
                border: "2px solid rgba(254,58,0,1)",
                padding: "10px 20px", 
                width: "70%",
                height: "15px",
                outline: "none",
                fontSize: "20px",
                marginTop: "20px"
            }
            buttonStyle = {
                borderRadius: "17px",
                border: "2px solid rgba(254,58,0,1)",
                padding: "5px 5px", 
                width: "45%",
                height: "30px",
                outline: "none",
                fontSize: "15px",
                backgroundColor: "#fe3a01",
                color: "white",
                marginTop: "15px",
                cursor: "pointer"
            }
            errorBoxStyle = {
                position: "fixed",
                width: "90%",
                margin: "auto",
                backgroundColor: "rgba(8,58,194,1)",
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                top: "20px",
                padding: "10px",
                boxSizing: "border-box",
                borderRadius: "8px"
            }
        }

        let popup = null
        if(this.state.popup){
            popup = <InPopup closeCallback={this.closePopup}/>
        }
        

        if(this.state.error != ""){
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
                    <h1 style={titleStyle1}>CompSci Kids Parent Login</h1>
                    <input style={inputStyle} type="email" placeholder="Email" name="username" value={this.state.username} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.valueChanged}/>
                    <button style={buttonStyle} onClick={this.signIn}>Login</button>
                    <br></br>
                    <p style={titleStyle2} onClick={() => this.props.changePage(2)}>Don't have an account?</p>
                    <p style={titleStyle2} onClick={() => this.props.changePage(3)}>Forgot your password?</p>
                    <p style={titleStyle2} onClick={() => this.props.changePage(5)}>Resend confirmation email</p>
                </div>
                <br></br>
                {popup}
                
            </div>
        )
    }
}