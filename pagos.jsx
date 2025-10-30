const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const total = parseInt(localStorage.getItem('total')) || 0;

// Muestra resumen
const resumenDiv = document.getElementById('resumen');
const totalSpan = document.getElementById('total');
totalSpan.textContent = total.toLocaleString();

carrito.forEach(item => {
  const p = document.createElement('p');
  p.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
  resumenDiv.appendChild(p);
¿
document.getElementById('pagarWompi').addEventListener('click', () => {
  const checkout = new WidgetCheckout({
    currency: 'COP',
    amountInCents: total * 100, // Wompi usa centavos
    reference: `pedido_${Date.now()}`,
    publicKey: 'pub_test_tuPublicKeyAqui', // Reemplázalo con tu key real
    redirectUrl: 'https://tu-sitio.com/confirmacion'
  });
  checkout.open(result => {
    console.log('Resultado:', result);
  });
});
