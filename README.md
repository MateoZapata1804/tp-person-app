# tp-person-app

## Requisitos previos

- Node.js (versión recomendada: 18+)
- npm o yarn
- Servidor de base de datos SQL Server en ejecución

## Configuración del entorno

1. Renombra el archivo `.env.template` a `.env`.
2. Edita el archivo `.env` para parametrizar la conexión a tu base de datos SQL Server (host, usuario, contraseña, base de datos, puerto, etc).

## Instalación de dependencias

```
npm install
```

## Inicialización de la base de datos

- Ejecuta el script SQL ubicado en `database-build/tp-person-script.sql` en tu servidor SQL Server para crear las tablas necesarias.

## Ejecución en modo desarrollo

```
npm run dev
```

## Documentación de la API (API-Docs)

- La documentación Swagger está disponible y se genera automáticamente.
- Puedes acceder a la documentación en `/api/docs` una vez el servidor esté en ejecución.
