class Tab extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var tabStyle = {
            fontFamily: "brandFont",

            // width: "20vw",
            // height: "20px",
            fontSize: "20px",
            // outline: "none",
            borderStyle: "none",
            // borderWidth: "1px 1px 0 1px",
            // borderColor: "black",
            // color: "black",
            // borderRadius: "15px 15px 0px 0px"
        }

        if(window.screen.width < mobileThreshold) {
            tabStyle = {
                width: "25vw",
                height: "30px",
                fontSize: "12px",
                outline: "none",
                borderStyle: "solid",
                borderWidth: "1px 1px 0 1px",
                borderColor: "black",
                color: "black",
                borderRadius: "15px 15px 0px 0px"
            }
        }

        if (this.props.selected) {
            tabStyle.backgroundColor = appRed
            tabStyle.color = "white"
        }
        return <button style={tabStyle} onClick={() => { this.props.callback(this.props.index) }}>{this.props.title}</button>
    }
}