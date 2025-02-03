import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Truck,
  FileText,
  Award,
  Globe,
  Droplet,
  DrillIcon as Drone,
  Bell,
  Recycle,
  UserIcon as UserMd,
  ShoppingCart,
  HeartPulse,
  Pill,
  Smartphone,
  Users,
  ChevronRight,
} from "lucide-react"

export default function AllFeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">All Features</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Discover the comprehensive suite of services offered by Health-IQ
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShoppingCart className="h-8 w-8 text-blue-600" />}
            title="E-commerce Platform"
            description="A wide range of medicines and health products available at your fingertips. Easy ordering and fast delivery to your doorstep."
          />

          <FeatureCard
            icon={<HeartPulse className="h-8 w-8 text-red-600" />}
            title="Health Monitoring"
            description="Track your vital health metrics in real-time. Get personalized insights and recommendations based on your health data."
          />

          <FeatureCard
            icon={<GraduationCap className="h-8 w-8 text-green-600" />}
            title="Community and Education"
            description="Access free resources to learn about medicine and healthcare. Join webinars, read expert articles, and participate in community forums."
          />

          <FeatureCard
            icon={<Truck className="h-8 w-8 text-purple-600" />}
            title="Emergency Medicine Delivery"
            description="Urgent delivery service for life-saving medicines. Priority shipping ensures critical medications reach you when time is of the essence."
          />

          <FeatureCard
            icon={<FileText className="h-8 w-8 text-yellow-600" />}
            title="Government Schemes"
            description="Stay informed about the latest government healthcare initiatives. Get up-to-date information on schemes that can benefit your health and finances."
          />

          <FeatureCard
            icon={<Award className="h-8 w-8 text-orange-600" />}
            title="Coin Rewards"
            description="Earn Health-IQ coins with every purchase and health activity. Redeem coins for discounts, products, or donate to health causes."
          />

          <FeatureCard
            icon={<Globe className="h-8 w-8 text-indigo-600" />}
            title="Multi-Language Support"
            description="Access Health-IQ in multiple languages. Our platform is designed to be inclusive and accessible to diverse communities."
          />

          <FeatureCard
            icon={<Droplet className="h-8 w-8 text-red-600" />}
            title="Blood Bank"
            description="Find and donate blood easily. Our integrated blood bank system connects donors with those in need, saving lives across the community."
          />

          <FeatureCard
            icon={<Drone className="h-8 w-8 text-gray-600" />}
            title="Drone Delivery"
            description="Experience cutting-edge medicine delivery with our drone service. Ideal for reaching remote areas or when speed is crucial."
          />

          <FeatureCard
            icon={<Bell className="h-8 w-8 text-blue-600" />}
            title="Health Reminders"
            description="Never miss a dose or a check-up. Receive smart reminders for medication, doctor appointments, and health check-ups."
          />

          <FeatureCard
            icon={<Recycle className="h-8 w-8 text-green-600" />}
            title="Medicine Recycling"
            description="Contribute to a sustainable healthcare system. Our medicine recycling program ensures safe disposal and reduces environmental impact."
          />

          <FeatureCard
            icon={<UserMd className="h-8 w-8 text-teal-600" />}
            title="Doctor Consultation"
            description="Connect with qualified healthcare professionals from the comfort of your home. Get expert advice and prescriptions online."
          />

          <FeatureCard
            icon={<Pill className="h-8 w-8 text-pink-600" />}
            title="Personalized Medicine"
            description="Receive tailored medication recommendations based on your health profile, genetic information, and lifestyle factors."
          />

          <FeatureCard
            icon={<Users className="h-8 w-8 text-blue-600" />}
            title="Family Health Management"
            description="Manage the health of your entire family in one place. Set up profiles, track medications, and schedule appointments for your loved ones."
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/signup">
              Get Started with Health-IQ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

