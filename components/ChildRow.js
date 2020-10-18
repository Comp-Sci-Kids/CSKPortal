class ChildRow extends React.Component {
    constructor(props) {
        super(props)
        this.openChildRowPopup = this.openChildRowPopup.bind(this)
        this.sessionSelect = React.createRef()
        this.sectionSelect = React.createRef()

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

        

        return (
            <tr>
                <td>{this.props.kid.firstName}</td>
                <td>{this.props.kid.lastName}</td>
                <td>{grade}</td>
                <td>{shirtSize}</td>
                {/* for editing a user account */}
                <td><IconButton src="images/edit.png" small={true} onClick={() => {this.props.popup(this.props.kid)}}/></td>
            </tr>
        )
    }
}