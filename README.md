# Curso CAP - Landing Page

Landing page para el Curso de Certificado de Aptitud Profesional (CAP) dirigido a inmigrantes en España.

## 🎨 Metodología de Colores 60-30-10

Este proyecto implementa la metodología de diseño 60-30-10 para una jerarquía visual profesional:

### Colores Principales

#### 60% - Color Dominante
- **Variable:** `--brand-background: #FFFFFF`
- **Uso:** Fondos principales, áreas de contenido, tarjetas
- **Aplicación:** Mayoría del diseño para crear espacios limpios y legibles

#### 30% - Color Secundario  
- **Variable:** `--brand-accent: #F7AF32`
- **Uso:** Header principal, elementos de navegación secundarios
- **Aplicación:** Elementos de soporte que complementan sin competir

#### 10% - Color de Acento
- **Variable:** `--brand-action: #BC2527`
- **Uso:** Botones CTA, precios, badges premium, llamadas a la acción
- **Aplicación:** Elementos que requieren atención inmediata del usuario

### Colores de Estado (Status Colors)

#### Success (Verde)
- **Light:** `--success-light: #D1FAE5`
- **Base:** `--success: #10B981`
- **Dark:** `--success-dark: #047857`
- **Uso:** Mensajes de éxito, elementos positivos

#### Info (Azul)
- **Light:** `--info-light: #DBEAFE`
- **Base:** `--info: #3B82F6`
- **Dark:** `--info-dark: #1D4ED8`
- **Uso:** Notas informativas, avisos generales

#### Warning (Amarillo)
- **Light:** `--warning-light: #FEF3C7`
- **Base:** `--warning: #F59E0B`
- **Dark:** `--warning-dark: #D97706`
- **Uso:** Advertencias, elementos que requieren precaución

#### Error (Rojo)
- **Light:** `--error-light: #FEE2E2`
- **Base:** `--error: #EF4444`
- **Dark:** `--error-dark: #DC2626`
- **Uso:** Errores, elementos críticos

## 🎯 Aplicación de Colores por Elemento

### Elementos con Color Brand-Action (#BC2527)
- Iconos de tiempo (`fas fa-clock`)
- Títulos principales (`h3`)
- Iconos de ventajas (`.advantage-icon`)
- Iconos de envío (`fas fa-paper-plane`)
- Botones de formulario (`.submit-btn`)
- Botones de descarga (`.download-btn`)
- Botón scroll-to-top (`.scroll-top-btn`)

### Elementos con Gradientes
Mantienen degradados usando `--brand-action` y `--red-700`:
- `.advantage-icon`: `linear-gradient(135deg, var(--brand-action), var(--red-700))`
- `.submit-btn`: `linear-gradient(135deg, var(--brand-action), var(--red-700))`

## 📋 Reglas de Estilo

### Consistencia de Colores
1. **Nunca usar colores hardcodeados** - Siempre usar variables CSS
2. **Respetar la jerarquía 60-30-10** en nuevos elementos
3. **Usar colores de estado** solo para su propósito específico
4. **Mantener contraste adecuado** para accesibilidad

### Estructura CSS
1. **Variables al inicio** del archivo en `:root`
2. **Agrupación lógica** de estilos por sección
3. **Evitar duplicación** de reglas CSS
4. **Usar nombres descriptivos** para clases

### Responsive Design
- Mobile-first approach
- Breakpoints estándar
- Elementos flexibles y adaptativos

## 🚀 Desarrollo

### Instalación
```bash
# Clonar repositorio
git clone [url-repo]

# Navegar al directorio
cd curso-cap-section

# Iniciar servidor local
python3 -m http.server 8001
```

### Estructura de Archivos
```
curso-cap-section/
├── index.html          # Página principal
├── styles.css          # Estilos principales (metodología 60-30-10)
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación
├── netlify.toml        # Configuración de despliegue
└── .gitignore         # Archivos ignorados
```

## 📱 Características

- ✅ Diseño responsive
- ✅ Metodología de colores 60-30-10
- ✅ Formulario de contacto funcional
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Accesibilidad web

## 🎨 Paleta de Colores Completa

### Escala de Rojos
- `--red-50: #FEF2F2` a `--red-950: #450A0A`

### Escala de Ámbar
- `--amber-50: #FFFBEB` a `--amber-950: #451A03`

### Escala de Grises (Slate)
- `--slate-50: #F8FAFC` a `--slate-900: #0F172A`

---

**Desarrollado siguiendo las mejores prácticas de diseño web y UX** Web para Asesoría para Inmigrantes

Esta es una sección web completa y moderna para el **Curso CAP (Certificado de Aptitud Profesional)** diseñada para integrarse en el sitio web de Asesoría para Inmigrantes.

## 📋 Contenido Incluido

### Secciones Principales:
1. **Hero Section** - Título principal con espacio para video explicativo
2. **Información del Curso** - Detalles completos sobre el CAP
3. **Ventajas Clave** - 4 beneficios principales con iconos
4. **Paquetes de Precios** - Pack Básico (2.400€) y Pack Premium (3.400€)
5. **Formulario de Contacto** - Formulario funcional con validación
6. **Métodos de Contacto Alternativos** - WhatsApp, redes sociales, email, oficina
7. **Recursos Descargables** - Sección para descargar PDF

## 🎨 Características de Diseño

