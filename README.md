# URL Shortener Microservice

Este proyecto es parte del curso de APIs y Microservicios de freeCodeCamp. Crea un microservicio para acortar URLs similar al que se muestra en [freeCodeCamp URL Shortener](https://url-shortener-microservice.freecodecamp.rocks).

## 🔗 Funcionalidad

- Enviar una URL vía POST a /api/shorturl y recibir una URL acortada.
- Acceder a /api/shorturl/<short_url> para ser redirigido a la URL original.
- Manejo de errores para URLs inválidas usando validación DNS.

## 🛠 Tecnologías utilizadas

- Node.js
- Express.js
- body-parser
- DNS core module (dns.lookup)
- HTML básico para la interfaz
