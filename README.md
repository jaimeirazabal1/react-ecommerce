
# Ecommerce React App

Esta es una aplicación de ecommerce básica creada con React y Material-UI. Incluye una barra de navegación, lista de productos, carrito de compras, formulario de pago y página de confirmación de pedido.

## Características

- **Barra de Navegación**: Navegación fácil entre la página principal y el carrito de compras.
- **Lista de Productos**: Visualización de productos con imágenes, descripciones y precios.
- **Carrito de Compras**: Visualización y cálculo del total de los productos añadidos al carrito.
- **Formulario de Pago**: Recoge la información del cliente para procesar el pago.
- **Página de Confirmación de Pedido**: Confirmación de la compra realizada.

## Tecnologías Utilizadas

- React
- Material-UI
- React Router

## Instalación

1. Clona el repositorio:

```
git clone https://github.com/jaimeirazabal1/react-ecommerce.git
```

2. Navega al directorio del proyecto:

```
cd ecommerce-react-app
```

3. Instala las dependencias:

```
npm install
```

4. Instala los íconos de Material-UI:

```
npm install @mui/icons-material
```

5. Inicia la aplicación:

```
npm start
```

## Estructura del Proyecto

```
ecommerce-react-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── ConfirmationPage.js
│   │   ├── HomePage.js
│   │   ├── ProductPage.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
└── README.md
```

## Descripción de los Componentes

### Navbar.js

Barra de navegación que incluye enlaces a la página principal y al carrito de compras.

### ProductList.js

Lista de productos que muestra cada producto con su imagen, descripción y precio.

### CartPage.js

Página del carrito de compras que muestra los productos añadidos al carrito y el total de la compra.

### CheckoutPage.js

Formulario de pago que recoge la información del cliente.

### ConfirmationPage.js

Página de confirmación de pedido que confirma al usuario que su compra ha sido realizada con éxito.

### HomePage.js

Página principal que da la bienvenida a los usuarios a la tienda y muestra la lista de productos.

### ProductPage.js

Página de detalles del producto que muestra la información específica de un producto seleccionado.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna idea o encuentras algún problema, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.