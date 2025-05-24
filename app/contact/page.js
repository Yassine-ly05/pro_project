"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Github } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    alert("Message envoyé avec succès !")
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@research-team.fr",
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 Avenue de la Recherche, 75001 Paris",
      description: "France",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lundi - Vendredi",
      description: "9h00 - 18h00",
    },
  ]

  const teamContacts = [
    {
      name: "Dr. Marie Dubois",
      role: "Directrice de recherche",
      email: "marie.dubois@research-team.fr",
      specialization: "Intelligence Artificielle",
    },
    {
      name: "Dr. Pierre Martin",
      role: "Chercheur Senior",
      email: "pierre.martin@research-team.fr",
      specialization: "Cybersécurité",
    },
    {
      name: "Dr. Sophie Chen",
      role: "Chercheuse",
      email: "sophie.chen@research-team.fr",
      specialization: "Science des Données",
    },
    {
      name: "Dr. Ahmed Benali",
      role: "Chercheur",
      email: "ahmed.benali@research-team.fr",
      specialization: "Systèmes Embarqués",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes toujours ravis d'échanger sur nos recherches et d'explorer de nouvelles collaborations.
            N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organisation</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Votre université, entreprise, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="collaboration">Collaboration de recherche</SelectItem>
                        <SelectItem value="stage">Demande de stage</SelectItem>
                        <SelectItem value="publication">Question sur une publication</SelectItem>
                        <SelectItem value="conference">Invitation à conférence</SelectItem>
                        <SelectItem value="media">Demande média</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-600">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Contacts directs</CardTitle>
                <CardDescription>Contactez directement nos chercheurs selon votre domaine d'intérêt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamContacts.map((contact, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                    <p className="text-sm text-blue-600">{contact.specialization}</p>
                    <a href={`mailto:${contact.email}`} className="text-sm text-gray-500 hover:text-gray-700">
                      {contact.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Notre localisation</CardTitle>
              <CardDescription>Venez nous rendre visite dans nos bureaux parisiens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Carte interactive (à intégrer avec Google Maps ou OpenStreetMap)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
