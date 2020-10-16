class AccountPage extends React.Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.updateInformation = this.updateInformation.bind(this)
        this.logOut = this.logOut.bind(this)
        this.getInformation = this.getInformation.bind(this)

        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            prefix: "Prefix",
            oldPassword: "",
            newPassword1: "",
            newPassword2: "",
            error: "",
            success: false
        }

        this.getInformation();
    }

    logOut(){
        sessionStorage.clear()
        location.reload()
    }

    delete() {

        if(confirm("Are you sure you want to delete this account?")){
            // console.log("deleting")
            networkRequest("parent/delete", "DELETE", {

            }, d => {
                if(!d.success){
                    alert("error")
                    alert(d.message)
                }else{
                    this.logOut();
                }
            })
        }

    }

    valueChanged(e){
        this.updateState(e.target.name, e.target.value);
    }
    updateState(key, val) {
        this.state[key] = val;
        this.setState(this.state)
    }

    getInformation() {
        networkRequest("parent/getParent", "POST", {
 
        }, d => {

            if(d.success) {
                this.state["firstname"] = d.parent.firstName;
                this.state["lastname"] = d.parent.lastName;
                this.state["prefix"] = d.parent.prefix;
                this.state["phone"] = d.parent.phone;
                this.state["email"] = d.parent.email;
                this.setState(this.state)
            } else {
                this.logOut()
            }

        })
    }

    updateInformation() {
        networkRequest("parent/updateParent", "POST", {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            prefix: this.state.prefix,
            phone: this.state.phone,
            email: this.state.email,
        }, d => {
            this.state["error"] = d.message;
            this.state["success"] = d.success;
            this.setState(this.state)

            setTimeout(() => {
                this.state["error"] = "";
                this.state["success"] = false;
                this.setState(this.state)
              }, 3000)

        })
    }

    changePassword() {
        if(this.state.newPassword1 == this.state.newPassword2) {
            networkRequest("parent/updatePassword", "POST", {
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword1
            }, d => {
                this.state["error"] = d.message;
                this.state["success"] = d.success;
                this.setState(this.state)

                setTimeout(() => {
                    this.state["error"] = "";
                    this.state["success"] = false;
                    this.setState(this.state)
                  }, 3000)

            })
        } else {
            this.state["error"] = "The passwords do not match. Please try again.";
            this.state["success"] = false;
            this.setState(this.state)

            setTimeout(() => {
                this.state["error"] = "";
                this.state["success"] = false;
                this.setState(this.state)
              }, 3000)
        }
    }


    render() {
        let divStyle = {
            height: "100%",
            width: "100%",
            textAlign: "center"
        }
        let contentDivStyle = {
            width: "90%",
            margin: "auto",
        }
        let headerStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px"
        }
        let titleStyle = {
            margin : "10px",
        }

        let inputStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "10px 20px", 
            width: "20%",
            height: "30px",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }
        let selectStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "10px 20px", 
            // width: "20%",
            // height: "30px",
            outline: "none",
            fontSize: "20px",
            marginTop: "20px"
        }
        let buttonStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "5px 5px", 
            width: "20%",
            height: "44px",
            outline: "none",
            fontSize: "20px",
            backgroundColor: "#083ab9",
            color: "white",
            marginTop: "15px",
            cursor: "pointer"
        }

        let buttonStyle2 = {
            borderRadius: "27px",
            border: "2px solid #CC0000",
            padding: "5px 5px", 
            width: "20%",
            height: "44px",
            outline: "none",
            fontSize: "20px",
            backgroundColor: appRed,
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
                width: "100%",
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
            
            <div style={divStyle}>
                {errorBox}
                <div style={contentDivStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Information</h1>
                    </div>
                    <hr />
                    <input style={inputStyle} type="text" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.valueChanged}/>
                    <br></br>
                    <input style={inputStyle} type="text" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.valueChanged}/>
                    <br></br>
                    <select style={selectStyle} name="prefix" value = {this.state.prefix} onChange={this.valueChanged}>
                        <option value="" defaultValue hidden>Prefix</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Mrs</option>
                        <option value="Mrs">Ms</option>
                    </select>
                                    
                    <br></br>
                    <input style={inputStyle} type="tel" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.valueChanged}/>
                    <br></br>
                    <input style={inputStyle} type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.valueChanged}/>
                    <br></br>
                    <button style={buttonStyle} onClick = {this.updateInformation}>Update</button>
                    <br></br>
                    <button style={buttonStyle} onClick = {this.getInformation}>Refresh</button>
                    <br></br>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Password</h1>
                    </div>
                    <hr />

                    <input style={inputStyle} type="password" placeholder="Password" name="oldPassword" value={this.state.oldPassword} onChange={this.valueChanged}/>
                    <br></br>
                    <input style={inputStyle} type="password" placeholder="Password" name="newPassword1" value={this.state.newPassword1} onChange={this.valueChanged}/>
                    <br></br>
                    <input style={inputStyle} type="password" placeholder="Password" name="newPassword2" value={this.state.newPassword2} onChange={this.valueChanged}/>
                    <br></br>
                    <button style={buttonStyle} onClick = {this.changePassword}>Update</button>
                    <br></br>
                    <button style={buttonStyle2} onClick ={this.delete}>Delete Account</button>
                    <br></br>
                    <br></br>
                </div>                
  
            </div>
        )
    }
}