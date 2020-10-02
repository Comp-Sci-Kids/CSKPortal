class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
        this.delete = this.delete.bind(this)

        this.state = {
           
        }
    }

    delete() {
        networkRequest("parent/delete", "DELETE", {

        }, d => {
            if(!d.success){
                alert("error")
                alert(d.message)
            }else{
                this.logout();
            }
        })
    }

    logout() {
        sessionStorage.clear()
        location.reload()
    }

    render() {        
        return (
            <div>
                <button onClick={this.delete}>Delete Account</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        )

    }
}