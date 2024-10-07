import {Link} from "react-router-dom";

import {RED, ORANGE, CYAN, PURPLE, CURRENTLINE} from "../../helpers/colors"

const Contact = ({contact, confirmDelete}) =>{
    return(
        <>
        <div className="col-md-6">
            <div className="card my-2" style={{ background: CURRENTLINE }}>
              <div className="card-body">
                <div className="row align-items-center d-flex justify-content-evenly text-align-center">
                  <div className="col-md-4 col-sm-4">
                    <img
                      className="img-fluid rounded"
                      src={contact.photo || "https://placehold.co/150"}
                      style={{width: "150px" ,height: "150px" , border: `1px solid ${PURPLE}` }}
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 col-sm-7">
                    <ul className="list-group">
                        <div className="list-group-item list-group-item-dark">
                            نام و نام خانوادگی: {" "}
                            <span className="fw-bold">
                                {contact.fullname}
                            </span>
                        </div>
                        <div className="list-group-item list-group-item-dark">
                            شماره موبایل: {" "}
                            <span className="fw-bold">
                                {contact.mobile}
                            </span>
                        </div>
                        <div className="list-group-item list-group-item-dark">
                            آدرس ایمیل {" "}
                            <span className="fw-bold">
                                {contact.email}
                            </span>
                        </div>
                    </ul>
                  </div>
                  <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                    <Link to={`${contact.id}`} className="btn my-1" style={{background: ORANGE}}>
                        <i className="fa fa-eye"></i>
                    </Link>
                    <Link to={`edit/${contact.id}`} className="btn my-1" style={{background: CYAN}}>
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button onClick={confirmDelete} className="btn my-1" style={{background: RED}}>
                        <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default Contact