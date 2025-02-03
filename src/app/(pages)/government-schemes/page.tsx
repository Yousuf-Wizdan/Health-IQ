import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Stethoscope, Baby, Pill} from "lucide-react"
import { ReactElement } from "react"

export default function GovernmentSchemesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Government Healthcare Schemes</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Explore and learn about various healthcare initiatives provided by the government to support your well-being.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <SchemeCard
            icon={<Users className="h-8 w-8 text-blue-600" />}
            title="Ayushman Bharat"
            description="A flagship scheme to provide health insurance coverage of ₹5 lakhs per family per year for secondary and tertiary care hospitalization."
            eligibility="Economically weaker sections and low-income families"
            benefits={[
              "Cashless and paperless access to healthcare services",
              "Coverage for most diseases",
              "Pan-India portability",
            ]}
          />

          <SchemeCard
            icon={<Heart className="h-8 w-8 text-red-600" />}
            title="National Health Mission (NHM)"
            description="A comprehensive health initiative to address the health needs of underserved rural areas and vulnerable urban areas."
            eligibility="All citizens, with a focus on rural and urban poor"
            benefits={[
              "Improved access to quality healthcare",
              "Reduction in child and maternal mortality",
              "Prevention and control of communicable and non-communicable diseases",
            ]}
          />

          <SchemeCard
            icon={<Stethoscope className="h-8 w-8 text-green-600" />}
            title="Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)"
            description="Aims to correct regional imbalances in the availability of affordable and reliable tertiary healthcare services."
            eligibility="All citizens"
            benefits={[
              "Establishment of AIIMS-like institutions",
              "Upgradation of existing government medical colleges",
              "Improved access to quality tertiary healthcare",
            ]}
          />

          <SchemeCard
            icon={<Baby className="h-8 w-8 text-purple-600" />}
            title="Janani Suraksha Yojana (JSY)"
            description="A safe motherhood intervention under the National Health Mission to reduce maternal and neonatal mortality."
            eligibility="Pregnant women, especially from low-income families"
            benefits={[
              "Cash assistance for institutional deliveries",
              "Antenatal care",
              "Post-delivery care and support",
            ]}
          />

          <SchemeCard
            icon={<Pill className="h-8 w-8 text-orange-600" />}
            title="Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)"
            description="Ensures availability of quality generic medicines at affordable prices through dedicated outlets."
            eligibility="All citizens"
            benefits={[
              "Access to affordable generic medicines",
              "Reduction in out-of-pocket healthcare expenses",
              "Promotion of generic medicines",
            ]}
          />
        </div>

        <div className="mt-12 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>How Health-IQ Helps You Access These Schemes</CardTitle>
              <CardDescription>
                We simplify the process of understanding and applying for government healthcare schemes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <li>Easy-to-understand explanations of each scheme</li>
              <li>Assistance with application processes</li>
              <li>Regular updates on new schemes and changes to existing ones</li>
              <li>Integration with our health monitoring system for personalized recommendations</li>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Health-IQ. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/privacy" className="text-gray-300 hover:text-white mx-2">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white mx-2">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white mx-2">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SchemeCard({ icon, title, description, eligibility, benefits }: {icon: ReactElement , title: string , description: string , eligibility: string , benefits: string[]}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <Badge variant="secondary">Eligibility</Badge>
            <p className="mt-1 text-sm">{eligibility}</p>
          </div>
          <div>
            <Badge variant="secondary">Key Benefits</Badge>
            <ul className="mt-1 list-disc list-inside text-sm">
              {benefits.map((benefit: string, index: number) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

