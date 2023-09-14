import { forwardRef, memo } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import { groups } from "../../data/groups";

import "./FormModal.css";

const StudentForm = forwardRef(
  ({ student, handleStudent, handleSubmit, validated }, ref) => {
    console.log("StudentForm");
    return (
      <Form className="form-student" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="my-3 form-title" controlId="firstName">
          <Form.Label>name</Form.Label>
          <Form.Control
            ref={ref}
            onChange={handleStudent}
            value={student.firstName}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3 form-title" controlId="age">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={student.age}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3 form-title" controlId="group">
          <Form.Label>Category:</Form.Label>
          <Form.Select onChange={handleStudent} value={student.group}>
            {groups.map( ( gr ) => (
              <option key={gr} value={gr}>
                {gr}
              </option>
            ) )}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3 form-title" controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={student.Price}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-3 form-title" controlId="lastName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={student.lastName}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3 w-100" type="submit">
          Add
        </Button>
      </Form>
    );
  }
);

StudentForm.displayName = "StudentForm";

StudentForm.propTypes = {
  student: PropTypes.object,
  handleStudent: PropTypes.func,
  handleSubmit: PropTypes.func,
  validated: PropTypes.bool,
};

const MemoStudentForm = memo(StudentForm);

export default MemoStudentForm;

// forwardRef((props, ref) => {
//   return <div>
//   </div>
// })
