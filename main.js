// Función para cargar datos del JSON
async function cargarDatos() {
  try {
    // Hacer fetch al archivo JSON
    const respuesta = await fetch('resumen.json');

    // Verificar si la respuesta fue exitosa
    if (!respuesta.ok) {
      throw new Error('Error al cargar los datos');
    }

    // Convertir los datos a formato JSON
    const datos = await respuesta.json();

    // Mostrar los datos en la página
    document.getElementById('banco').textContent = datos.banco;
    document.getElementById('sucursal').textContent = datos.sucursal;
    document.getElementById('titular').textContent = datos.titular;
    document.getElementById('nroCuenta').textContent = datos.nro_cuenta;

    // Mostrar saldos (USD y EUR)
    const saldoUSD = datos.saldo.find((item) => item.moneda === 'USD');
    const saldoEUR = datos.saldo.find((item) => item.moneda === 'EUR');
    document.getElementById('saldoUSD').textContent = `${saldoUSD.monto.toFixed(2)} ${saldoUSD.moneda}`;
    document.getElementById('saldoEUR').textContent = `${saldoEUR.monto.toFixed(2)} ${saldoEUR.moneda}`;

    document.getElementById('nroBanco').textContent = datos.nro_banco;
    document.getElementById('abierto').textContent = datos.abierto;
  } catch (error) {
    console.error('Hubo un error:', error);
  }
}

// Llamar a la función al cargar la página
cargarDatos();

