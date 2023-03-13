import React from 'react'
import "./work.scss"
export default function Work() {
    return (
        <div className="work" id="work">
        <div className="slider">
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/mobile.png" alt=""/>
                            </div>
                            
                        <h2>Title</h2>
                        <p>This character description generator will generate imply click again to get a new one.</p>
                        <span>Prodjects</span>
                        </div>
                    </div>
                    <div className="right">
                    <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" />
        <img src="assets/arrow.png" className="arrow right" alt="" />
        </div>
    )
}
