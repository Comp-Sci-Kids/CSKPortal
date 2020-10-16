class PageBody extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let page = undefined
        switch (this.props.page) {
            //these are all of the different types of bodies
            //a student only has access to the attendance page
            case 0:
                page = <ChildPage />
                break
            case 1:
                page = <AccountPage />
                break
            default:
                page = <div></div>
                break
        }
        let divStyle = {
            width: "100%",
            height: (document.body.clientHeight - 124) + "px"
        }
        return (
            <div style={divStyle}>
                {page}
            </div>
        )
    }
}