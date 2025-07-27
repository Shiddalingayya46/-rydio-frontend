import Navbar from "../navbar/Navbar";

const Home = () => {
    console.log("object");
    const cont = "This is Dummy Content";
    const shid = " This is my name "



    return (
        <div >
            <Navbar text={"Hello Siddu"} content={cont} shiddu={shid} />
        </div>
    )
}
export default Home;