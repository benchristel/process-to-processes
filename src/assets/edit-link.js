window.addEventListener("load", () => {
  editLink = document.getElementById("edit-link")
  if (editLink == null) {
    return;
  }

  editLink.innerText = "[Edit this page]"
  editLink.setAttribute(
    "href",
    "https://github.com/benchristel/process-to-processes/edit/main/src"
      + inputFilePath(outputFilePath(window.location.pathname)),
  )
})

function outputFilePath(urlPath) {
  if (urlPath.endsWith("/")) {
    return urlPath + "index.html"
  }
  return urlPath
}

function inputFilePath(outputFilePath) {
  return outputFilePath.replace(/\.html$/, ".md")
}