class SlidingMenu extends React.Component{
    constructor(props){
      super(props);
    }
    render(){

      let buttonStyle = {
        flexDirection: "column",
        borderLeft: "solid 0.2vw",  // Use viewport units for border width
        width: "50vw",  // Use viewport units for width
        paddingLeft: "5vw",  // Use viewport units for padding
        boxSizing: "border-box",
    };
    

      return(
        <div className={"sliding-menu animated " + this.props.slideClass}>
        <IconButton style={buttonStyle} src="images/close.png" onClick={this.props.onClick}/>  
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
        this.setState({toggleMenu: !this.state.toggleMenu});
    }
    render() {

        let slideClass;
        this.state.toggleMenu
          ? slideClass = 'slideInLeft slide-menu'
          : slideClass = 'slideInRight';

        let tabNames = ["Register!", "Children!", "Account"]
        let tabs = []
        for (let i = 0; i < tabNames.length; i++) {
            tabs.push(<Tab key={i} class="active" index={i} title={tabNames[i]} selected={i == this.state.selectedTab} callback={this.changeTab} left={i == 0} right={i == tabNames.length - 1} />)
        }
        let barStyle = {
            flexDirection: "column",
            borderLeft: "solid 1px",    
            width: "100%",
            // paddingTop: "50px",
            paddingLeft: "50px",
            boxSizing: "border-box",
        }


        let buttonStyleMenu2 = {
          flexDirection: "column",
          borderLeft: "solid 0.2vw",  // Use viewport units for border width
          width: "40vw",  // Use viewport units for width, slightly smaller than buttonStyle
          paddingLeft: "2vw",  // Use viewport units for padding
          boxSizing: "border-box",
      };

        return( 

        <div style={barStyle}>
                 <IconButton style ={buttonStyleMenu2} src="images/menu2.png" onClick={this.handleClick} menu = "menu"/>  

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
