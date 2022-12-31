let fragment = document.createDocumentFragment();
const div = document.createElement("div");
div.classList.add('mensajes');
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------SELECTORES CONTENIDOS---------------------------------------------------------------
const interesSimpleVista = document.querySelector(".interesSimpleVista");

const interesCompuestoVista = document.querySelector(".interesCompuestoVista");

const descuentoVista = document.querySelector(".descuentoVista");

const analisisPatrimonialVista = document.querySelector(".analisisPatrimonialVista");

const analisisFinancieroVista = document.querySelector(".analisisFinancieroVista");

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/**INTERES SIMPLE */


const interesSimple = document.querySelector(".interes_simple");

interesSimple.addEventListener("click", (e) => {

    interesCompuestoVista.classList.add("oculto");
    descuentoVista.classList.add("oculto");
    analisisPatrimonialVista.classList.add("oculto");
    analisisFinancieroVista.classList.add("oculto");

    if (interesSimpleVista.classList[1] === "oculto") {
        interesSimpleVista.classList.remove("oculto");
    } else {
        interesSimpleVista.classList.add("oculto");
    }

})
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/**INTERES COMPUESTO */

const interes_compuesto = document.querySelector(".interes_compuesto");

interes_compuesto.addEventListener("click", () => {

    interesSimpleVista.classList.add("oculto");
    descuentoVista.classList.add("oculto");
    analisisPatrimonialVista.classList.add("oculto");
    analisisFinancieroVista.classList.add("oculto");

    if (interesCompuestoVista.classList[1] === "oculto") {
        interesCompuestoVista.classList.remove("oculto");
    } else {
        interesCompuestoVista.classList.add("oculto");
    }

})

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/**DESCUENTO */

const descuento = document.querySelector(".descuento_simple");

descuento.addEventListener("click", (e) => {

    interesCompuestoVista.classList.add("oculto");
    interesSimpleVista.classList.add("oculto");
    analisisPatrimonialVista.classList.add("oculto");
    analisisFinancieroVista.classList.add("oculto");

    if (descuentoVista.classList[1] === "oculto") {
        descuentoVista.classList.remove("oculto");
    } else {
        descuentoVista.classList.add("oculto");
    }

})

//-----------------------------------------------------------------------
//------------------------------------------------------------------------

/*ANALISIS PATRIMONIAL  */


const analisisPatrimonial = document.querySelector(".analisis_patrimonial");

analisisPatrimonial.addEventListener("click", (e) => {

    interesCompuestoVista.classList.add("oculto");
    interesSimpleVista.classList.add("oculto");
    descuentoVista.classList.add("oculto");
    analisisFinancieroVista.classList.add("oculto");

    if (analisisPatrimonialVista.classList[1] === "oculto") {
        analisisPatrimonialVista.classList.remove("oculto");
    } else {
        analisisPatrimonialVista.classList.add("oculto");
    }
})

//-----------------------------------------------------------------------
//------------------------------------------------------------------------
/*ANALISIS FINANCIERO */
const analisisFinanciero = document.querySelector(".analisis_finaciero");
analisisFinanciero.addEventListener("click", (e) => {

    interesCompuestoVista.classList.add("oculto");
    interesSimpleVista.classList.add("oculto");
    descuentoVista.classList.add("oculto");
    analisisPatrimonialVista.classList.add("oculto");

    if (analisisFinancieroVista.classList[1] === "oculto") {
        analisisFinancieroVista.classList.remove("oculto");
    } else {
        analisisFinancieroVista.classList.add("oculto");
    }
})



//-------------------------------------------------------------------------------------
//--------ESCUCHA DE EVENTOS DE LOS BOTONES DE CALCULO---------------------------------
//-------------------------------------------------------------------------------------
const button_interes_simple = document.querySelector("#button_interes_simple");
const button_interes_compuesto = document.querySelector("#button_interes_compuesto");
const button_descuento_simple = document.querySelector("#button_descuento_simple");
const button_analisis_patrimonial = document.querySelector("#button_analisis_patrimonial");
const button_analisis_financiero = document.querySelector("#button_analisis_financiero");

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/**   BOTONES DE LIMPIEZA */
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
const limpiar_interes_simple = document.getElementById('limpiar_interes_simple');
const limpiar_interes_compuesto = document.getElementById('limpiar_interes_compuesto');
const limpiar_descuento_simple = document.getElementById('limpiar_descuento_simple');
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/**BOTONES AUXILIARES */
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
const button_calcular_totales = document.getElementById('button_calcular_totales');
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


