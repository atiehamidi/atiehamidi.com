import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQFia-bLdc21ww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670842792564?e=1737590400&v=beta&t=by7rTyLAN_CDhpAvlRRn5TH3f3DS-jJBmSoufmaxGBc"
              alt="Atieh Hamidi"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4 text-foreground">
              Hello! I'm Atieh Hamidi, a passionate Full Stack Developer with a keen interest in building robust and scalable web applications. With expertise in technologies like React, Node.js, and Next.js, I strive to create seamless user experiences and efficient backend systems.
            </p>
            <p className="text-lg mb-4 text-foreground">
              My journey in tech has been driven by curiosity and a constant desire to learn. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tech talks.
            </p>
            <p className="text-lg text-foreground">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just chat about tech!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

