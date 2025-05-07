import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Rocket } from "lucide-react"
import { articles } from "@/data/articles"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(a => a.id === parseInt(params.id))

  if (!article) {
    notFound()
  }

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
        </div>
      </header>

      <main className="flex-1">
        <article className="container px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/news">
              <Button variant="ghost" size="sm" className="mb-8 gap-1">
                <ChevronLeft className="h-4 w-4" />
                Volver a Noticias
              </Button>
            </Link>

            <div className="space-y-4">
              <Badge className="bg-primary text-black hover:bg-primary/90">
                {article.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </div>

            <div className="my-8">
              <Image
                src={article.imageUrl}
                width={800}
                height={400}
                alt={article.title}
                className="w-full rounded-lg object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
} 