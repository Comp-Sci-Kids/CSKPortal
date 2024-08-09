class Header extends React.Component {
    constructor(props) {
        super(props);
        this.tabChanged = this.tabChanged.bind(this);
    }

    tabChanged(index) {
        this.props.changePage(index);
    }

    render() {
        var outerDivStyle = {
            zIndex: -1000
        };
        
        var innerDivStyle = {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            zIndex: -1000
        };
        
        var titleStyle = {
            margin: "20px",
            color: "white",
            fontFamily: "brandFont",
            fontSize: "5vw",  // Using viewport width for responsive font size
            textAlign: "center",
            justifyContent: 'center',
            alignItems: "center",
            display: 'flex',
            width: '100%',
        };

        return (
            <div style={outerDivStyle}>
                <div style={innerDivStyle}>
                    <h1 style={titleStyle}>CompSci Kids Parent Portal</h1>
                    <User name={`${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}`} />
                </div>
                <TabBar defaultPage={this.props.defaultPage} tabChanged={this.tabChanged} />
            </div>
        );
    }
}
