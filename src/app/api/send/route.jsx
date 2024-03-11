import EmailTemplate from "../../components/email-template/emailTemplate";
import { Resend } from "resend";
import axios from "axios";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY;

export async function POST(request, response) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const organization = formData.get("organization");
    const token = formData.get("token");

    const response = await axios.post(
      `https://api.hcaptcha.com/siteverify?response=${token}&secret=${SECRET_KEY}`,
      { headers: { "content-type": "application/x-www-form-urlencoded" } }
    );

    if (response.data.success) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "avanish@beamlab.co",
        subject: `Form submission from ${name} via TwelveLetter website`,
        react: (
          <EmailTemplate formData={{ name, email, message, organization }} />
        ),
      });
      console.log(response.data);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Unsuccessful verification" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
