import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

export default function ContactEmail({
  name,
  phone,
  message,
}: {
  name: string;
  phone: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f6f9fc", fontFamily: "sans-serif" }}>
        <Container
          style={{
            background: "#ffffff",
            margin: "24px auto",
            padding: "24px",
            borderRadius: 12,
            maxWidth: 520,
          }}
        >
          <Heading style={{ margin: 0, marginBottom: 12 }}>
            New Milton Geeks submission
          </Heading>
          <Text>
            <b>Name:</b> {name}
          </Text>
          <Text>
            <b>Phone:</b> {phone}
          </Text>
          <Text>
            <b>Message:</b>
            <br />
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
