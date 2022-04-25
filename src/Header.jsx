

const Header = () => {
    return (
        <>
            <div className="navbar shadow-2xl shadow-blue-500/60 bg-gray-500">
                <div className="flex-1">
                    <div className="flex-1 text-base font-extrabold text-blue px-0 mx-2">Chandra's Spotify</div>
                </div>
                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={process.env.REACT_APP_IMAGELINK} />
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a href="https://www.linkedin.com/in/chandrakanta-ghadei-79b5b11a3">My Linkedin</a></li>
                            <li><a href="https://www.instagram.com/chandrakantaghadei/">My Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;