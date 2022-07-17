import { showResponsiveWarning } from "./ToastUtil";

const MediaQueries = (() => {
  const minWidth640px = window.matchMedia("(min-width: 640px)");

  minWidth640px.onchange = () => {
    showResponsiveWarning();
  };

  return { minWidth640px };
})();

export default MediaQueries;
