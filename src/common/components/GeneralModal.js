import React from "react";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "../../icons/CloseIcon";

import StyledButton from "./Button";
import "./generalModal.scss";

const GeneralModal = ({
  open = false,
  onClose = () => {},
  header,
  body,
  headerText = "",
  cancelButtonText = "Cancel",
  saveButtonText = "Save",
  cancelHandler = () => {},
  saveHandler = () => {},
}) => {
  return (
    <Modal open={open} onClose={onClose} className="modal-container">
      <div className="general-modal">
        <div className="general-modal-header">
          <Typography
            variant="h6"
            className="modal-header-text margin-vertical"
          >
            {headerText}
          </Typography>
          <span className="modal-close-icon" onClick={onClose}>
            <CloseIcon />
          </span>
        </div>
        {body}
        <div className="general-modal-footer">
          <StyledButton
            variant="outlined"
            disableElevation
            // color="secondary"
            onClick={cancelHandler}
            className="margin-horizontal"
          >
            {cancelButtonText}
          </StyledButton>
          <StyledButton
            variant="contained"
            disableElevation
            color="primary"
            onClick={saveHandler}
            className="margin-horizontal"
          >
            <span>{saveButtonText}</span>
          </StyledButton>
        </div>
      </div>
    </Modal>
  );
};

export default GeneralModal;
