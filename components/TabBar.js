class SlidingMenu extends React.Component{
    constructor(props){
      super(props);
    }
    render(){

      let buttonStyle = {
        flexDirection: "column",
        borderLeft: "solid 1px",    
        width: "50%",
        paddingLeft: "50px",
        boxSizing: "border-box",
    }

      return(
        <div className={"sliding-menu animated " + this.props.slideClass}>
        <IconButton style={buttonStyle} src="images/menu.png" onClick={this.props.onClick}/>  
          {this.props.children}
        </div>
      );
    }
  }

class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.changeTab = this.changeTab.bind(this)
        this.state = {
            selectedTab: this.props.defaultPage,
            toggleMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.toggleMenu);
        this.setState({toggleMenu: !this.state.toggleMenu});
      }
    
    changeTab(index) {
        this.setState({
            selectedTab: index
        })
        this.props.tabChanged(index)
    }
    render() {

        let slideClass;
        this.state.toggleMenu
          ? slideClass = 'slideInLeft slide-menu'
          : slideClass = 'slideInRight';

        let tabNames = ["Register", "Children", "Account"]
        let tabs = []
        for (let i = 0; i < tabNames.length; i++) {
            tabs.push(<Tab key={i} class="active" index={i} title={tabNames[i]} selected={i == this.state.selectedTab} callback={this.changeTab} left={i == 0} right={i == tabNames.length - 1} />)
        }
        let barStyle = {
            flexDirection: "column",
            borderLeft: "solid 1px",    
            width: "100%",
            paddingLeft: "50px",
            boxSizing: "border-box",
        }



        return( 

        <div style={barStyle}>
                 <IconButton src="images/menu.png" onClick={this.handleClick}/>  

            {/* <button type="button" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-menu-hamburger"></span>
        </button> */}
        <SlidingMenu slideClass={slideClass} onClick={this.handleClick}>
        {tabs}
        </SlidingMenu>
            </div>
        );
    }
}
