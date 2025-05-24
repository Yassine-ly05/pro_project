import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RT</span>
              </div>
              <span className="font-bold text-xl">Research Team</span>
            </div>
            <p className="text-gray-400 text-sm">
              Équipe de recherche dédiée à l'innovation technologique et aux solutions d'avenir.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Liens rapides</h3>
            <div className="space-y-2">
              <Link href="/a-propos" className="block text-gray-400 hover:text-white text-sm">
                À propos
              </Link>
              <Link href="/projets" className="block text-gray-400 hover:text-white text-sm">
                Projets
              </Link>
              <Link href="/publications" className="block text-gray-400 hover:text-white text-sm">
                Publications
              </Link>
              <Link href="/evenements" className="block text-gray-400 hover:text-white text-sm">
                Événements
              </Link>
            </div>
          </div>

          {/* Research Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold">Domaines de recherche</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Intelligence Artificielle</div>
              <div className="text-gray-400 text-sm">Science des Données</div>
              <div className="text-gray-400 text-sm">Cybersécurité</div>
              <div className="text-gray-400 text-sm">IoT & Systèmes Embarqués</div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@research-team.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Votre email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button size="sm">S'abonner</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">© 2025 Research Team. Tous droits réservés.</div>
          <div className="flex space-x-6">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm">
              Politique de confidentialité
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
