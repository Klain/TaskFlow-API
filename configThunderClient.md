Paso 1: Configurar y Usar Thunder Client en VS Code
Instalar Thunder Client:

Abre Visual Studio Code.
Ve a la sección de extensiones (Ctrl+Shift+X o desde el icono en la barra lateral).
Busca e instala Thunder Client.
Crear las peticiones:

Abre Thunder Client desde la barra lateral.
Crea una nueva colección llamada TaskFlow API.
Agrega las siguientes peticiones a la colección:
Peticiones para la colección:
Registro de Usuario
Método: POST
URL: http://localhost:3000/api/auth/register
Body:
json
Copiar código
{
  "username": "testuser",
  "password": "password123"
}
Inicio de Sesión
Método: POST
URL: http://localhost:3000/api/auth/login
Body:
json
Copiar código
{
  "username": "testuser",
  "password": "password123"
}
Obtener Tareas (Protegida)
Método: GET
URL: http://localhost:3000/api/tasks
Headers:
json
Copiar código
{
  "Authorization": "Bearer <tu_token>"
}
Crear Tarea (Protegida)
Método: POST
URL: http://localhost:3000/api/tasks
Headers:
json
Copiar código
{
  "Authorization": "Bearer <tu_token>"
}
Body:
json
Copiar código
{
  "title": "Nueva Tarea",
  "description": "Descripción de la tarea"
}
Paso 2: Exportar la Colección
Haz clic en el icono de configuración de la colección en Thunder Client.
Selecciona Export Collection.
Guarda el archivo exportado en la carpeta /docs del proyecto con el nombre thunder-collection.json.
Paso 3: Actualizar el README
Actualiza el archivo README.md para incluir información sobre la colección de Thunder Client:

markdown
Copiar código
## Recursos

### Colección de Thunder Client

- Hemos preparado una colección de peticiones para probar las rutas del API de manera sencilla utilizando Thunder Client, una extensión ligera para Visual Studio Code.
- [Descargar la colección](docs/thunder-collection.json)

### Cómo usar la colección:

1. Instala la extensión **Thunder Client** en Visual Studio Code.
2. Importa la colección siguiendo estos pasos:
   - Haz clic en el icono de configuración de Thunder Client.
   - Selecciona `Import Collection`.
   - Elige el archivo `thunder-collection.json` en la carpeta `docs`.
3. Usa las peticiones para interactuar con la API.

### Rutas Incluidas en la Colección

1. **Registro de Usuario**: Permite registrar nuevos usuarios.
2. **Inicio de Sesión**: Genera un token JWT para autenticarse.
3. **Obtener Tareas**: Obtén todas las tareas del usuario autenticado.
4. **Crear Tarea**: Crea una nueva tarea asociada al usuario autenticado.

Paso 4: Subir la Colección al Repositorio
Una vez que exportes la colección de Thunder Client, colócala en la carpeta docs del proyecto y súbela al repositorio en GitHub.

Copia el archivo exportado (thunder-collection.json) a la carpeta docs.
Asegúrate de hacer un commit:
bash
Copiar código
git add docs/thunder-collection.json
git commit -m "Añadida la colección de Thunder Client para pruebas"
git push
Resultado Final
Un archivo thunder-collection.json en /docs que los usuarios podrán importar para probar las rutas fácilmente.
Instrucciones claras en el README.md que explican cómo usar la colección.
Un enfoque profesional y práctico, muy apreciado por desarrolladores y reclutadores.