document.addEventListener("DOMContentLoaded", () => {
    // Read data-root-path from the body tag to determine directory depth
    const rootPath = document.body.getAttribute("data-root-path") || "";

    // Load Footer dynamically
    fetch(rootPath + "footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(err => console.error("Failed to load footer:", err));
});
