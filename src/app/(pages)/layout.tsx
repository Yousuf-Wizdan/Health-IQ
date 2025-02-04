import {HeartPulseIcon as Heartbeat , Globe, ChevronDown, Menu} from 'lucide-react'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Header } from '@/components/Header';

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return(
        <div>
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
            {/* <Button variant="outline" size="sm">
              <Globe className="h-4 w-4 mr-2" />
              EN
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button> */}
            <Header />
            <Link href={'/register'}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
            {children}
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

export default Layout