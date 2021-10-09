import { NavLink ,withRouter} from 'react-router-dom';
import Card from './card'
import './nav.less';

function Leftnav(){
    return (
        <div className="left-nav">
            <ul>
                <li><NavLink to='/home'>主页</NavLink></li>
                <li><NavLink to='/note'>笔记</NavLink></li>
                <li><NavLink to='/introduction'>介绍</NavLink></li>
                {/* <li><NavLink to='/about'>关于</NavLink></li> */}
                <li><NavLink to='/other'>其他</NavLink></li>
                <li><NavLink to='/search'>查找</NavLink></li>
            </ul>
            <Card>
            </Card>
        </div>
    )
}

export default withRouter(Leftnav);