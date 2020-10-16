class ChildTable extends React.Component {
    constructor(props){
        super(props)
        this.closePopup = this.closePopup.bind(this)
        this.state = {
            kid: {},
            popupOpen: false
        }
    }
    closePopup(){
        this.setState({
            kid: {},
            popupOpen: false
        })
    }
    editChild(kid) {
        this.setState({
            kid: kid,
            popupOpen: true
        })
    }
    render(){
        let tableStyle = {
            width: "100%",
            cellSpacing: 0,
            cellPadding: 0,
            borderSpacning: 0
        }
        let headStyle = {
            borderBottom: "solid 3px black",
            boxSizing: "border-box"
        }
        
        //this renders each of the rows for an account
        let rows = []

        this.props.kids.forEach(kid => {
            rows.push(<ChildRow popup ={this.editChild} kid={kid} key = {kid._id} refreshCallback={this.props.refreshCallback}/>)
        });

        //this is a popup for editing an account info - it only renders when a button gets clicked on
        let popup = null
        if(this.state.popupOpen){
            popup = <EditChildPopup refreshCallback = {this.props.refreshCallback} name={this.state.name} username={this.state.username} closeCallback={this.closePopup}/>
        }

        return (
            <React.Fragment>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <td style={{...headStyle, width: "200px"}}>First Name</td>
                            <td style={{...headStyle, width: "200px"}}>Last Name</td>
                            <td style={{...headStyle, width: "200px"}}>Grade</td>
                            <td style={{...headStyle, width: "200px"}}>T-Shirt Size</td>
                            <td style={{width: "45px"}}></td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {popup}
            </React.Fragment>
        )
    }
}