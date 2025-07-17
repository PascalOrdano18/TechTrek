import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Rocket } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-lg">Tech Trek</span>
            </Link>

            <Button size="sm" className="bg-primary text-black hover:bg-primary/80 transition-colors">
              Únete
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Link>

            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-6">
              Noticias Tech
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Portal de Noticias
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Las últimas actualizaciones del mundo tecnológico</p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "IA Generativa en Startups", category: "Tecnología", date: "15 May" },
                { title: "Workshop Blockchain", category: "Evento", date: "12 May" },
                { title: "Startup Recauda $2M", category: "Startup", date: "10 May" },
                { title: "Computación Cuántica", category: "Tecnología", date: "8 May" },
                { title: "Networking Night", category: "Evento", date: "5 May" },
                { title: "Fintech Argentina", category: "Startup", date: "3 May" },
              ].map((article, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                        {article.category}
                      </Badge>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/20 hover:text-black bg-transparent transition-colors">
                Cargar Más
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-lg">Tech Trek ITBA</span>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Tech Trek ITBA. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
