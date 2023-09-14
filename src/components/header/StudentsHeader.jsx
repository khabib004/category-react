import { memo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const StudentsHeader = ({ search, handleSearch, averageAge }) => {
  console.log("StudentHeader");
  return (
    <header>
      <InputGroup className="my-3">
        <Form.Control
          value={search}
          onChange={handleSearch}
          placeholder="Search students..."
        />
        <InputGroup.Text id="basic-addon2">{averageAge}</InputGroup.Text>
      </InputGroup>
    </header>
  );
};

StudentsHeader.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  averageAge: PropTypes.number,
};

const MemoStudentsHeader = memo(StudentsHeader);

export default MemoStudentsHeader;
