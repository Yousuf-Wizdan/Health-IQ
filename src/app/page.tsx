import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ShoppingCart,
  HeartPulseIcon as Heartbeat,
  GraduationCap,
  Truck,
  Award,
  Globe,
  ChevronDown
} from "lucide-react"
import { ReactElement } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={'/'}>         
            <div className="flex items-center space-x-2">
              <Heartbeat className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">Health-IQ</span>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="/emergency-med" className="text-gray-600 hover:text-blue-600">
              Emergency
            </Link>
            <Link href="/government-schemes" className="text-gray-600 hover:text-blue-600">
              Government Schemes
            </Link>
            <Link href="/rewards" className="text-gray-600 hover:text-blue-600">
              Rewards
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-blue-600">
              Community
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-blue-600">
              Shop  
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard 
            </Link>
            <Link href="/health-monitor" className="text-gray-600 hover:text-blue-600">
              Health-Monitor
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Globe className="h-4 w-4 mr-2" />
              EN
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Link href={'/register'}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Smart Choices, Healthier Lives</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your one-stop platform for medicine, health monitoring, and community support
            </p>
            <div className="flex justify-center space-x-4">
              <Link href={'/shop'}>   
                <Button size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Shop Medicines
                </Button>
              </Link>
              <Link href={'/features'}>  
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Health-IQ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShoppingCart className="h-10 w-10 text-blue-600" />}
                title="E-commerce Platform"
                description="Wide range of medicines and health products at your fingertips."
              />
              <FeatureCard
                icon={<Heartbeat className="h-10 w-10 text-blue-600" />}
                title="Health Monitoring"
                description="Track your health metrics and get personalized insights."
              />
              <FeatureCard
                icon={<GraduationCap className="h-10 w-10 text-blue-600" />}
                title="Community Education"
                description="Free resources to learn about medicine and healthcare."
              />
            </div>
          </div>
        </section>

        {/* Emergency Medicine Delivery */}
        <section id="emergency" className="bg-red-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Truck className="h-20 w-20 text-red-600 mx-auto md:mx-0" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Emergency Medicine Delivery</h2>
                <p className="text-gray-600 mb-4">
                  We understand that every second counts. Our urgent delivery service ensures life-saving medicines
                  reach you when you need them most.
                </p>
                <Button variant="destructive">Request Emergency Delivery</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Program */}
        <section id="rewards" className="bg-green-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Earn While You Stay Healthy</h2>
            <p className="text-gray-600 mb-8">
              Collect Health-IQ coins with every purchase and health activity. Redeem for exciting rewards!
            </p>
            <Button variant="outline" className="bg-white">
              View Rewards Catalog
            </Button>
          </div>
        </section>

        {/* Community and Education */}
        <section id="community" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Join Our Health Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Free Educational Resources</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Weekly health webinars</li>
                  <li>Expert-written articles</li>
                  <li>Interactive health quizzes</li>
                  <li>Community forums</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <form className="space-y-4">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit" className="w-full">
                    Join Community
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Health-IQ</h3>
              <p className="text-sm text-gray-400">
                Empowering individuals to make smart health choices and lead healthier lives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#features">Features</Link>
                </li>
                <li>
                  <Link href="/emergency-med">Emergency Services</Link>
                </li>
                <li>  
                  <Link href="/government-schemes">Government Schemes</Link>
                </li>
                <li>
                  <Link href="/rewards">Rewards Program</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400">
                Email: support@health-iq.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">{/* Add social media icons here */}</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2025 Health-IQ. All rights reserved.
          </div>
        </div>
      </footer>    
    </div>
  )
}

function FeatureCard({ icon, title, description}: {icon: ReactElement , title: string , description: string}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
