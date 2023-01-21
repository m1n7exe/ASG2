import Nav from '../components/Nav'
const Home = () => {

    const authToken = true

    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <>
        <Nav/>
        <div className="Home">
            <h1>Meet your Duo</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Sign Out' : "Create Account"} </button>
        </div>
        </>
    )
}
export default Home