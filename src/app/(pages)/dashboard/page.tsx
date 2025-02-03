import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Heart,
  Users,
  Gift,
  FileText,
  Truck,
  FootprintsIcon,
  Pill,
  Stethoscope,
  Settings,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Health-IQ
          </Link>
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
              <Link href="/profile">My Profile</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
              <Link href="/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FootprintsIcon className="h-6 w-6 mr-2" />
                Today's Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">7,532</div>
              <Progress value={75} />
              <p className="text-sm text-gray-500 mt-1">Goal: 10,000 steps</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Heart Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">72 bpm</div>
              <Badge variant="secondary">Normal</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-6 w-6 mr-2" />
                Reward Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">1,250</div>
              <Link href="/rewards" className="text-blue-600 hover:underline">
                View Rewards
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="h-6 w-6 mr-2" />
                Upcoming Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Lisinopril - 10mg</span>
                  <span className="text-sm text-gray-500">8:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Metformin - 500mg</span>
                  <span className="text-sm text-gray-500">9:00 PM</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/health-monitoring">View All Medications</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-6 w-6 mr-2" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Dr. Smith - General Checkup</span>
                  <span className="text-sm text-gray-500">June 15, 10:00 AM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Dr. Johnson - Cardiology Follow-up</span>
                  <span className="text-sm text-gray-500">July 2, 2:30 PM</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/appointments">Manage Appointments</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardQuickAccessCard title="Shop Medicines" icon={<ShoppingCart className="h-6 w-6" />} link="/shop" />
          <DashboardQuickAccessCard
            title="Emergency Services"
            icon={<Truck className="h-6 w-6" />}
            link="/emergency-medicine"
          />
          <DashboardQuickAccessCard title="Community" icon={<Users className="h-6 w-6" />} link="/community" />
          <DashboardQuickAccessCard
            title="Government Schemes"
            icon={<FileText className="h-6 w-6" />}
            link="/government-schemes"
          />
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

function DashboardQuickAccessCard({ title, icon, link }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={link}>Access</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

