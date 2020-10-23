class RegisterKidPage extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.register = this.register.bind(this)
        
        
        this.state = {
            parentFirstname: "",
            parentLastname: "",
            parentPrefix: "",
            parentRelationship: "",
            parentPhone: "",
            parentEmail: "",
            emergencyName: "",
            emergencyPrefix: "",
            emergencyRelationship: "",
            emergencyPhone: "",
            id: "",
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            grade: "",
            studentSchool: "",
            shirtSize: "",
            error: ""
        
        }
        this.refreshPage();
    }

    valueChanged(e){
        this.updateState(e.target.name, e.target.value);
    }
    updateState(key, val) {
        this.state[key] = val;
        this.setState(this.state)
    }

    register(){

        //make sure all fields are filled

        var vals = [this.state.firstname, this.state.lastname, this.state.phone, this.state.email, this.state.prefix, this.state.password];
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

        networkRequest("parent/signup", "POST", {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            prefix: this.state.prefix,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
        }, d => {
            if(!d.success){
                this.setState({
                    firstName: this.state.firstname,
                    lastName: this.state.lastname,
                    prefix: this.state.prefix,
                    phone: this.state.phone,
                    email: this.state.email,
                    password: this.state.password,
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
                    error: d.message,
                    success: true
                })

            }
        })
    }
    render(){
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
        let selectStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "10px 20px", 
            // width: "40%",
            // height: "30px",
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
        let hrStyle = {
            border: '5px dotted ' + appBlue,
            borderStyle: 'none none dotted',
            color: '#fff',
            backgroundColor: '#fff' 
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
                    <h1 style={titleStyle}>CompSci Kids Student Session Registration</h1>
                    <input style={inputStyle} type="text" placeholder="Parent First Name" name="parentfirstname" value={this.state.parentFirstname} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="text" placeholder="Parent Last Name" name="parentlastname" value={this.state.parentLastname} onChange={this.valueChanged}/>
                    
                    <select style={selectStyle} name="parentPrefix" value = {this.state.parentPrefix} onChange={this.valueChanged}>
                        <option value="" defaultValue hidden>Prefix</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Mrs</option>
                        <option value="Mrs">Ms</option>
                    </select>
                    
                    <LabelField title="Parent Relationship" field="parentRelationship" value={this.state.parentRelationship} editing={true} valueChanged={this.updateState} />
                    {/* <input style={inputStyle} type="text" placeholder="Prefix" name="prefix" value={this.state.prefix} onChange={this.valueChanged}/> */}
                
                    <input style={inputStyle} type="tel" placeholder="Parent Phone" name="parentPhone" value={this.state.parentPhone} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="email" placeholder="Parent Email" name="parentEmail" value={this.state.parentEmail} onChange={this.valueChanged}/>
                    
                    <hr style = {hrStyle}></hr>
                    <LabelField title="Emergency Contact Name" field="emergencyName" value={this.state.emergencyName} editing={true} valueChanged={this.updateState} />
                    <SelectField title="Emergency Contact Prefix" field="emergencyPrefix" value={this.state.emergencyPrefix} editing={true} valueChanged={this.updateState} options={[{value: "Mr", display: "Mr"}, {value: "Ms", display: "Ms"}, {value: "Mrs", display: "Mrs"}]}/>
                    <LabelField title="Emergency Contact Relationship" field="emergencyRelationship" value={this.state.emergencyRelationship} editing={true} valueChanged={this.updateState} />
                    <LabelField title="Emergency Contact Phone Number" field="emergencyPhone" value={this.state.emergencyPhone} editing={true} valueChanged={this.updateState} />
                    <hr style = {hrStyle}></hr>
                    <LabelField title="Student First Name" field="studentFirstName" value={this.state.studentFirstName} editing={true} valueChanged={this.updateState} />
                    <LabelField title="Student Last Name" field="studentLastName" value={this.state.studentLastName} editing={true} valueChanged={this.updateState} />
                    <SelectField title="Student Gender" field="studentGender" value={this.state.studentGender} editing={true} valueChanged={this.updateState} options={[{value: "male", display: "Male"}, {value: "female", display: "Female"}, {value: "other", display: "Other"}]}/>

                    <div style={divStlye}>
                        <label style={labelStyle}>Birthday (MM/DD/YYYY):</label>
                        <input style={inputStyle} type="text" value={this.state.studentdob} pattern="\d{2}/\d{2}/\d{4}" placeholder="Birthday" name="studentDOB" onChange={this.valueChanged} />
                    </div>

                    <SelectField title="Student Grade" field="studentGrade" value={this.state.studentGrade} editing={true} valueChanged={this.updateState} options={[{value: 1, display: "1st"}, {value: 2, display: "2nd"}, {value: 3, display: "3rd"}, {value: 4, display: "4th"}, {value: 5, display: "5th"}, {value: 6, display: "6th"}, {value: 7, display: "7th"}, {value: 8, display: "8th"}]}/>
                    <LabelField title="Student School Name" field="studentSchool" value={this.state.studentSchool} editing={true} valueChanged={this.updateState} />
                    <SelectField title="Student Shirt Size" field="studentShirtSize" value={this.state.studentShirtSize} editing={true} valueChanged={this.updateState} options={[{value: "ys", display: "Youth Small"}, {value: "ym", display: "Youth Medium"}, {value: "yl", display: "Youth Large"}, {value: "as", display: "Adult Small"}, {value: "am", display: "Adult Medium"}, {value: "al", display: "Adult Large"}, {value: "ax", display: "Adult X-Large"}]}/>
{/*                     
                    <input style={inputStyle} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.valueChanged}/>
                    <input style={inputStyle} type="password" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.valueChanged}/> */}

                    <button style={buttonStyle} onClick={this.register}>Register!</button>
                    <button style={buttonStyle} onClick={() => this.props.changePage(1)}>Back</button>
                </div>
                
            </div>
        )
    }
}