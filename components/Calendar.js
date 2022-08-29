class Calendar extends React.Component {
    constructor(props) {
        super(props)
        var dates = props.dates.split(",")
        if(dates.length == 0 || dates[0] == ""){
            var curDate = new Date()
            dates = [(curDate.getMonth() + 1) + "/" + curDate.getDate() + "/" + curDate.getFullYear()]
        }
        var smallestMonth = parseInt(dates[0].split("/")[0])
        var largestMonth = parseInt(dates[dates.length - 1].split("/")[0])
        this.smallestMonth = smallestMonth
        this.largestMonth = largestMonth
        this.state = { year: dates[0].split("/")[2], month: smallestMonth }
        this.prevMonth = this.prevMonth.bind(this)
        this.nextMonth = this.nextMonth.bind(this)
    }
    prevMonth() {

        if (this.state.month <= this.smallestMonth) {
            return
        }
        this.setState({
            month: parseInt(this.state.month) - 1,
            year: this.state.year
        })
    }
    nextMonth() {

        if (this.state.month >= this.largestMonth) {
            return
        }
        this.setState({
            month: parseInt(this.state.month) + 1,
            year: this.state.year
        })
    }
    render() {

        const e = React.createElement;
        var keyCount = 0;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var cHeadCols = []
        for (let i = 0; i < 7; i++) {
            var colChild = "";
            if (i == 0) {
                colChild = months[this.state.month - 1]
            }
            if (i == 5 || i == 6) {
                var backGroundColor = ""
                var c = ""
                if (i == 5) {
                    if (this.smallestMonth != this.state.month) {
                        backGroundColor = "red"
                        c = "white"
                    }
                }
                if (i == 6) {
                    if (this.largestMonth != this.state.month) {
                        backGroundColor = "red"
                        c = "white"
                    }
                }
                colChild = e("button", {
                    style: {
                        width: "10px",
                        height: "10px",
                        borderRadius: "5px",
                        border: "solid 0px",
                        backgroundColor: backGroundColor,
                        color: c
                    },
                    key: keyCount,
                    onClick: i == 5 ? this.prevMonth : this.nextMonth
                }, i == 5 ? "<" : ">")
                keyCount += 1;
            }
            var cHeadCol = e("td", { 
            style: {
                fontSize: "15px"
            },
            key: keyCount}, colChild)
            keyCount += 1;
            cHeadCols.push(cHeadCol)
        }
        var cHeadRow = e("tr", {key: keyCount}, cHeadCols)
        keyCount += 1;

        var cHead = e("thead", {key: keyCount}, cHeadRow)
        keyCount += 1;

        var tBodyRows = []


        var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", 'Sat']
        var dayCols = []
        for (let c = 0; c < 7; c++) {


            dayCols.push(e("td", {
                style: {
                    textAlign: "center",
                    padding: 0,
                    fontSize: "15px"
                },
                key: c,
            }, weekDays[c]))
        }

        var dayRow = e("tr", {key: keyCount}, dayCols)
        keyCount += 1;

        tBodyRows.push(dayRow)

        var dates = []
        var dateString = `20${this.state.year}-${this.state.month}-1 00:00:00`;
        var date = new Date(dateString.replace(/-/g, '/'));
        var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        for (let i = 0; i < 6 * 7; i++) {
            if (i >= date.getDay() && i < date.getDay() + daysInMonth) {
                dates.push(i - date.getDay() + 1)
            } else {
                dates.push("")
            }
        }


        var counter = 0

        var eventDates = this.props.dates.split(",")

        var dateRows = []
        for (let r = 0; r < 6; r++) {
            var dateCols = []
            for (let c = 0; c < 7; c++) {
                var color = ""
                if (dates[counter] != "") {
                    var eventDay = `${this.state.month}/${dates[counter]}/${this.state.year}`
                    if (eventDates.includes(eventDay)) {
                        color = "blue"
                    }
                }

                dateCols.push(e("td", {
                    style: {
                        textAlign: "center",
                        padding: 0,
                        color: color
                    },
                    key: keyCount
                }, dates[counter]))

                keyCount += 1;

                counter += 1
            }
            dateRows.push(e("tr", {key: keyCount}, dateCols))
            keyCount += 1;
        }
        tBodyRows.push(...dateRows)

        var cBody = e("tbody", {key: keyCount}, tBodyRows)
        keyCount += 1;

        var tableChild = [cHead, cBody]

        var widthStyle = window.screen.width >= mobileThreshold && "400px" || "200px"
        var sizeStyle = window.screen.width >= mobileThreshold && "25px" || "12px"

        var cTable = e("table", {
            style: {
                tableLayout: "fixed",
                width: widthStyle,
                margin: '0 auto',
                fontSize: sizeStyle
            }
        }, tableChild)
        return cTable
    }
}