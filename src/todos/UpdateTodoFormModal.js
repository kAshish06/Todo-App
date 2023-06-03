import React from "react";
import { Formik } from "formik";

import GeneralModal from "../common/components/GeneralModal";

const UpdateTodoFormModal = ({
  initialValues,
  onSubmit,
  openModal,
  onClose,
  onCancel,
  headerText,
  body,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <GeneralModal
          open={openModal}
          body={body(values, handleChange)}
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
