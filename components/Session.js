class Session extends React.Component {
    constructor(props) {
        super(props)
        this.getKids = this.getKids.bind(this)
        this.checkStudent = this.checkStudent.bind(this)
        this.cancelRegistration = this.cancelRegistration.bind(this)
        this.getParentInformation = this.getParentInformation.bind(this)

        this.state = {
            session: this.props.session,
            kids: [],
            selectedKidId: "",
            selectedKid: -1, //index for selected kid
            buttonState: 0,
            error: "",
            kidSection: "", //section the selected kid belongs to 
            //button state options
    
            //1 - can register
            //2 - waitlist
            //3 - already registered or not open
            sessionName: this.props.session.Display,
            parentFirstname: "",
            parentLastname: "",
            parentPrefix: "",
            parentRelationship: "",
            parentPhone: "",
            parentEmail: ""
        }

        this.getKids();
        this.getParentInformation()
    }


    getKids() {
        networkRequest("parent/getKids", "POST", {

        }, d => {
            if(!d.success){
                alert("Error! Please refresh the page and try again.")
            }else {

                this.setState({
                    session: this.state.session,
                    kids: d.kids,
                    selectedKidName: this.state.selectedKidName,
                    buttonState: this.state.buttonState,
                    selectedKid: this.state.selectedKid,
                    error: this.state.error,
                    kidSection: this.state.kidSection
                });
            }
        })
    }


    cancelRegistration() {
        var index = -1;

        // for(var i = 0; i < this.state.kids.length; i++) {
        //     if(this.state.kids[i]['_id'] == String(e.target.value)) {
        //         index = i;
        //         break;
        //     }
        // }
        // console.log(this.state.session)
        // console.log("Skeet")
        // this.setState({
        //     session: this.state.session,
        //     kids: this.state.kids,
        //     selectedKid: index,
        //     selectedKidId: String(e.target.value),
        //     buttonState: this.state.buttonState,
        //     error: "",
        //     kidSection: this.state.kidSection
        // });
        // console.log(this.state.selectedKidId)
        for(var i = 0; i < this.state.kids.length; i++) {
            if(this.state.kids[i]['_id'] == String(this.state.selectedKidId)) {
                // console.log(this.state.kids[i]['_id'])
                index = i;
                // console.log(index)
                break;
            }
        }
        
        this.state.selectedKid = this.state.kids[index]
        // console.log(this.state.selectedKid['sessions']['current'])
        this.state.selectedKid['sessions']['current'] = []
        this.state.selectedKid['sessionName'] = ""
        this.getParentInformation()

        

        var registrationData = {
            parentPrefix: this.state.parentPrefix,
            parentFirstname: this.state.parentFirstname,
            parentLastname: this.state.parentLastname,
            parentRelationship: this.state.parentRelationship,
            parentPhone: this.state.parentPhone,
            email: this.state.parentEmail,
            emergencyPrefix: this.state.selectedKid['emergencyPrefix'],
            emergencyName: this.state.selectedKid['emergencyName'],
            emergencyRelationship: this.state.selectedKid['emergencyRelationship'],
            emergencyPhone: this.state.selectedKid['emergencyPhone'],
            firstName: this.state.selectedKid['firstName'],
            lastName: this.state.selectedKid['lastName'],
            gender: this.state.selectedKid['gender'],
            birthday: this.state.selectedKid['birthday'],
            grade: this.state.selectedKid['grade'],
            school: this.state.selectedKid['school'],
            shirtSize: this.state.selectedKid['shirtSize'],
            previousSessions: null,
            appliedAdvanced: false,
            session: "",
            section: "",
            childId: this.state.selectedKid['_id']
        }

        

        if(confirm("Are you sure that you want to CANCEL your child's registration?")) {
            console.log(registrationData)
            networkRequest("parent/register", "POST", registrationData, d => {
    
                if(d.success) {
                    //TODO: return back to main page
                    this.props.back(d.message);

                } else {
                    alert(d.message);
                }
    
            })
        } 

        
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
        // console.log(this.state.parentRelationship)
    }

    checkStudent(e) {

        var index = -1;

        for(var i = 0; i < this.state.kids.length; i++) {
            if(this.state.kids[i]['_id'] == String(e.target.value)) {
                index = i;
                break;
            }
        }
        // console.log(this.state.session)
        this.setState({
            session: this.state.session,
            kids: this.state.kids,
            selectedKid: index,
            selectedKidId: String(e.target.value),
            buttonState: this.state.buttonState,
            error: "",
            kidSection: this.state.kidSection
        });

        //check if the kid is good
        // console.log(this.state.kids[index])

        networkRequest("parent/checkEligibility", "POST", {
            childData: this.state.kids[index],
            sessionData: this.state.session,
            id: this.state.kids[index]._id
        }, d => {
            console.log(d)
            if(!d.success){
                alert("Error! Please refresh the page and try again.")
            }else {
                this.setState({
                    session: this.state.session,
                    kids: this.state.kids,
                    selectedKid: this.state.selectedKid,
                    selectedKidId: this.state.selectedKidId,
                    buttonState: d.state,
                    error: d.message,
                    kidSection: d.section
                });
            }
        })

    }

    render() {

        var session = this.state.session;


        var divStyle = {
            margin: "auto",
            width: '50%',
            textAlign: "center"
        }

        var selectStyle = {
            width: "206px",
            fontSize: "18px"
        }

        var headerStyle = {
            textDecoration: "underline"
        }

        var dropDown = null;
        var options = [];

        var infoStyle = {
            fontStyle: 'italic',
            fontSize: '25px'
        }

        if(this.state.kids.length == 0) {
            dropDown = <p style = {infoStyle}>Please click the <b>Children</b> tab at the top of the screen to add a child.</p>
        } else {
            this.state.kids.forEach(o => {
                options.push(<option key={o._id} value={o._id}>{o.firstName}</option>)
            })
    
            dropDown = (
                <select style={selectStyle} value={this.state.selectedKidId} onChange = {this.checkStudent}>
                    <option value="" defaultValue hidden>Select Child</option>
                    {options}
                </select>
            )
        }

        var redStyle = {
            color: appRed
        }

        var buttonStyle = {
            borderRadius: "27px",
            border: "2px solid rgba(8,58,174,1)",
            padding: "5px 5px", 
            width: "200px",
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
            border: "2px solid #D3D3D3",
            padding: "5px 5px", 
            width: "200px",
            height: "44px",
            outline: "none",
            fontSize: "20px",
            backgroundColor: "#D3D3D3",
            color: "white",
            marginTop: "15px",
            cursor: "pointer"
        }

        if(window.screen.width < mobileThreshold) {
            var buttonStyle = {
                borderRadius: "27px",
                border: "2px solid rgba(8,58,174,1)",
                padding: "5px 5px", 
                width: "50vw",
                height: "30px",
                outline: "none",
                fontSize: "15px",
                backgroundColor: "#083ab9",
                color: "white",
                marginTop: "15px",
                cursor: "pointer"
            }
    
            var buttonStyle2 = {
                borderRadius: "27px",
                border: "2px solid #D3D3D3",
                padding: "5px 5px", 
                width: "50vw",
                height: "30px",
                outline: "none",
                fontSize: "15px",
                backgroundColor: "#D3D3D3",
                color: "white",
                marginTop: "15px",
                cursor: "pointer"
            }
        }
        
        var registerButton = null;

        if(this.state.buttonState == 1) {
            registerButton = <button style={buttonStyle} onClick = {() => this.props.changePage(1, this.state.kids[this.state.selectedKid], this.state.session, this.state.kidSection)}>Register for {this.state.kidSection}</button>
        } else if (this.state.buttonState == 2) {
            registerButton = <button style={buttonStyle} onClick = {() => this.props.changePage(1, this.state.kids[this.state.selectedKid], this.state.session, this.state.kidSection)}>Waitlist for {this.state.kidSection}</button>
        } else if (this.state.buttonState == 3) {
            registerButton = <button style={buttonStyle} onClick = {() => this.cancelRegistration()}>Cancel Registration</button>
        }  

        var errorMessage = null

        if(this.state.error != ""){
            var errorStyle = {
                color: "red",
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "bold"
            }
            errorMessage = <p style={errorStyle}>{this.state.error}</p>
        }
        
        return (
            <div style = {divStyle}>
                <h2 style = {headerStyle}>{session.Display + " Session"}</h2>
                <p>{"Time: " + this.props.session.time}</p>
                <p style = {redStyle}>{session.OpenDate}</p>
                <Calendar key = {this.props.session.Name} dates = {this.props.session.Dates}/>

                {this.props.session.Open
                ?
                <div>
                    <h4>Please select the child that you wish to register.</h4>
                    {dropDown}
                </div>
                :
                <h4>This session is not accepting any more registrations.</h4>    
                }
                {registerButton}
                {errorMessage}
            </div>
        )
    }
}