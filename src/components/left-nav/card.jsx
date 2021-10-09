import {useEffect,useState} from 'react'
import { withRouter} from 'react-router-dom';
import React from 'react';
import avator from '../../assets/img/avator.jpg'

function Card(){
    const [categories,setCategories] = useState(0)
    const [notes,setNotes] = useState(0)
    const [tags,setTags] = useState(0)
    useEffect(() => {
        let {categories,notes,tags} = {categories:10,notes:178,tags:33}
        setCategories(categories)
        setNotes(notes)
        setTags(tags)
    }, [])
    return (
    <div className="blogger-info">
        <img src={avator} alt=""/>
        <span className="blogger-name">还没想好叫什么</span>
        <span className="blogger-discription">咸鱼程序员</span>
        <nav className="statistics">
            <div>
                <div><span>{notes}</span><span>文章</span></div>
            </div>
            <div>
                <div><span>{categories}</span><span>分类</span></div>
            </div>
            <div>
                <div><span>{tags}</span><span>标签</span></div>
            </div>
        </nav>
    </div>)
}

export default React.memo(withRouter(Card));
