class Page extends React.Component {
    constructor(props) {
        super(props)
        this.pageBody = React.createRef()
        this.changePage = this.changePage.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
        this.state = {
            view: 1, //0 is login, 1 is signup, 2 is dashboard...
            refresh: false
        }
    }

    //user is logged in
    loggedIn() {
        this.setState({
            view: 3,
            refresh: this.state.refresh 
        })
    }

    //refresh the page
    refresh() {
        this.setState({
            view: this.state.view,
            refresh: !this.state.refresh //binary operator changes the value
        })
    }

    changePage(view) {
        this.setState({
            view: view
        })
    }

    render() {

        var content = null;
        console.log(this.state.view);
        if (this.state.view == 1){
            content = <LoginPage changePage = {this.changePage} callback = {this.loggedIn} />
        } else if (this.state.view == 2) {
            content = <SignUpPage changePage = {this.changePage}/>
        } else {
            content = <Dashboard/>;
        }
        // }else {
        //     let body = <PageBody key={selectedSession} page={this.state.page} ref={this.pageBody} />
        //     if(selectedSession == null){
        //         body = null
        //     }
        //     content = (
        //         <div>
        //             <Header defaultPage={this.state.page} changePage={this.changePage} refreshCallback={this.refresh}/>
        //             {body}
        //         </div>
        //     )
        // }

        return content
    }
}