const MediaQueries = (() => {
  const minWidth640px = window.matchMedia("(min-width: 640px)");

  minWidth640px.onchange = () => {
    window.location.reload();
  };

  return { minWidth640px };
})();

export default MediaQueries;
