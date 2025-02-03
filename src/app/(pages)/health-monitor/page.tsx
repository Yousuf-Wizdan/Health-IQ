import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { FootprintsIcon, Pill, Stethoscope, Heart, Droplet, Moon, Scale, Activity } from "lucide-react"

export default function HealthMonitoringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Health-IQ
          </Link>
          <Button asChild variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Health Monitoring</h1>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="checkups">Check-ups</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <HealthMetricCard
                title="Steps Today"
                value="7,532"
                icon={<FootprintsIcon className="h-6 w-6" />}
                progress={75}
                goal="10,000"
              />
              <HealthMetricCard
                title="Heart Rate"
                value="72 bpm"
                icon={<Heart className="h-6 w-6" />}
                status="Normal"
              />
              <HealthMetricCard
                title="Blood Pressure"
                value="120/80 mmHg"
                icon={<Activity className="h-6 w-6" />}
                status="Optimal"
              />
              <HealthMetricCard
                title="Sleep"
                value="7h 15m"
                icon={<Moon className="h-6 w-6" />}
                progress={80}
                goal="8 hours"
              />
              <HealthMetricCard title="Weight" value="68 kg" icon={<Scale className="h-6 w-6" />} status="Healthy" />
              <HealthMetricCard
                title="Hydration"
                value="1.5 L"
                icon={<Droplet className="h-6 w-6" />}
                progress={60}
                goal="2.5 L"
              />
            </div>
          </TabsContent>
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Activity Tracking</CardTitle>
                <CardDescription>Your daily physical activity summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Steps</span>
                      <span>7,532 / 10,000</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Active Minutes</span>
                      <span>45 / 60</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Calories Burned</span>
                      <span>1,800 / 2,500</span>
                    </div>
                    <Progress value={72} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="medications">
            <Card>
              <CardHeader>
                <CardTitle>Medication Reminders</CardTitle>
                <CardDescription>Your daily medication schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <MedicationReminder name="Lisinopril" dosage="10mg" time="8:00 AM" taken={true} />
                  <MedicationReminder name="Metformin" dosage="500mg" time="1:00 PM" taken={false} />
                  <MedicationReminder name="Atorvastatin" dosage="20mg" time="8:00 PM" taken={false} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add New Medication</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="checkups">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Check-ups</CardTitle>
                <CardDescription>Your scheduled medical appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <CheckupReminder
                      doctor="Dr. Smith"
                      specialty="General Practitioner"
                      date="2025-06-15"
                      time="10:00 AM"
                    />
                    <CheckupReminder doctor="Dr. Johnson" specialty="Cardiologist" date="2025-07-02" time="2:30 PM" />
                  </div>
                  <div className="w-1/2">
                    <Calendar />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Schedule New Appointment</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
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

function HealthMetricCard({ title, value, icon, progress, goal, status }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {progress && (
          <div className="mt-2">
            <Progress value={progress} />
            <div className="text-sm text-gray-500 mt-1">Goal: {goal}</div>
          </div>
        )}
        {status && (
          <Badge className="mt-2" variant="secondary">
            {status}
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}

function MedicationReminder({ name, dosage, time, taken }: any) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center">
        <Pill className="h-6 w-6 mr-2" />
        <div>
          <div className="font-semibold">
            {name} - {dosage}
          </div>
          <div className="text-sm text-gray-500">{time}</div>
        </div>
      </div>
      <Badge variant={taken ? "default" : "secondary"}>{taken ? "Taken" : "Not Taken"}</Badge>
    </div>
  )
}

function CheckupReminder({ doctor, specialty, date, time }: any) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
      <div className="flex items-center">
        <Stethoscope className="h-6 w-6 mr-2" />
        <div>
          <div className="font-semibold">{doctor}</div>
          <div className="text-sm text-gray-500">{specialty}</div>
        </div>
      </div>
      <div className="text-right">
        <div>{new Date(date).toLocaleDateString()}</div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
    </div>
  )
}

