import Link from "next/link";
import { BackgroundLinesDemo } from "../components/BackgroundLines";
import Image from "next/image";
import { IconApple, IconBarbellFilled, IconJumpRope, IconReportMedical, IconStretching2, IconYoga } from "@tabler/icons-react";
import { AccordionDemo } from "../components/Accordion";
import { HelpingHand } from "lucide-react";
import FeedbackForm from "./feedback/page";
import InitiateForm from "../components/InitiateForm";




export default function Home() {
  return (
    <main className=" text-ts bg-primary">
      <section id="home" className="min-h-screen text-tPrimary bg-third">
        <BackgroundLinesDemo />
      </section>
      <section className="min-h-screen p-2 gap-4 max-w-6xl m-auto  mb-16 md:mb-0">
        <div className="text-ts flex mb-10 md:mb-0 justify-center items-center">
          <div className="p-2 rounded-full bg-muted text-accent"><IconJumpRope width={32} height={32} /></div>
        </div>
        <div className=" flex  md:flex-row flex-col  p-2  justify-center items-center ">
          <div className="basis-1/2">
            <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">Welllite: BMI Calculator – Made Easy</h2>
            <p className="text-sm md:text-base text-tMuted ">Welllite your make accurate your Body Mass Index (BMI) is a key number that tells you if you're in a healthy weight range. Whether you want to <strong className="text-accent font-normal"><a href="/home">check your progress</a></strong> on a fitness journey or get a quick health overview, understanding your BMI is the first step.</p>

          </div>
          <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

            <Image
              className="bg-"
              src={'/1.svg'}
              width={250}
              height={250}
              alt="willlite add"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen  p-2 gap-4 max-w-6xl m-auto  mb-16 md:mb-0">
        <div className="text-ts flex mb-10 md:mb-0 justify-center items-center">
          <div className="p-2 rounded-full bg-muted text-accent"><IconReportMedical width={32} height={32} /></div>
        </div>
        <div className=" flex  md:flex-row-reverse flex-col p-2  justify-center items-center ">
          <div className="basis-1/2">
            <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">How is BMI calculated and what does it mean?</h2>
            <p className="text-sm md:text-base text-tMuted ">Welllite, a simple yet powerful tool, offers a glimpse into your health. Calculated by dividing weight by height squared, it estimates body fat percentage. A high BMI signals potential health risks, while a low one might indicate underweight. However, remember, BMI is just one piece of the puzzle. Consult a healthcare professional for a comprehensive assessment.</p>

          </div>
          <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

            <Image
              className="bg-"
              src={'/2.svg'}
              width={250}
              height={250}
              alt="willlite add"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen  p-2 gap-4 max-w-6xl m-auto  mb-16 md:mb-0">
        <div className="text-ts flex mb-10 md:mb-0 justify-center items-center">
          <div className="p-2 rounded-full bg-muted text-accent"><IconYoga width={32} height={32} /></div>
        </div>
        <div className=" flex  md:flex-row flex-col p-2  justify-center items-center ">
          <div className="basis-1/2">
            <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">Is BMI a good measure of health?</h2>
            <p className="text-sm md:text-base text-tMuted ">While BMI is a quick estimate of body fat, it's not a perfect health indicator. It doesn't account for muscle mass, bone density, or body composition. Athletes or people with muscular builds might be misclassified. For a more comprehensive picture, consult a healthcare professional and consider factors like waist circumference and overall health markers.</p>

          </div>
          <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">
            <Image
              className="bg-"
              src={'/3.svg'}
              width={250}
              height={250}
              alt="willlite add"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen  p-2 gap-4 max-w-6xl m-auto  mb-16 md:mb-0">
        <div className="text-ts flex mb-10 md:mb-0 justify-center items-center">
          <div className="p-2 rounded-full bg-muted text-accent"><IconBarbellFilled width={32} height={32} /></div>
        </div>
        <div className=" flex  md:flex-row-reverse flex-col p-2  justify-center items-center ">
          <div className="basis-1/2">
            <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">What is a healthy BMI range?</h2>
            <p className="text-sm md:text-base text-tMuted ">A healthy BMI range typically falls between 18.5 and 24.9. However, these numbers are general guidelines and may vary based on individual factors. It's essential to consult with a healthcare provider to determine your specific BMI range and discuss any concerns or questions you may have.</p>
          </div>
          <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">
            <Image
              className="bg-"
              src={'/Tennis-bro.svg'}
              width={250}
              height={250}
              alt="willlite add"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen  p-2 gap-4 max-w-6xl m-auto mb-16 md:mb-0">
        <div className="text-ts flex mb-10 md:mb-0 justify-center items-center">
          <div className="p-2 rounded-full bg-muted text-accent"><IconApple width={32} height={32} /></div>
        </div>
        <div className=" flex  md:flex-row flex-col p-2  justify-center items-center ">
          <div className="basis-1/2">
            <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">Does BMI vary by age, gender, or body type?</h2>
            <p className="text-sm md:text-base text-tMuted ">BMI can vary slightly by age, gender, and body type. For Welllite, children and older adults may have different BMI ranges compared to adults. Additionally, individuals with muscular builds might have a higher BMI due to increased muscle mass. It's important to consider these factors when interpreting your BMI and consulting with a healthcare professional for personalized guidance.</p>

          </div>
          <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

            <Image
              className="bg-"
              src={'/4.svg'}
              width={250}
              height={250}
              alt="willlite add"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen  p-2 gap-4 max-w-6xl m-auto  mb-16 md:mb-0">
        <div className="text-ts flex mb-10 md:mb-0 justify-center items-center">
          <div className="p-2 rounded-full bg-muted text-accent"><IconYoga width={32} height={32} /></div>
        </div>
        <div className=" flex  md:flex-row-reverse flex-col p-2  justify-center items-center ">
          <div className="basis-1/2">
            <h2 className="text-2xl text-tp py-2 sm:text-3xl md:text-4xl">How often should I check my BMI?</h2>
            <p className="text-sm md:text-base text-tMuted ">It's recommended to check your BMI periodically, such as once or twice a year. This can help you track changes in your body composition and identify any potential health concerns early on. However, it's important to consult with a healthcare professional for personalized guidance and to discuss any specific factors that may influence your BMI.</p>

          </div>
          <div className="basis-1/2 aspect-square flex justify-center items-center border-accent p-3 rounded-lg ">

            <Image
              className="bg-"
              src={'/7.svg'}
              width={250}
              height={250}
              alt="willlite add"
            />
          </div>
        </div>
      </section>
      <section id="faq" className="min-h-screen  p-2 gap-4 max-w-6xl m-auto  mb-16 ">
        <AccordionDemo />
      </section>
      <section className="min-h-screen  p-2  max-w-6xl m-auto flex flex-col justify-evenly items-center mb-16 md:mb-0">
        <h4 className=" mb-6  text-center flex flex-col justify-center items-center text-sm bg-muted p-2 px-3 rounded-full text-accent">
          help & support</h4>
        <div className=" flex  md:flex-row flex-col  gap-4 justify-center items-center">
          <div className="basis-1/2 lg:aspect-square p-3 rounded-lg">
            <h6 className="text-3xl md:text-4xl lg:text-5xl taxt-tp py-4 ">How could be next Featured in web? <strong className="font-normal text-accent">suggest us!!</strong> </h6>
            <p className="text-sm pb-2 my-3">Want to see your amazing BMI-related project featured on our platform? We're all about showcasing the incredible work of our community. Share your stories, insights, or creations </p>
            <Link href={'/feedback'} className="mb-4  text-center flex flex-col justify-center items-center text-sm bg-muted p-2 px-3 rounded-full text-accent">
              for help</Link>

          </div>
          <div className=" basis-1/2 lg:aspect-square">
            <InitiateForm />
          </div>
        </div>
      </section>

    </main>
  );
}
