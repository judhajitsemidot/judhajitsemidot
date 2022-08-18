import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
export const GlobalModal = React.forwardRef(
  (
    {
      isOpen,
      dialogClassName,
      modalTitle,
      modalClassName,
      headerClassName,
      isCloseButtonDisplay,
      isHeaderDisplay,
      isBodyDisplay,
      isFooterDisplay,
      children,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      isOpen && handleOpen();
    });

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      rest.onModalClose && rest.onModalClose(true);
    };

    return (
      <Modal
        dialogClassName={dialogClassName || ""}
        className={modalClassName || ""}
        show={open}
        onHide={handleClose}
        id={rest.id}
      >
        {isCloseButtonDisplay && (
          <button
            onClick={handleClose}
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="bi bi-x"></i>
          </button>
        )}
        {isHeaderDisplay && (
          <Modal.Header className={headerClassName}>
            <>
              {modalTitle && (
                <h5 className="title3 initial-text">{modalTitle}</h5>
              )}
            </>
          </Modal.Header>
        )}
        {(isBodyDisplay || true) && <Modal.Body>{children}</Modal.Body>}
        {(isFooterDisplay || false) && <Modal.Footer></Modal.Footer>}
      </Modal>
    );
  }
);
GlobalModal.displayName = "GlobalModal";
