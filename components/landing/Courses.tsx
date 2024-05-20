import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CourseProps {
    title: string;
    description: string;
  }
  
  const features: CourseProps[] = [
    {
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    },
    {
      title: "Intuitive user interface",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    },
    {
      title: "AI-Powered insights",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    },
  ];
  
  const courseList: string[] = [
    "O Levels",
    "A Levels",
    "IGCSC",
    "Pricing",
    "Contact form",
    "Our team",
    "Responsive design",
    "Newsletter",
    "Minimalist",
  ];

const Courses = () => {
  return (
    <section
      id="courses"
      className="container py-24 sm:py-32 space-y-8"
    >
       <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Many Great Courses!
        </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {courseList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: CourseProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            {/* <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Courses