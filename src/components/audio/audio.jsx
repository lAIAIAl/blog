import bgm from '../../assets/audio/Journey.flac'
import { useEffect,useRef,Fragment } from 'react'

import './audio.less'

function Audio(){
    const ref = useRef('sound')
    useEffect(() => {
        setTimeout(() => {
            //ref.current.play().catch(()=>{})
        }, 5000);
    }, [])
    return (
    <Fragment>
        <audio ref={ref} preload="auto" controls="1" loop="1">
            <source src={bgm} type="audio/mp3"/>
        </audio>
    </Fragment>
    )
}
export default Audio