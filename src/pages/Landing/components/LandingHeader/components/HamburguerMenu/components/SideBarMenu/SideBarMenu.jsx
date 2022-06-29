import { PopUpPortal } from "../../../../../../../../components/PopUpPortal";

/**
 *
 * @param {object} props
 * @param {function(object): void} props.handleClose
 * @returns {JSX.Element}
 */
const SideBarMenu = ({ handleClose }) => {
  return (
    <PopUpPortal strBackground="white">
      <div className=" w-full h-full flex justify-center items-center flex-col">
        {/* //TODO: finish the popup like the on in linkedin */}
        <button type="button" onClick={handleClose}>
          Close
        </button>
        <p>Hola</p>
      </div>
    </PopUpPortal>
  );
};

export { SideBarMenu };
