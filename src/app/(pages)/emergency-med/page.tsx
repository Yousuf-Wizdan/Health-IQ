import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AlertTriangle, Phone, Truck, Clock } from "lucide-react"

export default function EmergencyMedicinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Health-IQ
          </Link>
          <Button asChild variant="outline" className="bg-white text-red-600 hover:bg-red-100">
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <AlertTriangle className="h-10 w-10 text-red-600 mr-4" />
          <h1 className="text-4xl font-bold text-red-600">Emergency Medicine Service</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Emergency Contact</CardTitle>
            <CardDescription>If you need immediate medical assistance, please call emergency services.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <Phone className="h-8 w-8 text-red-600 mr-4" />
              <span className="text-3xl font-bold">911</span>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="order" className="mb-8">
          <TabsContent value="order">
            <Card>
              <CardHeader>
                <CardTitle>Order Emergency Medicine</CardTitle>
                <CardDescription>
                  Please provide the necessary information for your emergency medicine order.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="medicine">Medicine Name</Label>
                      <Input id="medicine" placeholder="Enter the name of the required medicine" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="prescription">Prescription</Label>
                      <Input id="prescription" type="file" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="address">Delivery Address</Label>
                      <Input id="address" placeholder="Enter your full address" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="phone">Contact Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Place Emergency Order</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-6 w-6 mr-2" />
                Fast Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prioritize emergency orders for the quickest possible delivery.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                24/7 Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our emergency medicine service is available round the clock.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Verified Medicines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>All emergency medicines are verified for quality and authenticity.</p>
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

