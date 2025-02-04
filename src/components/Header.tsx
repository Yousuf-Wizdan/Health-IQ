'use client'
import { useState } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white text-blue-600 hover:bg-blue-100">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {/* <Link href="/profile" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    My Profile
                  </Link> */}
                  <Link href="/features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Features
                  </Link>
                  <Link href="/rewards" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Rewards
                  </Link>
                  <Link href="/health-monitor" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Health Monitoring
                  </Link>
                  <Link href="/shop" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Shop Medicines
                  </Link>
                  <Link href="/emergency-med" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Emergency Services
                  </Link>
                  <Link href="/community" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Community
                  </Link>
                  <Link href="/government-schemes" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Government Schemes
                  </Link>
                  <Link href="/dashboard" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
    )
}