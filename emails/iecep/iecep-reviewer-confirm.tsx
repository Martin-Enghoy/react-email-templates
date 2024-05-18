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

interface ReviewerConfirmReviewInviteEmailProps {
  reviewerName?: string;
  fileUrl?: string;
  paperId?: string;
  paperTitle?: string;
  status?: string;
  acceptance: boolean;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ReviewerConfirmReviewInviteEmail = ({
  reviewerName = "IECEP Journal User",
  paperId = "sample id",
  paperTitle = "sample title",
  acceptance = false,
}: ReviewerConfirmReviewInviteEmailProps) => {
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
            {acceptance ? (
              <Heading className="text-website-primary text-[24px] font-normal font-email-heading text-center p-0 my-[30px] mx-0">
                Review Assignment Accepted
              </Heading>
            ) : (
              <Heading className="text-website-primary text-[24px] font-normal font-email-heading text-center p-0 my-[30px] mx-0">
                Review Assignment Declined
              </Heading>
            )}
            <Text className="text-black text-[14px] leading-[24px]">
              Dear IECEP Secretary and Associate Editor,
            </Text>
            {acceptance ? (
              <Section className="flex flex-col gap-4">
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>{reviewerName}</strong> has accepted their review
                  assignment on the paper with:
                </Text>
                <Text className="text-black text-[14px] leading-[24px] ml-4">
                  Title: <strong>{paperTitle}</strong>
                </Text>
                <Text className="text-black text-[14px] leading-[24px] ml-4">
                  ID: <strong>{paperId}</strong>
                </Text>
              </Section>
            ) : (
              <Section>
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>{reviewerName}</strong> has declined their review
                  assignment on the paper with:
                </Text>
                <Text className="text-black text-[14px] leading-[24px] ml-4">
                  Title: <strong>{paperTitle}</strong>
                </Text>
                <Text className="text-black text-[14px] leading-[24px] ml-4">
                  ID: <strong>{paperId}</strong>
                </Text>
              </Section>
            )}
            {acceptance ? (
              <Text className="text-black text-[14px] leading-[24px]">
                The reviewer shall proceed with their review based on the
                timeline / deadline you have provided them.
              </Text>
            ) : (
              <Text className="text-black text-[14px] leading-[24px]">
                Please assign / invite another reviewer fitting for this paper.
              </Text>
            )}
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

export default ReviewerConfirmReviewInviteEmail;
