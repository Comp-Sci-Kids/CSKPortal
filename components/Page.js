class Page extends React.Component {
    constructor(props) {
        super(props)
        this.pageBody = React.createRef()
        this.state = {
            refresh: false
        }
    }

    render() {
        return <p>Hello world</p>
    }
}