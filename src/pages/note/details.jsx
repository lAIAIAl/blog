import { useState} from "react";

import { decodeQuery } from "../../utils/tools";
import { reqNote } from '../../api/apis';

export default function Details(props){
    const {id} = decodeQuery(props.location.search);
    let [content,setContent] = useState({tag:'',title:'',category:'',create_time:''})
    async function getDetails(){
        let details = await reqNote(id);
        if(document.getElementById("body"))
            document.getElementById("body").innerHTML = details['blog'][0]['notes'];
        let title = details['blog'][0]['title'];
        let category = details['blog'][0]['category'];
        let tag = details['blog'][0]['tag'];
        let create_time = details['blog'][0]['create_time'];
        setContent({
            tag,title,category,create_time
        });
    }
    getDetails()
    return (
        <>
            <div className="context">
                <div className="detail-title">
                    {content.title}
                </div>
                <div className="detail-body">
                    <article id="body">
                    </article>
                </div>
                <p className="detail-foot">
                    <span className="date">{content.create_time}</span>
                    <span>{content.tag}</span>
                    <span>{content.category}</span>
                </p>
            </div>
        </>
    )
}