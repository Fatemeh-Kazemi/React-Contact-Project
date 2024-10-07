import {Link} from "react-router-dom";
import Contact from "./Contact";
import Spinner from "../Spinner";

import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";

const Contacts = ({ contacts, loading, confirmDelete }) => {
  return (
    <div className="container">
      <section>
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end">
                <Link to={"add"} className="btn m-2" style={{ background: PINK }}>
                  ایجاد مخاطب جدید
                  <i className="fa fa-plus-circle mx-2"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="row">
            {contacts && contacts.length > 0 ? (
              contacts.map((c) => <Contact key={c.id} contact={c} confirmDelete={()=>confirmDelete(c.id, c.fullname)} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ background: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب یافت نشد ...
                  <img
                    className="w-25"
                    src={require("../../assets/not.png")}
                    alt=""
                  />
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
export default Contacts;