- **Diseño Responsivo** - Optimizado para móviles, tablets y desktop
- **Colores de Marca** - Rojo corporativo (#BC2527) y naranja accent (#F7AF32)
- **Tipografía Moderna** - Fuente Inter para mejor legibilidad
- **Iconos Font Awesome** - Iconos profesionales y reconocibles
- **Animaciones Suaves** - Efectos hover y transiciones elegantes
- **Gradientes Modernos** - Fondos atractivos y profesionales

## 🎨 Paleta de Colores Completa

### **Colores Base de Marca:**
- **Background:** `#FFFFFF` (Blanco)
- **Action (Brand):** `#BC2527` (Rojo corporativo)
- **Accent (Brand):** `#F7AF32` (Naranja/Amarillo)

### **Escala de Rojos (Action Color):**
```css
--red-50: #FEF2F2
--red-100: #FEE2E2
--red-200: #FECACA
--red-300: #FCA5A5
--red-400: #F87171
--red-500: #EF4444
--red-600: #DC2626
--red-700: #B91C1C  /* Muy cerca a tu #BC2527 */
--red-800: #991B1B
--red-900: #7F1D1D
--red-950: #450A0A
```

### **Escala de Naranjas/Amarillos (Accent Color):**
```css
--amber-50: #FFFBEB
--amber-100: #FEF3C7
--amber-200: #FDE68A
--amber-300: #FCD34D
--amber-400: #FBBF24  /* Muy cerca a tu #F7AF32 */
--amber-500: #F59E0B
--amber-600: #D97706
--amber-700: #B45309
--amber-800: #92400E
--amber-900: #78350F
--amber-950: #451A03
```

### **Escala de Grises (Para textos y fondos):**
```css
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-400: #9CA3AF
--gray-500: #6B7280
--gray-600: #4B5563
--gray-700: #374151
--gray-800: #1F2937
--gray-900: #111827
--gray-950: #030712
```

### **Colores Neutros:**
```css
--white: #FFFFFF
--black: #000000
--slate-50: #F8FAFC
--slate-100: #F1F5F9
--slate-200: #E2E8F0
--slate-300: #CBD5E1
--slate-400: #94A3B8
--slate-500: #64748B
--slate-600: #475569
--slate-700: #334155
--slate-800: #1E293B
--slate-900: #0F172A
```

### **Colores de Estado:**
```css
--success-light: #D1FAE5
--success: #10B981
--success-dark: #047857
--warning-light: #FEF3C7
--warning: #F59E0B
--warning-dark: #D97706
--error-light: #FEE2E2
--error: #EF4444
--error-dark: #DC2626
--info-light: #DBEAFE
--info: #3B82F6
--info-dark: #1D4ED8
```

## 🚀 Funcionalidades Interactivas

### Formulario de Contacto:
- Validación en tiempo real
- Integración directa con WhatsApp
- Campos obligatorios marcados
- Mensajes de notificación
- Formato automático para números de teléfono

### Elementos Interactivos:
- Botones de redes sociales funcionales
- Scroll suave entre secciones
- Botón de scroll to top
- Animaciones al hacer scroll
- Efectos hover en tarjetas

## 📱 Compatibilidad

- **Móviles**: Optimizado para pantallas pequeñas
- **Tablets**: Diseño adaptativo para tablets
- **Desktop**: Experiencia completa en pantallas grandes
- **Navegadores**: Compatible con Chrome, Firefox, Safari, Edge

## 🔧 Archivos Incluidos

1. **index.html** - Estructura HTML completa
2. **styles.css** - Estilos CSS responsivos y modernos
3. **script.js** - JavaScript para interactividad
4. **README.md** - Esta documentación

## 📞 Información de Contacto Integrada

- **WhatsApp**: +34 682 51 83 39
- **Email**: Admin@asesoriaparainmigrantes.com
- **Oficina**: Calle de Galileo 70, Madrid
- **Redes Sociales**: TikTok e Instagram (enlaces configurables)

## 🎯 Optimizaciones SEO

- Meta tags optimizados
- Estructura semántica HTML5
- Títulos jerárquicos apropiados
- Texto alternativo para accesibilidad
- Schema markup preparado

## 📋 Información del Curso Incluida

### Detalles Técnicos:
- **Duración**: 6 meses de gestión integral
- **Modalidad**: 100% Presencial (140 horas)
- **Validez**: Reconocimiento en toda la UE
- **Renovación**: Cada 5 años

### Paquetes:
- **Pack Básico (2.400€)**: Gestión completa + curso
- **Pack Premium (3.400€)**: Todo lo anterior + permisos de trabajo

### Ventajas Destacadas:
- 95% de empleabilidad
- Certificación europea oficial
- Residencia legal por estudios
- Red de 200+ empresas colaboradoras

## 🚀 Instrucciones de Implementación

1. **Subir archivos** al servidor web
2. **Configurar enlaces** de redes sociales en el HTML
3. **Añadir video** en la sección hero
4. **Configurar PDF** para descarga
5. **Integrar** con el sistema de gestión existente

## 📈 Próximos Pasos Recomendados

1. Añadir el video explicativo del curso
2. Configurar el PDF descargable
3. Integrar con sistema de CRM
4. Añadir Google Analytics
5. Configurar formulario backend
6. Optimizar para velocidad de carga

## 🎨 Personalización

El diseño está preparado para fácil personalización:
- Colores en variables CSS
- Espaciado consistente
- Componentes modulares
- Fácil modificación de contenido

---

**Desarrollado para Asesoría para Inmigrantes**  
*Especialistas en trámites de extranjería e inmigración en España*
