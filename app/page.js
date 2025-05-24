import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, BookOpen, FileText, Award, ExternalLink } from "lucide-react"
import Link from "next/link"

function HomePage() {
  const recentProjects = [
    {
      id: 1,
      title: "Intelligence Artificielle en Médecine",
      description: "Développement d'algorithmes d'IA pour le diagnostic médical assisté",
      status: "En cours",
      category: "IA & Santé",
    },
    {
      id: 2,
      title: "Analyse de Données Climatiques",
      description: "Modélisation prédictive des changements climatiques régionaux",
      status: "Terminé",
      category: "Environnement",
    },
    {
      id: 3,
      title: "Cybersécurité IoT",
      description: "Sécurisation des réseaux d'objets connectés industriels",
      status: "En cours",
      category: "Sécurité",
    },
  ]

  const recentNews = [
    {
      date: "15 Jan 2025",
      title: "Publication dans Nature AI",
      description: "Notre article sur l'IA médicale a été accepté dans Nature AI",
    },
    {
      date: "10 Jan 2025",
      title: "Nouveau financement ANR",
      description: "Obtention d'un financement de 500k€ pour le projet ClimateAI",
    },
    {
      date: "05 Jan 2025",
      title: "Conférence ICML 2025",
      description: "Présentation de nos travaux à la conférence ICML à Vienne",
    },
  ]

  const stats = [
    { label: "Projets actifs", value: "12", icon: BookOpen },
    { label: "Publications", value: "45", icon: FileText },
    { label: "Chercheurs", value: "8", icon: Users },
    { label: "Prix reçus", value: "6", icon: Award },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Équipe de Recherche en
              <span className="text-blue-600"> Innovation Technologique</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous développons des solutions innovantes à l'intersection de l'intelligence artificielle, de la science
              des données et des technologies émergentes pour résoudre les défis de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projets">
                  Découvrir nos projets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/publications">Nos publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets Récents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos derniers projets de recherche et leurs impacts sur la société
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {recentProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={project.status === "En cours" ? "default" : "secondary"}>{project.status}</Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projets/${project.id}`}>
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/projets">Voir tous les projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Actualités</h2>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600">{news.description}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/actualites">Toutes les actualités</Link>
              </Button>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications Récentes</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      "Deep Learning for Medical Diagnosis: A Comprehensive Review"
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">Journal of Artificial Intelligence in Medicine, 2025</p>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Lire l'article
                      </Button>
                      <Badge variant="secondary">Q1</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">"Climate Data Analysis Using Machine Learning Techniques"</h3>
                    <p className="text-sm text-gray-600 mb-3">Environmental Science & Technology, 2024</p>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Lire l'article
                      </Button>
                      <Badge variant="secondary">Q1</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/publications">Toutes les publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Intéressé par une collaboration ?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nous sommes toujours ouverts aux collaborations académiques et industrielles. Contactez-nous pour discuter
            de vos projets.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
