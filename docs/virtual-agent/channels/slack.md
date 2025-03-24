---
id: slack
title: Using Virtual Agent in Slack
sidebar_label: Virtual Agent in Slack
description: Documentation for Using Virtual Agent in Slack
status: 
whatsPending: 
---

# Using Virtual Agent in Slack

The Slack integration delivers support services within Slack workspaces, using Slack's native UI components for a seamless experience.

## Features

• **Block Kit Cards**: Instead of adaptive cards, the Slack implementation uses Block Kit for rich, interactive messages

• **Slash Commands**: Provides quick access to bot functions through custom slash commands

• **Channel Integration**: Works in direct messages and can be invited to channels

• **Workspace Directory**: Accesses the Slack workspace directory for user information

• **App Home**: Offers a dedicated home tab within Slack for persistent access

## Implementation

Slack integration leverages Slack's Bot API and event subscriptions:

1. **App Registration**: The bot is registered as a Slack app
2. **Event Subscriptions**: Listens for message and interaction events
3. **OAuth Integration**: Handles authentication through Slack's OAuth flow
4. **Interactive Components**: Processes user interactions with Block Kit elements
5. **File Handling**: Manages secure file transfers within Slack

## User Experience

Users interact with the Virtual Agent directly in Slack:

• They can message the bot directly or use slash commands in any channel
• View Block Kit cards with ticket details and action buttons
• Receive notifications as direct messages
• Use interactive elements like dropdowns and buttons
• Access persistent conversation history in the direct message thread

