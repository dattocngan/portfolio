// import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'tiendat184.it@gmail.com',
      to: ['tiendat184.it@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <h1>Hello world</h1>
          <p>This is a test email</p>
        </>
      )
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
