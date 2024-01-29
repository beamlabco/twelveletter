import EmailTemplate from "../../components/email-template/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const organization = formData.get("organization");
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sharnam34@gmail.com",
      subject: `Form submission from ${name} via TwelveLetter website`,
      react: (
        <EmailTemplate formData={{ name, email, message, organization }} />
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
