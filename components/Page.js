class Page extends React.Component {
    constructor(props) {
        super(props)
        this.pageBody = React.createRef()
        this.state = {
            refresh: false
        }
    }

    render() {
        // let content = LoginPage
        // if(this.state.login){
        let content = <LoginPage/>
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