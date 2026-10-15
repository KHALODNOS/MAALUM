// EmailJS configuration and helper functions
// Configuration is loaded from environment variables (Vite requires VITE_ prefix, with fallbacks)

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_SERVICE_ID || 'service_b0zgqeu',
  publicKey: import.meta.env.VITE_PUBLIC_KEY || 'eQm_dwGSOAFcBIVW7',
  templateFirstId: import.meta.env.VITE_TEMPLATE_FIRST_ID || 'template_zhx1nq5',
  templateSecondId: import.meta.env.VITE_TEMPLATE_SECOND_ID || 'template_b3ybl0s',
};

/**
 * Send an email using EmailJS REST API
 * (Works without requiring npm install or extra dependencies)
 */
export async function sendEmail({
  templateId = EMAILJS_CONFIG.templateFirstId,
  serviceId = EMAILJS_CONFIG.serviceId,
  publicKey = EMAILJS_CONFIG.publicKey,
  templateParams = {},
}) {
  const endpoint = 'https://api.emailjs.com/api/v1.0/email/send';

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: templateParams,
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS error (${response.status}): ${errorText}`);
  }

  return response;
}

export default EMAILJS_CONFIG;
