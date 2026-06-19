"use server";

import { Resend } from "resend";

// Initialize Resend with your API key (Add RESEND_API_KEY to your .env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

export interface FormState {
  success: boolean;
  message: string;
}

export async function sendContactEmail(prevState: any, formData: FormData): Promise<FormState> {
  // Extract inputs matching your form's "name" attributes
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string || "Not Specified";
  const service = formData.get("service") as string || "Not Specified";
  const message = formData.get("message") as string;

  // Quick fallback validation loop
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Required fields missing. Please complete name, email, and message lines.",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with your verified custom domain email once configured in Resend (e.g., hello@orign.co.in)
      to: ["orign911@gmail.com"], // Your inbox destination
      subject: `🚨 New Lead // ${company} - ${service}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Partnership Inquiry</title>
          </head>
          <body style="font-family: monospace; background-color: #fbfaf3; color: #07111f; padding: 24px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2px solid #07111f; border-radius: 12px; padding: 32px; box-shadow: 4px 4px 0px #07111f;">
              
              <!-- Header Token -->
              <div style="background-color: #07111f; color: #ffffff; padding: 6px 12px; display: inline-block; font-size: 10px; font-weight: bold; text-transform: uppercase; tracking-widest: 0.1em; border-radius: 4px; margin-bottom: 24px;">
                INCOMING PARTNERSHIP BRIEF
              </div>
              
              <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; margin: 0 0 8px 0; tracking: -0.02em;">
                New Lead Alert.
              </h1>
              <p style="font-size: 13px; color: #07111f; opacity: 0.6; margin: 0 0 24px 0; font-style: italic;">
                Expectation engine timestamp: ${new Date().toLocaleString()}
              </p>
              
              <hr style="border: none; border-top: 1px solid rgba(7, 17, 31, 0.1); margin-bottom: 24px;" />
              
              <!-- Metadata Grid Grid -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; font-size: 12px; font-weight: bold; color: rgba(7, 17, 31, 0.4); width: 30%; text-transform: uppercase;">Sender</td>
                  <td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: #07111f;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 12px; font-weight: bold; color: rgba(7, 17, 31, 0.4); text-transform: uppercase;">Email</td>
                  <td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: #07111f;"><a href="mailto:${email}" style="color: #b00046; text-decoration: none; border-b: 1px solid rgba(176, 0, 70, 0.2);">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 12px; font-weight: bold; color: rgba(7, 17, 31, 0.4); text-transform: uppercase;">Company</td>
                  <td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: #07111f;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 12px; font-weight: bold; color: rgba(7, 17, 31, 0.4); text-transform: uppercase;">System Needed</td>
                  <td style="padding: 8px 0; font-size: 12px; font-weight: bold; background-color: #b9ff17; color: #07111f; display: inline-block; padding: 2px 8px; border: 1px solid #07111f; border-radius: 4px;">
                    ${service}
                  </td>
                </tr>
              </table>
              
              <hr style="border: none; border-top: 1px solid rgba(7, 17, 31, 0.1); margin-bottom: 24px;" />
              
              <!-- Message Area -->
              <div style="margin-bottom: 24px;">
                <h3 style="font-size: 11px; font-weight: bold; color: rgba(7, 17, 31, 0.4); text-transform: uppercase; margin: 0 0 8px 0;">Project Core Brief:</h3>
                <div style="background-color: #fbfaf3; border: 1px solid rgba(7, 17, 31, 0.1); padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #07111f; white-space: pre-wrap;">${message}</div>
              </div>
              
              <!-- Footer Token -->
              <div style="border-t: 1px solid rgba(7, 17, 31, 0.1); pt: 16px; text-align: center; font-size: 10px; color: rgba(7, 17, 31, 0.3); text-transform: uppercase; letter-spacing: 1px;">
                Orign Automation Core Engine // Via Resend API
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "Brief transmitted seamlessly. Expect our connection loop within 8-12 hours.",
    };
  } catch (error) {
    console.error("Resend API Error:", error);
    return {
      success: false,
      message: "Transmission broke. Please try again or drop a line straight to hello@orign.studio.",
    };
  }
}