class Header extends React.Component {
    constructor(props) {
        super(props)
        this.tabChanged = this.tabChanged.bind(this)
    }
    tabChanged(index) {
        this.props.changePage(index)
    }
    render() {
        var outerDivStyle = {
            backgroundColor: "white",
            // height: "200px"
        }
        var innerDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center"
        }
        var titleStyle = {
            margin: "20px",
            color: appBlue,
            fontFamily: "brandFont",
            fontSize: "50px",
            textAlign: "left"
        }

        if(window.screen.width < 1280) {
            titleStyle = {
                margin: "20px",
                color: appBlue,
                fontFamily: "brandFont",
                fontSize: "25px",
                textAlign: "left"
            }
        }

        return (<div style={outerDivStyle}>
            <div style={innerDivStyle}>
                <h1 style={titleStyle}>CompSci Kids Portal</h1>
                <User name={localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")} />
            </div>
            <TabBar defaultPage={this.props.defaultPage} tabChanged={this.tabChanged} />
        </div>)
    }
}