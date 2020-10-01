class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
        document.onkeypress = (e) => {
            if(e.keyCode == 13){
                this.signIn()
            }
        }
        this.state = {
            username: "",
            password: "",
            error: ""
        }
    }
    valueChanged(e){
        this.state[e.target.name] = e.target.value
        this.setState(this.state)
    }
    signUp(){
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
        if(this.state.error != ""){
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
                    <h1 style={titleStyle}>CompSci Kids Parent Sign Up</h1>
                    <input style={inputStyle} type="text" placeholder="Firstname" name="firstname" value={this.state.firstname} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="text" placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="text" placeholder="Prefix" name="prefix" value={this.state.prefix} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="text" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.valueChanged}/>
                    <button style={buttonStyle} onClick={this.signIn}>Sign Up</button>
                    <button style={buttonStyle} onClick={() => this.props.changePage(1)}>Back</button>
                </div>
                
            </div>
        )
    }
}