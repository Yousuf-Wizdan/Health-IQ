import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { BookOpen, Video, Users, MessageSquare, Calendar, ArrowRight } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Health-IQ Community</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Learn, share, and grow with our vibrant health community
        </p>

        <Tabs defaultValue="resources" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="articles">Expert Articles</TabsTrigger>
            <TabsTrigger value="forums">Community Forums</TabsTrigger>
          </TabsList>
          <TabsContent value="resources">
            <ResourcesTab />
          </TabsContent>
          <TabsContent value="webinars">
            <WebinarsTab />
          </TabsContent>
          <TabsContent value="articles">
            <ArticlesTab />
          </TabsContent>
          <TabsContent value="forums">
            <ForumsTab />
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
            <CardDescription>Get the latest updates and exclusive content</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
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

function ResourcesTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <ResourceCard
        icon={<BookOpen className="h-6 w-6 text-blue-600" />}
        title="Health Guides"
        description="Comprehensive guides on various health topics"
        link="/resources/guides"
      />
      <ResourceCard
        icon={<Video className="h-6 w-6 text-green-600" />}
        title="Video Library"
        description="Educational videos on medical procedures and health tips"
        link="/resources/videos"
      />
      <ResourceCard
        icon={<Users className="h-6 w-6 text-purple-600" />}
        title="Patient Stories"
        description="Real-life experiences and recovery journeys"
        link="/resources/stories"
      />
      <ResourceCard
        icon={<MessageSquare className="h-6 w-6 text-yellow-600" />}
        title="Ask a Doctor"
        description="Get answers to your health questions from experts"
        link="/resources/ask-doctor"
      />
    </div>
  )
}

function WebinarsTab() {
  return (
    <div className="space-y-6">
      <WebinarCard
        title="Understanding Diabetes Management"
        date="June 15, 2025"
        speaker="Dr. Emily Chen"
        description="Learn about the latest approaches to managing diabetes effectively."
      />
      <WebinarCard
        title="Mental Health in the Digital Age"
        date="June 22, 2025"
        speaker="Dr. Michael Brown"
        description="Explore the impact of technology on mental health and strategies for digital well-being."
      />
      <WebinarCard
        title="Nutrition Myths Debunked"
        date="June 29, 2025"
        speaker="Sarah Johnson, RD"
        description="Get evidence-based insights on common nutrition myths and learn about balanced eating."
      />
    </div>
  )
}

function ArticlesTab() {
  return (
    <div className="space-y-6">
      <ArticleCard
        title="The Importance of Sleep for Overall Health"
        author="Dr. James Smith"
        date="May 28, 2025"
        excerpt="Discover why quality sleep is crucial for your physical and mental well-being, and learn practical tips for better sleep hygiene."
      />
      <ArticleCard
        title="Understanding Vaccines: Separating Fact from Fiction"
        author="Dr. Lisa Wong"
        date="May 25, 2025"
        excerpt="An in-depth look at how vaccines work, their safety, and their crucial role in public health."
      />
      <ArticleCard
        title="Heart Health: Simple Lifestyle Changes for a Stronger Heart"
        author="Dr. Robert Johnson"
        date="May 22, 2025"
        excerpt="Learn about easy-to-implement lifestyle modifications that can significantly improve your cardiovascular health."
      />
    </div>
  )
}

function ForumsTab() {
  return (
    <div className="space-y-6">
      <ForumCard title="Chronic Pain Management" lastPost="2 hours ago" posts={152} members={487} />
      <ForumCard title="Healthy Recipes and Nutrition" lastPost="5 hours ago" posts={328} members={1205} />
      <ForumCard title="Mental Health Support" lastPost="1 day ago" posts={562} members={1893} />
    </div>
  )
}

function ResourceCard({ icon, title, description, link }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={link}>
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function WebinarCard({ title, date, speaker, description }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <Calendar className="inline-block mr-2 h-4 w-4" />
          {date} | Speaker: {speaker}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button>Register Now</Button>
      </CardFooter>
    </Card>
  )
}

function ArticleCard({ title, author, date, excerpt }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          By {author} | {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Read Full Article</Button>
      </CardFooter>
    </Card>
  )
}

function ForumCard({ title, lastPost, posts, members }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Last post: {lastPost}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <span>{posts} posts</span>
          <span>{members} members</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Join Discussion</Button>
      </CardFooter>
    </Card>
  )
}

