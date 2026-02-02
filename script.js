// Modal functionality for PDF viewing
function openModal(type) {
  const modal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");
  const downloadBtn = document.getElementById("downloadBtn");

  let pdfSrc = "";
  let downloadHref = "";

  if (type === "cv") {
    pdfSrc = "./pdf/Cv Ali Clarens.pdf";
    downloadHref = "./pdf/Cv Ali Clarens.pdf";
  } else if (type === "stage1") {
    pdfSrc = "./pdf/Rapport de stage Ali Clarens.pdf";
    downloadHref = "./pdf/Rapport de stage Ali Clarens.pdf";
  } else if (type === "stage2") {
    pdfSrc = "./pdf/Rapport de stage Ali Clarens 2eme année.pdf";
    downloadHref = "./pdf/Rapport de stage Ali Clarens.pdf";
  }

  pdfViewer.src = pdfSrc;
  downloadBtn.href = downloadHref;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("pdfModal");
  modal.style.display = "none";
  // Clear src to stop loading
  document.getElementById("pdfViewer").src = "";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("pdfModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Function to download the synthesis sheet
function downloadSynthesis() {
  const synthesisImage = document.getElementById("synthesisImage");
  const link = document.createElement("a");
  link.href = synthesisImage.src;
  link.download = "Ma-Fiche-de-Synthese-E5.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
