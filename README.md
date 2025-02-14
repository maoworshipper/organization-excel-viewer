# Organization Excel Viewer

## Descripción

Este proyecto es una aplicación web para visualizar la información de un equipo en crecimiento en forma de organigrama, junto con la información resumen, en una aplicación web.

## Funcionalidades

* La app web puede leer la data a través de un archivo excel o csv.
* Se puede previsualizar la data que se está subiendo, antes de pasar a verla en el organigrama.
* Se puede filtrar la información por mes, y ver al menos el total de lo pagado en nómina ese mes, y si alguien fue promocionado (aumento de sueldo) o contratado ese mes.
* En el organigrama se ve la información básica del integrante del equipo.
* Se puede subir imagen de perfil para cada colaborador haciendo click en el círculo de la foto de perfil.
* El organigrama se puede imprimir.
* La app tiene un botón flotante para cambiar de idioma entre español e inglés.

## Tecnologías utilizadas

* ReactJS
* Vite
* SheetJS
* MUI
* Zustand
* React Organizational Chart
* React To Print

## Instalación

1.Clona este repositorio en tu máquina local.
2.Abre una terminal en la carpeta raíz del proyecto o en VS Code.
3.Ejecuta el comando `npm install` para instalar todas las dependencias.
4.Ejecuta el comando `npm run dev` para iniciar la aplicación en modo de desarrollo.
5.Abre [http://localhost:3000](http://localhost:3000) o [http://localhost:5174](http://localhost:5174) en tu navegador para ver la aplicación.

## Uso

1. Sube un archivo excel o csv con la información de tu equipo. (Un archivo de ejemplo se encuentra en la carpeta `demoData`).

## Dependencias

* @emotion/react: ^11.10.8
* @emotion/styled: ^11.10.8
* @mui/material: ^5.12.2
* @mui/x-data-grid: ^6.3.0
* react: ^18.2.0
* react-dom: ^18.2.0
* react-organizational-chart: ^2.2.1
* react-to-print: ^2.14.12
* xlsx: ^0.18.5
* zustand: ^4.3.7

## Dependencias de desarrollo

* @types/react: ^18.0.28
* @types/react-dom: ^18.0.11
* @vitejs/plugin-react: ^4.0.0
* eslint: ^8.38.0
* eslint-plugin-react: ^7.32.2
* eslint-plugin-react-hooks: ^4.6.0
* eslint-plugin-react-refresh: ^0.3.4
* sass: ^1.62.1
* vite: ^4.3.2

## Licencia

Este proyecto está bajo la licencia MIT.
