document.addEventListener("DOMContentLoaded", function () {
    const typingElements = document.querySelectorAll(".typing-effect");

    typingElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = ""; // Kosongkan teks awal
        element.style.width = "0"; // Mulai dari lebar 0

        setTimeout(() => {
            element.style.animation = `typing 3s steps(${text.length}, end) ${index * 2}s forwards, blink-caret 0.75s step-end infinite`;
            element.textContent = text; // Tampilkan teks
        }, index * 1000); // Delay untuk setiap elemen
    });
});