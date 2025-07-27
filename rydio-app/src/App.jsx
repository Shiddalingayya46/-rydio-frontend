import "./App.css"
function App() {

  const userNames = [
    { name: "manju", phnoneNumber: "09876545678" },
    { name: "akshay", phnoneNumber: "09876545678" },
    { name: "sagar", phnoneNumber: "09876545678" },
    { name: "akash", phnoneNumber: "09876545678" },
    { name: "hadsu", phnoneNumber: "09876545678" },
    { name: "hadsu", phnoneNumber: "09876545678" },
    { name: "hadsu", phnoneNumber: "09876545678" },
    { name: "hadsu", phnoneNumber: "09876545678" },
  ]
  return (

    // < div className="parent">
    //   <div className="child">Hello World</div>
    //   <div className="child">Hello World</div>
    //   <div className="child">Hello World</div>
    //   <div className="child">Hello World</div>
    //   <div className="child">Hello World</div>
    //   <div className="arr">

    <div className="parent">
      {
        userNames.map((x) => {
          return (
            <div className="child">
              <h1>
                {x.name}
              </h1>
              <br />
              <h1>{x.phnoneNumber}</h1>
            </div>
          )
        })
      }
      {/* </div>
      </div> */}
    </div >
  )
}

export default App;
