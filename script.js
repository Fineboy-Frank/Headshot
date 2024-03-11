window.onload = function() {
    // Get the container for the gallery
    var gallery = document.getElementById('gallery');
    
    // Array to store image file names
    var imageFiles = [
        "image (5).jpg",
        "image (2).jpg",
        "image (3).jpg",
        "image (7).jpg",
        "image (8).jpg",
        "image (9).jpg",
        "image (10).jpg",
        "image (12).jpg",
        "image (15).jpg",
        "image (18).jpg",
        "image (29).jpg",
        "image (30).jpg",
        "image (36).jpg",
        "image (37).jpg",
        "image (38).jpg",
        "image (40).jpg",
        "image (42).jpg",
        "image (43).jpg",
        "image (47).jpg",
        "image (48).jpg",
        "image (50).jpg",
        "image (52).jpg"
        

        // Add more image file names as needed
    ];

    // Loop through the image files and create img elements
    imageFiles.forEach(function(imageFile) {
        // Create img element
        var img = document.createElement('img');
        // Set src attribute
        img.src = "img/" + imageFile; // Assuming images are in the "img" folder
        // Create div for the gallery item
        var galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        // Append img to gallery item
        galleryItem.appendChild(img);
        // Append gallery item to the gallery container
        gallery.appendChild(galleryItem);
    });
};