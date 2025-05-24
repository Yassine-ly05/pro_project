import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ExternalLink, Award, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Marie Dubois",
      role: "Directrice de recherche",
      specialization: "Intelligence Artificielle & Machine Learning",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Spécialiste en IA avec plus de 15 ans d'expérience. Docteure en informatique de l'École Polytechnique.",
      education: ["PhD Informatique - École Polytechnique", "MSc Machine Learning - MIT"],
      awards: ["Prix Excellence Recherche 2023", "Best Paper Award ICML 2022"],
      publications: 45,
      projects: ["IA Médicale", "Vision par Ordinateur", "NLP Avancé"],
    },
    {
      id: 2,
      name: "Dr. Pierre Martin",
      role: "Chercheur Senior",
      specialization: "Cybersécurité & Cryptographie",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert en sécurité informatique et cryptographie quantique. Ancien consultant en cybersécurité.",
      education: ["PhD Cryptographie - Sorbonne", "MSc Sécurité Informatique - INSA"],
      awards: ["Prix Innovation Cybersécurité 2024"],
      publications: 32,
      projects: ["Sécurité IoT", "Cryptographie Post-Quantique"],
    },
    {
      id: 3,
      name: "Dr. Sophie Chen",
      role: "Chercheuse",
      specialization: "Science des Données & Big Data",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experte en analyse de données massives et visualisation. Spécialiste des algorithmes distribués.",
      education: ["PhD Data Science - Stanford", "MSc Statistiques - ENSAE"],
      awards: ["Young Researcher Award 2023"],
      publications: 28,
      projects: ["Analyse Climatique", "Données Biomédicales"],
    },
    {
      id: 4,
      name: "Dr. Ahmed Benali",
      role: "Chercheur",
      specialization: "Systèmes Embarqués & IoT",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Spécialiste des systèmes embarqués et de l'Internet des Objets. Expert en optimisation énergétique.",
      education: ["PhD Systèmes Embarqués - INRIA", "MSc Électronique - Supélec"],
      awards: ["Innovation Award IoT 2022"],
      publications: 24,
      projects: ["Smart Cities", "Capteurs Intelligents"],
    },
  ]

  const researchAreas = [
    {
      title: "Intelligence Artificielle",
      description: "Développement d'algorithmes d'apprentissage automatique pour diverses applications",
      technologies: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning"],
    },
    {
      title: "Cybersécurité",
      description: "Recherche en sécurité informatique et protection des systèmes d'information",
      technologies: ["Cryptographie", "Blockchain", "Sécurité IoT", "Analyse de Malware"],
    },
    {
      title: "Science des Données",
      description: "Analyse et traitement de données massives pour extraire des insights",
      technologies: ["Big Data", "Data Mining", "Visualisation", "Statistiques"],
    },
    {
      title: "Systèmes Embarqués",
      description: "Conception de systèmes intelligents et connectés",
      technologies: ["IoT", "Edge Computing", "Capteurs", "Optimisation Énergétique"],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos de notre équipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe de recherche multidisciplinaire travaille à l'intersection de l'intelligence artificielle, de
            la cybersécurité et des technologies émergentes pour créer les solutions de demain.
          </p>
        </div>

        {/* Histoire de l'équipe */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Fondée en 2018, notre équipe de recherche s'est rapidement imposée comme un acteur majeur dans le
                domaine de l'innovation technologique. Née de la collaboration entre plusieurs universités prestigieuses
                et centres de recherche, notre équipe rassemble des experts de renommée internationale.
              </p>
              <p className="mb-4">
                Au fil des années, nous avons développé une approche unique combinant recherche fondamentale et
                applications pratiques, permettant de traduire nos découvertes en solutions concrètes pour l'industrie
                et la société.
              </p>
              <p>
                Aujourd'hui, notre équipe compte 8 chercheurs permanents et collabore régulièrement avec plus de 20
                institutions partenaires à travers le monde.
              </p>
            </div>
          </Card>
        </section>

        {/* Domaines d'expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Domaines d'Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Membres de l'équipe */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Chercheurs</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                      <Badge variant="outline" className="w-fit">
                        {member.specialization}
                      </Badge>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <p className="text-gray-600 text-sm">{member.bio}</p>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          Formation
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.education.map((edu, index) => (
                            <li key={index}>• {edu}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Distinctions
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.awards.map((award, index) => (
                            <li key={index}>• {award}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="text-sm text-gray-500">{member.publications} publications</div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
