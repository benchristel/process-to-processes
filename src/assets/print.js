window.matchMedia("print").addEventListener("change", evt => {
  if (evt.matches) {
      elms = document.body.querySelectorAll("details:not([open])");
      for (e of elms) {
          e.setAttribute("open", "");
          e.dataset.wasclosed = "";
      }
  } else {
      elms = document.body.querySelectorAll("details[data-wasclosed]");
      for (e of elms) {
          e.removeAttribute("open");
          delete e.dataset.wasclosed;
      }
  }
})