class IconButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let imageButtonStyle = {
            width: this.props.small ? "40px" : "40px",
            height: this.props.small ? "40px" : "40px",
            backgroundColor: this.props.disabled ? "#DDDDDD" : appRed,
            padding: this.props.small ? "0px" : "0px",
            boxSizing: "border-box",
            borderRadius: this.props.small ? "4px" : "10px",
            display: "inline-block",
            marginLeft: this.props.small ? "2px" : "5px",
            cursor: "pointer"
        }
        let imageStyle = {
            maxWidth: "100%",
            filter: "invert(100%)",
            userSelect: "none"
        }
        return (
            <div style={imageButtonStyle} onClick={this.props.disabled ? null : this.props.onClick}>
                <img style={imageStyle} src={this.props.src}/>
            </div>
        )
    }
}