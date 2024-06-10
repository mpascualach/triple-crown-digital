import nodemailer from 'nodemailer';

interface emailFunctionProps {
  email: string;
  html: string;
  subject: string;
  text: string;
}
