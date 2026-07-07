export async function submitForm(
  endpoint: string,
  form: HTMLFormElement,
  successMessage: string = "Thank you - your message has been sent. We'll get back to you soon. 🔱"
): Promise<{ ok: boolean; message: string }> {
  if (!endpoint || endpoint.includes('YOUR_SCRIPT_URL')) {
    return {
      ok: false,
      message: 'Form not connected yet - please email us directly at connect2vajratrix@gmail.com.',
    }
  }
  try {
    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(form),
    })
    return { ok: true, message: successMessage }
  } catch {
    return { ok: false, message: 'Network error - please email us directly at connect2vajratrix@gmail.com.' }
  }
}