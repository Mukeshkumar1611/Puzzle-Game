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

        // Convert the Blob to a Base64 string
        const reader = new FileReader();
        reader.onload = function () {
            const base64String = reader.result;

                // Store the Base64 string in sessionStorage
            sessionStorage.setItem("image", base64String);

                // Redirect to "index.html" or perform any other action
            window.location.href = "game.html";
        };
        
        reader.readAsDataURL(blob);
    }
});

// Function to handle redirect to a page with a random picture
document.getElementById("getRandomPicture").addEventListener("click", function () {
    // Redirect to a page that displays a random image
    window.location.href = "game.html";
});