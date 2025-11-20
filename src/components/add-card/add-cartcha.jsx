function Services(pro) {
    return(
        <div class="col-md-6 col-lg-4 service-item">
            <div class="icon"><img className="imgphone" src="https://cdn-icons-png.freepik.com/256/11731/11731750.png?semt=ais_white_label" alt="" /><i class="bi bi-briefcase"></i></div>
            <h4>{pro.brend}</h4>
            <p>{pro.textp}</p>
        </div>
    )
}

export default Services;