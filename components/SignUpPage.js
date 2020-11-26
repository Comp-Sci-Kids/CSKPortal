class SignUpPage extends React.Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        document.onkeypress = (e) => {
            if(e.keyCode == 13){
                this.signUp()
            }
        }
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            relationship: "",
            email: "",
            prefix: "Prefix",
            password: "",
            password2: "",
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


    signUp(){

        //make sure all fields are filled

        var vals = [this.state.firstname, this.state.lastname, this.state.relationship, this.state.phone, this.state.email, this.state.prefix, this.state.password];
        console.log(vals)
        for(var i = 0; i < vals.length; i++) {
            if (vals[i] == "") {
                this.updateState("error", "Please Fill All Fields");
                return;
            }
        }

        if(this.state.prefix == "Prefix") {
            this.updateState("error", "Please Fill All Fields");
            return;
        }

        if(this.state.password != this.state.password2) {
            this.updateState("error", "Your passwords do not match");
            return;
        }

        //continue to signup

        const capitalize = (s) => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }

        networkRequest("parent/signup", "POST", {
            firstName: capitalize(this.state.firstname.toLowerCase()),
            lastName: capitalize(this.state.lastname.toLowerCase()),
            prefix: this.state.prefix,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            relationship: this.state.relationship
        }, d => {
            if(!d.success){
                this.setState({
                    firstName: capitalize(this.state.firstname.toLowerCase()),
                    lastName: capitalize(this.state.lastname.toLowerCase()),
                    prefix: this.state.prefix,
                    phone: this.state.phone,
                    email: this.state.email,
                    password: this.state.password,
                    relationship: this.state.relationship,
                    error: d.message,
                    success: false
                })
            }else {

                
                this.setState({
                    firstName: "",
                    lastName: "",
                    prefix: "Prefix",
                    phone: "",
                    email: "",
                    password: "",
                    relationship: "",
                    error: d.message,
                    success: true
                })

            }
        })
    }
    render() {

        var errorBox = null

        var color = "red"
        if (this.state.success) {
            color = "green"
        }

        var divStyle = {
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, rgba(8,58,134,1) 0%, rgba(8,58,194,1) 100%)",
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
        var titleStyle = {
            margin: 0,
            fontFamily: "brandFont",
            fontSize: "40px",
            color: appRed,
            textAlign: "center"
        }
        var inputStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "10px 20px", 
            width: "70%",
            height: "2vh",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }
        var selectStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "10px 20px", 
            // width: "40%",
            // height: "30px",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }
        var buttonStyle = {
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

        var errorBoxStyle = {
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

        if(window.screen.width < mobileThreshold) {
            divStyle = {
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, rgba(8,58,134,1) 0%, rgba(8,58,194,1) 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                padding: 0,
                overflowY: "auto" 
            }
            boxStyle = {
                width: "95vw",
                backgroundColor: "white",
                borderRadius: "30px",
                boxShadow: "10px 10px 18px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                boxSizing: "border-box",
                padding: "20px 0",
                zIndex: "10",
                margin: "50px"
            }
            titleStyle = {
                margin: 0,
                fontFamily: "brandFont",
                fontSize: "30px",
                color: appRed,
                textAlign: "center"
            }
            inputStyle = {
                borderRadius: "17px",
                border: "2px solid rgba(8,58,174,1)",
                padding: "10px 20px", 
                width: "70%",
                height: "2vh",
                outline: "none",
                fontSize: "15px",
                marginTop: "15px"
            }
            selectStyle = {
                borderRadius: "17px",
                border: "2px solid rgba(8,58,174,1)",
                padding: "10px 15px", 
                // width: "40%",
                // height: "30px",
                outline: "none",
                fontSize: "15px",
                marginTop: "15px"
            }
            buttonStyle = {
                borderRadius: "17px",
                border: "2px solid rgba(8,58,174,1)",
                padding: "5px 5px", 
                width: "45%",
                height: "30px",
                outline: "none",
                fontSize: "15px",
                backgroundColor: "#083ab9",
                color: "white",
                marginTop: "15px",
                cursor: "pointer"
            }
    
            errorBoxStyle = {
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
                    <h1 style={titleStyle}>Parent Sign Up</h1>


                    <input style={inputStyle} type="text" placeholder="Parent First Name" name="firstname" value={this.state.firstname} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="text" placeholder="Parent Last Name" name="lastname" value={this.state.lastname} onChange={this.valueChanged}/>
                    
                    <select style={selectStyle} name="prefix" value = {this.state.prefix} onChange={this.valueChanged}>
                        <option value="" defaultValue hidden>Prefix</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                    </select>

                    <select style={selectStyle} name="relationship" value = {this.state.relationship} onChange={this.valueChanged}>
                        <option value="" defaultValue hidden>Relationship</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Other">Other</option>
                    </select>
                    
                    {/* <input style={inputStyle} type="text" placeholder="Prefix" name="prefix" value={this.state.prefix} onChange={this.valueChanged}/> */}
                    
                    
                    <input style={inputStyle} type="tel" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="password" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.valueChanged}/>

                    <button style={buttonStyle} onClick={this.signUp}>Sign Up</button>
                    <button style={buttonStyle} onClick={() => this.props.changePage(1)}>Back</button>
                </div>
                
            </div>
        )
    }
}