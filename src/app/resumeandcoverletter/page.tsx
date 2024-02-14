'use client';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import '@copilotkit/react-textarea/styles.css'; // also import this if you want to use the CopilotTextarea component
import '@copilotkit/react-ui/styles.css'; // also import this if you want to use the chatbot component
// import React, { useEffect, useState } from 'react';
import { CoverLetterAndResume } from '../components/resume';

function buildResume() {
  return (
    <CopilotKit url='./../api/copilotkit/chat'>
      <CopilotSidebar>
        <CoverLetterAndResume />
      </CopilotSidebar>
    </CopilotKit>
  );
}

export default buildResume;
