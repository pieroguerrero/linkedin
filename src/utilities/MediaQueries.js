import { showResponsiveWarning } from "./ToastUtil";

const MediaQueries = (() => {
  let showMessage = true;

  window.onresize = () => {
    const innerWidth = window.innerWidth;

    if (innerWidth <= 640 && showMessage) {
      showResponsiveWarning();
      showMessage = false;
      return;
    }

    if (innerWidth > 640) {
      showMessage = true;
    }
  };

  const minWidth640px = window.matchMedia("(min-width: 640px)");
  return { minWidth640px };
})();

export default MediaQueries;
