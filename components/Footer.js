var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
  textAlign: "center",
}

function Footer() {
    return (
        // <div>
        //     <div style={phantom} />
        //     <div style={style}>
        //         <p>&copy; CompSci Kids | Created by Ashay and Ronit</p>
        //     </div>
        // </div>
        <div className="footer">
            <p>&copy; CompSci Kids | Created by Ashay and Ronit</p>
        </div>
    )
}

export default Footer
