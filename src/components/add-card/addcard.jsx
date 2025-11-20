import Btn from "./btn";

function Addcard(cardd){
    return(
        <div className="card">
            <img
                src="https://avatars.mds.yandex.net/i?id=58fd29d2834e768a3d85c66c2c33ab3e5cf5914f-8356382-images-thumbs&n=13"
                alt=""
            />

            <div className="card-top">
                <button className="tag">Web Design</button>
                <span className="rating">⭐ 4.8</span>
            </div>

            <h1 className="card-title">{cardd.name}</h1>

            <p className="card-desc">{cardd.discripshn}</p>

            <div className="card-bottom">
                
                <Btn/>
                <Btn />
                <Btn />
                
            </div>
        </div>
    )
}

export default Addcard;