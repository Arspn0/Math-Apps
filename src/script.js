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

function calculateInverse() {
    const matrix = [];
    // Get values from inputs
    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        for (let j = 0; j < 3; j++) {
            const value = document.getElementById(`m${i}${j}`).value;
            matrix[i][j] = parseFloat(value);
        }
    }

    // Create identity matrix
    const identity = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    // Perform OBE to find inverse
    for (let i = 0; i < 3; i++) {
        const diag = matrix[i][i];
        if (diag === 0) {
            alert("Matriks tidak dapat dibalik (determinannya 0).");
            return;
        }
        for (let j = 0; j < 3; j++) {
            matrix[i][j] /= diag;
            identity[i][j] /= diag;
        }

        for (let k = 0; k < 3; k++) {
            if (k !== i) {
                const factor = matrix[k][i];
                for (let j = 0; j < 3; j++) {
                    matrix[k][j] -= factor * matrix[i][j];
                    identity[k][j] -= factor * identity[i][j];
                }
            }
        }
    }

    // Display the result
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`r${i}${j}`).textContent = identity[i][j].toFixed(2);
        }
    }
}
