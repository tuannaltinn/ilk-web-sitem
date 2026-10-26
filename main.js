const projeButonu = document.getElementById('btn-proje');
const iletisimButonu = document.getElementById('btn-iletisim');

projeButonu.addEventListener('click', function(event) {
    event.preventDefault();
    alert('🚀 Harika projelerim çok yakında burada sergilenecek!');
});

iletisimButonu.addEventListener('click', function(event) {
    event.preventDefault();
    alert('💌 Benimle iletişime geçmek için: tuanna@example.com');
});

console.log("Tuanna'nın web sitesi başarıyla yüklendi! 🎉");