/* =====================================================================
   PRODUCTOS DE MIMA'S
   Este es el ÚNICO archivo que necesitas tocar para cambiar precios,
   nombres, descripciones o fotos. No toques index.html.

   REGLAS PARA NO DAÑAR NADA:
   - Cambia solo lo que está entre comillas "..." o los números.
   - Los precios van SIN puntos ni signo $:  63000  (no 63.000)
   - precio: 0  = el producto sale como "Cotizar" (sin precio).
   - precioHasta: si el precio varía, pon el máximo. Si es fijo, pon 0.
   - Cada producto termina con  },   (llave y coma). No las borres.
   ===================================================================== */

const NEGOCIO = {
  nombre: "Mima's",
  eslogan: "Una rosa con un sentimiento que jamás se marchita",
  whatsapp: "573028594297",          // 57 + tu número, sin espacios
  whatsappVisible: "302 859 4297",
  nequi: "302 859 4297",
  instagram: "https://www.instagram.com/mimas_flores_eternas",
  envios: "Enviamos desde Bogotá a todo el país. El costo del envío se cotiza según la ciudad."
};

/* Orden en que se muestran las categorías */
const CATEGORIAS = ["Ramo XXL", "Medianos", "Pequeños", "Osos florales", "Adicionales"];

const PRODUCTOS = [
  {
    codigo: "R01",
    nombre: "Amor Infinito",
    categoria: "Ramo XXL",
    precio: 208000,
    precioHasta: 334000,
    descripcion: "De 50 a 80 rosas rojas con mariposas y cinta Love.",
    foto: "fotos/R01-amor-infinito.jpg"
  },
  {
    codigo: "M01",
    nombre: "Dulce Rosa",
    categoria: "Medianos",
    precio: 63000,
    precioHasta: 0,
    descripcion: "15 rosas rosadas con moño.",
    foto: "fotos/M01-dulce-rosa.jpg"
  },
  {
    codigo: "M02",
    nombre: "Luna de Plata",
    categoria: "Medianos",
    precio: 63000,
    precioHasta: 0,
    descripcion: "Rosas plateadas y rosadas con peluche.",
    foto: "fotos/M02-luna-de-plata.jpg"
  },
  {
    codigo: "M03",
    nombre: "Corazón Eterno",
    categoria: "Medianos",
    precio: 105000,
    precioHasta: 0,
    descripcion: "25 rosas en forma de corazón.",
    foto: "fotos/M03-corazon-eterno.jpg"
  },
  {
    codigo: "M04",
    nombre: "Reina Roja",
    categoria: "Medianos",
    precio: 105000,
    precioHasta: 0,
    descripcion: "Rosas rojas con corona y mariposas.",
    foto: "fotos/M04-reina-roja.jpg"
  },
  {
    codigo: "M05",
    nombre: "Jardín Carmesí",
    categoria: "Medianos",
    precio: 52000,
    precioHasta: 0,
    descripcion: "Tulipanes y lirio rojo con margaritas.",
    foto: "fotos/M05-jardin-carmesi.jpg"
  },
  {
    codigo: "M06",
    nombre: "Primavera Rosa",
    categoria: "Medianos",
    precio: 56000,
    precioHasta: 0,
    descripcion: "Flores rosadas en papel blanco.",
    foto: "fotos/M06-primavera-rosa.jpg"
  },
  {
    codigo: "M07",
    nombre: "Sol Radiante",
    categoria: "Medianos",
    precio: 67000,
    precioHasta: 0,
    descripcion: "Girasoles con luces.",
    foto: "fotos/M07-sol-radiante.jpg"
  },
  {
    codigo: "M08",
    nombre: "Tulipán Rosé",
    categoria: "Medianos",
    precio: 68000,
    precioHasta: 0,
    descripcion: "Tulipanes rosados con lazo.",
    foto: "fotos/M08-tulipan-rose.jpg"
  },
  {
    codigo: "M09",
    nombre: "Feliz Cumple",
    categoria: "Medianos",
    precio: 90000,
    precioHasta: 0,
    descripcion: "20 rosas rosadas y blancas con corona y cinta Happy Birthday.",
    foto: "fotos/M09-feliz-cumple.jpg"
  },
  {
    codigo: "P01",
    nombre: "Mariposa Rosa",
    categoria: "Pequeños",
    precio: 26000,
    precioHasta: 34000,
    descripcion: "De 6 a 8 rosas con gypsophila y mariposa.",
    foto: "fotos/P01-mariposa-rosa.jpg"
  },
  {
    codigo: "P02",
    nombre: "Noche Elegante",
    categoria: "Pequeños",
    precio: 52000,
    precioHasta: 66000,
    descripcion: "De 6 a 8 lirios en blanco y negro.",
    foto: "fotos/P02-noche-elegante.jpg"
  },
  {
    codigo: "P03",
    nombre: "Pasión Dorada",
    categoria: "Pequeños",
    precio: 30000,
    precioHasta: 0,
    descripcion: "7 rosas rojas con perlas y mariposa dorada.",
    foto: "fotos/P03-pasion-dorada.jpg"
  },
  {
    codigo: "O01",
    nombre: "Osito Rosa",
    categoria: "Osos florales",
    precio: 58000,
    precioHasta: 0,
    descripcion: "Oso pequeño de rosas rosadas.",
    foto: "fotos/O01-osito-rosa.jpg"
  },
  {
    codigo: "O02",
    nombre: "Oso Nube",
    categoria: "Osos florales",
    precio: 75000,
    precioHasta: 0,
    descripcion: "Oso grande de rosas blancas.",
    foto: "fotos/O02-oso-nube.jpg"
  },
  {
    codigo: "A01",
    nombre: "Corona",
    categoria: "Adicionales",
    precio: 7000,
    precioHasta: 0,
    descripcion: "Añádela para decorar tu ramo.",
    foto: "fotos/A01-corona.jpg"
  },
  {
    codigo: "A02",
    nombre: "Mariposa",
    categoria: "Adicionales",
    precio: 5000,
    precioHasta: 0,
    descripcion: "Añádela para decorar tu ramo.",
    foto: "fotos/A02-mariposa.jpg"
  },
  {
    codigo: "A03",
    nombre: "Peluche",
    categoria: "Adicionales",
    precio: 0,
    precioHasta: 0,
    descripcion: "El precio varía según el peluche que prefieras.",
    foto: "fotos/A03-peluche.jpg"
  },
  {
    codigo: "A04",
    nombre: "Dulces y chocolates",
    categoria: "Adicionales",
    precio: 0,
    precioHasta: 0,
    descripcion: "El precio varía según lo que desees.",
    foto: "fotos/A04-dulces-chocolates.jpg"
  },
];
