class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.changeTab = this.changeTab.bind(this)
        this.state = {
            selectedTab: this.props.defaultPage
        }
    }
    changeTab(index) {
        this.setState({
            selectedTab: index
        })
        this.props.tabChanged(index)
    }
    render() {
        let tabNames = ["Register", "Children", "Account"]
        let tabs = []
        for (let i = 0; i < tabNames.length; i++) {
            tabs.push(<Tab key={i} index={i} title={tabNames[i]} selected={i == this.state.selectedTab} callback={this.changeTab} left={i == 0} right={i == tabNames.length - 1} />)
        }
        let barStyle = {
            borderBottom: "solid 1px",
            width: "100%",
            paddingLeft: "50px",
            boxSizing: "border-box"
        }
        return <div style={barStyle}>{tabs}</div>
    }
}