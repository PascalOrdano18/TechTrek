import { Article } from '@/types/news';

export const articles: Article[] = [
  {
    id: 1,
    title: "Próximo Taller: Desarrollo Web Básico",
    description: "Únete a nosotros para una sesión interactiva sobre técnicas modernas de desarrollo web.",
    content: `En este taller práctico, exploraremos los fundamentos del desarrollo web moderno. Los participantes aprenderán:

1. HTML5 y CSS3 avanzado
2. JavaScript moderno (ES6+)
3. React.js para interfaces dinámicas
4. Mejores prácticas de desarrollo
5. Despliegue de aplicaciones web

El taller está diseñado tanto para principiantes como para desarrolladores que buscan actualizar sus conocimientos. No se requiere experiencia previa, pero se recomienda tener conocimientos básicos de programación.

Fecha: 15 de Mayo, 2025
Duración: 4 horas
Lugar: Aula Magna, ITBA
Cupos limitados: 30 participantes`,
    category: "Evento",
    date: "Mayo 1, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Evento+1",
    author: "Juan Pérez"
  },
  {
    id: 2,
    title: "Nuevo Avance en IA Cambia Todo",
    description: "Los últimos avances en inteligencia artificial están revolucionando cómo interactuamos con la tecnología.",
    content: `Un equipo de investigadores ha desarrollado un nuevo modelo de IA que promete revolucionar la forma en que interactuamos con la tecnología. Este avance representa un salto significativo en la capacidad de las máquinas para entender y procesar el lenguaje natural.

Características principales:
- Comprensión contextual mejorada
- Capacidad de razonamiento más sofisticada
- Mejor manejo de múltiples idiomas
- Reducción significativa en el consumo de recursos

Implicaciones para la industria:
1. Nuevas oportunidades en desarrollo de software
2. Mejoras en la automatización de procesos
3. Avances en investigación científica
4. Transformación en la educación

Los expertos predicen que este avance podría tener un impacto similar al de la revolución industrial en la forma en que trabajamos y vivimos.`,
    category: "Tecnología",
    date: "Mayo 2, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Tecnología+1",
    author: "María González"
  },
  {
    id: 3,
    title: "Startup Estudiantil Recauda $2M en Financiamiento",
    description: "Una startup fundada por estudiantes universitarios ha asegurado un financiamiento significativo para su solución innovadora.",
    content: `TechInnovate, una startup fundada por estudiantes del ITBA, ha logrado recaudar $2 millones en su ronda de financiamiento Serie A. La empresa, que desarrolla soluciones de inteligencia artificial para optimizar procesos industriales, ha captado la atención de importantes inversores del ecosistema tecnológico.

Detalles del financiamiento:
- Monto total: $2M
- Líder de la ronda: TechVentures Capital
- Participación de: Angel Investors y Fondo Universitario

La startup, fundada hace apenas 18 meses, ya cuenta con:
- 15 empleados
- 5 clientes corporativos
- 3 patentes pendientes

"Este financiamiento nos permitirá escalar nuestras operaciones y acelerar el desarrollo de nuestra tecnología", afirma el CEO y cofundador, Carlos Rodríguez.

La empresa planea utilizar los fondos para:
1. Expandir el equipo de desarrollo
2. Acelerar la investigación en IA
3. Ampliar la presencia en el mercado latinoamericano
4. Desarrollar nuevas funcionalidades`,
    category: "Startup",
    date: "Mayo 3, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Startup+1",
    author: "Ana Martínez"
  }
]; 