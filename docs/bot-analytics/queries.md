---
id: queries
title: Queries Analytics
sidebar_label: Queries Analytics
description: Documentation for Queries Analytics
status: 
whatsPending: 
---

## Query Data Fields

| Field | Type | Data Description | Possible Values |
| :--- | :--- | :--- | :--- |
| **Utterance** | Text | User's input/query text | Any text input from user |
| **Type** | Dropdown | Classification of query type. This is being used in the Dashboard. | Get Information, Raise a Request, Ask a Question, Status of the ticket, Complete a Workflow, Redirect, Others |
| **Topic** | Tag | AI-generated topic classification for query. This is being used in the Dashboard. | Dynamic AI-generated tags based on query content |
| **Feedback** | Dropdown | User feedback on query response | Helpful, Not Helpful, Neutral |
| **Response Field** | Text | Type of response provided | Follow\_up, or other response type indicators |
| **Bot Performance** | Dropdown | How bot handled the specific query | Success, Failed, Escalated Live Chat, Escalated Ticket, Offline Human |
| **Query Conversation Text** | Text | Bot's response to the user query | Bot-generated response text |
| **Special Tags** | Tags | Special categorization tags for query | Automation, Ticket, Followup, Knowledge |
| **Response Type** | Text | Technical response type from API | generative\_response, scripted\_response |
| **Conversation** | Reference Field | Links query to parent conversation | Reference ID to Conversation record |
| **Explainable Data** | JSON | Raw data for explainability features | JSON object containing explainability metadata |
