import { PURPLE, COMMENT } from "../../helpers/colors"

const SearchContact = ({query, search}) => {
  return (
    <div className="input-group mx-2" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ background: PURPLE }}
      >
        <i className="fa fa-search"></i>
      </span>
      <input
        type="text"
        dir="rtl"
        value={query.text}
        onChange={search}
        style={{ background: COMMENT, borderColor: PURPLE }}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-aria-describedby="basic-addon1"
      />
    </div>
  );
};
export default SearchContact;
