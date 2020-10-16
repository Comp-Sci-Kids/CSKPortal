class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.changePage = this.changePage.bind(this)
        this.refresh = this.refresh.bind(this)
        this.pageBody = React.createRef()

        this.state = {
            page: 0,
            refresh: false
        }
    }

    refresh(){
        this.setState({
            page: this.state.page,
            refresh: !this.state.refresh
        })
    }
    changePage(index) {
        this.setState({
            refresh: this.state.refresh,
            page: index
        })
    }

    render() {        
        return (
            <div>
                <Header defaultPage={this.state.page} changePage={this.changePage} refreshCallback={this.refresh}/>
                <PageBody page={this.state.page} ref={this.pageBody}/>
            </div>
        )

    }
}