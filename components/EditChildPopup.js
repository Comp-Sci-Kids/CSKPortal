class EditChildPopup extends React.Component {
    constructor(props) {
        super(props)
        this.valueChanged = this.valueChanged.bind(this)
        this.deleteAccount = this.deleteAccount.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.state = {
            name: this.props.name,
            username: this.props.username,
            oldpassword: "",
            newpassword: "",
            message: ""
        }
    }
    updateChild(){
        
    }
    valueChanged(field, val){
        this.state[field] = val
        this.setState(this.state)
    }
    deleteAccount(){
        if(confirm("Are you sure you want to delete this account?")){
            console.log("deleting")
            // console.log(this.state.name)
            networkRequest("parent/deleteKid", "DELETE", {
                id: this.state.id
            }, d => {
                
                if(!d.success) {
                    this.valueChanged["message", d.message]
                } else {
                    this.props.closeCallback()
                    this.props.refreshCallback()
                }
            })
        }
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
            justifyContent: "center",
            zIndex: 1
        }
        let boxStyle = {
            width: "600px",
            height: "400px",
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

        //error message
        let errorMessage = null
        if(this.state.message != ""){
            let errorStyle = {
                color: this.state.error ? "red" : "green",
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "bold"
            }
            errorMessage = <p style={errorStyle}>{this.state.message}</p>
        }

        return (

            <div style={popupStyle}>
                <div style={boxStyle}>
                    <div style={contentDiv}>
                        <h1>Edit Account</h1>
                        <hr></hr>
                        <LabelField title="Name" field="name" value={this.state.name} editing={false} valueChanged={this.valueChanged} />
                        <LabelField title="Username" field="username" value={this.state.username} editing={false} valueChanged={this.valueChanged} />
                        <LabelField title="Old Password" field="oldpassword"  secure={true} value={this.state.oldpassword} editing={true} valueChanged={this.valueChanged} />
                        <LabelField title="New Password" field="newpassword" secure={true} value={this.state.newpassword} editing={true} valueChanged={this.valueChanged} />
                        {errorMessage}
                    </div>
                    <div style={buttonDivStyle}>
                        <IconButton src="images/close.png" onClick={this.props.closeCallback}/>
                        <IconButton src="images/trash.png" onClick={this.deleteAccount}/>
                        <IconButton src="images/done.png" onClick={this.updatePassword}/>
                    </div>
                </div>

            </div>

        );
    }
}