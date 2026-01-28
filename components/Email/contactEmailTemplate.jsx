export function contactEmailTemplate({ name, email, phone, subject, message }) {
  return `
  <div style="margin:0;padding:0;background:#f9f8f6;font-family:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;line-height:1.5;color:#2B2B2B;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:720px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(34, 36, 78, 0.1);">

      <!-- Header -->
      <tr>
        <td style="background:#22244E;padding:40px 40px 32px;">
  <img
    src="https://5s4crdleaswcfwbr.public.blob.vercel-storage.com/Logo/Adesa-energy-logo.jpg"
    alt="Adesa Energy"
    width="140"
    style="display:block;margin-bottom:16px;"
  />


  <h1 style="margin:0;font-size:28px;font-weight:600;font-family:'Montserrat', Arial, sans-serif;color:#ffffff;">
    Adesa Energy
  </h1>

  <p style="margin-top:8px;font-size:14px;color:#F37621;font-family:'Montserrat', Arial, sans-serif;">
    New Contact Form Submission
  </p>
</td>

      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:40px;">
          <h2 style="margin:0 0 28px;font-size:22px;font-weight:600;font-family:'Montserrat', Arial, sans-serif;color:#22244E;">
            You’ve received a new message
          </h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#2B2B2B;font-family:'Inter', Arial, sans-serif;">
            <tr>
              <td style="padding:12px 0;font-weight:600;color:#22244E;width:30%;">Full name</td>
              <td style="padding:12px 0;text-align:right;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;font-weight:600;color:#22244E;">Email</td>
              <td style="padding:12px 0;text-align:right;">${email}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;font-weight:600;color:#22244E;">Phone</td>
              <td style="padding:12px 0;text-align:right;">
                ${phone ?? "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;font-weight:600;color:#22244E;">Subject</td>
              <td style="padding:12px 0;text-align:right;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top:32px;padding:24px;background:#f6f5f3;border-left:4px solid #F37621;border-radius:8px;">
            <p style="margin:0 0 10px;font-weight:600;font-family:'Montserrat', Arial, sans-serif;color:#22244E;font-size:15px;">
              Message
            </p>
            <p style="margin:0;line-height:1.6;color:#2B2B2B;font-family:'Inter', Arial, sans-serif;">
              ${message}
            </p>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#242622;padding:24px;text-align:center;">
        <img
  src="https://5s4crdleaswcfwbr.public.blob.vercel-storage.com/Logo/Screenshot%202026-01-13%20103937.png"
  alt="Adesa Energy"
  width="90"
  style="display:block;margin:0 auto 8px;"
/>


          <p style="margin:0;font-size:13px;color:#ffffff;font-family:'Inter', Arial, sans-serif;">
            Adesa Energy
          </p>
          <p style="margin-top:6px;font-size:12px;color:#F37621;font-family:'Inter', Arial, sans-serif;">
            adesaenergy.com
          </p>
        </td>
      </tr>

    </table>
  </div>
  `;
}
