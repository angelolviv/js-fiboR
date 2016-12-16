function fibor(n) {
    return n <= 1 ? n : fibor(n - 1) + fibor(n - 2);
}

var n = Number(prompt('Введіть номер числа Фібоначчі:'));
var digitF = fibor(n);
document.write(digitF);