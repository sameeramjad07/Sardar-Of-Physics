import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "",
    buttonText: "Get Started",
    benefitList: [
      "Access to one preview video",
      "Basic course materials",
      "Limited course resources",
      "No Community support",
      "No access to courses",
    ],
  },
  {
    title: "Monthly",
    popular: 1,
    price: 10000,
    description:
      "",
    buttonText: "Start Free Trial",
    benefitList: [
      "Unlimited access to all courses",
      "Access to course assignments",
      "Downloadable course resources",
      "Community forum access",
      "Priority support",
    ],
  },
  {
    title: "Full Course",
    popular: 0,
    price: 34000,
    description:
      "",
    buttonText: "Contact US",
    benefitList: [
      "Lifetime access to the course",
      "All future updates to the course",
      "Access to course assignments",
      "Downloadable course resources",
      "Exclusive access to webinars",
      "Priority student support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div className="mt-8">
                <span className="text-3xl font-bold">PKR{" "}{pricing.price}</span>
                {pricing.title.includes("Full") ? (<span className="text-muted-foreground"> /course</span>) :
                 (<span className="text-muted-foreground"> /month</span>)}
                
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    {benefit.includes("No")? (<X className="text-red-500" />) : (<Check className="text-green-500" />)}{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};