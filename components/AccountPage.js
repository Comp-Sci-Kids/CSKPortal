class AccountPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        let divStyle = {
            height: "100%",
            width: "100%"
        }
        let contentDivStyle = {
            width: "90%",
            margin: "auto"
        }
        let headerStyle = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px"
        }
        let titleStyle = {
            margin : "10px"
        }
        return (
            <div style={divStyle}>

                <div style={contentDivStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Parent Account</h1>
                    </div>
                    <hr />
                </div>                
  
            </div>
        )
    }
}