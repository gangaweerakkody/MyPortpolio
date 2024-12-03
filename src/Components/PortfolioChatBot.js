import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Chatbot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#BA55D3',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#BA55D3',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Chatbot steps
const steps = [
  {
    id: '1',
    message: 'Hi! Welcome to my portfolio. How can I help you?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'about', label: 'Tell me about yourself', trigger: 'about' },
      { value: 'projects', label: 'Show me your projects', trigger: 'projects' },
      { value: 'contact', label: 'How can I contact you?', trigger: 'contact' },
      { value: 'resume', label: 'Download your resume', trigger: 'resume' },
    ],
  },
  {
    id: 'about',
    message: 'I am Isuru Ganga Weerakkody, a freelance web developer and designer passionate about creating beautiful digital experiences.',
    trigger: 'options',
  },
  {
    id: 'projects',
    message: 'You can view my projects by navigating to the Projects section of my portfolio.',
    trigger: 'options',
  },
  {
    id: 'contact',
    message: 'You can contact me at isuru@example.com or through the contact form on my website.',
    trigger: 'options',
  },
  {
    id: 'resume',
    message: 'Click the link below to download my resume:',
    trigger: 'resume-link',
  },
  {
    id: 'resume-link',
    component: (
      <div>
        <a href="/path-to-resume.pdf" download style={{ color: '#BA55D3' }}>
          Download Resume
        </a>
      </div>
    ),
    trigger: 'options',
  },
];

// Chatbot Component
const PortfolioChatBot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default PortfolioChatBot;
