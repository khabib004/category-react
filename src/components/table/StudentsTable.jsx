import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentsTable = ({ students }) => {
  console.log("StudentTable");
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {students.length ? (
          students.map((student, i) => (
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.age}</td>
              <td>{student.group}</td>
              <td>{student.Price}</td>
              <td>{student.lastName}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              No students
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

StudentsTable.propTypes = {
  students: PropTypes.array,
};

const MemoStudentsTable = memo(StudentsTable);

export default MemoStudentsTable;
