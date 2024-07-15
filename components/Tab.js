class Tab extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var tabStyle = {
            fontFamily: "brandFont",
            // width: "20vw",
            // height: "20px",
            fontSize: "40px",
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
            tabStyle.backgroundColor = "#ff0000";          // Set background color to #ff0000 (red)
            tabStyle.color = "white";                      // Set text color to white
            tabStyle.border = "2px solid rgba(237, 192, 192, 0.2)"; // Add a 2px solid border with 30% opacity (RGBA)
        } else {
            tabStyle.backgroundColor = appRed;             // Use appRed for unselected background
            tabStyle.color = "white";                      // Set text color to white
            tabStyle.border = "none";                      // Ensure no border when not selected
        }
        
        return <button style={tabStyle} onClick={() => { this.props.callback(this.props.index) }}>{this.props.title}</button>
    }
}