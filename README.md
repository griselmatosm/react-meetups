# React Meetups

Este proyecto es una aplicación de encuentros (meetups) desarrollada con React. Permite a los usuarios ver una lista de meetups, añadir nuevos meetups y marcar meetups como favoritos. La aplicación utiliza Context API de React para compartir estado entre componentes siblings y `react-router-dom` para la navegación. Además, se utiliza SWR y `localStorage` como estrategia de manejo del estado.

## Funcionalidades

- **Lista de Meetups:** Visualiza una lista de meetups disponibles.
- **Añadir Meetups:** Permite añadir nuevos meetups a la lista.
- **Favoritos:** Marca y desmarca meetups como favoritos.

## Estructura del Proyecto

El proyecto está estructurado en varios componentes, contextos y rutas. Los componentes principales incluyen:

- `App.js`: El componente raíz que envuelve la aplicación con el `MeetupsProvider` y define la estructura básica.
- `Header.js`: El componente de la cabecera que incluye la navegación.
- `MeetupList.js`: Componente para listar los meetups.
- `MeetupItem.js`: Componente para mostrar los detalles de cada meetup.
- `NewMeetup.js`: Componente para añadir nuevos meetups.
- `Favorites.js`: Componente para mostrar los meetups marcados como favoritos.

## Manejo del Estado

La aplicación utiliza Context API de React para compartir el estado entre componentes siblings. SWR se utiliza para la recuperación y revalidación de datos, mientras que `localStorage` se emplea para persistir el estado de los meetups en el navegador.

### Context API

El contexto de `MeetupsContext` se utiliza para proporcionar y gestionar el estado global de los meetups. Esto permite compartir fácilmente el estado entre componentes sin necesidad de pasar props manualmente.

### SWR y LocalStorage

SWR (`stale-while-revalidate`) se utiliza para manejar la recuperación de datos de los meetups, permitiendo que la aplicación mantenga los datos actualizados sin afectar el rendimiento. Los datos de los meetups se almacenan en `localStorage` para asegurar que persistan entre sesiones del navegador.

## Enrutado

La aplicación utiliza `react-router-dom` para gestionar las rutas y la navegación. Esto permite que la navegación refleje correctamente las URLs, siguiendo buenas prácticas de SEO y mejorando la experiencia del usuario.

## Instalación y Ejecución

Sigue los pasos a continuación para clonar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado Node.js y npm en tu máquina.

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/griselmatosm/react-meetups.git
2. Navega al directorio del proyecto:
   ```bash
   cd react-meetups
3. Instala las dependencias:
   ```bash
   npm install

### Ejecución del proyecto

Para ejecutar la aplicación en modo desarrollo, usa el siguiente comando:
```bash
npm start
```

Abre http://localhost:3000 para ver la aplicación en el navegador. La página se recargará automáticamente si realizas cambios en el código.

### Ejecución de Pruebas

Este proyecto incluye pruebas unitarias para los componentes. Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm test
```
    
### Futuras Mejoras

A continuación, se presentan algunas mejoras que se podrían implementar en el futuro para mejorar la funcionalidad y la experiencia del usuario:

1. **Backend para Persistencia:** Implementar un backend utilizando Node.js y una base de datos como MongoDB para la persistencia de datos en lugar de localStorage.
2. **Autenticación de Usuarios:** Añadir funcionalidad de registro e inicio de sesión para que los usuarios puedan gestionar sus propios meetups y favoritos.
3. **Paginación y Filtrado:** Implementar paginación y filtrado en la lista de meetups para mejorar la usabilidad cuando haya muchos meetups.
4. **Notificaciones en Tiempo Real:** Utilizar WebSockets para notificaciones en tiempo real sobre nuevos meetups o cambios en los favoritos.
5. **Mejoras en la UI/UX:** Refinar el diseño de la interfaz de usuario y mejorar la experiencia del usuario con animaciones y feedback visual.
