import { useState ,useEffect} from 'react';
import { reqNotes } from '../../api/apis';
import { Link } from 'react-router-dom';
import {formatTime} from '../../utils/tools';

import './note.less';

function Home(){
    let [list,setList] = useState([]);
    async function getList(){
        let noteList = await reqNotes();
        setList(noteList['blog']);
    }
    useEffect(() => {
        getList();
    }, [])
    return(
        <div className="note">
            <h1 className="note-title">最近文章</h1>
            {
                list.map(function(note){
                    //return (<Link key={note.id} to={'/note/details?id='+note.id+'&tag='+note.tag+'&category='+note.category+'&title='+note.title} ><p className="note-list">{formatTime(note.create_time)}:{note.title}</p></Link>)
                    return (<Link key={note.id} to={'/note/details?id='+note.id} ><p className="note-list">{formatTime(note.create_time)}:{note.title}</p></Link>)
                })
            }
        </div>
    )
}

export default Home;