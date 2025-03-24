---
id: usage
title: Virtual Agent Usage Guide
sidebar_label: Agent Usage Guide
description: Documentation for Virtual Agent Usage Guide
---

# Rezolve.ai Chatbot User Guide

## Overview

Rezolve.ai is an AI-powered virtual assistant designed to streamline support ticket management and provide instant answers to user queries. The chatbot can be integrated with MS Teams, Slack, and embedded on websites via CDN widgets, offering a seamless support experience.

## Introduction

Rezolve.ai assists users by enabling them to:
- Create support tickets
- Check ticket status and update existing tickets
- Ask questions and receive AI-driven responses
- Engage in live chat with a support agent when necessary
- Access the chatbot via the web, MS Teams, Slack, or as a guest user

## Features

### 1. Multi-Platform Support
- Available on MS Teams, Slack, and Web
- Supports CDN widgets for website embedding
- Allows guest user access without login (limited functionality)

### 2. Ticket Management
- Create Tickets for software/hardware requests, online forms, FAQs, and onboarding assistance
- Check Ticket Status to track progress and take further action
- Update Tickets with additional notes, attachments, or status changes

### 3. Live Chat with Agents
- Users can escalate queries to live agents if chatbot responses are insufficient
- Available during agent working hours
- When no agent is available, the bot shall create a ticket to notify agent for the request once agents are back online
  
### 4. AI-Driven Knowledge Management
- Instant Answers based on knowledge base articles
- User Feedback Mechanism with thumbs up/down for response quality
- Knowledge Gap Logging for queries where no answer is found

## Usage

### Accessing Rezolve.ai
- Web bot access is available within a tenant through virtual agent menu on the left panel
- MS Teams & Slack Integration: Follow your company's setup instructions
- CDN Widget: Contact IT support to embed the bot on a website
- Guest User Mode: No login required, but ticket status tracking is unavailable

### Creating a Ticket
1. Start a chat and describe your issue.
2. The bot collects details and logs a support ticket.
3. You will receive a ticket number for reference.
  
### Guest User Experience
- Guest users can also create tickets without logging in.
- However, guest users cannot check the status of their tickets later.
- If you wish to track your ticket status, please log in or provide your email ID.
 
### Checking Ticket Status
1. Request "Check my ticket status."
2. Enter your ticket number when prompted.
3. Choose from: 
   - Update Ticket: Add notes, change status, or attach files.
   - Go Back to List: View ticket history.
   - No Further Action: Exit the flow.
 
### Update Ticket Options
- Add a Note: Provide additional details for support agents.
- Move Ticket Status: Change status to "In Progress," "Resolved," etc.
- Add an Attachment: Upload screenshots or documents for clarity.

### Ask a Question
1. Enter a question (e.g., "How do I reset my password?").
2. The bot responds with relevant information.
3. Users can rate responses: 
   - Thumbs Up: Confirms satisfaction, redirects to the main menu.
   - Thumbs Down: Logs a knowledge gap, requests star rating feedback, and may escalate to a live agent.
 
## Browse My Skill Menu

Rezolve.ai provides a Browse My Skill Menu option, allowing users to create tickets for various requests easily. These include:
- Software Requests
- Hardware Requests
- Online Forms
- Featured Questions
- FAQs
- Onboarding a New Employee

### Availability
- The Browse My Skill Menu option is available only on MS Teams and Slack.
- This feature is not available on the web bot or for guest users.

To use this feature, simply select the Browse My Skill Menu option in the chatbot interface on MS Teams or Slack and choose the relevant category.
 
### Request New Software 
The request new software flow allows user to create a ticket using a preset form that can be filled in by the requestor to request any software tool to the required user. The software request tickets can be tracked and moved just like other tickets on the Agent-UI screen.
 
This can be only performed when a user is accessed through MS-Teams or Slack as the browse my skill menu is not available on web bot flow.

### Request New Hardware
The request new Hardware flow allows user to create a ticket using a preset form that can be filled in by the requestor to request any Hardware to the required user. The Hardware request tickets can be tracked and moved just like other tickets on the Agent-UI screen.
 
This can be only performed when a user is accessed through MS-Teams or Slack as the browse my skill menu is not available on web bot flow.

### Online Forms
The online forms are a set of questions that are flagged by the bot admin from the manage QNA screen, once a QNA has been flagged as online form the user will be able to see the label of the QNA on online forms list card on the Bot flow. Now the user may click on the label which is needed to directly get the QNA answer on the bot flow instead of manually asking the utterance.
 
Online forms is limited to MS-Teams and Slack platforms and can be visible only to the tenants which are associated to Language Studio Knowledge base only.

### Featured Questions
The Featured Questions are a set of questions that are flagged by the bot admin from the manage QNA screen, once a QNA / Task has been flagged as Featured Questions the user will be able to see the label of the QNA on online forms list card on the Bot flow. Now the user may click on the label which is needed to directly get the QNA answer on the bot flow instead of manually asking the utterance.
 
Featured Questions is limited to MS-Teams and Slack platforms and can be visible only to the tenants which are associated to Language Studio Knowledge base only.

### Onboard a New Employee
Onboarding a new employee is now provided in a very convenient way in browse my skill menu. The user shall click on the Onboard a new employee button and fill up the form required to provide necessary details. The manager or any admin person shall initiate the process of enrolling / onboarding an employee into the company. 
 
This feature is available to the user only through MS-Teams and Slack.

## Best Practices
- Ensure clear and precise queries for best responses.
- Use ticketing features for issue tracking instead of general inquiries.
- Provide detailed feedback to improve chatbot accuracy.

## Related Topics
- MS Teams and Slack Integration Guide
- Troubleshooting Bot Issues
- Live Agent Support Availability
