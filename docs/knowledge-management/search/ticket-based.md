---
id: ticket-based
title: Ticket-Based Knowledge Search
sidebar_label: Ticket-Based Search
description: Guide for implementing and optimizing ticket-based knowledge search for support agents
---

# Ticket-Based Knowledge Search

This guide explains how to implement and optimize ticket-based knowledge search, which automatically suggests relevant knowledge articles to support agents based on ticket content.

## Understanding Ticket-Based Search

Ticket-based search is an AI-powered feature that:

- Automatically analyzes incoming support tickets
- Identifies key topics, issues, and intent
- Searches the knowledge base for relevant articles
- Presents suggestions to agents in real-time
- Enables quick resolution using existing knowledge

## Setting Up Ticket-Based Search

### Prerequisites

Before configuring ticket-based search, ensure you have:

- A well-populated knowledge base
- Integration with your ticketing system
- Admin access to Knowledge Management
- Support agent permissions

### Integration Configuration

Connect your ticketing system:

1. Navigate to **Admin** > **Integrations** > **Ticketing Systems**
2. Select your ticketing platform (ServiceNow, Zendesk, Salesforce, etc.)
3. Configure the integration:
   - API credentials
   - Webhook endpoints
   - Field mappings
   - Sync frequency
4. Test the connection
5. Enable ticket-based search

### Search Configuration

Customize the search behavior:

1. Go to **Admin** > **Search** > **Ticket-Based Search**
2. Configure search settings:
   - Relevance threshold (minimum confidence score)
   - Maximum number of suggestions
   - Search scope (categories to include/exclude)
   - Weighting factors (title, description, customer responses)
3. Set up result filtering:
   - By audience (match ticket requester attributes)
   - By product (match ticket product field)
   - By content type (articles, guides, FAQs)
4. Save your configuration

## Agent Experience

### Viewing Suggested Articles

Agents will see suggested articles in their ticketing interface:

1. When viewing a ticket, the Knowledge panel appears automatically
2. Suggested articles are ranked by relevance
3. Each suggestion includes:
   - Article title
   - Relevance score
   - Brief excerpt
   - Last updated date
4. Agents can click to view the full article

### Searching from Tickets

Agents can also perform manual searches:

1. In the Knowledge panel, click **Search**
2. The search is pre-populated with ticket context
3. Agents can modify the search terms
4. Results are filtered based on ticket context
5. Agents can sort and filter results

### Using Knowledge in Responses

Incorporate knowledge into ticket responses:

1. View a suggested article
2. Click **Use in Response** to:
   - Insert the full article
   - Insert a specific section
   - Insert with a link to the article
2. Customize the inserted content
3. Send the response to the customer

### Providing Feedback

Improve search quality through feedback:

1. For each suggestion, agents can:
   - Mark as helpful
   - Mark as not relevant
   - Provide specific feedback
2. This feedback trains the AI to improve future suggestions

## Advanced Features

### Automatic Article Creation

Generate new knowledge from tickets:

1. Enable **Knowledge Capture** in settings
2. The system identifies tickets without matching articles
3. After resolution, agents are prompted to create an article
4. The system pre-populates content based on the ticket
5. Agents review, edit, and publish the new article

### Proactive Suggestions

Get suggestions before customers submit tickets:

1. Enable **Proactive Knowledge** in settings
2. When customers start typing in web forms or chat:
   - The system analyzes the partial content
   - Suggests relevant articles in real-time
   - Offers self-service options
3. If customers resolve their issue, no ticket is created

### Multilingual Support

Handle tickets in multiple languages:

1. Go to **Admin** > **Search** > **Language Settings**
2. Enable multilingual ticket analysis
3. Configure language detection
4. Set up cross-language search (find English articles for Spanish tickets)
5. Enable automatic translation of suggestions

## Analytics and Optimization

### Performance Metrics

Track the effectiveness of ticket-based search:

1. Navigate to **Analytics** > **Ticket Search**
2. View key metrics:
   - Suggestion accuracy rate
   - Agent utilization rate (% of suggestions used)
   - Time saved per ticket
   - Knowledge gaps identified
   - Articles created from tickets
3. Filter by time period, agent team, or ticket category

### Content Optimization

Improve content based on ticket search data:

1. Go to **Analytics** > **Content Optimization**
2. Review the **Ticket Impact** report
3. Identify:
   - High-performing articles in ticket resolution
   - Articles that need improvement
   - Missing content based on ticket topics
4. Use the **Optimize** button for AI-suggested improvements

### A/B Testing

Test different search configurations:

1. Navigate to **Admin** > **Search** > **A/B Testing**
2. Create a new test:
   - Define test variants (different relevance algorithms)
   - Set test duration and scope
   - Define success metrics
3. Run the test
4. Review results and implement the winning configuration

## Integration with Agent Workflows

### Ticket Categorization

Use knowledge to improve ticket routing:

1. Enable **Smart Categorization** in settings
2. The system suggests categories based on knowledge matches
3. Tickets are automatically tagged and routed
4. Agents can verify and adjust categorization

### Knowledge-Driven Automation

Automate responses using knowledge:

1. Go to **Admin** > **Automation** > **Knowledge Rules**
2. Create rules based on knowledge matches:
   - If high-confidence match found, suggest auto-response
   - For specific article matches, trigger workflows
   - When no matches found, escalate to specialists
3. Set confidence thresholds for each automation
4. Monitor and refine automation performance

## Best Practices

### Content Optimization

- **Keep articles concise**: Agents need quick answers
- **Use clear titles**: Make the problem and solution obvious
- **Include troubleshooting steps**: Provide actionable information
- **Update regularly**: Ensure content reflects current products and policies
- **Add agent-only sections**: Include internal notes and escalation paths

### Search Tuning

- **Start with higher relevance thresholds**: Begin with quality over quantity
- **Analyze search logs**: Identify patterns in successful suggestions
- **Adjust weightings**: Tune the importance of different ticket fields
- **Create specialized indexes**: For different product lines or customer segments
- **Regular retraining**: Update the AI model with new feedback data

### Agent Training

- **Provide search training**: Ensure agents know how to use and refine suggestions
- **Encourage feedback**: Create a culture of continuous improvement
- **Recognize knowledge contributors**: Reward agents who create valuable articles
- **Share success stories**: Highlight cases where knowledge improved resolution

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Irrelevant suggestions | Increase relevance threshold and provide feedback |
| No suggestions appearing | Check integration status and search scope |
| Slow suggestion loading | Optimize indexing and check API rate limits |
| Duplicate suggestions | Review and merge similar articles |

## Next Steps

- Explore [Conversation-Based Search](/docs/knowledge-management/search/conversation-based) for live chat integration
- Learn about [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow) for maintaining content quality
- Set up [Analytics and Reporting](/docs/knowledge-management/analytics-reporting) to track knowledge effectiveness
