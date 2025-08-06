---
id: conversations
title: Conversations Analytics
sidebar_label: Conversations Analytics
description: Documentation for Conversations Analytics
status: 
whatsPending: 
---

- **Chat session reports**: Identifies common user navigation paths within chatbot interactions.
- **Abandoned session report**: Highlights where users tend to abandon conversations, helping to improve bot engagement.
- **User interaction and Question interaction chart**: The bar chart provides a graphical representation of the conversations that has impacted the bot quality
- **User analytics report**: Measures how effectively the bot understands and processes user intent.
- **Conversation Length Metrics**: Analyzes average interaction time per session.
- **Bot conversations report**: The analyst shall review bot conversations based on the reports downloaded over any period.

![Bot Conversations](../../static/img/Bot%20Analytics/Bot_Conversations.jpg)

## Conversation Data Fields

| Field | Type | Data Description | Possible Values |
|-------|------|-----------------|----------------|
| Type | Dropdown | Categorizes the overall conversation purpose. This can be viewed in the dashboard for detailed analytics | Get Information, Raise a Request, Ask a Question, Incident, Create a Workflow, Nothing, Others |
| Feedback | Dropdown | User satisfaction rating given in conversation end | Highly Positive, Positive, Neutral, Poor, Very poor, No Feedback |
| Topic | Tag | AI-generated conversation topic classification, not being used anywhere but can be viewed in the dashboard for detailed analytics | Dynamic AI-generated tags based on conversation content |
| Special Tag | Dropdown | Special categorization of conversation intent | Knowledge_Task, Followup_Ticket |
| Escalate | Dropdown | Indicates if conversation was escalated | true, false |
| Conversation Status | Dropdown | Whether conversation reached completion | Completed, Incomplete |
| Duration | Number | Total conversation time in milliseconds | Numeric value (milliseconds) |
| Performance | Dropdown | This contains an AI-generated field value. Discussions are Good, Excellent, Poor. AI would rate any of these judging on how bot performed against the user question queries | Excellent, Good, Poor |
| Source | Dropdown | Platform/channel where conversation originated | ChatBot Mobile, ChatBot WebForm, ChatBot Email |
| Session ID | Text | Unique identifier for conversation session | Alphanumeric session identifier |
| Conversation Messages | JSON | Contains metadata about the conversation itself (ID etc.) | JSON object containing metadata |
| Conversation Transcript | JSON | Contains the actual message exchange history between users | JSON object with conversation messages |
