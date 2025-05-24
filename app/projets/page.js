"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Users, ExternalLink, FileText, Target } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Intelligence Artificielle en Médecine",
      description:
        "Développement d'algorithmes d'IA pour le diagnostic médical assisté par ordinateur. Ce projet vise à améliorer la précision des diagnostics et à réduire les erreurs médicales.",
      status: "En cours",
      category: "IA & Santé",
      startDate: "2024-01-15",
      endDate: "2025-12-31",
      budget: "500,000€",
      team: ["Dr. Marie Dubois", "Dr. Sophie Chen"],
      objectives: [
        "Développer un système de diagnostic automatisé",
        "Améliorer la précision de 25%",
        "Réduire le temps de diagnostic de 50%",
      ],
      methodology: "Apprentissage profond avec réseaux de neurones convolutionnels",
      results: "Précision actuelle de 94% sur les tests préliminaires",
      impact: "Potentiel d'amélioration significative des soins de santé",
      documents: ["Rapport technique Q1", "Présentation ICML 2024"],
      publications: 3,
      collaborators: ["CHU Paris", "Institut Curie"],
    },
    {
      id: 2,
      title: "Analyse de Données Climatiques",
      description:
        "Modélisation prédictive des changements climatiques régionaux utilisant des techniques avancées de machine learning et d'analyse de big data.",
      status: "Terminé",
      category: "Environnement",
      startDate: "2023-03-01",
      endDate: "2024-11-30",
      budget: "350,000€",
      team: ["Dr. Sophie Chen", "Dr. Ahmed Benali"],
      objectives: [
        "Créer des modèles prédictifs régionaux",
        "Analyser 50 ans de données climatiques",
        "Développer une plateforme de visualisation",
      ],
      methodology: "Analyse de séries temporelles et réseaux de neurones récurrents",
      results: "Modèles avec précision de 87% sur les prédictions à 6 mois",
      impact: "Aide à la planification urbaine et agricole",
      documents: ["Rapport final", "Dataset public"],
      publications: 5,
      collaborators: ["Météo France", "CNRS"],
    },
    {
      id: 3,
      title: "Cybersécurité IoT",
      description:
        "Sécurisation des réseaux d'objets connectés industriels contre les cyberattaques. Focus sur la détection d'intrusions et la cryptographie légère.",
      status: "En cours",
      category: "Sécurité",
      startDate: "2024-06-01",
      endDate: "2026-05-31",
      budget: "750,000€",
      team: ["Dr. Pierre Martin", "Dr. Ahmed Benali"],
      objectives: [
        "Développer un système de détection d'intrusions",
        "Créer des protocoles de cryptographie légère",
        "Tester sur 1000 dispositifs IoT",
      ],
      methodology: "Analyse comportementale et cryptographie post-quantique",
      results: "Prototype fonctionnel avec détection 99.2%",
      impact: "Sécurisation de l'industrie 4.0",
      documents: ["Spécifications techniques", "Rapport sécurité"],
      publications: 2,
      collaborators: ["Schneider Electric", "Orange"],
    },
    {
      id: 4,
      title: "Optimisation Énergétique Smart Cities",
      description:
        "Développement de solutions IoT pour l'optimisation de la consommation énergétique dans les villes intelligentes.",
      status: "En cours",
      category: "IoT & Ville",
      startDate: "2024-09-01",
      endDate: "2026-08-31",
      budget: "600,000€",
      team: ["Dr. Ahmed Benali", "Dr. Marie Dubois"],
      objectives: [
        "Réduire la consommation énergétique de 30%",
        "Déployer 500 capteurs intelligents",
        "Créer une plateforme de gestion centralisée",
      ],
      methodology: "Edge computing et algorithmes d'optimisation",
      results: "Phase pilote en cours avec 15% d'économies",
      impact: "Réduction de l'empreinte carbone urbaine",
      documents: ["Plan de déploiement", "Étude d'impact"],
      publications: 1,
      collaborators: ["Ville de Paris", "EDF"],
    },
    {
      id: 5,
      title: "Blockchain pour la Traçabilité",
      description: "Implémentation de solutions blockchain pour la traçabilité alimentaire et pharmaceutique.",
      status: "Planifié",
      category: "Blockchain",
      startDate: "2025-03-01",
      endDate: "2027-02-28",
      budget: "400,000€",
      team: ["Dr. Pierre Martin"],
      objectives: [
        "Développer une blockchain privée",
        "Intégrer avec les systèmes existants",
        "Assurer la conformité réglementaire",
      ],
      methodology: "Blockchain permissionnée et smart contracts",
      results: "En phase de planification",
      impact: "Amélioration de la sécurité alimentaire",
      documents: ["Cahier des charges"],
      publications: 0,
      collaborators: ["Carrefour", "Sanofi"],
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours":
        return "default"
      case "Terminé":
        return "secondary"
      case "Planifié":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Nos Projets de Recherche</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets de recherche innovants qui façonnent l'avenir de la technologie
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="En cours">En cours</SelectItem>
              <SelectItem value="Terminé">Terminé</SelectItem>
              <SelectItem value="Planifié">Planifié</SelectItem>
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
              <SelectItem value="IA & Santé">IA & Santé</SelectItem>
              <SelectItem value="Environnement">Environnement</SelectItem>
              <SelectItem value="Sécurité">Sécurité</SelectItem>
              <SelectItem value="IoT & Ville">IoT & Ville</SelectItem>
              <SelectItem value="Blockchain">Blockchain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={getStatusColor(project.status)}>{project.status}</Badge>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(project.startDate).toLocaleDateString("fr-FR")} -{" "}
                    {new Date(project.endDate).toLocaleDateString("fr-FR")}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {project.team.length} chercheurs
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Objectifs principaux
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.objectives.slice(0, 2).map((objective, index) => (
                      <li key={index}>• {objective}</li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                {project.results && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Résultats</h4>
                    <p className="text-sm text-gray-600">{project.results}</p>
                  </div>
                )}

                {/* Team & Collaborators */}
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-sm">Équipe: </span>
                    <span className="text-sm text-gray-600">{project.team.join(", ")}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Partenaires: </span>
                    <span className="text-sm text-gray-600">{project.collaborators.join(", ")}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{project.publications} publications</span>
                    <span>{project.documents.length} documents</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Documents
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/projets/${project.id}`}>
                        Détails <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun projet trouvé avec ces critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  )
}
