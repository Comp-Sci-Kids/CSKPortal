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
            // backgroundColor:  "#1d4091",
            zIndex:-1000
        }
        var innerDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            zIndex:-1000
        }
        var titleStyle = {
            margin: "20px",
            color: appRed,
            fontFamily: "brandFont",
            fontSize: "50px",
            textAlign: "center",
            justifyContent: 'center',
             alignItems:"center",
             display: 'flex',
             width: '100%',
        }

        if(window.screen.width < 1280) {
            titleStyle = {
            margin: "20px",
            color: appRed,
            fontFamily: "brandFont",
            fontSize: "50px",
            textAlign: "center"
            ,justifyContent: 'center',
             alignItems:"center",
             display: 'flex',
             width: '100%',
                // margin: "20px",
                // color: appRed,
                // fontFamily: "brandFont",
                // fontSize: "25px",
                // textAlign: "left"
            }
        }

        return (<div style={outerDivStyle}>
            <div style={innerDivStyle}>
                <h1 style={titleStyle}>CompSci Kids Parent Portal</h1>
                <User name={localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")} />
            
            </div>
            <TabBar defaultPage={this.props.defaultPage} tabChanged={this.tabChanged} />
        </div>)
    }
}