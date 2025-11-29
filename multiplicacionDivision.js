// Exportación por defecto: multiplicar
export default function multiplicar(a, b) {
    return a * b;
}

// Exportación nombrada: dividir
export function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}