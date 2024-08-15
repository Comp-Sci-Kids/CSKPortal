class IconButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let imageButtonStyle = {
            width: this.props.small ? "4vw" : "4vw",
            height: this.props.small ? "4vw" : "4vw",
            boxSizing: "border-box",
            borderRadius: this.props.small ? "0.5vw" : "1vw",
            display: "inline-block",
            marginLeft: this.props.small ? "0.2vw" : "0.5vw",
            cursor: "pointer",
            width: this.props.menu == "menu" ? "6vw" : "2vw",
            height: this.props.menu == "menu" ? "6vw" : "2vw",
            marginLeft: "0.1vw"
        }
        let imageStyle = {
            maxWidth: "100%",
            userSelect: "none",
            width: this.props.menu == "menu" ? "6vw" : "40px",
            height: this.props.menu == "menu" ? "6vw" : "40px",
        }
        return (
            <div style={imageButtonStyle} onClick={this.props.disabled ? null : this.props.onClick}>
                <img style={imageStyle} src={this.props.src}/>
            </div>
        )
    }
}