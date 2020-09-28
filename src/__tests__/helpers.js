

/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    recalculateSubtotal
} = require('../helpers.js')

// cek hasil penambahan qty
test('Qty 1 jika ditambahkan 1 maka hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

// cek hasil pengurangan qty
test('decrementQty bisa berkurang', () => {
    expect(decrementQty(2)).toBe(1);
});

// pengurangan qty minimal qty adalah 1
test('decrementQty tidak boleh berkurang ketika qty > 0', () => {
    expect(decrementQty(1)).toBe(1);
});

// cek inputan penambahan qty dalam bentuk string
test('Qty 1 jika ditambahkan "1" maka hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

// cek penghitungan subtotal
test('Subtotal dari 50000 dan qty 2 adalah 50000', () => {
    expect(recalculateSubtotal(50000, 2)).toBe(100000);
});

// cek inputan angka penjumlahan ulang dengan string
test('Subtotal dengan inputan string dari "50000" dan qty "2"', () => {
    expect(recalculateSubtotal('50000', '3')).toBe(150000);
});

// cek inputan angka penjumlahan ulang dengan string
test('Subtotal dengan inputan string dari 50000 dan qty "2"', () => {
    expect(recalculateSubtotal('50000', '4')).toBe(200000);
});

// cek perubahan subtotal sesuai Kode discount yang di pilih
test('Subtotal dari qty 3 dengan discount 25% adalah 112500', () => {
    expect(recalculateSubtotal(50000, 3, 25)).toBe(112500);
});

// cek perubahan subtotal bila qty menginputkan string serta sesuai Kode discount yang di pilih
test('Subtotal dari qty "3" dengan discount 25% adalah 112500', () => {
    expect(recalculateSubtotal(50000, '3', 25)).toBe(112500);
});

