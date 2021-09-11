import React from "react";
import { Formik } from "formik";

import TodoModalBody from "./TodoModalBody";
import GeneralModal from "./GeneralModal";

const UpdateTodoFormModal = ({
  initialValues,
  onSubmit,
  openModal,
  onClose,
  onCancel,
  headerText,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <GeneralModal
          open={openModal}
          body={<TodoModalBody values={values} handleChange={handleChange} />}
          onClose={onClose}
          cancelHandler={onCancel}
          saveHandler={() => {
            handleSubmit();
            onCancel();
          }}
          headerText={headerText}
        />
      )}
    </Formik>
  );
};

export default UpdateTodoFormModal;
