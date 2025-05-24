"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ExternalLink, Download, Users, Award, BookOpen } from "lucide-react"

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")

  const publications = [
    {
      id: 1,
      title: "Deep Learning for Medical Diagnosis: A Comprehensive Review",
      authors: ["Dr. Marie Dubois", "Dr. Sophie Chen", "Dr. Ahmed Benali"],
      journal: "Journal of Artificial Intelligence in Medicine",
      year: 2025,
      type: "Article",
      impact: "Q1",
      citations: 45,
      abstract:
        "Cette revue complète examine les applications de l'apprentissage profond dans le diagnostic médical, analysant plus de 200 études récentes et identifiant les tendances émergentes.",
      keywords: ["Deep Learning", "Medical Diagnosis", "AI", "Healthcare"],
      doi: "10.1016/j.jaim.2025.01.001",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 2,
      title: "Climate Data Analysis Using Machine Learning Techniques",
      authors: ["Dr. Sophie Chen", "Dr. Marie Dubois"],
      journal: "Environmental Science & Technology",
      year: 2024,
      type: "Article",
      impact: "Q1",
      citations: 32,
      abstract:
        "Nous présentons une nouvelle approche pour l'analyse de données climatiques utilisant des techniques avancées de machine learning pour améliorer les prédictions météorologiques.",
      keywords: ["Climate Change", "Machine Learning", "Data Analysis", "Prediction"],
      doi: "10.1021/acs.est.2024.12.001",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 3,
      title: "IoT Security Framework for Industrial Applications",
      authors: ["Dr. Pierre Martin", "Dr. Ahmed Benali"],
      journal: "IEEE Transactions on Industrial Informatics",
      year: 2024,
      type: "Article",
      impact: "Q1",
      citations: 28,
      abstract:
        "Un nouveau framework de sécurité pour les applications IoT industrielles, intégrant la cryptographie légère et la détection d'intrusions en temps réel.",
      keywords: ["IoT Security", "Industrial Applications", "Cryptography", "Intrusion Detection"],
      doi: "10.1109/TII.2024.3401234",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 4,
      title: "Blockchain-based Traceability in Supply Chain Management",
      authors: ["Dr. Pierre Martin", "Dr. Sophie Chen"],
      conference: "International Conference on Blockchain Technology",
      year: 2024,
      type: "Conférence",
      citations: 15,
      abstract:
        "Présentation d'une solution blockchain pour améliorer la traçabilité dans les chaînes d'approvisionnement, avec focus sur la sécurité et la transparence des données.",
      keywords: ["Blockchain", "Supply Chain", "Traceability", "Smart Contracts"],
      doi: "10.1109/ICBT.2024.9876543",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 5,
      title: "Edge Computing Optimization for Smart Cities",
      authors: ["Dr. Ahmed Benali", "Dr. Marie Dubois"],
      journal: "ACM Transactions on Internet of Things",
      year: 2024,
      type: "Article",
      impact: "Q2",
      citations: 22,
      abstract:
        "Optimisation des ressources de calcul en périphérie pour les applications de villes intelligentes, réduisant la latence et améliorant l'efficacité énergétique.",
      keywords: ["Edge Computing", "Smart Cities", "Optimization", "Energy Efficiency"],
      doi: "10.1145/3456789.3456790",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 6,
      title: "Quantum Cryptography for Secure Communications",
      authors: ["Dr. Pierre Martin"],
      conference: "International Symposium on Quantum Computing",
      year: 2023,
      type: "Conférence",
      citations: 18,
      abstract:
        "Exploration des applications de la cryptographie quantique pour sécuriser les communications dans un monde post-quantique.",
      keywords: ["Quantum Cryptography", "Security", "Post-Quantum", "Communications"],
      doi: "10.1007/978-3-031-12345-6_12",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 7,
      title: "AI-Driven Predictive Maintenance in Manufacturing",
      authors: ["Dr. Marie Dubois", "Dr. Ahmed Benali", "Dr. Sophie Chen"],
      journal: "Journal of Manufacturing Systems",
      year: 2023,
      type: "Article",
      impact: "Q1",
      citations: 41,
      abstract:
        "Développement d'un système de maintenance prédictive basé sur l'IA pour optimiser les opérations manufacturières et réduire les temps d'arrêt.",
      keywords: ["Predictive Maintenance", "AI", "Manufacturing", "Industry 4.0"],
      doi: "10.1016/j.jmsy.2023.08.001",
      pdfUrl: "#",
      status: "Publié",
    },
    {
      id: 8,
      title: "Privacy-Preserving Data Mining Techniques",
      authors: ["Dr. Sophie Chen", "Dr. Pierre Martin"],
      journal: "IEEE Transactions on Knowledge and Data Engineering",
      year: 2023,
      type: "Article",
      impact: "Q1",
      citations: 35,
      abstract:
        "Nouvelles techniques de fouille de données préservant la confidentialité, permettant l'analyse de données sensibles sans compromettre la vie privée.",
      keywords: ["Privacy", "Data Mining", "Confidentiality", "Secure Computing"],
      doi: "10.1109/TKDE.2023.3287654",
      pdfUrl: "#",
      status: "Publié",
    },
  ]

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = typeFilter === "all" || pub.type === typeFilter
    const matchesYear = yearFilter === "all" || pub.year.toString() === yearFilter

    return matchesSearch && matchesType && matchesYear
  })

  const getImpactColor = (impact) => {
    switch (impact) {
      case "Q1":
        return "bg-green-100 text-green-800"
      case "Q2":
        return "bg-blue-100 text-blue-800"
      case "Q3":
        return "bg-yellow-100 text-yellow-800"
      case "Q4":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const stats = [
    { label: "Publications totales", value: publications.length, icon: BookOpen },
    { label: "Citations totales", value: publications.reduce((sum, pub) => sum + pub.citations, 0), icon: Award },
    { label: "Articles Q1", value: publications.filter((pub) => pub.impact === "Q1").length, icon: Award },
    { label: "Conférences", value: publications.filter((pub) => pub.type === "Conférence").length, icon: Users },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos contributions scientifiques et nos avancées dans les domaines de l'intelligence artificielle,
            de la cybersécurité et des technologies émergentes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher par titre, auteur ou mot-clé..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="Article">Articles</SelectItem>
              <SelectItem value="Conférence">Conférences</SelectItem>
              <SelectItem value="Rapport">Rapports</SelectItem>
            </SelectContent>
          </Select>

          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger className="w-full md:w-32">
              <SelectValue placeholder="Année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((publication) => (
            <Card key={publication.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{publication.type}</Badge>
                    {publication.impact && (
                      <Badge className={getImpactColor(publication.impact)}>{publication.impact}</Badge>
                    )}
                    <Badge variant="secondary">{publication.year}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="h-4 w-4 mr-1" />
                    {publication.citations} citations
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{publication.title}</CardTitle>
                <CardDescription className="text-blue-600">{publication.authors.join(", ")}</CardDescription>
                <div className="text-sm text-gray-600">
                  {publication.journal && (
                    <span>
                      <strong>{publication.journal}</strong> • {publication.year}
                    </span>
                  )}
                  {publication.conference && (
                    <span>
                      <strong>{publication.conference}</strong> • {publication.year}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700">{publication.abstract}</p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Mots-clés</h4>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    DOI: <span className="font-mono">{publication.doi}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir l'article
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune publication trouvée avec ces critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  )
}
