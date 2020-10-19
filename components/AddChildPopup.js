class AddChildPopup extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.addChild = this.addChild.bind(this)
        this.state = 
        {
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            grade: "",
            shirtSize: "",
            emergencyName: this.props.sampleKid.emergencyName,
            emergencyPrefix: this.props.sampleKid.emergencyPrefix,
            emergencyRelationship: this.props.sampleKid.emergencyRelationship,
            emergencyPhone: this.props.sampleKid.emergencyPhone,
            error: ""
        }
    }
    addChild(){


        if (
            this.state.emergencyPrefix == "" ||
            this.state.emergencyName == "" ||
            this.state.emergencyRelationship == "" ||
            this.state.emergencyPhone == "" ||
            this.state.firstName == "" ||
            this.state.lastName == "" ||
            this.state.gender == "" ||
            this.state.dob == "" ||
            this.state.grade == "" ||
            this.state.shirtSize == ""
          ) {
            this.updateState("error", "You are missing some information.")
            return;
          }



        networkRequest("parent/createKid", "POST", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            birthday: this.state.dob,
            grade: this.state.grade,
            shirtSize: this.state.shirtSize,
            emergencyName: this.state.emergencyName,
            emergencyPrefix: this.state.emergencyPrefix,
            emergencyRelationship: this.state.emergencyRelationship,
            emergencyPhone: this.state.emergencyPhone,
        }, d => {
            if(!d.success){
                this.updateState("error", d.message)
            }else{
                this.props.closeCallback()
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
    render() {
        let popupStyle = {
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
        let boxStyle = {
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "white",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
        }
        let contentDiv = {
            width: "90%"
        }
        let buttonDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            boxSizing: "border-box",
            paddingBottom: "10px",
            paddingRight: "10px"
        }

        let divStlye = {
            boxSizing: "border-box",
            width: "100%",
            padding: "5px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }

        let labelStyle = {
            margin: 0,
            marginRight: "40px",
            fontSize: "25px",
            fontWeight: "bold"
        }

        let inputStyle = {
            height: "20px",
            fontSize: "18px",
            width: "200px"
        }

        let errorMessage = null
        if(this.state.error != ""){
            let errorStyle = {
                color: "red",
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "bold"
            }
            errorMessage = <p style={errorStyle}>{this.state.error}</p>
        }

        let hrStyle = {
            border: '5px dotted ' + appBlue,
            borderStyle: 'none none dotted',
            color: '#fff',
            backgroundColor: '#fff' 
        }

        return (
            <div style={popupStyle}>
                <div style={boxStyle}>
                    <div style={contentDiv}>
                        <h1>Add Child</h1>
                        <hr></hr>
                        <LabelField title="First Name" field="firstName" value={this.state.firstName} editing={true} valueChanged={this.updateState} />
                        <LabelField title="Last Name" field="lastName" value={this.state.lastName} editing={true} valueChanged={this.updateState} />
                        <SelectField title="Gender" field="gender" value={this.state.gender} editing={true} valueChanged={this.updateState} options={[{value: "male", display: "Male"}, {value: "female", display: "Female"}, {value: "other", display: "Other"}]}/>

                        <div style={divStlye}>
                            <label style={labelStyle}>Birthday (MM/DD/YYYY):</label>
                            <input style={inputStyle} type="text" value={this.state.dob} pattern="\d{2}/\d{2}/\d{4}" placeholder="Birthday" name="dob" onChange={this.valueChanged} />
                        </div>

                        <SelectField title="Grade" field="grade" value={this.state.grade} editing={true} valueChanged={this.updateState} options={[{value: 1, display: "1st"}, {value: 2, display: "2nd"}, {value: 3, display: "3rd"}, {value: 4, display: "4th"}, {value: 5, display: "5th"}, {value: 6, display: "6th"}, {value: 7, display: "7th"}, {value: 8, display: "8th"}]}/>
                        <SelectField title="Shirt Size" field="shirtSize" value={this.state.shirtSize} editing={true} valueChanged={this.updateState} options={[{value: "ys", display: "Youth Small"}, {value: "ym", display: "Youth Medium"}, {value: "yl", display: "Youth Large"}, {value: "as", display: "Adult Small"}, {value: "am", display: "Adult Medium"}, {value: "al", display: "Adult Large"}, {value: "ax", display: "Adult X-Large"}]}/>
                        <hr style = {hrStyle}></hr>
                        <LabelField title="Emergency Contact Name" field="emergencyName" value={this.state.emergencyName} editing={true} valueChanged={this.updateState} />
                        <SelectField title="Emergency Contact Prefix" field="emergencyPrefix" value={this.state.emergencyPrefix} editing={true} valueChanged={this.updateState} options={[{value: "Mr", display: "Mr"}, {value: "Ms", display: "Ms"}, {value: "Mrs", display: "Mrs"}]}/>
                        <LabelField title="Emergency Contact Relationship" field="emergencyRelationship" value={this.state.emergencyRelationship} editing={true} valueChanged={this.updateState} />
                        <LabelField title="Emergency Contact Phone Number" field="emergencyPhone" value={this.state.emergencyPhone} editing={true} valueChanged={this.updateState} />
                       
                        {errorMessage}
                    </div>
                    <div style={buttonDivStyle}>
                        <IconButton src="images/close.png" onClick={this.props.closeCallback}/>
                        <IconButton src="images/done.png" onClick={this.addChild}/>
                    </div>
                </div>
            </div>
        )
    }
}