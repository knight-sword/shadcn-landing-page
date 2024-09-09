import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Booking Website",
    description:
      "Trafft functions as a no-code website builder, automatically generating a booking page accessible through the Trafft dashboard. You can embed this page into your website, share it directly with clients, or even place it on your social media accounts.",
  },
  {
    title: "Customer Profile",
    description:
      "Your clients can create profiles by clicking on the Login button in the upper right corner of your booking website. Under their customer profile, they can easily manage their appointments.",
  },
  {
    title: "Add Appointment to Calendar for Customers",
    description:
      "After scheduling an appointment, customers can conveniently add the details to their calendars by clicking on the 'add to calendar' button. The appointment will automatically be added to their Google, Outlook, or iCal calendars.",
  },
  {
    title: "Custom domain",
    description:
      "If you have your own domain, you have the option to host your Trafft booking page on that domain instead of having lightojoy.com in the URL.",
  },
  {
    title: "Customer Panel Access",
    description:
      "When creating a customer profile, you can send customers an email with login details. This enables them to set a password and access their profile, where they can view all their appointments, make payments, leave reviews, and more.",
  },
];

const featureList: string[] = [
  "Calendar",
  "Online Booking",
  "Notifications",
  "Report",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
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
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>
{/* 
            <CardFooter>
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
  );
};
