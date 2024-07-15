class IconButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let imageButtonStyle = {
            width: this.props.small ? "40px" : "40px",
            height: this.props.small ? "40px" : "40px",
            padding: this.props.small ? "0px" : "0px",
            boxSizing: "border-box",
            borderRadius: this.props.small ? "4px" : "10px",
            display: "inline-block",
            marginLeft: this.props.small ? "2px" : "5px",
            cursor: "pointer",
            width: this.props.menu == "menu" ? "75px" : "40px",
            height: this.props.menu == "menu" ? "75px" : "40px"
        }
        let imageStyle = {
            maxWidth: "100%",
            filter: "invert(100%)",
            userSelect: "none",
            width: this.props.menu == "menu" ? "75px" : "40px",
            height: this.props.menu == "menu" ? "75px" : "40px"
        }
        return (
            <div style={imageButtonStyle} onClick={this.props.disabled ? null : this.props.onClick}>
                <img style={imageStyle} src={this.props.src}/>
            </div>
        )
    }
}