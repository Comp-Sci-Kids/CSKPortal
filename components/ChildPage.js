class ChildPage extends React.Component {
    constructor(props) {
        super(props)
        this.openPopup = this.openPopup.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.closePopup = this.closePopup.bind(this)
        this.refreshPage = this.refreshPage.bind(this)

        this.state = {
            popup: false,
            kids: []
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
    openPopup() {
        this.updateState("popup", true)
    }
    refreshPage() {
        networkRequest("parent/getKids", "POST", {

        }, d => {
            if(!d.success){
                alert("Error! Please refresh the page and try again.")
            } else {
                // console.log(d.kids);
                this.setState({
                    popup: false,
                    kids: d.kids
                });
            }
        })
    }
    closePopup() {
        this.updateState("popup", false)
        this.refreshPage();
    }

    render() {
        let divStyle = {
            height: "100%",
            width: "100%"
        }
        let contentDivStyle = {
            width: "90%",
            margin: "auto",
    
        }
        let headerStyle = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
        }

        let titleStyle = {
            margin : "10px",
            fontFamily: "brandFont",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px"
        }

        let popup = null
        if(this.state.popup){

            var sampleKid = {
                firstName: "",
                lastName: "",
                gender: "",
                dob: "",
                grade: "",
                shirtSize: "",
                emergencyName: "",
                emergencyPrefix: "",
                emergencyRelationship: "",
                emergencyPhone: "",
            };

            if(this.state.kids.length > 0) {
                sampleKid = this.state.kids[this.state.kids.length - 1]
            }

            popup = <AddChildPopup sampleKid = {sampleKid} closeCallback={this.closePopup}/>
        }

        let infoStyle = {
            fontStyle: 'italic',
            fontSize: '25px',
            fontFamily: "brandFont"

        }

        return (
            <div style={divStyle}>

                <div style={contentDivStyle} class="background-red">
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Child Information</h1>
                        <IconButton src="images/add.png" onClick={this.openPopup} class="background-black"/>  
                    </div>
                    <hr />
                    {this.state.kids.length > 0
                        ?
                        <ChildTable kids={this.state.kids} refreshCallback={this.refreshPage}/>
                        :
                        <p style = {infoStyle}>Please click the button in the top right of the screen to add a child.</p>
                    }
                    
                </div>                
                {popup} 
            </div>
        )
    }
}