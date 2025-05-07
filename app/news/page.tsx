import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Rocket } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Tech Trek</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="/#hub" className="text-sm font-medium hover:text-primary">
              Tech Trek Hub
            </Link>
            <Link href="/news" className="text-sm font-medium text-primary">
              Noticias
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary text-black hover:bg-primary/90">Noticias</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Portal de Noticias Tech Trek
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Lo último en tecnología, startups y eventos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Artículos Recientes</h2>
                <TabsList>
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="events">Eventos</TabsTrigger>
                  <TabsTrigger value="tech">Tecnología</TabsTrigger>
                  <TabsTrigger value="startups">Startups</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
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
                            ? `Próximo Taller: Desarrollo Web Básico ${i}`
                            : i % 3 === 1
                              ? `Nuevo Avance en IA Cambia Todo ${i}`
                              : `Startup Estudiantil Recauda $2M en Financiamiento ${i}`}
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
                        <span className="text-sm text-muted-foreground">Mayo {i}, 2025</span>
                        <Button variant="ghost" size="sm" className="gap-1 text-primary">
                          Leer Más <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Página siguiente</span>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
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
                          {i % 3 === 0
                            ? `Próximo Taller: Desarrollo Web Básico ${i}`
                            : i % 3 === 1
                              ? `Charla Tecnológica: Futuro del Blockchain ${i}`
                              : `Networking con Profesionales de la Industria ${i}`}
                        </CardTitle>
                        <CardDescription>
                          {i % 3 === 0
                            ? `Únete a nosotros para una sesión interactiva sobre técnicas modernas de desarrollo web.`
                            : i % 3 === 1
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

                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Página siguiente</span>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="tech" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
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
                          {i % 3 === 0
                            ? `Nuevo Avance en IA Cambia Todo ${i}`
                            : i % 3 === 1
                              ? `El Auge de la Computación Cuántica ${i}`
                              : `Web3 y el Futuro de Internet ${i}`}
                        </CardTitle>
                        <CardDescription>
                          {i % 3 === 0
                            ? `Los últimos avances en inteligencia artificial están revolucionando cómo interactuamos con la tecnología.`
                            : i % 3 === 1
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

                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Página siguiente</span>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="startups" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
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
                          {i % 3 === 0
                            ? `Startup Estudiantil Recauda $2M en Financiamiento ${i}`
                            : i % 3 === 1
                              ? `Innovadores del Campus Lanzan Nueva App ${i}`
                              : `Exalumno de Tech Trek Crea Solución Tecnológica Sostenible ${i}`}
                        </CardTitle>
                        <CardDescription>
                          {i % 3 === 0
                            ? `Una startup fundada por estudiantes universitarios ha asegurado un financiamiento significativo para su solución innovadora.`
                            : i % 3 === 1
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

                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="min-w-8">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Página siguiente</span>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              <span className="font-bold">Tech Trek ITBA</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 sm:mt-0">
              © {new Date().getFullYear()} Tech Trek ITBA. Todos los derechos reservados.
            </p>
            <Link href="/" className="text-xs text-primary mt-4 sm:mt-0">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
