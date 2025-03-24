---
id: conversation-based
title: Conversation-Based Knowledge Search in Live Chat
sidebar_label: Conversation-Based Search
description: Guide for implementing and optimizing conversation-based knowledge search in live chat interactions
status: 
whatsPending: 
---

# Conversation-Based Knowledge Search in Live Chat

This guide explains how to implement and optimize conversation-based knowledge search, which automatically suggests relevant knowledge articles to agents during live chat interactions based on real-time conversation analysis.

## Understanding Conversation-Based Search

Conversation-based search is an AI-powered feature that:

- Analyzes live chat conversations in real-time
- Identifies customer questions, issues, and intent
- Searches the knowledge base for relevant articles
- Presents contextual suggestions to agents
- Enables faster, more accurate responses during chat

## Setting Up Conversation-Based Search

### Prerequisites

Before configuring conversation-based search, ensure you have:

- A well-populated knowledge base
- Integration with your live chat platform
- Admin access to Knowledge Management
- Support agent permissions

### Integration Configuration

Connect your chat platform:

1. Navigate to **Admin** > **Integrations** > **Chat Platforms**
2. Select your chat platform (Intercom, Drift, LivePerson, etc.)
3. Configure the integration:
   - API credentials
   - Webhook endpoints
   - Event subscriptions
   - Authentication method
4. Test the connection
5. Enable conversation-based search

### Search Configuration

Customize the search behavior:

1. Go to **Admin** > **Search** > **Conversation-Based Search**
2. Configure search settings:
   - Real-time analysis interval (how often to analyze new messages)
   - Context window (how many previous messages to include)
   - Relevance threshold (minimum confidence score)
   - Maximum suggestions per context change
3. Set up result filtering:
   - By audience (match customer attributes)
   - By product (if specified in conversation)
   - By content type (articles, guides, FAQs)
4. Save your configuration

## Agent Experience

### Viewing Suggested Articles

Agents will see suggested articles in their chat interface:

1. During an active chat, the Knowledge panel appears alongside
2. As the conversation progresses, suggestions update automatically
3. Each suggestion includes:
   - Article title
   - Relevance score and match reason
   - Brief excerpt
   - Last updated date
4. Agents can click to view the full article without leaving the chat

### Using Knowledge in Responses

Incorporate knowledge into chat responses:

1. View a suggested article
2. Click **Use in Response** to:
   - Insert the full article
   - Insert a specific section
   - Insert with a link to the article
   - Send as a rich card (if supported by chat platform)
3. Customize the inserted content
4. Send the response to the customer

### Manual Search During Chat

Agents can also perform manual searches:

1. In the Knowledge panel, click **Search**
2. The search is pre-populated with conversation context
3. Agents can modify the search terms
4. Results are filtered based on conversation context
5. Agents can sort and filter results

### Providing Feedback

Improve search quality through feedback:

1. For each suggestion, agents can:
   - Mark as helpful
   - Mark as not relevant
   - Provide specific feedback
2. This feedback trains the AI to improve future suggestions

## Advanced Features

### Proactive Customer Suggestions

Offer knowledge directly to customers:

1. Enable **Customer Knowledge Suggestions** in settings
2. Configure when to offer suggestions:
   - After specific customer questions
   - When confidence score exceeds threshold
   - During wait times
3. Customize how suggestions appear to customers
4. Set up tracking to measure customer engagement

### Intent Detection

Leverage advanced intent recognition:

1. Go to **Admin** > **Search** > **Intent Configuration**
2. Create custom intents for your business
3. Map intents to specific knowledge categories
4. Train the system with example phrases
5. Enable intent-based suggestions in conversation search

### Sentiment-Aware Suggestions

Adapt suggestions based on customer sentiment:

1. Enable **Sentiment Analysis** in settings
2. Configure response strategies for different sentiments:
   - Positive: Standard knowledge suggestions
   - Neutral: Detailed technical content
   - Negative: Empathetic content and escalation paths
