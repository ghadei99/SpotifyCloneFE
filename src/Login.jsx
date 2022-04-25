import { Link } from "react-router-dom";
// require('dotenv').config()


const auth_url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENTID}&response_type=code&redirect_uri=${process.env.REACT_APP_FE}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;


const Login = () => {

    return (
        <>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">This is a clone application of spotify developed by Chandra (ch.ghadei@gmail.com). In order to use it, you need a spotify premium profile.</p>
                        <button onClick={auth_url} className="btn btn-primary">
                            <a href={auth_url} >Login</a>
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}


export default Login;