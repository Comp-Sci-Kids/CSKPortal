class EditChildPopup extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.deleteAccount = this.deleteAccount.bind(this)
        this.updateChild = this.updateChild.bind(this)
        console.log(this.props.sampleKid.birthday)
        this.state = {
            id: this.props.sampleKid._id,
            firstName: this.props.sampleKid.firstName,
            lastName: this.props.sampleKid.lastName,
            gender: this.props.sampleKid.gender,
            dob: this.props.sampleKid.birthday,
            grade: this.props.sampleKid.grade,
            shirtSize: this.props.sampleKid.shirtSize,
            school: this.props.sampleKid.school,
            emergencyName: this.props.sampleKid.emergencyName,
            emergencyPrefix: this.props.sampleKid.emergencyPrefix,
            emergencyRelationship: this.props.sampleKid.emergencyRelationship,  //should be a selectView
            emergencyPhone: this.props.sampleKid.emergencyPhone,
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

    refreshPage() {
        networkRequest("parent/getKids", "POST", {

        }, d => {
            if(!d.success){
                alert("Error! Please refresh the page and try again.")
            }else{
                console.log(d.kids);
                this.setState({
                    popup: false,
                    kids: d.kids
                });
            }
        })
    }

    updateChild(){
        
        if (
            this.state.emergencyPrefix == "" ||
            this.state.emergencyName == "" ||
            this.state.emergencyRelationship == "" ||
            this.state.emergencyPhone == "" ||
            this.state.firstName == "" ||
            this.state.lastName == "" ||
            this.state.gender == "" ||
            this.state.dob == "" ||
            this.state.school == "" ||
            this.state.grade == "" ||
            this.state.shirtSize == ""
        ) {
            alert("You are missing some information.");
            // this.updateState("error", "You are missing some information.")
            return;
        }

        var dob = this.state.dob;

        if(dob.length != 10) {
            alert("Please enter the birthday in MM/DD/YYYY format.");
            // this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.")
            return;
        } else if(dob[2] != "/" || dob[5] != "/") {
            alert("Please enter the birthday in MM/DD/YYYY format.");
            // this.updateState("error", "Please enter the birthday in MM/DD/YYYY format.")
            return;
        }

        const capitalize = (s) => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        } 

        networkRequest("parent/updateKid", "POST", {
            id: this.state.id,
            firstName: capitalize(this.state.firstName.toLowerCase()),
            lastName: capitalize(this.state.lastName.toLowerCase()),
            gender: this.state.gender,
            birthday: this.state.dob,
            grade: this.state.grade,
            school: this.state.school,
            shirtSize: this.state.shirtSize,
            emergencyName: this.state.emergencyName,
            emergencyPrefix: this.state.emergencyPrefix,
            emergencyRelationship: this.state.emergencyRelationship,
            emergencyPhone: this.state.emergencyPhone,
            sessionName: this.props.sampleKid.sessionName
        }, d => {
            console.log(d);
            if(!d.success){
                alert(d.message);
                // this.updateState("error", d.message);
            }else{
                this.props.closeCallback()
            }
        })

    }


    deleteAccount(){
        
        if(confirm("Are you sure you want to delete this account?")){
            console.log("deleting")
            networkRequest("parent/deleteKid", "POST", {
                id: this.state.id
            }, d => {
                if(!d.success) {
                    alert(d.message);
                    // this.updateState("error", d.message)
                } else {
                    this.props.closeCallback()
                    this.props.refreshCallback()
                }
            })
        }
    }

    render() {
        var popupStyle = {
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1
        }
        var boxStyle = {
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
        var contentDiv = {
            width: "90%"
        }
        var buttonDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            boxSizing: "border-box",
            paddingBottom: "10px",
            paddingRight: "10px"
        }
        var divStlye = {
            boxSizing: "border-box",
            width: "100%",
            padding: "5px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }
        var labelStyle = {
            margin: 0,
            marginRight: "40px",
            fontSize: "25px",
            fontWeight: "bold"
        }
        var inputStyle = {
            height: "20px",
            fontSize: "18px",
            width: "200px"
        }

        var headerStyle = {
            fontSize: "35px"
        }

        if(window.screen.width < mobileThreshold) {
            popupStyle = {
               position: "fixed",
               width: "100vw",
               height: "100vh",
               backgroundColor: "rgba(0, 0, 0, 0.5)",
               top: 0,
               left: 0,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            //    overflowY: 'scroll',
           }

            boxStyle = {
               width: "fit-content",
               height: "fit-content",
               backgroundColor: "white",
               borderRadius: "25px",
               display: "flex",
               justifyContent: "space-between",
               flexDirection: "column",
               alignItems: "center",
               position: "relative",
            //    overflowY: 'scroll',
           }
            contentDiv = {
               width: "95vw"
           }
            buttonDivStyle = {
               width: "100%",
               display: "flex",
               justifyContent: "flex-end",
               alignItems: "center",
               boxSizing: "border-box",
               paddingBottom: "10px",
               paddingRight: "10px"
           }
   
            divStlye = {
               boxSizing: "border-box",
               width: "100%",
               padding: "5px 0px",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "flex-end"
           }
   
           labelStyle = {
               margin: 0,
               marginRight: "20px",
               fontSize: "15px",
               fontWeight: "bold"
           }
   
           inputStyle = {
               height: "15px",
               fontSize: "10px",
               width: "100px"
           }

           headerStyle = {
               fontSize: "22px",
               marginLeft: "7px"
           }

       }

        //error message
        var errorMessage = null
        if(this.state.error != ""){
            var errorStyle = {
                color: this.state.error ? "red" : "green",
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "bold"
            }
            // alert(this.state.error)
            errorMessage = <p style={errorStyle}>{this.state.error}</p>
        }

        var hrStyle = {
            border: '5px dotted ' + appBlue,
            borderStyle: 'none none dotted',
            color: '#fff',
            backgroundColor: '#fff' 
        }

        return (

            <div style={popupStyle}>
                <div style={boxStyle}>
                    <div style={contentDiv}>
                        <h1 style = {headerStyle}>Edit Account</h1>
                        <hr></hr>
                        <LabelField title="First Name" field="firstName" value={this.state.firstName} editing={false} valueChanged={this.updateState} />
                        <LabelField title="Last Name" field="lastName" value={this.state.lastName} editing={false} valueChanged={this.updateState} />
                        <SelectField title="Gender" field="gender" value={this.state.gender} editing={true} valueChanged={this.updateState} options={[{value: "male", display: "Male"}, {value: "female", display: "Female"}, {value: "other", display: "Other"}]}/>

                        <LabelField title="Birthday (MM/DD/YYYY)" field="dob" value={this.state.dob} editing={false} valueChanged={this.updateState} />

                        <SelectField title="Grade" field="grade" value={this.state.grade} editing={true} valueChanged={this.updateState} options={[{value: 1, display: "1st"}, {value: 2, display: "2nd"}, {value: 3, display: "3rd"}, {value: 4, display: "4th"}, {value: 5, display: "5th"}, {value: 6, display: "6th"}, {value: 7, display: "7th"}, {value: 8, display: "8th"}]}/>
                        <LabelField title="School" field="school" value={this.state.school} editing={true} valueChanged={this.updateState} />

                        <SelectField title="Shirt Size" field="shirtSize" value={this.state.shirtSize} editing={true} valueChanged={this.updateState} options={[{value: "ys", display: "Youth Small"}, {value: "ym", display: "Youth Medium"}, {value: "yl", display: "Youth Large"}, {value: "as", display: "Adult Small"}, {value: "am", display: "Adult Medium"}, {value: "al", display: "Adult Large"}, {value: "ax", display: "Adult X-Large"}]}/>
                        <hr style = {hrStyle}></hr>
                        <LabelField title="Emergency Contact Name" field="emergencyName" value={this.state.emergencyName} editing={true} valueChanged={this.updateState} />
                        <SelectField title="Emergency Contact Prefix" field="emergencyPrefix" value={this.state.emergencyPrefix} editing={true} valueChanged={this.updateState} options={[{value: "Mr", display: "Mr"}, {value: "Ms", display: "Ms"}, {value: "Mrs", display: "Mrs"}]}/>
                        <SelectField title="Emergency Contact Relationship" field="emergencyRelationship" value={this.state.emergencyRelationship} editing={true} valueChanged={this.updateState} options={[{value: "Mother", display: "Mother"}, {value: "Father", display: "Father"}, {value: "Neighbor", display: "Neighbor"}, {value: "Other", display: "Other"}]}/>
                        <LabelField title="Emergency Contact Phone Number" field="emergencyPhone" value={this.state.emergencyPhone} editing={true} valueChanged={this.updateState} />
                        {errorMessage}
                    </div>
                    <div style={buttonDivStyle}>
                        <IconButton src="images/close.png" onClick={this.props.closeCallback}/>
                        <IconButton src="images/trash.png" onClick={this.deleteAccount}/>
                        <IconButton src="images/done.png" onClick={this.updateChild}/>
                    </div>
                </div>

            </div>

        );
    }
}