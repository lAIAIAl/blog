import './footer.less'

function Footer(){
    let current_year = new Date().getFullYear()
    return (
        <footer className="footer">
            <span>2020-{current_year}&nbsp;&nbsp;版权所有&nbsp;&nbsp;alaiala.com&nbsp;&nbsp;</span>
            <a rel="noreferrer" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">苏ICP备2020066631号</a>
        </footer>
    )
}
export default Footer;