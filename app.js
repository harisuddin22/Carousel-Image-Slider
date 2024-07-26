    let imageSrc = [
        "assets/1.jpg",
        "assets/2.jpg",
        "assets/3.jpg",
        "assets/4.jpg"
    ];

    let currentIndex = 0;

    let image = document.getElementById("slider-image");

    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    next.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= imageSrc.length) {
            currentIndex = imageSrc.length - 1;
        }

        image.src = imageSrc[currentIndex];
    });

    prev.addEventListener("click" , () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        image.src = imageSrc[currentIndex];

    });