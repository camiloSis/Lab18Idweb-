// Importar exportación por defecto y exportaciones nombradas
import multiplicar, { dividir } from './multiplicacionDivision.js';
import { sumar, restar } from './sumaResta.js';

console.log("=== EJERCICIO 9-10 (MÓDULOS) ===");

// Ejecutar operaciones
const a = 20;
const b = 5;

console.log(`\nOperaciones con a=${a} y b=${b}:`);
console.log(`Suma: ${a} + ${b} = ${sumar(a, b)}`);
console.log(`Resta: ${a} - ${b} = ${restar(a, b)}`);
console.log(`Multiplicación: ${a} × ${b} = ${multiplicar(a, b)}`);

// Intentar dividir
try {
    console.log(`División: ${a} ÷ ${b} = ${dividir(a, b)}`);
} catch (error) {
    console.log(`Error en división: ${error.message}`);
}

// Intentar dividir entre cero
console.log(`\nPrueba con división entre cero:`);
try {
    console.log(`División: ${a} ÷ 0 = ${dividir(a, 0)}`);
} catch (error) {
    console.log(`Error en división: ${error.message}`);
}

// Mostrar en el DOM
document.body.innerHTML = `
    <div style="font-family: Arial; max-width: 800px; margin: 50px auto; padding: 20px; background: #f4f4f4; border-radius: 8px;">
        <h1 style="color: #28a745; border-bottom: 3px solid #28a745; padding-bottom: 10px;">
            Ejercicio 9-10: Sistema Modular
        </h1>
        
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Operaciones con a=${a} y b=${b}:</h3>
            <p><strong>Suma:</strong> ${a} + ${b} = ${sumar(a, b)}</p>
            <p><strong>Resta:</strong> ${a} - ${b} = ${restar(a, b)}</p>
            <p><strong>Multiplicación:</strong> ${a} × ${b} = ${multiplicar(a, b)}</p>
            <p><strong>División:</strong> ${a} ÷ ${b} = ${dividir(a, b)}</p>
        </div>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 5px; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404;">Prueba de error: División entre cero</h3>
            <p style="color: #721c24;"><strong>Error:</strong> No se puede dividir entre cero</p>
        </div>
        
        <div style="background: #d4edda; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p><strong>✓ Módulos cargados correctamente</strong></p>
            <p>Abre la consola (F12) para ver más detalles.</p>
        </div>
    </div>
`;