---
title: 'ServiceNow LiveChat Integration Technical Specification'
sidebar_position: 1
---


# ServiceNow LiveChat Integration Technical Specification

Help Center
Enterprise Service Management
ServiceNow LiveChat Integration
Technical Specification
Find More- rezolve.ai/help-center

ServiceNow LiveChat Integration Technical
Specification
Table of Contents
• Overview
• Architecture
• Components
• Integration Flow
• API Specifications
• Security
• Error Handling
• Configuration
Overview
The ServiceNow LiveChat integration enables seamless handoff between automated bot conversations
and human agents. This document outlines the technical implementation details, architecture, and
workflows.

Key Components
1. Bot Framework Middleware - Handles message routing and session management
2. ServiceNow API Client - Manages API communication with ServiceNow
3. Webhook Handler - Processes incoming events from ServiceNow
4. Session Controller - Maintains chat state and context
Integration Flow
1. Escalation Flow

2. Message Flow
3. Disconnection Flow

4. Cancellation Flow
API Specifications
Authentication
1. Token Generation
POST /oauth\_token.do
Content-Type: application/x-www-form-urlencoded
```json
{
grant\_type: "password",
client\_id: string,
client\_secret: string,
username: string,
password: string
}
```
Response:
```json
{
"access\_token": string,
"refresh\_token": string,
"expires\_in": number,
"token\_type": "Bearer"
}
```
ServiceNow API Endpoints
1. Connect to Agent
POST /api/sn\_va\_as\_service/bot/integration
Authorization: Bearer 
```json
{
"requestId": "string",
"action": "AGENT",
"token": "1234",
"clientSessionId": string,
"silentMessage": false,
"nowBotId": "A85PWLERF",
"message": {
"text": "Live Agent Support.",
"typed": true,
"clientMessageId": "ABC-123"
},
"contextVariables": {
"request\_on\_behalf\_of": "username@contoso.com",
"request\_topic":"Pay"
},
"userId": "username@contoso.com",
"emailId": "username@contoso.com"
}
```
Webhook Configuration
ServiceNow needs to be configured to send events to our webhook endpoint. This enables real-time
communication for agent messages, status updates, and session management.
1. Webhook Endpoint
POST /api/v1/snowBot/receiveMessage
Content-Type: application/json
Authorization: Bearer 
Request Parameters:
```json
{
// Unique session identifier from ServiceNow
clientSessionId: string,
// Unique identifier for the chat request
requestId: string,
// User identifier
userId: string,
// Current status of the chat session
status: string,
// Error message if any
error\_message?: string,
// Indicates if the chat session is completed
completed?: boolean,
// Indicates if agent is actively chatting
agentChat?: boolean,
// Indicates if agent is taking control of conversation
takeControl?: boolean,
// Variables from ServiceNow
clientVariables?: {
[key: string]: any,
tenantId: string,
botId: string,

conversationId: string
},
// Array of message activities
body: Array&lt;{
// Type of message
uiType: string,
// Text message content
message?: string,
// Value for images or other content types
value?: string,
// Agent information
agentInfo?: {
agentName: string
},
// Type of action for ActionMsg
actionType?: string,
// Options for Picker type messages
options?: array
}>
}
```
Response:
200 OK - Successfully posted into conversation
400 Bad Request - If requestId or botId is invalid
500 Server Error - For processing errors
2. Common Status Values
```json
status: {
// Chat session is active
'active',
// Waiting for agent
'waiting',
// Connected to agent
'connected',
// Chat session completed
'completed',
// Chat session failed
'fail',
// Chat request cancelled
'cancelled'
}
```
3. State Transitions

4. Special Cases
a. Agent Taking Control
```json
{
"status": "connected",
"takeControl": true,
"agentChat": true,
"body": [{
"uiType": "ActionMsg",
"actionType": "AgentControl",
"message": "Agent has taken control of the conversation"
}]
}
```
b. Session Completion
```json
{
"status": "completed",
"completed": true,
"body": [{
"uiType": "ActionMsg",
"actionType": "EndConversation",
"message": "The conversation has ended"
}]
}
```
c. Error Handling
```json
{
"status": "fail",
"error\_message": "No agents are available to chat",
"body": [{
"uiType": "OutputText",
"message": "We're sorry, but all agents are currently busy. Please try again
later."
}]
}
```
Security
1. Authentication
OAuth 2.0 token-based authentication
o
Encrypted credentials storage
o
Token refresh mechanism
o
2. Data Protection
End-to-end encryption for messages
o
Secure file transfer
o
Error Handling
1. Connection Errors
Automatic retry with exponential backoff
o
Fallback to bot conversation
o
User notification
o
2. Session Management
Timeout handling
o
Reconnection logic
o
Session state preservation
o
Configuration
Required Environment Variables
SERVICENOW\_CLIENT\_ID=
SERVICENOW\_CLIENT\_SECRET=
SERVICENOW\_USERNAME=
SERVICENOW\_PASSWORD=
SERVICENOW\_INSTANCE=
WEBHOOK\_SECRET=


![Page 2 Image](/img/reference/ServiceNow%20Integration/LiveChat/images/ServiceNow-LiveChat-Integration-Technical-Specification_page2_4.png)

![Page 3 Image](/img/reference/ServiceNow%20Integration/LiveChat/images/ServiceNow-LiveChat-Integration-Technical-Specification_page3_4.png)

![Page 4 Image](/img/reference/ServiceNow%20Integration/LiveChat/images/ServiceNow-LiveChat-Integration-Technical-Specification_page4_4.png)

![Page 4 Image](/img/reference/ServiceNow%20Integration/LiveChat/images/ServiceNow-LiveChat-Integration-Technical-Specification_page4_5.png)

![Page 5 Image](/img/reference/ServiceNow%20Integration/LiveChat/images/ServiceNow-LiveChat-Integration-Technical-Specification_page5_4.png)

![Page 7 Image](/img/reference/ServiceNow%20Integration/LiveChat/images/ServiceNow-LiveChat-Integration-Technical-Specification_page7_4.png)

