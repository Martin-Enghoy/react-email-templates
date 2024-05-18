import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ReviewerInitialReviewEmailProps {
  reviewerName?: string;
  paperId?: string;
  paperTitle?: string;
  reviewResult?: string;
  revisionNotes?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ReviewerInitialReviewEmail = ({
  reviewerName = "IECEP Journal User",
  paperId = "sample id",
  paperTitle = "sample title",
  reviewResult = "Accepted with Major Revisions",
  revisionNotes = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ducimus fugiat velit ex ullam assumenda tenetur hic distinctio tempore, quae vitae, eum cum iusto accusamus sint quas ea vel pariatur.",
}: ReviewerInitialReviewEmailProps) => {
  const previewText = `You have received an email from IECEP Journal`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "website-text": "#071013",
                "website-background": "#f4f9fb",
                "website-primary": "#008cba",
                "website-secondary": "#D2E8EF",
                "website-accent": "#4197B4",
              },
              fontFamily: {
                "email-heading": ["Arial", "Geneva", "'Verdana'", "sans-serif"],
                "email-text": [
                  "Georgia",
                  "Palatino",
                  "'Palatino Linotype'",
                  "Roboto",
                  "sans-serif",
                ],
              },
            },
          },
        }}
      >
        <Body className="bg-white my-auto mx-auto font-email-text">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://utfs.io/f/dc0c3aaf-f620-4c07-bb78-2e988054ace5-9ep74.png`}
                width="320"
                height="120"
                alt="IECEP Journal Banner"
                className="my-0 mx-auto"
              />
            </Section>

            <Heading className="text-website-primary text-[24px] font-normal font-email-heading text-center p-0 my-[30px] mx-0">
              Initial Review Results Uploaded
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">
              Dear IECEP Secretary and Associate Editor,
            </Text>

            <Section className="flex flex-col gap-4">
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>{reviewerName}</strong> has set their Initial Review
                Result for the paper with a title of{" "}
                <strong>{paperTitle}</strong> and id of{" "}
                <strong>{paperId}</strong>. See the initial results below:
              </Text>
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Review Result: </strong>
              {reviewResult}
            </Text>

            {reviewResult === "Accepted with Minor Revisions" ||
            reviewResult === "Accepted with Major Revisions" ||
            reviewResult === "Rejected" ? (
              <Section className="flex flex-col gap-2">
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Revision Notes:</strong>
                </Text>
                <Text className="text-black text-[14px] leading-[24px] ml-4 text-justify">
                  {revisionNotes}
                </Text>
              </Section>
            ) : null}
            <Section className="w-full flex justify-center">
              <Button
                className="mx-auto bg-website-primary rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3 tracking-wide"
                href={`https://iecepjournal.com/user/current-submissions/${paperId}`}
              >
                View Submission
              </Button>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Privacy Notice: Your privacy is important to us. Any personal
              information you provide, including your email address, will be
              used solely for the purpose of communicating with you regarding
              your submissions, subscriptions, or inquiries related to the IECEP
              Journal. We will not share your information with third parties
              without your consent. For more information, please refer to our
              Privacy Policy on our website.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ReviewerInitialReviewEmail;
