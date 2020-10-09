class Header extends React.Component {
    constructor(props) {
        super(props)
        this.tabChanged = this.tabChanged.bind(this)
    }
    tabChanged(index) {
        this.props.changePage(index)
    }
    render() {
        let outerDivStyle = {
            backgroundColor: "white",
            // height: "200px"
        }
        let innerDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
        let titleStyle = {
            margin: "20px",
            color: appBlue,
            fontFamily: "brandFont",
            fontSize: "50px"
        }
        return (<div style={outerDivStyle}>
            <div style={innerDivStyle}>
                <h1 style={titleStyle}>CompSci Kids Portal</h1>
                <User name={sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName")} />
            </div>
            <TabBar defaultPage={this.props.defaultPage} tabChanged={this.tabChanged} />
        </div>)
    }
}