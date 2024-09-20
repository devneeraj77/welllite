import { IconQuestionMark } from "@tabler/icons-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full ">
     
      <h4 id="faqs" className="text-3xl text-tp pb-4 md:pb-8 text-center">FAQs</h4>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is Welllite accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How to compute bmi?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use BMI to track my weight loss progress?</AccordionTrigger>
        <AccordionContent>
        Yes, BMI can be a helpful tool for tracking weight loss progress. However, it&apos;s important to focus on overall health and well-being, not just the number on the scale.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What are the health risks associated with being overweight or obese?</AccordionTrigger>
        <AccordionContent>
        Being overweight or obese can increase the risk of various health conditions, including heart disease, stroke, diabetes, and certain types of cancer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>How can I improve my BMI?</AccordionTrigger>
        <AccordionContent>
        A healthy diet, regular exercise, and lifestyle changes can help you achieve a healthy BMI. Consult with a healthcare professional or registered dietitian for personalized guidance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>What information do I need to use the calculator?</AccordionTrigger>
        <AccordionContent>
        You&apos;ll need to enter your height and weight in either metric (meters and kilograms) or imperial (feet and inches, pounds) units.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Can I use the calculator for children?</AccordionTrigger>
        <AccordionContent>
        While the calculator can be used for children, it&apos;s important to note that BMI guidelines for children differ from those for adults. Consult with a pediatrician for specific recommendations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>What does the BMI result mean?</AccordionTrigger>
        <AccordionContent>
        The calculator will provide your BMI along with a classification (underweight, healthy weight, overweight, or obese). However, it&apos;s essential to interpret this result in conjunction with other factors and consult with a healthcare professional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>Is BMI the same for everyone?</AccordionTrigger>
        <AccordionContent>
        No, BMI varies by age, gender, and ethnicity. While it&apos;s a general guideline, it&apos;s important to consult with a healthcare professional for personalized advice.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
