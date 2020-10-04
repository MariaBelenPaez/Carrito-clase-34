const subtotal = document.querySelector("#subtotal")
const recargo = document.querySelector("#recargo")
const descuento = document.querySelector("#descuento")
const envio = document.querySelector("#envio")
const total = document.querySelector("#total")

const formasDePago = document.querySelectorAll(".formasDePago")

const efectivo = document.querySelector("#efectivo")
const credito = document.querySelector("#credito")
const envioSiNo = document.querySelector("#envioChecked")
const tarjetaDescuento = document.querySelector("#descuentoChecked")



let subtotalCompra = Number(subtotal.dataset.precio)


subtotal.textContent = 55498

for (let opcion of formasDePago) {
    opcion.oninput = () => {
        calculoTotal()
    }
}


//*Compra con tarjeta de credito//*
let precioRecargo

const cargoTarjeta = () => {
        precioRecargo = subtotalCompra * 0.1
        recargo.textContent = precioRecargo
        return precioRecargo
    }
    //*Envio//*
let precioEnvio

const cargoEnvio = () => {
        precioEnvio = 50
        envio.textContent = precioEnvio
        return precioEnvio
    }
    //*Tarjeta de descuento//*
let precioDescuento

const agregoDescuento = () => {
    precioDescuento = -subtotalCompra * 0.1
    descuento.textContent = precioDescuento
    return precioDescuento

}

//* total//*
const calculoTotal = () => {

    if (credito.checked) {
        precioRecargo = cargoTarjeta()

    } else {
        precioRecargo = 0
        recargo.textContent = precioRecargo
    }
    if (envioSiNo.checked) {
        precioEnvio = cargoEnvio()
    } else {
        precioEnvio = 0
        envio.textContent = precioEnvio

    }
    if (tarjetaDescuento.checked) {
        precioDescuento = agregoDescuento()
    } else {
        precioDescuento = 0
        descuento.textContent = precioDescuento
    }

    let totalTodo = subtotalCompra + precioEnvio + precioRecargo + precioDescuento
    total.textContent = totalTodo
    return totalTodo
}