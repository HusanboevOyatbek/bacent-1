

function ComCard(props){
    return(
        <div className="">
                <h2 className="statictic__h2">
                {props.name}
            </h2>
            <p className="statictic__p">
                {props.phref}
            </p>
        </div>
    )
}

export default ComCard;



