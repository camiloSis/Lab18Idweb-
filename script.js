// EJERCICIO 3
// Usar fetch con promesas para leer datos de usuario 10
console.log("=== EJERCICIO 3 ===");

function cargarUsuarioPromesas() {
    const resultado = document.getElementById("resultado3");
    resultado.textContent = "Cargando...";
    
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
            console.log("Usuario 10 (con promesas):");
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

// EJERCICIO 4
// Usar fetch con async/await para leer datos de usuario 10
console.log("\n=== EJERCICIO 4 ===");

async function cargarUsuarioAsync() {
    const resultado = document.getElementById("resultado4");
    resultado.textContent = "Cargando...";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data = await response.json();
        
        console.log("Usuario 10 (con async/await):");
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

// EJERCICIO 5
// Manipular arreglos con AJAX usando promesas
console.log("\n=== EJERCICIO 5 ===");

function cargarTodosUsuariosPromesas() {
    const resultado = document.getElementById("resultado5");
    resultado.textContent = "Cargando...";
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usuarios => {
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

// EJERCICIO 6
// Manipular arreglos con AJAX usando async/await
console.log("\n=== EJERCICIO 6 ===");

async function cargarTodosUsuariosAsync() {
    const resultado = document.getElementById("resultado6");
    resultado.textContent = "Cargando...";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        
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

// EJERCICIO 7
// Actualizar el DOM usando datos obtenidos por AJAX con promesas
console.log("\n=== EJERCICIO 7 ===");

function cargarUsuario2Promesas() {
    const resultado = document.getElementById("resultado7");
    resultado.textContent = "Cargando...";
    
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(usuario => {
            console.log("Usuario 2 (con promesas):");
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

console.log("\n=== EJERCICIOS 3-7 COMPLETADOS ===");