button_interes_simple.addEventListener("click", () => {
    const capital_is = document.getElementById("capital_is").value;
    var FechaInicio = new Date(document.getElementById("FechaInicio_is").value).getTime();
    var Fechafinal = new Date(document.getElementById("Fechafinal_is").value).getTime();
    const numeroPeriodo = diferenciaEnDias(FechaInicio, Fechafinal);
    const tasa = document.getElementById("tasa_is").value;
    const resultado = calcularInteresSimple(capital_is, tasa, numeroPeriodo);
    div.innerHTML = ` <h3>El Interes que ganará es: ${resultado.toFixed(2)}$ <br/> 
                          El monto generado es:${(parseFloat(resultado) + parseFloat(capital_is)).toFixed(2)} $</h3>`;
    fragment.append(div)
    interesSimpleVista.appendChild(fragment)





});
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

button_interes_compuesto.addEventListener("click", () => {

    const capital_co = document.getElementById("capital_co").value;
    var FechaInicio = new Date(document.getElementById("FechaInicio_co").value).getTime();
    var Fechafinal = new Date(document.getElementById("Fechafinal_co").value).getTime();
    const numeroPeriodo = diferenciaEnDias(FechaInicio, Fechafinal);
    const tasa = document.getElementById("tasa_co").value;
    const resultado = calcularInteresCompuesto(capital_co, tasa, numeroPeriodo);
    div.innerHTML = ` <h3>El Interes compuesto que ganará es: ${resultado.toFixed(2)}$ <br/> 
                          El monto compuesto generado es:${(parseFloat(resultado) + parseFloat(capital_co)).toFixed(2)} $</h3>`;
    fragment.append(div)
    interesCompuestoVista.appendChild(fragment)

});
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

button_descuento_simple.addEventListener("click", () => {


    const capital_des = document.getElementById("capital_des").value;
    var FechaInicio = new Date(document.getElementById("FechaInicio_des").value).getTime();
    var Fechafinal = new Date(document.getElementById("Fechafinal_des").value).getTime();
    const numeroPeriodo = diferenciaEnDias(FechaInicio, Fechafinal);
    const tasa = document.getElementById("tasa_des").value;
    const resultado = calcularDescuento(capital_des, tasa, numeroPeriodo);
    div.innerHTML = ` <h3>La cantidad que descontara es: ${resultado.toFixed(2)}$ <br/> 
                          El monto actual es:${(parseFloat(capital_des) - parseFloat(resultado)).toFixed(2)} $</h3>`;
    fragment.append(div)
    descuentoVista.appendChild(fragment)
});
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/**ANALISIS PATRIMONIAL */
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
/*CAPTURANDO DATOS DE LA MATRIZ DE NUMEROS MAYORES */

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

