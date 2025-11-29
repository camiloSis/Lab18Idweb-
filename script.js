// ========================================
// EJERCICIOS AJAX (3-8)
// ========================================

// EJERCICIO 3: Fetch con Promesas (Usuario 10)
function cargarUsuarioPromesas() {
    const resultado = document.getElementById("resultado3");
    resultado.textContent = "Cargando...";
    
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
            console.log("=== EJERCICIO 3 ===");
            console.log("Name:", data.name);
            console.log("Username:", data.username);
            console.log("Email:", data.email);
            
            resultado.innerHTML = `
                <strong>Name:</strong> ${data.name}<br>
                <strong>Username:</strong> ${data.username}<br>
                <strong>Email:</strong> ${data.email}
            `;
        })
        .catch(error => {
            console.error("Error:", error);
            resultado.textContent = "Error al cargar el usuario";
        });
}

// EJERCICIO 4: Fetch con Async/Await (Usuario 10)
async function cargarUsuarioAsync() {
    const resultado = document.getElementById("resultado4");
    resultado.textContent = "Cargando...";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await response.json();
        
        console.log("=== EJERCICIO 4 ===");
        console.log("Name:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);
        
        resultado.innerHTML = `
            <strong>Name:</strong> ${data.name}<br>
            <strong>Username:</strong> ${data.username}<br>
            <strong>Email:</strong> ${data.email}
        `;
    } catch (error) {
        console.error("Error:", error);
        resultado.textContent = "Error al cargar el usuario";
    }
}

// EJERCICIO 5: Todos los usuarios con Promesas
function cargarTodosUsuariosPromesas() {
    const resultado = document.getElementById("resultado5");
    resultado.textContent = "Cargando...";
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usuarios => {
            console.log("=== EJERCICIO 5 ===");
            console.log("Todos los usuarios (con promesas):");
            
            let nombresHTML = "<strong>Lista de usuarios:</strong><br>";
            
            usuarios.forEach(usuario => {
                console.log(usuario.name);
                nombresHTML += `• ${usuario.name}<br>`;
            });
            
            resultado.innerHTML = nombresHTML;
        })
        .catch(error => {
            console.error("Error:", error);
            resultado.textContent = "Error al cargar los usuarios";
        });
}

// EJERCICIO 6: Todos los usuarios con Async/Await
async function cargarTodosUsuariosAsync() {
    const resultado = document.getElementById("resultado6");
    resultado.textContent = "Cargando...";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        
        console.log("=== EJERCICIO 6 ===");
        console.log("Todos los usuarios (con async/await):");
        
        let nombresHTML = "<strong>Lista de usuarios:</strong><br>";
        
        usuarios.forEach(usuario => {
            console.log(usuario.name);
            nombresHTML += `• ${usuario.name}<br>`;
        });
        
        resultado.innerHTML = nombresHTML;
    } catch (error) {
        console.error("Error:", error);
        resultado.textContent = "Error al cargar los usuarios";
    }
}

// EJERCICIO 7: Actualizar DOM con Promesas (Usuario 2)
function cargarUsuario2Promesas() {
    const resultado = document.getElementById("resultado7");
    resultado.textContent = "Cargando...";
    
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(usuario => {
            console.log("=== EJERCICIO 7 ===");
            console.log("Nombre:", usuario.name);
            console.log("Email:", usuario.email);
            console.log("Ciudad:", usuario.address.city);
            
            resultado.innerHTML = `
                <div class="user-info">
                    <strong>👤 Nombre:</strong> ${usuario.name}<br>
                    <strong>📧 Email:</strong> ${usuario.email}<br>
                    <strong>🏙️ Ciudad:</strong> ${usuario.address.city}
                </div>
            `;
        })
        .catch(error => {
            console.error("Error:", error);
            resultado.textContent = "Error al cargar el usuario";
        });
}

// EJERCICIO 8: Actualizar DOM con Async/Await (Usuario 2)
async function cargarUsuario2Async() {
    const resultado = document.getElementById("resultado8");
    resultado.textContent = "Cargando...";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const usuario = await response.json();
        
        console.log("=== EJERCICIO 8 ===");
        console.log("Nombre:", usuario.name);
        console.log("Email:", usuario.email);
        console.log("Ciudad:", usuario.address.city);
        
        resultado.innerHTML = `
            <div class="user-info">
                <strong>👤 Nombre:</strong> ${usuario.name}<br>
                <strong>📧 Email:</strong> ${usuario.email}<br>
                <strong>🏙️ Ciudad:</strong> ${usuario.address.city}
            </div>
        `;
    } catch (error) {
        console.error("Error:", error);
        resultado.textContent = "Error al cargar el usuario";
    }
}

