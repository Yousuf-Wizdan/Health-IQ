import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Award, Gift, TrendingUp, Zap, ShoppingBag, Heart, Book, Leaf } from "lucide-react"
import { ReactElement } from "react"

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Health-IQ Rewards</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Earn points, improve your health, and enjoy exclusive benefits!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 h-6 w-6 text-blue-600" />
                Earn Points on Purchases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">For every ₹100 spent on Health-IQ, you earn 50 points!</p>
              <ul className="list-disc list-inside space-y-2">
                <li>₹100 spent = 50 points</li>
                <li>₹500 spent = 250 points</li>
                <li>₹1000 spent = 500 points</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-6 w-6 text-red-600" />
                Healthy Habits Bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Earn extra points for maintaining healthy habits!</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Daily step goal achieved: 10 points</li>
                <li>Weekly exercise target met: 50 points</li>
                <li>Monthly health check-up: 100 points</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/health-tracking">Track Your Health</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="redeem" className="mb-12">
          <TabsContent value="redeem">
            <Card>
              <CardHeader>
                <CardTitle>Redeem Your Points</CardTitle>
                <CardDescription>Turn your points into amazing rewards!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RedeemOption
                  title="₹100 Off Your Next Purchase"
                  points={1000}
                  icon={<Gift className="h-5 w-5 text-purple-600" />}
                />
                <RedeemOption
                  title="Free Health Check-up"
                  points={2500}
                  icon={<Zap className="h-5 w-5 text-yellow-600" />}
                />
                <RedeemOption
                  title="1-Month Premium Subscription"
                  points={5000}
                  icon={<Award className="h-5 w-5 text-green-600" />}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tiers">
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-green-600" />
              Ways to Earn More Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <Book className="mr-2 h-5 w-5 text-blue-600" />
                <span>Complete health quizzes and surveys</span>
              </li>
              <li className="flex items-start">
                <Leaf className="mr-2 h-5 w-5 text-green-600" />
                <span>Participate in wellness challenges</span>
              </li>
              <li className="flex items-start">
                <Heart className="mr-2 h-5 w-5 text-red-600" />
                <span>Refer friends to Health-IQ</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-yellow-600" />
                <span>Achieve your personalized health goals</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/account/rewards">View Your Rewards Dashboard</Link>
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

function RedeemOption({ title, points, icon }: {title:string , points: number , icon: ReactElement}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </div>
      <Button variant="outline">Redeem for {points} points</Button>
    </div>
  )
}
