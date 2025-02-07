function algoritma1(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i.toString().repeat(i));
    }
}

function algoritma2(n) {
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = i; j >= 1; j--) {
            result += j;
        }
        console.log(result);
    }
}
function algoritma3(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        if (i % 2 === 1) {
            for (let j = 1; j <= i; j++) {
                row += j;
            }
        } else {
            for (let j = i; j > Math.floor(i / 2); j--) {
                row += j;
            }
            for (let j = Math.floor(i / 2); j >= 1; j--) {
                row += j;
            }
        }
        console.log(row);
    }
}





function algoritma4(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let number = 1;

    for (let col = 0; col < n; col++) {
        if (col % 2 === 0) {
            for (let row = 0; row < n; row++) {
                matrix[row][col] = number++;
            }
        } else {
            for (let row = n - 1; row >= 0; row--) {
                matrix[row][col] = number++;
            }
        }
    }

    matrix.forEach(result => console.log(result.join(" ")));
}

const number = 5;
algoritma1(number);
algoritma2(number);
algoritma3(number);
algoritma4(number);
