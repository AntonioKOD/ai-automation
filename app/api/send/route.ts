import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try{
        const {firstName, lastName, subject, message, email} = await request.json();
        const {data, error} = await resend.emails.send({
            from: "BuildQuick <hello@buildquick.io>",
            to: ['antonio_kodheli@icloud.com',],
            subject: "New Inquiry from BuildQuick Website",
            react: EmailTemplate({
                firstName: firstName,
                lastName: lastName,
                subject: subject,
                message: message,
                email: email
            })
        })
    }
    catch(error){
        console.log("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending email", error: error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
}