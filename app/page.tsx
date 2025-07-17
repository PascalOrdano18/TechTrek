"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Rocket, Zap, Globe, Users, Award, Medal, Star } from "lucide-react"
import { getSponsorsByTier } from "@/data/sponsors"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
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

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                Misión
              </Link>
              <Link href="#events" className="text-sm text-gray-400 hover:text-white transition-colors">
                Eventos
              </Link>
              <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>

            <Button size="sm" className="bg-primary text-black hover:bg-primary/80 transition-colors">
              Únete
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 mb-6">
                ITBA • Buenos Aires
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Tech Trek
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Explorando el futuro tecnológico
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/80 transition-colors group">
                Comenzar Viaje
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/20 hover:text-black bg-transparent transition-colors"
              >
                Explorar
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Qué es Tech Trek?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Tech Trek es la organización estudiantil líder en tecnología del{" "}
                <span className="text-primary">Instituto Tecnológico de Buenos Aires (ITBA)</span>. Conectamos
                estudiantes con el ecosistema tecnológico argentino e internacional a través de eventos, workshops y
                networking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Workshops</h3>
                  <p className="text-gray-400 text-sm">Talleres técnicos con expertos</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Networking</h3>
                  <p className="text-gray-400 text-sm">Conexiones con la industria</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Startups</h3>
                  <p className="text-gray-400 text-sm">Apoyo al emprendimiento</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Comunidad</h3>
                  <p className="text-gray-400 text-sm">Red de estudiantes tech</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Nuestro Impacto</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-400">Estudiantes alcanzados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-400">Eventos realizados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-400">Empresas colaboradoras</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section - Tech Trek Hub Card */}
        <section id="events" className="py-32 px-6 flex items-center justify-center min-h-screen">
          <div className="container mx-auto max-w-2xl">
            <div
              className="group relative perspective-1000"
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector(".tech-card") as HTMLElement
                if (card) {
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = (y - centerY) / 20
                  const rotateY = (centerX - x) / 20

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector(".tech-card") as HTMLElement
                if (card) {
                  card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                }
              }}
            >
              {/* Main Event Card */}
              <div 
                className="tech-card relative w-full aspect-square shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-lg"
                onClick={() => window.open('https://app.fanz.com.ar/event/23376?eventDateId=33468', '_blank')}
              >
                <Image
                  src="/tthub.jpeg"
                  alt="Tech Trek Hub '25"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* 3D Shadow Layers */}
                <div className="absolute inset-0 bg-black/20 transform translate-x-1 translate-y-1 -z-10 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm rounded-lg"></div>
                <div className="absolute inset-0 bg-black/30 transform translate-x-2 translate-y-2 -z-20 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-md rounded-lg"></div>
              </div>

              {/* Floating Light Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 12}%`,
                      animationDelay: `${i * 200}ms`,
                      animation: "float 3s ease-in-out infinite",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/80 font-semibold px-12 py-6 text-xl transition-colors"
                onClick={() => window.open('https://app.fanz.com.ar/event/23376?eventDateId=33468', '_blank')}
              >
                Registrarse Ahora
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-6 bg-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Team</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                El equipo de estudiantes apasionados que lidera Tech Trek
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                {
                  name: "María González",
                  role: "Presidente & Fundadora",
                  career: "Ingeniería en Informática",
                  year: "4to año",
                },
                { name: "Juan Pérez", role: "VP de Tecnología", career: "Ingeniería en Sistemas", year: "3er año" },
                { name: "Ana Rodríguez", role: "VP de Eventos", career: "Ingeniería Industrial", year: "4to año" },
                {
                  name: "Carlos López",
                  role: "VP de Comunicaciones",
                  career: "Ingeniería en Informática",
                  year: "2do año",
                },
              ].map((member, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                      <span className="text-primary font-bold text-xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-primary text-lg mb-3">{member.role}</p>
                    <p className="text-gray-400 mb-1">{member.career}</p>
                    <p className="text-gray-500 text-sm">{member.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contributors</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Mentores y profesionales que guían nuestro crecimiento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
              {[
                {
                  name: "Dr. Roberto Fernández",
                  role: "Mentor en Inteligencia Artificial",
                  company: "Google Argentina",
                  expertise: "Machine Learning & AI",
                },
                {
                  name: "Ing. Laura Castro",
                  role: "Mentora en Blockchain",
                  company: "Binance",
                  expertise: "Web3 & DeFi",
                },
                {
                  name: "Lic. Pablo Morales",
                  role: "Mentor en Startups",
                  company: "Mercado Libre",
                  expertise: "Product & Growth",
                },
                { name: "Dra. Carmen Ruiz", role: "Mentora en UX/UI", company: "Globant", expertise: "Design Systems" },
                {
                  name: "Ing. Andrés Vega",
                  role: "Mentor en DevOps",
                  company: "Auth0",
                  expertise: "Cloud & Infrastructure",
                },
                {
                  name: "Lic. Valeria Sosa",
                  role: "Mentora en Data Science",
                  company: "Despegar",
                  expertise: "Analytics & ML",
                },
              ].map((contributor, i) => (
                <Card
                  key={i}
                  className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <span className="text-primary font-bold text-lg">
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{contributor.name}</h4>
                    <p className="text-primary text-sm mb-2">{contributor.role}</p>
                    <p className="text-gray-400 text-sm mb-2">{contributor.company}</p>
                    <p className="text-gray-500 text-xs">{contributor.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-32 px-6 bg-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sponsors</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Empresas que apoyan nuestra visión tecnológica</p>
            </div>

            {/* Platinum Sponsors */}
            {getSponsorsByTier("Platinum").length > 0 && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-yellow-400">Platinum</h3>
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <p className="text-gray-400">Nuestros patrocinadores principales</p>
                </div>
                <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                  {getSponsorsByTier("Platinum").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border-yellow-400/20 backdrop-blur-sm group hover:from-yellow-400/20 hover:to-yellow-600/10 transition-all duration-500 shadow-lg"
                    >
                      <CardContent className="p-10 text-center">
                        <div className="w-28 h-28 bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-transform shadow-lg">
                          <span className="text-yellow-400 font-bold text-3xl">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-bold text-2xl mb-3 group-hover:text-yellow-400 transition-colors">
                          {sponsor.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
                        <Badge variant="outline" className="border-yellow-400/50 text-yellow-400 bg-yellow-400/10">
                          Platinum Sponsor
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Gold Sponsors */}
            {getSponsorsByTier("Gold").length > 0 && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Medal className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-2xl font-bold text-yellow-500">Gold</h3>
                    <Medal className="w-6 h-6 text-yellow-500" />
                  </div>
                  <p className="text-gray-400">Patrocinadores oro</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                  {getSponsorsByTier("Gold").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 backdrop-blur-sm group hover:from-yellow-500/20 hover:to-yellow-600/10 transition-all duration-500"
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/30 to-yellow-600/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                          <span className="text-yellow-500 font-bold text-2xl">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2 group-hover:text-yellow-500 transition-colors">
                          {sponsor.name}
                        </h4>
                        <p className="text-gray-400 text-xs mb-3">{sponsor.description}</p>
                        <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 bg-yellow-500/10">
                          Gold Sponsor
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Silver Sponsors */}
            {getSponsorsByTier("Silver").length > 0 && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-gray-400" />
                    <h3 className="text-2xl font-bold text-gray-400">Silver</h3>
                    <Star className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Patrocinadores plata</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {getSponsorsByTier("Silver").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-gradient-to-br from-gray-400/10 to-gray-500/5 border-gray-400/20 backdrop-blur-sm group hover:from-gray-400/20 hover:to-gray-500/10 transition-all duration-300"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-400/30 to-gray-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                          <span className="text-gray-400 font-bold text-lg">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-semibold text-sm group-hover:text-gray-300 transition-colors mb-2">
                          {sponsor.name}
                        </h4>
                        <Badge variant="outline" className="border-gray-400/50 text-gray-400 bg-gray-400/10 text-xs">
                          Silver
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Nos acompañan */}
            {getSponsorsByTier("Nos acompañan").length > 0 && (
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Nos acompañan</h3>
                  <p className="text-gray-500">Organizaciones que apoyan nuestra misión</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {getSponsorsByTier("Nos acompañan").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300"
                    >
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary font-bold text-sm">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-semibold text-xs group-hover:text-primary transition-colors">
                          {sponsor.name}
                        </h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-6">¿Tu empresa quiere patrocinar Tech Trek?</p>
              <Button className="bg-primary text-black hover:bg-primary/80 transition-colors">Convertirse en Sponsor</Button>
            </div>
          </div>
        </section>



        {/* Stats Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-400">Estudiantes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-400">Eventos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-400">Empresas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-gray-400">Años</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Únete al Futuro</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Forma parte de la próxima generación de innovadores tecnológicos
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/80 transition-colors">
              Comenzar Ahora
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-bold text-lg">Tech Trek</span>
                </div>
                <p className="text-gray-400">Instituto Tecnológico de Buenos Aires</p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contacto</h3>
                <div className="space-y-2 text-gray-400">
                  <p>info@techtrek.itba.edu.ar</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Users className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Tech Trek ITBA. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
