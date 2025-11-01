import React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    message: string;
    subject: string;
    email: string
}

export function EmailTemplate({ firstName, lastName, message, subject, email }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h2 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>{subject}</h2>
            <p>New Inquiry from {firstName} {lastName},</p>
            <p>{message}</p>
            <p>Contact Email: {email}</p>
        </div>
    )
};

