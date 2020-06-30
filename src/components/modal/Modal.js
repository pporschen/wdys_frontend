import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Login from "./Login";
import Signup from "./Signup";
import DeleteProject from "./DeleteProject";
import RemoveTranslator from "./RemoveTranslator";
import AssignTranslator from "./AssignTranslator";
import "./Modal.css";
import ModalContext from "../../contexts/ModalContext";

const Modal = () => {
  const { setModal, setModalOption, modalOption } = useContext(ModalContext);

  const modalBkgImg = () => {
    if (modalOption === 3 || modalOption === 4 || modalOption === 5) {
      return "none";
    }
  };

  console.log({ theOption: modalOption });
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className={`modal-contain ${modalBkgImg()}`}>
          <div className="login-head">
            <CloseIcon
              onClick={() => {
                setModal(0);
                setModalOption(1);
              }}
              style={{ cursor: "pointer", color: "#ffffff" }}
            />
          </div>

          {(() => {
            switch (modalOption) {
              case 1:
                return <Login />;
              case 2:
                return <Signup />;
              case 3:
                return <DeleteProject />;
              case 4:
                return <RemoveTranslator />;
              case 5:
                return <AssignTranslator />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
