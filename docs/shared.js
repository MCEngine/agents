document.addEventListener("DOMContentLoaded", () => {
    // Read data-root-path from the body tag to determine directory depth
    const rootPath = document.body.getAttribute("data-root-path") || "";

    // Load Header dynamically
    fetch(rootPath + "header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            
            // Adjust link paths in the header to match the current directory level
            document.querySelectorAll("#header-placeholder a").forEach(link => {
                let href = link.getAttribute("href");
                // Prevent modifying external URLs
                if(href && !href.startsWith("http")) {
                    link.setAttribute("href", rootPath + href);
                }
            });
        })
        .catch(err => console.error("Failed to load header:", err));

    // Load Footer dynamically
    fetch(rootPath + "footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(err => console.error("Failed to load footer:", err));
});
