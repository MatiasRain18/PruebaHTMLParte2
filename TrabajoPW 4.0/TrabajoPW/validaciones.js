// validaciones.js

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
  
    // Validar que las contraseñas coincidan
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Las contraseñas no coinciden';
      confirmPasswordError.classList.add('invalid-feedback', 'visible');
      return; // Salir de la función si las contraseñas no coinciden
    } else {
      confirmPasswordError.textContent = '';
      confirmPasswordError.classList.remove('invalid-feedback', 'visible');
    }
  
    // Validar que todos los campos estén llenos
    if (nombre && apellidoPaterno && apellidoMaterno && email && password && telefono) {
      // Mostrar mensaje de éxito
      document.getElementById('signupSuccessMessage').style.display = 'block';
      document.getElementById('signupErrorMessage').style.display = 'none';
  
      // Redirigir a la página "iniciarsesion.html" después de 3 segundos
      setTimeout(function() {
        window.location.href = 'iniciarsesion.html';
      }, 3000);
    } else {
      // Mostrar mensaje de error
      document.getElementById('signupSuccessMessage').style.display = 'none';
      document.getElementById('signupErrorMessage').style.display = 'block';
    }
  }
  
  // Agregar evento de envío al formulario
  document.getElementById('signupForm').addEventListener('submit', validarFormulario);