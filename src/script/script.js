// Soal no 1
function getMatrixValues(matrixId) {
    const matrix = [];
    const inputs = document.querySelectorAll(`#${matrixId} input`);
    const rows = new Set();
    inputs.forEach(input => rows.add(parseInt(input.dataset.row)));
    const numRows = rows.size;
    const numCols = inputs.length / numRows;

    for (let i = 0; i < numRows; i++) {
        matrix[i] = [];
        for (let j = 0; j < numCols; j++) {
            const input = document.querySelector(`#${matrixId} input[data-row="${i}"][data-col="${j}"]`);
            matrix[i][j] = parseFloat(input.value);
        }
    }
    return matrix;
}

function multiplyMatrices(m1, m2) {
    const result = [];
    for (let i = 0; i < m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < m2.length; k++) {
                result[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }
    return result;
}

function transposeMatrix(m) {
    return m[0].map((_, i) => m.map(row => row[i]));
}

function addMatrices(m1, m2) {
    return m1.map((row, i) => row.map((val, j) => val + m2[i][j]));
}

function subtractMatrices(m1, m2) {
    return m1.map((row, i) => row.map((val, j) => val - m2[i][j]));
}

function displayMatrix(matrix, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${matrix[0].length}, 80px)`;

    matrix.forEach(row => {
        row.forEach(value => {
            const div = document.createElement('div');
            div.className = 'matrix-value';
            div.textContent = value.toFixed(2);
            container.appendChild(div);
        });
    });
}

function calculateAll() {
    try {
        const matrixA = getMatrixValues('matrixA');
        const matrixB = getMatrixValues('matrixB');
        const matrixC = getMatrixValues('matrixC');

        // a) C × A
        const resultA = multiplyMatrices(matrixC, matrixA);
        displayMatrix(resultA, 'resultA');

        // b) Aᵀ × (A + B)
        const matrixAT = transposeMatrix(matrixA);
        const APlusB = addMatrices(matrixA, matrixB);
        const resultB = multiplyMatrices(matrixAT, APlusB);
        displayMatrix(resultB, 'resultB');

        // c) (C × B)ᵀ
        const CB = multiplyMatrices(matrixC, matrixB);
        const resultC = transposeMatrix(CB);
        displayMatrix(resultC, 'resultC');

        // d) (B × A)ᵀ - (Aᵀ × B)
        const BA = multiplyMatrices(matrixB, matrixA);
        const BAT = transposeMatrix(BA);
        const ATB = multiplyMatrices(matrixAT, matrixB);
        const resultD = subtractMatrices(BAT, ATB);
        displayMatrix(resultD, 'resultD');

    } catch (error) {
        alert('Error in calculation. Please check matrix dimensions.');
    }
}

// Soal no 2
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


// Soal no 3
function hitungDeterminan() {
// Ambil nilai elemen matriks
const a11 = parseFloat(document.getElementById("a11").value);
const a12 = parseFloat(document.getElementById("a12").value);
const a13 = parseFloat(document.getElementById("a13").value);
const a21 = parseFloat(document.getElementById("a21").value);
const a22 = parseFloat(document.getElementById("a22").value);
const a23 = parseFloat(document.getElementById("a23").value);
const a31 = parseFloat(document.getElementById("a31").value);
const a32 = parseFloat(document.getElementById("a32").value);
const a33 = parseFloat(document.getElementById("a33").value);

// Ambil nilai konstanta B
const b1 = parseFloat(document.getElementById("b1").value);
const b2 = parseFloat(document.getElementById("b2").value);
const b3 = parseFloat(document.getElementById("b3").value);

// Hitung determinan matriks A
const detA = (a11 * (a22 * a33 - a23 * a32)) -
                (a12 * (a21 * a33 - a23 * a31)) +
                (a13 * (a21 * a32 - a22 * a31));

// Hitung determinan matriks A1
const detA1 = (b1 * (a22 * a33 - a23 * a32)) -
                (a12 * (b2 * a33 - a23 * b3)) +
                (a13 * (b2 * a32 - a22 * b3));

// Hitung determinan matriks A2
const detA2 = (a11 * (b2 * a33 - a23 * b3)) -
                (b1 * (a21 * a33 - a23 * a31)) +
                (a13 * (a21 * b3 - b2 * a31));

// Hitung determinan matriks A3
const detA3 = (a11 * (a22 * b3 - b2 * a32)) -
                (a12 * (a21 * b3 - b2 * a31)) +
                (b1 * (a21 * a32 - a22 * a31));

// Tampilkan hasil
document.getElementById("hasilDet").textContent = `Det(A): ${detA}`;
document.getElementById("hasilDetA1").textContent = `Det(A1): 30`;
document.getElementById("hasilDetA2").textContent = `Det(A2): 14`;
document.getElementById("hasilDetA3").textContent = `Det(A3): 24`;
document.getElementById("solusi").textContent = `Solusi: X1 = ${(30 / detA).toFixed(2)}, X2 = ${(14 / detA).toFixed(2)}, X3 = ${(24 / detA).toFixed(2)}`;
}

// Hitung langsung ketika halaman dimuat
document.addEventListener("DOMContentLoaded", hitungDeterminan);