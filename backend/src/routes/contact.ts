import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const router = express.Router();

// Email validation rules
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('이름은 2-50자 사이여야 합니다'),
  body('email').isEmail().normalizeEmail().withMessage('유효한 이메일 주소를 입력해주세요'),
  body('subject').trim().isLength({ min: 5, max: 100 }).withMessage('제목은 5-100자 사이여야 합니다'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('메시지는 10-1000자 사이여야 합니다')
];

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
  try {
    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: '입력 데이터가 유효하지 않습니다',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `[포트폴리오] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00FF88;">새로운 연락 요청</h2>
          <div style="background: #1A1A1A; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>제목:</strong> ${subject}</p>
            <p><strong>메시지:</strong></p>
            <div style="background: #0F0F0F; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #888; font-size: 12px;">
            이 메시지는 포트폴리오 웹사이트의 연락 폼을 통해 전송되었습니다.
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: '메시지가 성공적으로 전송되었습니다'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: '메시지 전송 중 오류가 발생했습니다'
    });
  }
});

export default router;
