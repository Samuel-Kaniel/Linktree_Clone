const shareButtons = document.querySelectorAll(".tile-share-button");


async function copyText(e) {
  // prevent button going to the site
  e.preventDefault();
  const link = this.getAttribute("link");
  // console.log(link);

  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (error) {
    console.error(error);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
