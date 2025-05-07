import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, ChevronRight, Code, Cpu, ExternalLink, Lightbulb, Rocket, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Tech Trek</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="#hub" className="text-sm font-medium hover:text-primary">
              Tech Trek Hub
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-primary">
              Noticias
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            Únete
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Tech Trek ITBA</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Conectando estudiantes al mundo tecnológico.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary text-black hover:bg-primary/90">Explorar Eventos</Button>
                  <Button variant="outline" className="border-input hover:bg-accent hover:text-accent-foreground">
                    Únete a Nosotros
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Tech Trek Hero"
                  className="rounded-lg object-cover border-4 border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary text-black hover:bg-primary/90">Sobre Nosotros</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">¿Qué es Tech Trek?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tech Trek es una organización liderada por estudiantes del ITBA (Instituto Tecnológico de Buenos
                  Aires) apasionados por la tecnología, la innovación y el emprendimiento. Creamos oportunidades para
                  que los estudiantes exploren el mundo tecnológico a través de eventos, talleres y networking.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-black">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Talleres de Programación</h3>
                <p className="text-muted-foreground">
                  Sesiones prácticas de programación dirigidas por profesionales de la industria para ayudar a los
                  estudiantes a desarrollar habilidades prácticas.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-black">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Mentoría para Startups</h3>
                <p className="text-muted-foreground">
                  Conectamos con emprendedores exitosos que brindan orientación sobre cómo convertir ideas en negocios
                  viables.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-black">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Eventos de Networking</h3>
                <p className="text-muted-foreground">
                  Encuentros regulares con profesionales tecnológicos, creando conexiones valiosas para oportunidades
                  futuras.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="hub" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Tech Trek Hub Event"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <Badge className="bg-primary text-black hover:bg-primary/90">Evento Anual</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Trek Hub</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nuestro evento anual insignia donde los estudiantes pueden conectarse con líderes de la industria,
                  participar en talleres y explorar oportunidades profesionales en tecnología.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Próximo Evento: 15-17 de Octubre, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Asistencia Esperada: Más de 500 estudiantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span>Más de 20 Empresas Tecnológicas</span>
                  </div>
                </div>
                <Button className="bg-primary text-black hover:bg-primary/90">
                  Registrarse para Tech Trek Hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary text-black hover:bg-primary/90">Últimas Actualizaciones</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Portal de Noticias Tech Trek</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mantente actualizado con lo último en tecnología, startups y eventos de Tech Trek.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-8">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="events">Eventos</TabsTrigger>
                <TabsTrigger value="tech">Tecnología</TabsTrigger>
                <TabsTrigger value="startups">Startups</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Artículo+${i}`}
                          width={400}
                          height={200}
                          alt={`Artículo ${i}`}
                          className="w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-primary text-black hover:bg-primary/90">
                          {i % 3 === 0 ? "Evento" : i % 3 === 1 ? "Tecnología" : "Startup"}
                        </Badge>
                        <CardTitle className="text-xl mb-2">
                          {i % 3 === 0
                            ? `Próximo Taller: Fundamentos de Desarrollo Web`
                            : i % 3 === 1
                              ? `Nuevo Avance en IA Cambia Todo`
                              : `Startup Estudiantil Recauda $2M en Financiamiento`}
                        </CardTitle>
                        <CardDescription>
                          {i % 3 === 0
                            ? `Únete a nosotros para una sesión interactiva sobre técnicas modernas de desarrollo web.`
                            : i % 3 === 1
                              ? `Los últimos avances en inteligencia artificial están revolucionando cómo interactuamos con la tecnología.`
                              : `Una startup fundada por estudiantes universitarios ha asegurado un financiamiento significativo para su solución innovadora.`}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Mayo {i + 1}, 2025</span>
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          Leer Más <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline">Cargar Más Artículos</Button>
                </div>
              </TabsContent>
              <TabsContent value="events" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Evento+${i}`}
                          width={400}
                          height={200}
                          alt={`Evento ${i}`}
                          className="w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-primary text-black hover:bg-primary/90">Evento</Badge>
                        <CardTitle className="text-xl mb-2">
                          {i === 1
                            ? `Próximo Taller: Fundamentos de Desarrollo Web`
                            : i === 2
                              ? `Charla Tecnológica: Futuro del Blockchain`
                              : `Networking con Profesionales de la Industria`}
                        </CardTitle>
                        <CardDescription>
                          {i === 1
                            ? `Únete a nosotros para una sesión interactiva sobre técnicas modernas de desarrollo web.`
                            : i === 2
                              ? `Aprende sobre la tecnología blockchain y sus aplicaciones más allá de las criptomonedas.`
                              : `Conéctate con profesionales de empresas tecnológicas líderes en un ambiente casual.`}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Mayo {i + 5}, 2025</span>
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          Leer Más <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tech" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Tecnología+${i}`}
                          width={400}
                          height={200}
                          alt={`Noticias de Tecnología ${i}`}
                          className="w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-primary text-black hover:bg-primary/90">Tecnología</Badge>
                        <CardTitle className="text-xl mb-2">
                          {i === 1
                            ? `Nuevo Avance en IA Cambia Todo`
                            : i === 2
                              ? `El Auge de la Computación Cuántica`
                              : `Web3 y el Futuro de Internet`}
                        </CardTitle>
                        <CardDescription>
                          {i === 1
                            ? `Los últimos avances en inteligencia artificial están revolucionando cómo interactuamos con la tecnología.`
                            : i === 2
                              ? `La computación cuántica está avanzando hacia aplicaciones prácticas en varias industrias.`
                              : `Explorando cómo las tecnologías Web3 están remodelando nuestras experiencias digitales.`}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Mayo {i + 2}, 2025</span>
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          Leer Más <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="startups" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Startup+${i}`}
                          width={400}
                          height={200}
                          alt={`Noticias de Startup ${i}`}
                          className="w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-primary text-black hover:bg-primary/90">Startup</Badge>
                        <CardTitle className="text-xl mb-2">
                          {i === 1
                            ? `Startup Estudiantil Recauda $2M en Financiamiento`
                            : i === 2
                              ? `Innovadores del Campus Lanzan Nueva App`
                              : `Exalumno de Tech Trek Crea Solución Tecnológica Sostenible`}
                        </CardTitle>
                        <CardDescription>
                          {i === 1
                            ? `Una startup fundada por estudiantes universitarios ha asegurado un financiamiento significativo para su solución innovadora.`
                            : i === 2
                              ? `Estudiantes de nuestra universidad han lanzado una nueva aplicación que está ganando tracción en el mercado.`
                              : `Un ex miembro de Tech Trek ha creado una solución tecnológica que aborda desafíos ambientales.`}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Mayo {i + 3}, 2025</span>
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          Leer Más <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Únete a la Comunidad Tech Trek
                </h2>
                <p className="max-w-[600px] text-black md:text-xl">
                  Sé parte de una vibrante comunidad de entusiastas de la tecnología, innovadores y futuros líderes de
                  la industria. Regístrate para recibir nuestro boletín y mantenerte actualizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-background text-primary hover:bg-background/90">Suscribirse</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">10+</h3>
                  <p className="text-center text-sm">Eventos Por Año</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">500+</h3>
                  <p className="text-center text-sm">Miembros Activos</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">30+</h3>
                  <p className="text-center text-sm">Empresas Asociadas</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">15+</h3>
                  <p className="text-center text-sm">Startups Estudiantiles</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Rocket className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Tech Trek</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Conectando estudiantes al mundo tecnológico a través de eventos, networking y compartiendo
                conocimientos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Enlaces Rápidos</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#about" className="text-sm hover:text-primary">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#hub" className="text-sm hover:text-primary">
                      Tech Trek Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="#news" className="text-sm hover:text-primary">
                      Portal de Noticias
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-primary">
                      Únete
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Síguenos</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm hover:text-primary flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-primary flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-primary flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-primary flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Contáctanos</h3>
              <p className="text-sm">
                Tech Trek, Instituto Tecnológico de Buenos Aires (ITBA)
                <br />
                Av. Eduardo Madero 399, C1106 CABA
                <br />
                Argentina
                <br />
                Email: info@techtrek.itba.edu.ar
                <br />
                Teléfono: +54 (11) 4567-8900
              </p>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tech Trek ITBA. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
