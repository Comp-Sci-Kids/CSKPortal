class LabelField extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.getValue = this.getValue.bind(this)
        this.input = React.createRef()
    }
    getValue(){
        return this.input.current.value
    }
    onChange(e){
        this.props.valueChanged(this.props.field, e.target.value)
    }
    render() {

        let divStlye = {
            boxSizing: "border-box",
            width: "100%",
            padding: "5px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
        }

        let labelStyle = {
            margin: 0,
            marginRight: "40px",
            fontSize: "25px",
            fontWeight: "bold"
        }

        let pStyle = {
            margin: 0,
            fontSize: "20px"
        }
        let inputStyle = {
            height: "20px",
            fontSize: "18px",
            width: "200px"
        }

        if(this.props.disabled){
            labelStyle.fontStyle = "italic",
            labelStyle.color = "gray",
            pStyle.fontStyle = "italic",
            pStyle.color = "gray"
        }
        let element = null
        if(this.props.editing){
            element = <input ref={this.input} style={inputStyle} type={this.props.secure ? "password" : "text"} value={this.props.value} onChange={this.onChange}/>
        }else{
            element = <p style={pStyle}>{this.props.value}</p>
        }
        return (
            <div style={divStlye}>
                <label style={labelStyle}>{this.props.title}:</label>
                {element}
            </div>
        )
    }
}