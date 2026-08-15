import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { useState } from "react";
import nextConfig from "@/next.config";

interface Project {
  title: string;
  duration: string;
  description: string;
  tech: string;
  image: string;
  links?: {
    label: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    title: "Kiwi POS",
    duration: "09/22 - Present",
    description:
      "A POS app for waiters and cashiers of small to large restaurants to handle orders easily.",
    tech: "Flutter, Provider, PHP, Firebase, Windcave",
    image: `${nextConfig.basePath}/images/projects/kiwi-pos.png`,
    links: [
      { label: "Website", url: "https://v2.loveeatery.co.nz/" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.loveeatery.loveeatery_pos" },
      { label: "App Store", url: "https://apps.apple.com/app/id6450825723" },
    ],
  },
  {
    title: "Sanmiwago",
    duration: "07/23 - Present",
    description:
      "A complete suite of 10+ apps for restaurant chain management from inventory to user orders.",
    tech: "Flutter, Bloc, PHP, Node.js, Firebase, Stripe (with M2 readers), Thermal Printers, WebSockets",
    image: `${nextConfig.basePath}/images/projects/sanmiwago.png`,
    links: [
      { label: "Website", url: "https://sanmiwagodumplinghouse.com/" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.sanmiwagodumplinghouse.sanmiwagoUser" },
      { label: "App Store", url: "https://apps.apple.com/app/sanmiwago/id6503015517" },
    ],
  },
  {
    title: "Techbrava Reminder",
    duration: "04/24 - Present",
    description: "Reminder app with in-app subscriptions.",
    tech: "Flutter, GetX, Node.js, Firebase, Revenuecat, Twilio",
    image: `${nextConfig.basePath}/images/projects/crystals.png`,
    // image: "/images/projects/techbrava.png",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.techbarva.reminders" },
      { label: "App Store", url: "https://apps.apple.com/us/app/techbrava-reminders/id1658795290" },
    ],
  },
  {
    title: "Singles Friendly",
    duration: "03/23 - 06/23",
    description:
      "A dating app with information about pubs and their events.",
    tech: "Flutter, GetX, Node.js, Firebase, Revenuecat",
    image: `${nextConfig.basePath}/images/projects/singles-friendly.png`,
    links: [
      { label: "Website", url: "https://singlesfriendly.com/" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.datemypub.dateorbuddy.date_my_pub" },
      { label: "App Store", url: "https://apps.apple.com/us/app/date-my-pub/id6448037465" },
    ],
  },
  {
    title: "Prime Support",
    duration: "07/23 - 12/23",
    description:
      "Customer support system with agents & staff management.",
    tech: "Flutter, Provider, Node.js, Firebase, PesaPal",
    image: `${nextConfig.basePath}/images/projects/car-peak.png`,
    // image: "/images/projects/prime-support.png",
    links: [
      { label: "Admin App", url: "https://play.google.com/store/apps/details?id=com.primesupport.admin" },
      { label: "Customer App", url: "https://play.google.com/store/apps/details?id=com.primesupport.customer" },
      { label: "Staff App", url: "https://play.google.com/store/apps/details?id=com.primesupport.staff" },
      { label: "Agent App", url: "https://play.google.com/store/apps/details?id=com.primesupport.agent" },
    ],
  },
];

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setActiveImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setActiveImage(null);
    setLightboxOpen(false);
  };


  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardContent className="p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                // className="w-full h-60 object-cover rounded-md"
                // className="w-full h-48 object-cover rounded-md"
                // width={400}
                // height={200}
                className="rounded-lg cursor-pointer mb-4 object-cover"
                onClick={() => openLightbox(project.image)}
              />
              <h3 className="text-xl font-bold mt-2 mb-0">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
              <p className="mb-2">{project.description}</p>
              <p className="mb-4 font-mono text-sm text-gray-700">{project.tech}</p>
              <div className="flex flex-wrap gap-2">
                {project.links?.map((link) => (
                  <Button key={link.label} variant="default">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Lightbox
        image={activeImage}
        open={lightboxOpen}
        onClose={closeLightbox}
      />

    </section>
  );
}
