import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import SardarImage from "@/public/sardar.png";
import SuleimanImage from "@/public/suleiman-khan.jpg";
import ShayanImage from "@/public/shayan-sehgal.jpg";
import KhadijaImage from "@/public/khadija-hassan.jpg";
import AbdulImage from "@/public/abdul-basit.jpg";
import DawarImage from "@/public/drDawar.jpg"
import Image from "next/image";
import { StaticImageData } from "next/image";

interface TeamProps {
  imageUrl: StaticImageData;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: SardarImage,
    name: "Sardar Ali Abbas",
    position: "CEO & Founder - Physics Teacher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: SuleimanImage,
    name: "Suleiman Khan",
    position: "Chemistry Teacher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: AbdulImage,
    name: "Abdul Basit",
    position: "Math Teacher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
  {
    imageUrl: ShayanImage,
    name: "Shayan Sehgal",
    position: "Law Teacher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: KhadijaImage,
    name: "Khadija Hassan",
    position: "English Teacher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: DawarImage,
    name: "Dr. Dawar Zahid",
    position: "Biology Teacher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      Meet Our Team: Dedicated Professionals Committed to Your Learning Journey
      </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10 lg:grid-rows-[auto_auto] lg:grid-flow-dense">
          {teamList.map(
            ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
              <Card
                key={name}
                className={`bg-muted/50 relative mt-8 flex flex-col justify-center items-center`}
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <Image
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                  <p></p>
                </CardContent>

                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        rel="noreferrer noopener"
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
    </section>
  );
};