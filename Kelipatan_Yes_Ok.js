const kelipatanYesOk = (n) => {
    let result = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) result += "OK ";
        else if (i % 4 === 0) result += "YES ";
        else result += (i + " ");
    }
    console.log(result);
}
kelipatanYesOk(20);
