class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
        this.togglePage = this.togglePage.bind(this)
        this.back = this.back.bind(this)
        this.openPopup = this.openPopup.bind(this)
        this.closePopup = this.closePopup.bind(this)

        this.state = {
            page: 0,
            sessions: [],
            selectedKid: {},
            session: {},
            selectedKidSection: "",
            message: "",
            popup:false
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

    togglePage(state, kid, session, section) {
        this.setState({
            page: state,
            sessions: this.state.sessions,
            selectedKid: kid,
            selectedSession: session,
            selectedKidSection: section,
            message: this.state.message
        })
    }

    back(message) {
        this.setState({
            page: 0,
            sessions: this.state.sessions,
            selectedKid: {},
            selectedSession: {},
            selectedKidSection: "",
            message: message
        })

        setTimeout(() => {
            this.state["message"] = "";
            this.setState(this.state)
          }, 4000)

    }
    

    refreshPage() {
        networkRequest("session?filter=active", "GET", {

        }, d => {
            this.setState({
                sessions: d,
                selectedKid: this.state.selectedKid,
                session: this.state.session,
                page: this.state.page,
                selectedKidSection: this.state.selectedKidSection,
                message: ""
            })
            
        })
    }

    openPopup() {
        this.updateState("popup", true)
    }

    closePopup() {
        this.updateState("popup", false)
        this.refreshPage();
    }


    render() {
        var buttonStyle = {
            borderRadius: "2vw",
            border: "0.2vw solid rgba(8,58,174,1)",
            padding: "0.2vw 0.5vw", 
            width: "10vw",
            height: "3vw",
            outline: "none",
            fontSize: "1vw",
            backgroundColor: "#083ab9",
            color: "white",
            marginTop: "1.5vw",
            cursor: "pointer",
            position: "relative",
            left: "2vw"  // Adjust this value to move the button more to the left
        }
        
        
        let divStyle = {
            height: "100vh",  // Full viewport height
            width: "100vw",   // Full viewport width
            textAlign: "center"
        }
        
        let contentDivStyle = {
            width: "90vw",    // 90% of the viewport width
            margin: "auto",
        }
        
        let headerStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1vw"  // Responsive top margin
        }
        
        let titleStyle = {
            margin: "2vw",      // Responsive margin
            width: "50vw",      // 50% of the viewport width
            fontSize: "3vw",    // Responsive font size
            fontFamily: "brandFont",
            position: "relative",
            textAlign: "center",
            justifyContent: "center"
        }
        
        let infoStyle = {
            fontStyle: 'italic',
            fontSize: '1.5vw'  // Responsive font size
        }
        
        // Adjust the popup style as well
        var popupStyle = {
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }

        var sessions = []

        this.state.sessions.forEach(session => {
            sessions.push(<Session changePage = {this.togglePage} key = {session.Name} session = {session}/>)
        });

        //popup
        let popup = null
        if(this.state.popup){
            popup = <RegisterPopup closeCallback={this.closePopup}/>

            console.log("hello")
        }


        //message

        let messageBox = null

        if(this.state.message != ""){
            let messageBoxStyle = {
                position: "fixed",
                width: "100%",
                margin: "auto",
                backgroundColor: "green",
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                top: "20px",
                padding: "10px",
                boxSizing: "border-box",
                borderRadius: "8px",
                zIndex: "20"
            }
            messageBox = <div style={messageBoxStyle}>{this.state.message}</div>
        }

        return (
            // <div class = "body">

            <div style={divStyle}>
                {messageBox}
                {
                    this.state.page == 0
                    ?
                    
                    <div style={contentDivStyle} class="background-red">
                        <div style={headerStyle}>
                            <h1 style={titleStyle}>Register Children</h1>
                            <button style={buttonStyle} onClick = {this.openPopup}>How Do I Register?</button>
                        </div>
                        <hr  />
                        {sessions.length > 0
                        ?
                         sessions
                        :
                        <p style = {infoStyle}>There are no open sessions.</p>
                        }
                    </div> 
                    :
                    <RegisterKidPage back = {this.back} section = {this.state.selectedKidSection} session = {this.state.selectedSession} kid = {this.state.selectedKid}></RegisterKidPage>
                }               
                <br/>
                <br/>
                {popup} 

            </div>
            // </div>

        )
    }
}