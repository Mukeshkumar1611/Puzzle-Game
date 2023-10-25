document.getElementById("getCustomPicture").addEventListener("click", function () {
    const fileInput = document.getElementById("file-input");
    const selectedFile = fileInput.files[0];

    console.log(selectedFile);

    if (!selectedFile) 
    {
        alert("No file selected. Please choose a picture.");
    } 
    else if (!selectedFile.type.startsWith("image/")) 
    {
        alert("The selected file is not a picture. Please choose an image file.");
    }
    else 
    {
        const blob = new Blob([selectedFile], { type: selectedFile.type }); 

        // Store the Blob in sessionStorage as a Base64 string
        

        // Redirect to "index.html" or perform any other action
        window.location.href = "index.html";
    }
});

// Function to handle redirect to a page with a random picture
document.getElementById("getRandomPicture").addEventListener("click", function () {
    // Redirect to a page that displays a random image
    window.location.href = "index.html";
});