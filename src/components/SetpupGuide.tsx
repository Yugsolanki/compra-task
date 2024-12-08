import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Progress } from "./ui/progress";
import { CircleCheck, CircleDashed, Ellipsis, Laugh } from "lucide-react";
import "./../styles/SetupGuide.css";

const SetpupGuide = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Welcome, Aanchal👋</h1>
        <Button variant="outline" className="rounded-button shadow">
          <Laugh /> Drop a review
        </Button>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full bg-white px-4 rounded-xl border my-4"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="place-items-center">
            <div className="flex justify-between place-items-center w-full px-4">
              <h3 className="text-lg font-semibold">Setup guide</h3>
              <Ellipsis />
            </div>
          </AccordionTrigger>

          {/* Setup guide content */}
          <AccordionContent className="px-4">
            <div className="flex justify-between place-items-center">
              <span className="text-base font-semibold">2/4 completed</span>
              <Progress value={50} className="w-[87%]" />
            </div>

            <Accordion type="single" collapsible className="w-full my-4">
              <AccordionItem value="item-1" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <span>
                    <CircleCheck
                      strokeWidth={2}
                      color="white"
                      fill="black"
                      size={35}
                    />{" "}
                    Is it accessible?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <div>
                    <div>
                      You can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch.{" "}
                      <br />
                      <Button variant="outline" className="green-button">
                        {" "}
                        Create Survey
                      </Button>
                    </div>
                    <img
                      src="https://picsum.photos/1080/720"
                      alt="something"
                      className="w-[30%] border"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <span>
                    <CircleDashed
                      strokeWidth={1}
                      color="black"
                      fill="black"
                      size={35}
                    />{" "}
                    Is it styled?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <div>
                    <div>
                      You can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch.{" "}
                      <br />
                      <Button variant="outline" className="green-button">
                        {" "}
                        Create Survey
                      </Button>
                    </div>
                    <img
                      src="https://picsum.photos/1080/720"
                      alt="something"
                      className="w-[30%] border"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <span>
                    <CircleDashed
                      strokeWidth={1}
                      color="black"
                      fill="black"
                      size={35}
                    />{" "}
                    Is it animated?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <div>
                    <div>
                      You can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch. You
                      can quickly setup your survey by activating one of the
                      templates. You can choose from a list of categories or
                      also create your own customized survey from scratch.{" "}
                      <br />
                      <Button variant="outline" className="green-button">
                        {" "}
                        Create Survey
                      </Button>
                    </div>
                    <img
                      src="https://picsum.photos/1080/720"
                      alt="something"
                      className="w-[30%] border"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SetpupGuide;