button_calcular_totales.addEventListener('click', () => {
    /**ACTIVO */
    const ICaja = document.getElementById('Icaja').value;
    const Iclientes = document.getElementById('Iclientes').value;
    const Istock = document.getElementById('Istock').value;
    const Iactivo_fijo = document.getElementById('Iactivo_fijo').value;

    /**PASIVO */
    const Ideudas_corto_plazo = document.getElementById('Ideudas_corto_plazo').value;
    const Ideudas_largo_plazo = document.getElementById('Ideudas_largo_plazo').value;
    const Ipatrimonio = document.getElementById('Ipatrimonio').value;

    /*TOTALES */
    const Itotal_activo = parseFloat(parseFloat(ICaja) + parseFloat(Iclientes) + parseFloat(Istock) + parseFloat(Iactivo_fijo));
    const Itotal_pasivo = parseFloat(parseFloat(Ideudas_corto_plazo) + parseFloat(Ideudas_largo_plazo) + parseFloat(Ipatrimonio));
    document.getElementById('Itotal_activo').value = Itotal_activo.toFixed(2);
    document.getElementById('Itotal_pasivo').value = Itotal_pasivo.toFixed(2);
})
button_analisis_patrimonial.addEventListener("click", () => {
    /**ACTIVO */
    const ICaja = document.getElementById('Icaja').value;
    const Iclientes = document.getElementById('Iclientes').value;
    const Istock = document.getElementById('Istock').value;
    const Iactivo_fijo = document.getElementById('Iactivo_fijo').value;
    /**PASIVO */
    const Ideudas_corto_plazo = document.getElementById('Ideudas_corto_plazo').value;
    const Ideudas_largo_plazo = document.getElementById('Ideudas_largo_plazo').value;
    const Ipatrimonio = document.getElementById('Ipatrimonio').value;
    /** TOTALES */
    const Itotal_activo = document.getElementById('Itotal_activo').value;
    const Itotal_pasivo = document.getElementById('Itotal_pasivo').value;
    /** ANALISIS DEL PATRIMONIO */
    const activo_corriente = parseFloat(ICaja) + parseFloat(Iclientes) + parseFloat(Istock);
    const pasivo_corriente = parseFloat(Ideudas_corto_plazo);

    /**determinacion de tipo de empresa */
    let mensaje1 = '';
    if ((parseFloat(Iactivo_fijo) / parseFloat(Itotal_activo)) > 0.43) {
        mensaje1 += `La empresa es de tipo Industrial tomando en cuenta la participacion relativa del AC ${(parseFloat(Iactivo_fijo) / parseFloat(Itotal_activo)).toFixed(2) * 100}%`;
    } else if ((parseFloat(Iactivo_fijo) / parseFloat(Itotal_activo)) < 0.43 && (parseFloat(Iactivo_fijo) / parseFloat(Itotal_activo)) > 0.30) {
        mensaje1 += `La empresa es de tipo Servicios tomando en cuenta la participacion relativa del AC ${(parseFloat(Iactivo_fijo) / parseFloat(Itotal_activo))}`;
    } else {
        mensaje1 += `La empresa es de tipo Comercial tomando en cuenta la participacion relativa del AC ${(parseFloat(Iactivo_fijo) / parseFloat(Itotal_activo))}`;
    }
    let mensaje2 = '';
    /** analisis sobre el Capital de trabajo neto  */
    const CTN = activo_corriente - pasivo_corriente;
    if (CTN > 0) {
        mensaje2 += `La empresa cuenta con los recursos y le sobra aun para cubrir sus deudas. `;
    } else if (CTN < 0) {
        mensaje2 += `La empresa NO cuenta con los recursos para cubrir sus deudas. `;

    } else {
        mensaje2 += `La empresa cuenta con los recursos cabales para cubrir sus deudas. `;

    }
    let mensaje3 = '';

    /** analisis sobre el riesgo de la empresa con las deudas */
    if (parseFloat(Ideudas_corto_plazo) > parseFloat(Ideudas_largo_plazo)) {
        mensaje3 += `La empresa puede estar en problemas, ya que sus deudas a corto plazo son mayores que a largo plazo.`;
    } else {
        mensaje3 += `La empresa puede trabajar con normalidad para cubrir sus deudas.`;

    }
    div.innerHTML = ` ${mensaje1}<br/>${mensaje2}<br/>${mensaje3}`
    fragment.append(div);
    analisisPatrimonialVista.append(div);

})

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


button_analisis_financiero.addEventListener("click", () => {
    /**ACTIVO */
    const ICaja = document.getElementById('Icaja').value;
    const Iclientes = document.getElementById('Iclientes').value;
    const Istock = document.getElementById('Istock').value;
    const Iactivo_fijo = document.getElementById('Iactivo_fijo').value;

    /**PASIVO */
    const Ideudas_corto_plazo = document.getElementById('Ideudas_corto_plazo').value;
    const Ideudas_largo_plazo = document.getElementById('Ideudas_largo_plazo').value;
    const Ipatrimonio = document.getElementById('Ipatrimonio').value;
    /**TOTALES */
    const Itotal_activo = document.getElementById('Itotal_activo').value;
    const Itotal_pasivo = document.getElementById('Itotal_pasivo').value;
    /** CALCULOS DE ANALISIS */
    const activo_corriente = parseFloat(ICaja) + parseFloat(Iclientes) + parseFloat(Istock);
    const pasivo_corriente = parseFloat(Ideudas_corto_plazo);

    const liquidez = calcularLiquidez(activo_corriente, pasivo_corriente).toFixed(2);
    const tesoreria = calcularTesoreria(ICaja, Istock, pasivo_corriente).toFixed(2);
    const disponibilidad = calculaDisponibilidad(ICaja, pasivo_corriente).toFixed(2);
    const garantia = calculaGarantia(Itotal_activo, Itotal_pasivo).toFixed(2);


    

    /**CRITERIO DE LA LIQUIDEZ */

    let mensaje1 = 'LIQUIDEZ: ';
    if (parseFloat(liquidez) >= 1.5 && parseFloat(liquidez) <= 1.8) {
        mensaje1 += `La empresa es solvente a corto plazo`;
    } else {
        mensaje1 += `La empresa NO es solvente a corto plazo`;
    }
      /**CRITERIO DE LA TESORERIA */
    let mensaje2 = 'TESORERIA: ';
    if (parseFloat(tesoreria) >= 1 && parseFloat(tesoreria) <= 1.2) {
        mensaje2 += `La empresa tiene liquidez`;
    } else {
        mensaje2 += `La empresa NO tiene liquidez`;
    }
          /**CRITERIO DE LA DISPONIBILIDAD */

 let mensaje3 = 'DISPONIBILIDAD: ';
    if (parseFloat(disponibilidad) >= 0.3 && parseFloat(disponibilidad) <= 0.5) {
        mensaje3 += `La empresa tiene capacidad de cubrir las deudas con el dinero en efectivo`;
    } else {
        mensaje3 += `La empresa tiene capacidad de cubrir las deudas con el dinero en efectivo`;
    }
    /** CRITERIO DE LA GARANTIA */
     let mensaje4 = 'GARANTIA: ';
    if (parseFloat(garantia) >= 1.7 && parseFloat(garantia) <= 2) {
        mensaje4 += `La empresa tiene solvencia economica`;
    } else {
        mensaje4 += `La empresa tiene NO solvencia economica`;
    }

    div.innerHTML = `${mensaje1}  <br/> ${mensaje2}  <br/> ${mensaje3} <br/> ${mensaje4}`;
    fragment.append(div);
    analisisFinancieroVista.append(fragment);
    /*CRITERIOS DE RESULTADOS */
    /**
     * LIQUIDEZ:       <1.5 - 1.8> Liquidez de la empresa o solvencia a corto plazo.    
     * 
     * TESORERIA:       <1 - 1.2 > liquidez mas inmediata de la empresa.
     * 
     * DISPONIBILIDAD: <0.3 - 0.5> Capacidad de cubrir las deudas con el dinero en efectivo.
     *
     * GARANTIA :    <1.7 - 2>  Mide la solvencia de la empresa
     * 
     * */


})

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------


