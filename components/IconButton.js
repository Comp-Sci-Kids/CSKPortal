class IconButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let imageButtonStyle = {
            width: this.props.small ? "30px" : "50px",
            height: this.props.small ? "30px" : "50px",
            backgroundColor: this.props.disabled ? "#DDDDDD" : appBlue,
            padding: this.props.small ? "4px" : "8px",
            boxSizing: "border-box",
            borderRadius: this.props.small ? "4px" : "10px",
            display: "inline-block",
            marginLeft: this.props.small ? "5px" : "10px",
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