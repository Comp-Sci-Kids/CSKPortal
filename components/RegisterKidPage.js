class RegisterKidPage extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.register = this.register.bind(this)
        this.getParentInformation = this.getParentInformation.bind(this)

        console.log(this.props.session);
        console.log(this.props.kid)
        
        this.state = {
            sessionName: this.props.session.Display,
            parentFirstname: "",
            parentLastname: "",
            parentPrefix: "",
            parentRelationship: "",
            parentPhone: "",
            parentEmail: "",
            emergencyName: this.props.kid.emergencyName,
            emergencyPrefix: this.props.kid.emergencyPrefix,
            emergencyRelationship:this.props.kid.emergencyRelationship,
            emergencyPhone: this.props.kid.emergencyPhone,
            id: this.props.kid._id,
            firstName: this.props.kid.firstName,
            lastName: this.props.kid.lastName,
            gender: this.props.kid.gender,
            dob: this.props.kid.birthday,
            grade: this.props.kid.grade,
            studentSchool: this.props.kid.school,
            shirtSize: this.props.kid.shirtSize,
            error: ""
        }

        this.getParentInformation();

    }

    getParentInformation() {
        networkRequest("parent/getParent", "POST", {
 
        }, d => {

            if(d.success) {
                this.state["parentFirstname"] = d.parent.firstName;
                this.state["parentLastname"] = d.parent.lastName;
                this.state["parentRelationship"] = d.parent.relationship;
                this.state["parent"] = d.parent.lastName;
                this.state["parentPrefix"] = d.parent.prefix;
                this.state["parentPhone"] = d.parent.phone;
                this.state["parentEmail"] = d.parent.email;
                this.setState(this.state)
            } else {
                this.logOut()
            }

        })
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

        var registrationData = {
            parentPrefix: this.state.parentPrefix,
            parentFirstname: this.state.parentFirstname,
            parentLastname: this.state.parentLastname,
            parentRelationship: this.state.parentRelationship,
            parentPhone: this.state.parentPhone,
            email: this.state.parentEmail,
            emergencyPrefix: this.state.emergencyPrefix,
            emergencyName: this.state.emergencyName,
            emergencyRelationship: this.state.emergencyRelationship,
            emergencyPhone: this.state.emergencyPhone,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            birthday: this.state.dob,
            grade: this.state.grade,
            school: this.state.studentSchool,
            shirtSize: this.state.shirtSize,
            previousSessions: null,
            appliedAdvanced: true,
            session: this.props.session.Name,
            section: this.props.section,
            childId: this.props.kid._id
        }

        for(var key in registrationData) {
            if(registrationData[key] == "" && key !== 'school') {
                this.updateState("error", "Please fill all of the Fields.");
                return;
            }
        }

        var dob = registrationData.birthday;

        if(dob.length != 10) {
            this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.")
            return;
        } else if(dob[2] != "/" || dob[5] != "/") {
            this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.")
            return;
        }
      

        if(confirm("Are you sure that you want to register your child?")) {
            networkRequest("parent/register", "POST", registrationData, d => {
    
                if(d.success) {
                    //TODO: return back to main page
                    this.props.back(d.message);

                } else {
                    this.updateState("error", d.message);
                }
    
            })
        } 
        
    }

    render(){
        var divStyle = {
            height: "100%",
            width: "100%",
            textAlign: "center"
        }
        var contentDivStyle = {
            width: "50%",
            margin: "auto",
            textAlign: "center"
        }
        var headerStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            flexDirection: "column",
        }
        var titleStyle = {
            margin : "10px",
        }

        var buttonStyle = {
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

        var buttonStyle2 = {
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

        if(window.screen.width < mobileThreshold) {
             divStyle = {
                height: "100%",
                width: "100%",
                textAlign: "center"
            }
             contentDivStyle = {
                width: "90%",
                margin: "auto",
                textAlign: "center"
            }
             headerStyle = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                flexDirection: "column",
            }
             titleStyle = {
                margin : "10px",
            }
    
             buttonStyle = {
                borderRadius: "15px",
                border: "2px solid rgba(8,58,174,1)",
                padding: "5px 5px", 
                width: "35vw",
                height: "30px",
                outline: "none",
                fontSize: "15px",
                backgroundColor: "#083ab9",
                color: "white",
                marginTop: "15px",
                cursor: "pointer"
            }
    
             buttonStyle2 = {
                borderRadius: "15px",
                border: "2px solid #CC0000",
                padding: "5px 5px", 
                width: "35vw",
                height: "30px",
                outline: "none",
                fontSize: "15px",
                backgroundColor: appRed,
                color: "white",
                marginTop: "15px",
                cursor: "pointer"
            }

        }

        var errorBox = null

        var color = "red"
        if (this.state.success) {
            color = "green"
        }

        if(this.state.error != ""){
            var errorBoxStyle = {
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

        var divStyle2 = {
            // textAlign: "left"

        }

        return (
            <div style={divStyle}>
                {errorBox}
                <div style={contentDivStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>CompSci Kids {this.state.sessionName} Session Registration</h1>
                        <h1 style={titleStyle}>Section: {this.props.section}</h1>
                        <br></br>
                    </div>
                    <p>
                            Registration is on a first come, first serve basis.
                            By registering, you are committing to a <b>$20 sign up fee</b> which will be used for a T-shirt and other materials the 
                            students will take home. Payment is due by the first day of class and can be paid as a check made out to 
                            Conant High School with the memo CompSci Kids given to the Conant High School cashier or brought on the 
                            first day of instruction. All teachers are volunteer students. If the fee provides financial hardship to you, 
                            please contact <a href = "mailto@cskids211@gmail.com" target = '_blank'>cskids211@gmail.com.</a> Any other questions or concerns can also be emailed to <a href = "mailto@cskids211@gmail.com" target = '_blank'>cskids211@gmail.com.</a>
                            </p>
                    <hr />

                    <h1>Parent Information</h1>

                    <div style={divStyle2}>
                        
                        <LabelField title="Parent First Name" field="parentFirstname" value={this.state.parentFirstname} editing={true} valueChanged={this.updateState} />

    

                        <LabelField title="Parent Last Name" field="parentLastname" value={this.state.parentLastname} editing={true} valueChanged={this.updateState} />

    

                        <SelectField title="Parent Prefix" field="parentPrefix" value={this.state.parentPrefix} editing={true} valueChanged={this.updateState} options={[{value: "Mr", display: "Mr"}, {value: "Mrs", display: "Mrs"}, {value: "Ms", display: "Ms"}]}/>


                        <SelectField title="Parent Relationship" field="parentRelationship" value={this.state.parentRelationship} editing={true} valueChanged={this.updateState} options={[{value: "Mother", display: "Mother"}, {value: "Father", display: "Father"}, {value: "Other", display: "Other"}]}/>

                        <LabelField title="Parent Phone Number" field="parentPhone" value={this.state.parentPhone} editing={true} valueChanged={this.updateState} />


      
                        <LabelField title="Parent Email" field="parentEmail" value={this.state.parentEmail} editing={true} valueChanged={this.updateState} />

                    </div>

                    <br></br>
                    <hr />
                    <h1>Emergency Contact</h1>

                    <div style={divStyle2}>

                    <LabelField title="Emergency Contact Name" field="emergencyName" value={this.state.emergencyName} editing={true} valueChanged={this.updateState} />


                <SelectField title="Emergency Contact Prefix" field="emergencyPrefix" value={this.state.emergencyPrefix} editing={true} valueChanged={this.updateState} options={[{value: "Mr", display: "Mr"}, {value: "Mrs", display: "Mrs"}, {value: "Ms", display: "Ms"}]}/>



<SelectField title="Emergency Contact Relationship" field="emergencyRelationship" value={this.state.emergencyRelationship} editing={true} valueChanged={this.updateState} options={[{value: "Mother", display: "Mother"}, {value: "Father", display: "Father"}, {value: "Other", display: "Other"}]}/>


                        <LabelField title="Emergency Contact Phone Number" field="emergencyPhone" value={this.state.emergencyPhone} editing={true} valueChanged={this.updateState} />


                    </div>

                    <hr/>
                    <h1>Student Information</h1>

                    <div style={divStyle2}>
                        
                    <LabelField title="First Name" field="firstName" value={this.state.firstName} editing={true} valueChanged={this.updateState} />
                        <LabelField title="Last Name" field="lastName" value={this.state.lastName} editing={true} valueChanged={this.updateState} />
                        <SelectField title="Gender" field="gender" value={this.state.gender} editing={true} valueChanged={this.updateState} options={[{value: "male", display: "Male"}, {value: "female", display: "Female"}, {value: "other", display: "Other"}]}/>

                        <LabelField title="Birthday (MM/DD/YYYY)" field="dob" value={this.state.dob} editing={true} valueChanged={this.updateState} />

                        <SelectField title="Grade" field="grade" value={this.state.grade} editing={false} valueChanged={this.updateState} options={[{value: 1, display: "1st"}, {value: 2, display: "2nd"}, {value: 3, display: "3rd"}, {value: 4, display: "4th"}, {value: 5, display: "5th"}, {value: 6, display: "6th"}, {value: 7, display: "7th"}, {value: 8, display: "8th"}]}/>
                        
                        <LabelField title="School" field="studentSchool" value={this.state.studentSchool} editing={true} valueChanged={this.updateState} />

                        <SelectField title="Shirt Size" field="shirtSize" value={this.state.shirtSize} editing={true} valueChanged={this.updateState} options={[{value: "ys", display: "Youth Small"}, {value: "ym", display: "Youth Medium"}, {value: "yl", display: "Youth Large"}, {value: "as", display: "Adult Small"}, {value: "am", display: "Adult Medium"}, {value: "al", display: "Adult Large"}, {value: "ax", display: "Adult X-Large"}]}/>

                        {/* <label style={labelStyle}>Student First Name: </label>
                        <input style={inputStyle} type="text" placeholder="Student First Name" name="firstName" value={this.state.firstName} onChange={this.valueChanged}/>
                        <br></br> */}

                        {/* <label style={labelStyle}>Student Last Name: </label>
                        <input style={inputStyle} type="text" placeholder="Student Last Name" name="lastName" value={this.state.lastName} onChange={this.valueChanged}/>
                        <br></br> */}

                        {/* <label style={labelStyle}>Student Gender: </label>
                        <select style={selectStyle} name="gender" value = {this.state.gender} onChange={this.valueChanged}>
                            <option value="" defaultValue hidden>Student Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <br></br> */}

                        {/* <label style={labelStyle}>Student Birthday (MM/DD/YYYY): </label>
                        <input style={inputStyle} type="text" placeholder="Birthday (MM/DD/YYYY)" name="dob" value={this.state.dob} onChange={this.valueChanged}/>
                        <br></br> */}

                        {/* <label style={labelStyle}>Student Grade: </label>
                        <select style={selectStyle} name="grade" value = {this.state.grade} onChange={this.valueChanged}>
                            <option value="" defaultValue hidden>Student Grade</option>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                            <option value="5">5th</option>
                            <option value="6">6th</option>
                            <option value="7">7th</option>
                            <option value="8">8th</option>
                        </select>
                        <br></br> */}


                        {/* <label style={labelStyle}>Student Shirt Size: </label>
                        <select style={selectStyle} name="shirtSize" value = {this.state.shirtSize} onChange={this.valueChanged}>
                            <option value="" defaultValue hidden>Student Shirt Size</option>
                            <option value="ys">Youth Small</option>
                            <option value="ym">Youth Medium</option>
                            <option value="yl">Youth Large</option>
                            <option value="as">Adult Small</option>
                            <option value="am">Adult Medium</option>
                            <option value="al">Adult Large</option>
                            <option value="ax">Adult X-Large</option>
                        </select>
                        <br></br>
                        <br></br> */}

                    </div>

                    <hr>
                    </hr>
                    <br></br>

                    <p>Please click register if the information above is correct.</p>
                    <button style={buttonStyle} onClick = {this.register}>Register</button>
                    <br></br>
                    <button style={buttonStyle2} onClick = {() => this.props.back("")}>Back</button> 
                    <br></br>
                    <br></br>
                </div>                
  
            </div>
        )
    }
}