class ChildRow extends React.Component {
    constructor(props) {
        super(props)
        this.openChildRowPopup = this.openChildRowPopup.bind(this)
        this.sessionSelect = React.createRef()
        this.sectionSelect = React.createRef()

        this.state = {
            latestSession: "",
            latestSessionState: ""
        }

    }
    openChildRowPopup() {
        this.updateState("popup", true)
    }

    render() {


        var shirtSize = "";
        var shirtOptions = [{value: "ys", display: "Youth Small"}, {value: "ym", display: "Youth Medium"}, {value: "yl", display: "Youth Large"}, {value: "as", display: "Adult Small"}, {value: "am", display: "Adult Medium"}, {value: "al", display: "Adult Large"}, {value: "ax", display: "Adult X-Large"}];

        for(var i = 0; i < shirtOptions.length; i++) {
            if(shirtOptions[i].value == this.props.kid.shirtSize) {
                shirtSize = shirtOptions[i].display;
                break;
            }
        }

        var grade = "";
        var gradeOptions = [{value: 1, display: "1st"}, {value: 2, display: "2nd"}, {value: 3, display: "3rd"}, {value: 4, display: "4th"}, {value: 5, display: "5th"}, {value: 6, display: "6th"}, {value: 7, display: "7th"}, {value: 8, display: "8th"}];

        for(var i = 0; i < gradeOptions.length; i++) {
            if(gradeOptions[i].value == this.props.kid.grade) {
                grade = gradeOptions[i].display;
                break;
            }
        }

        var pastSessions = []

        for(var i = 0; i < this.props.kid.sessions.old.length; i++) {
            var sessionData = this.props.kid.sessions.old[i];

            var text = ""

            text += sessionData.sessionName + ", " + sessionData.section
            if(sessionData.waitlist) {
                text += " Waitlist"
            } else if(sessionData.advanced) {
                text += " Advanced"
            } else {
                text += " Regular"
            }
            console.log(text)

            pastSessions.push(<li key = {i}>{text}</li>)
        }

        if(pastSessions.length == 0) {
            pastSessions.push(<p key = {i}>None</p>)
        }

        var currentSessions = []

        for(var i = 0; i < this.props.kid.sessions.current.length; i++) {
            var sessionData = this.props.kid.sessions.current[i];

            var text = ""

            text += sessionData.sessionName + ", " + sessionData.section
            if(sessionData.waitlist) {
                text += " Waitlist"
            } else if(sessionData.advanced) {
                text += " Advanced"
            } else {
                text += " Regular"
            }

            currentSessions.push(<li key = {i}>{text}</li>)
        }

        if(currentSessions.length == 0) {
            currentSessions.push(<p key = {i}>None</p>)
        }

        return (
            <tr>
                <td>{this.props.kid.firstName}</td>
                <td>{this.props.kid.lastName}</td>
                <td>{grade}</td>
                <td>{this.props.kid.birthday}</td>
                <td>{shirtSize}</td>
                <td>{currentSessions}</td>
                <td>{pastSessions}</td>
                {/* for editing a user account */}
                <td><IconButton src="images/edit.png" small={true} onClick={() => {this.props.popup(this.props.kid)}}/></td>
            </tr>
        )
    }
}