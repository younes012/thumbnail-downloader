// script.js
document.addEventListener("DOMContentLoaded", function () {
  const getThumbnailsButton = document.getElementById("getThumbnailsButton");
  getThumbnailsButton.addEventListener("click", showThumbnailOptions);

  function showThumbnailOptions() {
    const videoLink = document.getElementById("videoLink").value;
    const videoId = videoLink.match(/v=([^&]+)/)[1];
    const thumbnailOptions = document.getElementById("thumbnailOptions");
    thumbnailOptions.style.display = "block";

    const thumbnailImageMaxRes = document.createElement("img");
    thumbnailImageMaxRes.id = "thumbnailImageMaxRes";
    thumbnailImageMaxRes.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const downloadButtonMaxRes = document.createElement("a");
    downloadButtonMaxRes.className = "download-button";
    downloadButtonMaxRes.href = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    downloadButtonMaxRes.setAttribute("download", "thumbnail-max-res.jpg");
    downloadButtonMaxRes.innerText = "Download Thumbnail";

    const thumbnailOptionMaxRes = document.createElement("div");
    thumbnailOptionMaxRes.className = "thumbnail-option";
    thumbnailOptionMaxRes.appendChild(document.createElement("h2")).innerText = "Max Resolution (1280x720)";
    thumbnailOptionMaxRes.appendChild(thumbnailImageMaxRes);
    thumbnailOptionMaxRes.appendChild(downloadButtonMaxRes);

    thumbnailOptions.innerHTML = "";
    thumbnailOptions.appendChild(thumbnailOptionMaxRes);

    // Add more thumbnail options for other qualities if needed
  }
});
