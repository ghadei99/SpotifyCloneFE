import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from 'spotify-web-api-node';
import SearchedItem from "./SearchedItem.jsx";
import Login from "./Login.jsx";


const Dashboard = ({ code }) => {
    const [text, setText] = useState('')
    const accessToken = useAuth(code)
    const [searchedText, setSearchedText] = useState([])

    const onTextChange = (e) => {
        e.preventDefault();
        setText(e.target.value)
    }
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.REACT_APP_CLIENTID,
    })


    let flag = false;

    useEffect(() => {
        if (!accessToken) return
        if (!text) return
        spotifyApi.setAccessToken(accessToken)
        if (flag) return
        spotifyApi.searchTracks(`${text}`)
            .then((data) => {
                setSearchedText(
                    data.body.tracks.items.map(track => {

                        const image = track.album.images.filter((img) => {
                            return img.height === 300;
                        })

                        return {
                            artist: track.artists[0].name,
                            title: track.name,
                            uri: track.uri,
                            albumImage: image[0]
                        }
                    })
                )
            })
            .catch((e) => {
                console.log('error is :- ', e)
            })


        return () => flag = true;

    },
        [text, accessToken])

    return (
        <>
            <div className="m-5 form-control">
                <div className="input-group">
                    <input onChange={onTextChange} type="text" placeholder="Search…" className="w-4/5 input-bordered input-accent input input-bordered"></input>
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <SearchedItem accessToken={accessToken} searchedText={searchedText} />
        </>
    )
}

export default Dashboard;