3. Set up sentiment thresholds and triggers
4. Monitor sentiment trends in analytics

## Analytics and Optimization

### Performance Metrics

Track the effectiveness of conversation-based search:

1. Navigate to **Analytics** > **Chat Search**
2. View key metrics:
   - Suggestion accuracy rate
   - Agent utilization rate (% of suggestions used)
   - Impact on resolution time
   - Customer satisfaction correlation
   - Knowledge gaps identified
3. Filter by time period, agent team, or chat category

### Conversation Analysis

Gain insights from chat interactions:

1. Go to **Analytics** > **Conversation Insights**
2. Review the **Knowledge Impact** report
3. Identify:
   - Common questions and topics
   - Effective knowledge responses
   - Missing information
   - Resolution patterns
4. Use these insights to improve knowledge content

### A/B Testing

Test different search configurations:

1. Navigate to **Admin** > **Search** > **A/B Testing**
2. Create a new test for chat interactions:
   - Define test variants (different suggestion algorithms)
   - Set test duration and scope
   - Define success metrics (resolution time, CSAT)
3. Run the test
4. Review results and implement the winning configuration

## Integration with Chat Workflows

### Automated Responses

Set up knowledge-powered automated responses:

1. Go to **Admin** > **Automation** > **Chat Responses**
2. Create rules for automatic responses:
   - For common questions with high-confidence matches
   - During agent handoffs or wait times
   - For specific detected intents
3. Configure when to use automation vs. agent review
4. Monitor automation performance and customer satisfaction

### Guided Conversations

Implement guided conversation flows:

1. Navigate to **Admin** > **Chat** > **Guided Flows**
2. Create knowledge-based conversation flows:
   - Diagnostic trees for troubleshooting
   - Step-by-step guides for common processes
   - Decision trees for product selection
3. Link flows to specific detected intents
4. Allow agents to initiate flows during conversations

## Optimizing for Real-Time Interactions

### Content Formatting for Chat

Adapt knowledge content for chat interactions:

1. Go to **Admin** > **Content** > **Chat Formatting**
2. Configure how content is formatted for chat:
   - Break long content into digestible messages
   - Convert bullets to numbered steps
   - Optimize images and attachments
   - Create chat-friendly versions of complex tables
3. Preview chat renderings of your content
4. Apply formatting rules to specific content types

### Response Time Optimization

Improve agent response speed:

1. Create quick-response versions of common articles
2. Enable keyboard shortcuts for inserting knowledge
3. Implement type-ahead suggestions based on knowledge
4. Create pre-written responses for high-volume topics

## Best Practices

### Content Strategy

- **Create chat-optimized content**: Shorter, more direct articles work best
- **Use clear headings**: Help agents quickly scan for relevant sections
- **Include conversation starters**: Suggest follow-up questions
- **Develop troubleshooting flows**: Step-by-step guides work well in chat
- **Update based on conversations**: Regularly review chat logs for content ideas

### Agent Training

- **Provide platform-specific training**: Ensure agents know how to use suggestions
- **Encourage knowledge contribution**: Have agents flag missing information
- **Share successful examples**: Highlight effective knowledge usage in chats
- **Create chat-specific guidelines**: Develop best practices for knowledge in chat

### Technical Optimization

- **Balance speed and accuracy**: Tune settings for your specific needs
- **Optimize for mobile chat**: Ensure content works well on all devices
- **Consider bandwidth limitations**: Optimize images and attachments
- **Test with realistic conversation volume**: Ensure performance at scale

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Delayed suggestions | Adjust analysis interval and optimize indexing |
| Context misinterpretation | Tune context window size and provide feedback |
| Formatting problems in chat | Review and update chat formatting rules |
| Customer confusion | Improve clarity of customer-facing suggestions |

## Next Steps

- Explore [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow) for maintaining content quality
- Learn about [Testing Knowledge](/docs/knowledge-management/testing-knowledge) to validate effectiveness
- Set up [Analytics and Reporting](/docs/knowledge-management/analytics-reporting) to track performance

