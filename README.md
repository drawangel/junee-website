# Junee AI Website

Website corporativo para Junee AI, construido con Astro y TailwindCSS.

## Stack Tecnológico

- **Framework**: Astro 5.x
- **Estilos**: TailwindCSS 4.x
- **Fuentes**: Google Fonts (Inter)
- **Iconos**: Material Symbols
- **Formularios**: Web3Forms
- **Deployment**: Vercel

## Estructura del Proyecto

```
junee-website/
├── src/
│   ├── components/      # Componentes reutilizables (Header, Footer, Button, Card)
│   ├── layouts/         # Layout principal con estructura HTML común
│   ├── pages/           # Páginas del sitio (rutas automáticas)
│   └── styles/          # Estilos globales con configuración Tailwind
├── public/              # Assets estáticos
└── package.json
```

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- npm o pnpm

### Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Páginas del Sitio

1. **Home** (`/`) - Página principal con hero, features y stats
2. **Productos** (`/productos`) - Grid de productos (Junee Taxo, Meta, Flow)
3. **Cómo te ayudamos** (`/como-te-ayudamos`) - Soluciones por sector
4. **Sobre Nosotros** (`/sobre-nosotros`) - Equipo y misión
5. **Contacto** (`/contacto`) - Formulario de contacto funcional

## Configuración del Formulario de Contacto

El formulario usa Web3Forms (servicio gratuito). Para activarlo:

1. Ve a [web3forms.com](https://web3forms.com)
2. Crea una cuenta y obtén tu Access Key
3. Reemplaza `YOUR_ACCESS_KEY_HERE` en `src/pages/contacto.astro` (línea 23)

```astro
<input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI" />
```

## Deploy en Vercel

### Opción 1: Deploy automático desde GitHub

1. Sube el código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente que es Astro
4. Deploy automático en cada push

### Opción 2: Deploy manual

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## Personalización

### Colores

Los colores se configuran en `src/styles/global.css`:

```css
--color-primary: #9790e1;
--color-background-light: #f9fafb;
--color-background-dark: #111827;
```

### Fuentes

La fuente principal (Inter) se carga desde Google Fonts en `src/layouts/Layout.astro`.

### Componentes

- `Button.astro` - Botón reutilizable con variantes primary/secondary
- `Card.astro` - Tarjeta con icono, título y descripción
- `Header.astro` - Navegación sticky con logo y menú
- `Footer.astro` - Footer con links y copyright

## Mejoras Futuras (No incluidas en MVP)

- [ ] Dark mode toggle funcional
- [ ] Animaciones con AOS o Framer Motion
- [ ] Integración con Calendly
- [ ] Blog con contenido dinámico
- [ ] Internacionalización (i18n)
- [ ] Analytics (Google Analytics / Plausible)

## Soporte

Para dudas o problemas, contacta al equipo de desarrollo.

---

**© 2024 Junee Technologies, Inc.** Todos los derechos reservados.
