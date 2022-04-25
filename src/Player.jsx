import { useEffect, useState } from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback';




const SpotifyPlayer = ({ accessToken, uri }) => {
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        setIsPlay(true)
    }, [uri])

    if (!accessToken || !uri) return null

    return (
        <>
            <div
                className={isPlay ? 'player-show' : 'player-hide'}
            >
                <SpotifyWebPlayer
                    styles={{
                        sliderHeight: 25,
                        height: 50,
                        activeColor: '#fff',
                        bgColor: '#2F4F4F',
                        color: '#fff',
                        loaderColor: '#fff',
                        sliderColor: '#FF1493',
                        trackArtistColor: '#ccc',
                        trackNameColor: '#fff',
                    }}
                    locale
                    token={accessToken}
                    play={true}
                    showSaveIcon
                    callback={state => {
                        if (!state.isPlaying) setIsPlay(false)
                    }}
                    name="Chandra's Music"
                    initialVolume='5'
                    uris={uri}

                />
            </div>

        </>
    )
}

export default SpotifyPlayer;