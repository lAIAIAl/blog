import './header.less'

function Header(props){
    return (
        <h1 className="css-jump">
            {
                props.title.split('').map(function(k){
                    return (<span key={k}>{k}</span>)
                })
            }    
        </h1>
    )
}

export default Header;