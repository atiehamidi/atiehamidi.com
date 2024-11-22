import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Peekabond",
    description: "Created MVP of Peekabond application with React Native, MongoDB, and Apollo",
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQEFI6gM3_uqHA/company-logo_200_200/company-logo_200_200/0/1639757094126/peekabond_logo?e=1740614400&v=beta&t=AY2OWmYq7KT-qT0ODlPbYrfJX0GPU0iP1B7JqZXlLs8",
    link: "https://peekabond.com"
  },
  {
    title: "Alomedical",
    description: "Created with Python and Django",
    image: "https://media.licdn.com/dms/image/v2/C4D0BAQFinKS7EIDk4g/company-logo_200_200/company-logo_200_200/0/1630464801758?e=1740614400&v=beta&t=nsXEpluiEGmXrI1e5227yn-n_utUHhS8vPTKfzItjt8",
    link: "#"
  },
  {
    title: "PPE Needed",
    description: "Maining website created with PHP",
    image: "https://media.licdn.com/dms/image/v2/C560BAQHJ7H0cH1hJQw/company-logo_200_200/company-logo_200_200/0/1630670258450/ppe_needed_logo?e=1740614400&v=beta&t=jc_oyfxZ7pwqcai8h3SfcQy2xpH5F6HTSbAp2HEt46A",
    link: "http://ppeneeded.com"
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-md mb-4 object-contain w-full h-[200px]"
                />
                <CardDescription className="text-card-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

