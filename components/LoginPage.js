class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.signIn = this.signIn.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
        document.onkeypress = (e) => {
            if(e.keyCode == 13){
                this.signIn()
            }
        }
        this.state = {
            username: "",
            password: "",
            error: "",
            missingInfo: false
        }
    }
    valueChanged(e){
        this.state[e.target.name] = e.target.value
        this.setState(this.state)
    }
    signIn(){
        if(this.state.username == ""){
            alert("i")
            //errorBox = <div style={errorBoxStyle}>"Missing Field: Username"</div>
        }
    //     networkRequest("login", "POST", {
    //         username: this.state.username,
    //         password: this.state.password
    //     }, d => {
    //         if(!d.success){
    //             this.setState({
    //                 username: this.state.username,
    //                 password: this.state.password,
    //                 error: d.message
    //             })
    //         }else{
    //             let token = d.token
    //             var base64Url = token.split('.')[1];
    //             var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //             var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    //                 return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //             }).join(''));

    //             let payload = JSON.parse(jsonPayload);
    //             sessionStorage.setItem("token", token)
    //             sessionStorage.setItem("name", payload.name)
    //             sessionStorage.setItem("type", payload.type)
    //             sessionStorage.setItem("perms", payload.perms)
    //             sessionStorage.setItem("fetchTime", new Date().getTime())
    //             this.props.callback()
    //         }
    //     })
    }
    render() {
        let divStyle = {
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, rgba(190,58,0,1) 0%, rgba(255,58,0,1) 100%)",
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
        let titleStyle1 = {
            margin: 0,
            fontFamily: "brandFont",
            fontSize: "40px",
            color: appRed
        }
        let titleStyle2 = {
            margin: 0,
            fontSize: "20px",
            color: "blue",
            textDecoration: "underline"
        }
        let inputStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(254,58,0,1)",
            padding: "10px 20px", 
            width: "70%",
            height: "30px",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }
        let buttonStyle = {
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
        let errorBoxStyle = {
            position: "fixed",
            width: "90%",
            margin: "auto",
            backgroundColor: "red",
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            top: "20px",
            padding: "10px",
            boxSizing: "border-box",
            borderRadius: "8px"
        }
        let errorBox = null
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
                    <h1 style={titleStyle1}>CompSci Kids Parent Sign In</h1>
                    <input style={inputStyle} type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.valueChanged}/>
                    <button style={buttonStyle} onClick={this.signIn}>Sign In</button>
                    <p style={titleStyle2} onClick={() => this.props.changePage(2)}>Don't have an account?</p>
                </div>
                
            </div>
        )
    }
}