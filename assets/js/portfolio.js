
    /*::::::::::::::::::::::::::::::::::::
       Portfolio Section - Recent Work
    ::::::::::::::::::::::::::::::::::::*/
document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".portfolio-filter button");
    const items = document.querySelectorAll(".portfolio-item");

    // ✅ 👉 YAHAN ADD KARO (page load pe sirf 6 items dikhane ke liye)
    items.forEach((item, index) => {
        item.style.display = (index < 9) ? "block" : "none";
    });

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const countDisplay = document.querySelector(".count-display");
    
    let currentIndex = 0;
    let currentGallery = [];

    // --- 1. Filter Logic ---
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-filter");
            items.forEach((item, index) => {

                if (category === "all") {
                    // 👉 sirf 6 items dikhaye
                    item.style.display = (index < 9) ? "block" : "none";
                } 
                else if (item.classList.contains(category)) {
                    item.style.display = "block";
                } 
                else {
                    item.style.display = "none";
                }

            });
        });
    });

    // --- 2. Lightbox Slide Logic ---
    function openLightbox(index) {
        // Only slide through currently visible images
        currentGallery = Array.from(items).filter(item => item.style.display !== "none");
        currentIndex = index;
        
        updateImage();
        lightbox.style.display = "flex";
    }

    function updateImage() {
        const imgElement = currentGallery[currentIndex].querySelector("img");
        lightboxImg.src = imgElement.src;
        countDisplay.innerHTML = `${currentIndex + 1} / ${currentGallery.length}`;
    }

    // Attach click to items
    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            const visibleItems = Array.from(items).filter(i => i.style.display !== "none");
            const newIndex = visibleItems.indexOf(item);
            openLightbox(newIndex);
        });
    });

    // Navigation Events
    document.querySelector(".next-arrow").onclick = () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        updateImage();
    };

    document.querySelector(".prev-arrow").onclick = () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        updateImage();
    };

    document.querySelector(".close-btn").onclick = () => {
        lightbox.style.display = "none";
    };

    // Close on clicking outside the image
    lightbox.onclick = (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    };
});

  /*::::::::::::::::::::::::::::::::::::
       Poetfolio End
    ::::::::::::::::::::::::::::::::::::*/
