import { useEffect, useState } from "react"
import SpotifyPlayer from "./Player.jsx"

const SearchedItem = ({ searchedText, accessToken }) => {
    const [uri, setUri] = useState('')
    const [uriToSend, setUriToSend] = useState('')
    const play = (value) => {
        setUri(value)
    }

    useEffect(() => {
        setUriToSend(uri)
    }, [uri])

    return (
        <>
            <div className="containers">
                {/* <div className="min-h-screen "> */}
                {/* <div className="z-0 w-full"> */}
                <ul className="first">
                    {searchedText.map((texts, index) => (
                        <li key={index}>
                            <div className="ml-4 my-4 bg-base-200 card lg:card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img src={texts.albumImage.url} alt="Music" style={{ height: "250px", width: "250px" }}></img>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{texts.title}</h2>
                                    <p>{texts.artist}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => play(texts.uri)} className=" bg-gradient-to-r from-red-400 via-slate-500 to-yellow-500 btn btn-lg btn-primary">Listen</button>
                                    </div>
                                </div>
                            </div>

                        </li>

                    ))}
                </ul>

                {/* </div> */}
                {/* </div> */}
                <div className="player-fix">
                    {uri ?
                        <div className="z-10 player ml-4 mr-4 w-11/12">
                            <SpotifyPlayer accessToken={accessToken} uri={uriToSend} />
                        </div> :
                        ''}
                </div>
            </div>
        </>
    )
}

export default SearchedItem;