// app/actions/sendEmail.ts
'use server';

export async function sendEmail(formData: { 
  name: string; 
  email: string; 
  message: string 
}) {
  // In production, integrate with your email service (Resend, Nodemailer, etc.)
  console.log('Email data received:', formData);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demo purposes, randomly fail to show error state
  if (Math.random() > 0.7) {
    throw new Error('Failed to send email');
  }
  
  return { success: true };
}