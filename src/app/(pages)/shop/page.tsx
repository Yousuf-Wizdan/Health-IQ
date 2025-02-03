import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {  Search } from "lucide-react"

const products = [
  { id: 1, name: "Paracetamol", price: 5.99, category: "Pain Relief", image: "/placeholder.svg" },
  { id: 2, name: "Amoxicillin", price: 12.99, category: "Antibiotics", image: "/placeholder.svg" },
  { id: 3, name: "Lisinopril", price: 15.99, category: "Blood Pressure", image: "/placeholder.svg" },
  { id: 4, name: "Metformin", price: 8.99, category: "Diabetes", image: "/placeholder.svg" },
  { id: 5, name: "Omeprazole", price: 10.99, category: "Digestive Health", image: "/placeholder.svg" },
  { id: 6, name: "Levothyroxine", price: 14.99, category: "Thyroid", image: "/placeholder.svg" },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Medicine Shop</h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 relative">
            <Input type="search" placeholder="Search medicines..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <div className="w-full md:w-1/4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="pain-relief">Pain Relief</SelectItem>
                <SelectItem value="antibiotics">Antibiotics</SelectItem>
                <SelectItem value="blood-pressure">Blood Pressure</SelectItem>
                <SelectItem value="diabetes">Diabetes</SelectItem>
                <SelectItem value="digestive-health">Digestive Health</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline">Load More Products</Button>
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

