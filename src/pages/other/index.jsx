
import './other.less'
import list from './list.jsx'
function Other(){
    return(
        <div className="other">
            <h1 className="share-title">一些学习，工具和面试网站的记录</h1>
            <div className="share-list">
                {
                    list.map(function(a){
                        return <div key={a.id}><span>{a.id}.</span><a href={a.href} rel="noreferrer" target="_blank">{a.discription}</a></div>
                    })
                }
            </div>
        </div>
    )
}

export default Other;