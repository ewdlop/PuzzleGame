import React from 'react';
import './Home.css';

const Imagines = [
    'https://d2jv9003bew7ag.cloudfront.net/uploads/Geometric-Forms-in-Art.-Image-via-thevirtualinstructor.com_.jpg',
    'https://th.bing.com/th/id/OIP.MJZzNhNtntF4kquZ9rEK-gHaFC?pid=Api&rs=1',
    'http://1.bp.blogspot.com/-zrz4QqkqVfg/UyK67CHzm7I/AAAAAAAAbns/NhuZLQ_eloc/s1600/3D+Shapes+Wallpapers+(1).jpg',
    'https://i.ytimg.com/vi/dzt6bfbl0i4/maxresdefault.jpg',
    'https://i.pinimg.com/originals/72/b6/db/72b6db308dcbdd82e3e2904b7e2d4d62.png',
    'https://img.freepik.com/free-photo/3d-depth-realism-background-3d-rendering_9941-215.jpg?size=626&ext=jpg',
    'https://introspecs.com/wp-content/uploads/2013/07/folded6.jpg',
    'https://benedikt-bitterli.me/images/tungsten/teapot.png',
    'http://www.mettle.com/wp-content/uploads/2015/03/mettle-shapeshifter-1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/BallsRender.png',
    'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/shape-and-shadow-tom-mc-nemar.jpg',
    'https://www.pufferbelliestoys.com/components/com_virtuemart/shop_image/product/full/optical_ill_35dbc8013085bc.jpg'
]

const HomeMasonary: React.FC = () => {

    return (
        <div className="masonry">{
                Imagines.map((imagine, key) => {
                    return (
                    <div key={key} className="item">
                        <img src={imagine} />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div>)
                })}
        </div>
    )
}

export default HomeMasonary;