// ========================================
// EJERCICIOS REGEX (11-15)
// ========================================

// EJERCICIO 11: Validar Contraseña Fuerte
// Regla: mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
function validarPassword() {
    const password = document.getElementById("password").value;
    const resultado = document.getElementById("resultado11");
    
    // Regex: mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    console.log("=== EJERCICIO 11 ===");
    console.log("Password a validar:", password);
    console.log("¿Es válida?", regex.test(password));
    
    if (regex.test(password)) {
        resultado.innerHTML = `<span class="valido">✓ Contraseña válida</span><br>
            La contraseña cumple con:<br>
            • Mínimo 8 caracteres<br>
            • Al menos 1 mayúscula<br>
            • Al menos 1 minúscula<br>
            • Al menos 1 número`;
    } else {
        resultado.innerHTML = `<span class="invalido">✗ Contraseña inválida</span><br>
            Debe cumplir con:<br>
            • Mínimo 8 caracteres<br>
            • Al menos 1 mayúscula<br>
            • Al menos 1 minúscula<br>
            • Al menos 1 número`;
    }
}

// EJERCICIO 12: Encontrar URLs Seguras
function encontrarURLs() {
    const texto = "Visita https://www.google.com y también https://github.com/usuario. No uses http://inseguro.com";
    const resultado = document.getElementById("resultado12");
    
    // Regex para URLs seguras (https)
    const regex = /https:\/\/[^\s]+/g;
    const urls = texto.match(regex);
    
    console.log("=== EJERCICIO 12 ===");
    console.log("Texto:", texto);
    console.log("URLs encontradas:", urls);
    
    resultado.innerHTML = `
        <strong>Texto analizado:</strong><br>
        ${texto}<br><br>
        <strong>URLs seguras encontradas:</strong><br>
        ${urls ? urls.map(url => `• ${url}`).join('<br>') : 'Ninguna'}
    `;
}

// EJERCICIO 13: Quitar Etiquetas HTML
function quitarHTML() {
    const textoHTML = "<h1>Hola</h1><p>Este es un <strong>texto</strong> con HTML</p>";
    const resultado = document.getElementById("resultado13");
    
    // Regex para eliminar etiquetas HTML
    const regex = /<[^>]*>/g;
    const textoLimpio = textoHTML.replace(regex, "");
    
    console.log("=== EJERCICIO 13 ===");
    console.log("Texto original:", textoHTML);
    console.log("Texto limpio:", textoLimpio);
    
    resultado.innerHTML = `
        <strong>Texto original:</strong><br>
        ${textoHTML}<br><br>
        <strong>Texto sin etiquetas:</strong><br>
        ${textoLimpio}
    `;
}

// EJERCICIO 14: Dividir en Oraciones
function dividirOraciones() {
    const texto = "Hola. Cómo estás? Bien!";
    const resultado = document.getElementById("resultado14");
    
    // Regex para dividir por . ? !
    const regex = /[.?!]/;
    const oraciones = texto.split(regex);
    
    console.log("=== EJERCICIO 14 ===");
    console.log("Texto original:", texto);
    console.log("Oraciones:", oraciones);
    
    resultado.innerHTML = `
        <strong>Texto original:</strong><br>
        ${texto}<br><br>
        <strong>Oraciones encontradas:</strong><br>
        ${oraciones.map((oracion, index) => `${index + 1}. "${oracion}"`).join('<br>')}
    `;
}

// EJERCICIO 15: Validar Fecha (dd/mm/yyyy)
function validarFecha() {
    const fecha = document.getElementById("fecha").value;
    const resultado = document.getElementById("resultado15");
    
    // Regex para formato dd/mm/yyyy
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    
    console.log("=== EJERCICIO 15 ===");
    console.log("Fecha a validar:", fecha);
    console.log("¿Es válida?", regex.test(fecha));
    
    if (regex.test(fecha)) {
        resultado.innerHTML = `<span class="valido">✓ Formato de fecha válido</span><br>
            La fecha "${fecha}" cumple con el formato dd/mm/yyyy`;
    } else {
        resultado.innerHTML = `<span class="invalido">✗ Formato de fecha inválido</span><br>
            La fecha debe tener el formato: dd/mm/yyyy<br>
            Ejemplo: 25/12/2024`;
    }
}

console.log("=== TODOS LOS EJERCICIOS CARGADOS ===");