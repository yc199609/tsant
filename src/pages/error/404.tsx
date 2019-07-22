import React, { Fragment } from 'react'
import ReactSVG from 'react-svg'
import './style.scss'

const Err404 = ()=>{
    return(
        <Fragment >
            <div className="background">
                <div className="ground"></div>
            </div>
            <div className="container">
                <div className="left-section">
                    <div className="inner-content">
                        <h1 className="heading">404</h1>
                        <p className="subheading">很抱歉，您访问的页面找不到了</p>
                        <p className="index-btn">返回首页</p>
                    </div>
                </div>
                <ReactSVG  className='right-section' src={require('./404.svg') } />
            </div>
        </Fragment>
    )
}
export default Err404