//----------------------------------------------------------------
//--------funciones de calculo---------------------------------


function diferenciaEnDias(FechaInicio, Fechafinal) {
    return (Fechafinal - FechaInicio) / (1000 * 60 * 60 * 24);

}

function calcularInteresSimple(capital, interes, tiempo) {

    return capital * (parseFloat((interes) / 100)) * parseFloat(tiempo / 30);
    /*  IS=Co*i*t */
    /*0  MS=Co(1+ (i*t))  */
}

function calcularInteresCompuesto(capital, interes, tiempo) {

    return Math.pow((capital * (1 + parseFloat((interes / 100)))), parseFloat(parseInt(tiempo) / 30));

    /*
   MC=Co*(1+i)^n
 */
}
function calcularDescuento(capital, interes, tiempo) {

    return capital * (parseFloat((interes) / 100)) * parseFloat(tiempo / 30);
    /*Ds = Cn*i*t 
    VE= Cn (1 – i*t)

*/
}
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

/**LIQUIDEZ  */
function calcularLiquidez(activo_corriente, pasivo_corriente) {

    return parseFloat(activo_corriente) / parseFloat(pasivo_corriente);

    /**LIQUIDEZ=ACTIVO_CORRIENTE/PASIVO_CORRIENTE */
}
/**TESORERIA  */
function calcularTesoreria(caja, stock, pasivo_corriente) {

    return parseFloat(parseFloat(caja) + parseFloat(stock)) / parseFloat(pasivo_corriente);

    /**TESORERIA=(CAJA+STOCK)/PASIVO_CORRIENTE */
}
/**DISPONIBILIDAD */
function calculaDisponibilidad(caja, pasivo_corriente) {

    return parseFloat(caja) / parseFloat(pasivo_corriente);

    /** DISPONIBILIDAD=CAJA/PASIVO_CORRIENTE */
}

function calculaGarantia(total_activo, total_pasivo) {
    return parseFloat(total_activo) / parseFloat(total_pasivo);
}
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------

/**FUNCIONES DE LIMPIEZA */
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
limpiar_interes_simple.addEventListener('click', () => {

    document.getElementById("capital_is").value = 0;
    document.getElementById("FechaInicio_is").value = 0;
    document.getElementById("Fechafinal_is").value = 0;
    document.getElementById("tasa_is").value = 0;
    div.innerHTML = null;
    fragment.append(div)
    interesSimpleVista.appendChild(fragment)
})
limpiar_interes_compuesto.addEventListener('click', () => {

    document.getElementById("capital_co").value = 0;
    document.getElementById("FechaInicio_co").value = 0;
    document.getElementById("Fechafinal_co").value = 0;
    document.getElementById("tasa_co").value = 0;
    div.innerHTML = null;
    fragment.append(div)
    interesCompuestoVista.appendChild(fragment)
})
limpiar_descuento_simple.addEventListener('click', () => {
    document.getElementById("capital_des").value = 0;
    document.getElementById("FechaInicio_des").value = 0;
    document.getElementById("Fechafinal_des").value = 0;
    document.getElementById("tasa_des").value = 0;
    div.innerHTML = null;
    fragment.append(div)
    descuentoVista.appendChild(fragment)

})



//-----------------------------------------------------------------------------------------

