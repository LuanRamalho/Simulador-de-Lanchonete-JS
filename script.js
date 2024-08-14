document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const totalSpan = document.getElementById('total');
    const valorPagoInput = document.getElementById('valorPago');
    const trocoSpan = document.getElementById('troco');

    function calcularTotal() {
        let total = 0;
        items.forEach(item => {
            const quantidade = parseInt(item.value);
            const preco = parseFloat(item.dataset.price);
            if (!isNaN(quantidade) && quantidade > 0) {
                total += quantidade * preco;
            }
        });
        totalSpan.textContent = total.toFixed(2);
    }

    items.forEach(item => {
        item.addEventListener('input', calcularTotal);
    });

    window.calcularTroco = function() {
        const total = parseFloat(totalSpan.textContent);
        const valorPago = parseFloat(valorPagoInput.value);
        if (isNaN(valorPago)) {
            alert('Por favor, insira um valor válido.');
            return;
        }
        const troco = valorPago - total;
        trocoSpan.textContent = troco.toFixed(2);
    };
});
