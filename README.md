# TechStore

TechStore es un proyecto de ecommerce desarrollado con React y Material-UI. Este proyecto incluye una variedad de características para ofrecer una experiencia de compra completa y profesional.

## Características

- **Autenticación y Registro de Usuarios**: Permite a los usuarios registrarse e iniciar sesión.
- **Carrito Persistente**: Los elementos en el carrito se mantienen persistentes entre sesiones del navegador.
- **Página de Detalles del Producto**: Incluye reseñas de usuarios y recomendaciones de productos similares.
- **Sistema de Reseñas y Calificaciones**: Permite a los usuarios dejar reseñas y calificaciones de productos.
- **Sistema de Pago Seguro**: Simulación de pago con un formulario de tarjeta de crédito.
- **Notificaciones por Correo Electrónico**: Simulación del envío de correos electrónicos de confirmación de pedido.
- **SEO y Analítica**: Mejora del SEO con etiquetas meta y configuración de Google Analytics.
- **Responsive Design**: Diseño completamente responsivo utilizando Material-UI.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Material-UI**: Biblioteca de componentes de React para un diseño consistente y responsivo.
- **React Router**: Manejo de rutas en la aplicación.
- **React Helmet**: Manejo de etiquetas meta para SEO.
- **Google Analytics**: Herramienta para el análisis del tráfico web.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jaimeirazabal1/react-ecommerce
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd react-ecommerce
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```plaintext
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── PageTitle.js
│   │   ├── ProductFilter.js
│   │   └── ProductList.js
│   ├── context
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── data
│   │   ├── products.js
│   │   └── reviews.js
│   ├── pages
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── ConfirmationPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── ProductPage.js
│   ├── App.js
│   ├── index.js
│   └── constants.js
└── package.json
```

## Descripción de Componentes

- **Navbar**: Barra de navegación principal.
- **PageTitle**: Componente para manejar el título de la página y las etiquetas meta.
- **ProductFilter**: Filtros para buscar y ordenar productos.
- **ProductList**: Lista de productos mostrados en la página principal.
- **AuthContext**: Contexto para manejar la autenticación de usuarios.
- **CartContext**: Contexto para manejar el estado del carrito de compras.
- **HomePage**: Página principal con la lista de productos y filtros.
- **ProductPage**: Página de detalles del producto con reseñas y recomendaciones.
- **CartPage**: Página del carrito de compras.
- **CheckoutPage**: Página de pago.
- **ConfirmationPage**: Página de confirmación del pedido.
- **LoginPage**: Página de inicio de sesión.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un issue para discutir los cambios que deseas realizar.

## Licencia

Este proyecto está licenciado bajo la [MIT License]

