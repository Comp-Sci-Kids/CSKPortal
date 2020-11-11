class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.updateState = this.updateState.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
        this.togglePage = this.togglePage.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            page: 0,
            sessions: [],
            selectedKid: {},
            session: {},
            selectedKidSection: "",
            message: ""
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


    render() {
        let divStyle = {
            height: "100%",
            width: "100%",
            textAlign: "center"
        }
        let contentDivStyle = {
            width: "90%",
            margin: "auto"
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

        let infoStyle = {
            fontStyle: 'italic',
            fontSize: '25px'
        }

        var sessions = []

        this.state.sessions.forEach(session => {
            sessions.push(<Session changePage = {this.togglePage} key = {session.Name} session = {session}/>)
        });

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
            <div style={divStyle}>
                {messageBox}
                {
                    this.state.page == 0
                    ?
                    <div style={contentDivStyle}>
                        <div style={headerStyle}>
                            <h1 style={titleStyle}>Register</h1>
                        </div>
                        <hr />
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
            </div>
        )
    }
}