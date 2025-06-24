---
id: smart-summary
title: Smart Summary
sidebar_label: Smart Summary
description: Documentation for Smart Summary
status: 
whatsPending: 
---

# Smart Summary

Rezolve.ai's Smart Summary feature leverages artificial intelligence to generate concise, informative summaries of ticket histories. This powerful enhancement helps agents quickly understand the context and progression of a ticket without having to read through the entire history, significantly improving efficiency and response times.

## Understanding Smart Summary

Smart Summary is an AI-powered feature that:

- Generates a concise paragraph (50-150 words) summarizing a ticket's lifecycle
- Analyzes key events including issue reports, agent actions, and resolution attempts
- Provides a quick overview of what has worked or not worked so far
- Updates dynamically as the ticket progresses
- Can be configured at the template level for optimal results

We have two types of Smart Summary- User Smart Summary and Agent Smart Summary.

**User Smart Summary**: Visible to Ticket Users only, providing the update on the tickets and the status of the ticket.

![User Smart Summary](/img/Service%20Catalog/ss1.png)

**Agent Smart Summary**: Visible to Ticket Agents and Agent Supervisors, it captures the issue raised by the user along with key details provided in the ticket and notes by the user along with the User Sentiment. However, User Sentiment is visible to Agents only, Ticket users cannot see the User Sentiment.

![Agent Smart Summary](/img/Service%20Catalog/ss2.png)

## Accessing Smart Summary Configuration

To configure Smart Summary for a template:

1. Navigate to your template in the Service Catalog
2. Go to Advanced Settings
3. Select the "Special Fields" tab
4. Find and select "Smart Summary"

![Accessing Smart Summary Configuration](/img/Service%20Catalog/ss3.png)

## Configuring Smart Summary

The Smart Summary configuration screen has two main sections:

- **Visibility Settings**: Controls who can see the Smart Summary
- **Other Settings**: Determines how the summary is generated

### Visibility Settings

Configure who can see the Smart Summary using standard field visibility options:

- Viewer roles
- Visibility conditions
- Required conditions

![Visibility Settings](/img/Service%20Catalog/ss4.png)

These settings follow the same pattern as other special fields in Rezolve.ai.

### Other Settings

The "Other Settings" tab contains the core configuration options for Smart Summary:

![Other Settings](/img/Service%20Catalog/ss5.png)

After Mapping the fields in the Meta Fields:

#### Fields To Be Used To Generate Smart Summary

This section lists all fields that can contribute to the summary generation:

| Field | Description | Status |
|-------|-------------|--------|
| Source | Where the ticket originated (email, portal, bot, etc.) | Optional (Orange warning) |
| Summary | The ticket subject line | Mandatory (Red warning) |
| Description | The detailed ticket description | Mandatory (Red warning) |
| Public Notes | Notes visible to all users | Optional (Orange warning) |
| Requestor | The user who submitted the ticket | Mandatory (Red warning) |
| Workflow Status | The current status in the workflow | Mandatory (Red warning) |

For each field, you can:

- See warning indicators if fields aren't properly mapped
- Check/Uncheck the Optional fields, if don't require to add in the Smart Summary

![Field Selection](/img/Service%20Catalog/ss6.png)

#### Warning Indicators

Warning indicators appear when fields aren't properly mapped using Meta fields:

- **Red warnings**: Appear for mandatory fields that must be mapped
- **Orange warnings**: Appear for optional fields that enhance the summary

![Warning Indicators](/img/Service%20Catalog/ss7.png)

To resolve warnings:

1. Ensure the field is mapped to a Meta field
2. Return to the Smart Summary configuration
3. The warning should be removed, allowing you to check the field

![Resolving Warnings](/img/Service%20Catalog/ss8.png)

#### Comprehensiveness Of The Summary

This dropdown allows you to set the level of detail in the generated summary:

| Option | Description |
|--------|-------------|
| Detailed | Longer summary with more comprehensive information |
| Balanced | Medium-length summary with key information (recommended) |
| Crisp | Brief summary focusing only on the most critical points |

![Comprehensiveness Settings](/img/Service%20Catalog/ss9.png)


#### Summarization Style

This dropdown controls the tone and style of the summary:

| Option | Description |
|--------|-------------|
| Professional | Formal, business-appropriate language |
| Casual | Conversational, approachable tone |
| Empathetic | Supportive tone acknowledging user challenges |

![Summarization Style](/img/Service%20Catalog/ss10.png)

### Example: Smart Summary Configuration for IT Support

Let's configure Smart Summary for an IT Support ticket template:

**Fields Selection:**
- ✓ Source (Optional)
- ✓ Summary (Mandatory)
- ✓ Description (Mandatory)
- ✓ Public Notes (Optional)
- ✓ Requestor (Mandatory)
- ✓ Workflow Status (Mandatory)

**Comprehensiveness**: Balanced

**Summarization Style**: Professional

![Example Configuration](/img/Service%20Catalog/ss11.png)


## Adding Smart Summary to Layouts

To include Smart Summary in ticket layouts:

1. Navigate to your template in the Service Catalog, go to the Layouts section.
2. Edit the Detail layout, add the History special field to the Detail layout
3. Configure its position and visibility, save your layout changes

![Adding to Layouts](/img/Service%20Catalog/ss12.png)

## Using Smart Summary in the Agent UI

Once configured, Smart Summary appears in two key locations:

### Inbox View

Smart Summary is accessible directly from the inbox panel without opening the full ticket:

1. In the ticket list, select a ticket
2. The inbox panel containing the loader icon will display key ticket information
3. The Smart Summary appears in this panel, providing immediate context

![Inbox View](/img/Service%20Catalog/ss13.png)

This allows agents to quickly understand the ticket situation while triaging multiple tickets.



### Detail View

To see the Smart Summary in the Detail Layout, user needs to add the History Special Field in the Detail Layout.

![Adding History Field](/img/Service%20Catalog/ss14.png)

If added to the detail layout, Smart Summary also appears in the full ticket view:

1. Open a ticket to view details.
2. The Smart Summary appears in the designated section of the layout
3. Agents can reference it while working on the ticket

![Detail View](/img/Service%20Catalog/ss15.png)

## User Sentiment

User Sentiment is an AI-generated classification that reflects the user's emotional tone or level of satisfaction, based on the language and context used when submitting a ticket. It helps support teams quickly assess how the user is feeling about their issue or interaction.

![User Sentiment Overview](/img/Service%20Catalog/ss16.png)

This sentiment is determined after the user submits a ticket and adds any relevant notes or comments. Once this input is provided, a Smart Summary is generated, and the User Sentiment is evaluated based on the content.

![Sentiment Scale](/img/Service%20Catalog/ss17.png)

### Sentiment Scale and Definitions

The sentiment score is classified on a scale of 1 to 5, with each number representing a specific emotional category:

**1 - Escalation Needed**: Indicates a high level of dissatisfaction, urgency, or frustration.
![Escalation Needed](/img/Service%20Catalog/en1.png)

**2 - Concerned**: Shows worry or dissatisfaction, but less critical than an escalation.
![Concerned](/img/Service%20Catalog/con1.png)

**3 - Neutral**: Reflects a factual or non-emotional tone without strong sentiment.
![Neutral](/img/Service%20Catalog/new1.png)

**4 - Positive Feedback**: Implies general satisfaction and a positive experience.
![Positive Feedback](/img/Service%20Catalog/pk1.png)

**5 - Highly Satisfied**: Strongly positive sentiment indicating appreciation or excellent experience.
![Highly Satisfied](/img/Service%20Catalog/hs1.png)


 
### How Sentiment Helps

The User Sentiment feature enhances service intelligence in several ways:

- **Prioritization**: Escalations or concerned users can be identified quickly and handled with urgency.
- **Agent Awareness**: Enables the agent to tailor their communication approach based on user emotion.
- **Analytics & Reporting**: Useful for generating reports on customer satisfaction trends.
- **Feedback Loops**: High or low sentiment can trigger internal actions, like supervisor reviews or follow-ups.

![Sentiment Benefits](/img/Service%20Catalog/ss18.png)

![Sentiment in Action](/img/Service%20Catalog/ss19.png)

### Permissions & Access

- Available to agents and supervisors with access to ticket details.
- Sentiment data is read-only and cannot be edited manually.

### Example Use Cases

- A user leaves a comment: "I'm really frustrated that this issue hasn't been resolved in two weeks."
  → Sentiment: Escalation Needed

- A user writes: "Thanks for the quick help, everything works now!"
  → Sentiment: Highly Satisfied

## Smart Summary Data in Ticket Details Report

After the Ticket is created and Smart Summary is generated, few details are captured in the Reports available in Ticket Dashboard & Reports.

To see the Smart Summary in the Report, dashboard needs to be Created for the template.

### Dashboard



### Reports

After the Dashboard is created, User can see the desired report by downloading it and can it in the downloaded Excel file format.
The Report Contains Ticket Details Report which contains Smart Summary details.
It has different columns retrieving the ticket data, but useful columns include:

- User Smart Summary
- Agent Smart Summary
- User Sentiment


Once the report is downloaded, it shows like this:

## Benefits of Smart Summary

- **Time Savings**: Agents can quickly understand ticket context without reading entire histories
- **Improved Handoffs**: When tickets change hands, new agents can get up to speed rapidly
- **Better First Contact Resolution**: Agents have immediate access to what has and hasn't worked
- **Reduced Repetition**: Prevents asking users to repeat information they've already provided
- **Enhanced Prioritization**: Helps agents quickly assess ticket urgency and complexity
- **Knowledge Retention**: Preserves key insights even in lengthy ticket threads

## Best Practices for Smart Summary

- **Map Fields Properly**: Ensure all mandatory fields are correctly mapped to meta fields
- **Include Relevant Optional Fields**: Add fields that provide valuable context for your specific processes
- **Choose Appropriate Comprehensiveness**: Match the detail level to your typical ticket complexity
- **Select Suitable Style**: Align the tone with your organization's communication standards
- **Train Agents**: Ensure agents understand how to use Smart Summary effectively
- **Review Output Quality**: Periodically check summaries for accuracy and usefulness
- **Update Configuration**: Refine settings based on feedback and changing needs

## Implementation Considerations

When implementing Smart Summary:

- **Start with High-Volume Templates**: Implement first where the time savings will be greatest
- **Consider Field Mappings**: Ensure fields are properly mapped before enabling
- **Test With Different Ticket Types**: Verify summary quality across simple and complex tickets
- **Gather Agent Feedback**: Collect input from agents on summary usefulness
- **Monitor Performance Impact**: Ensure summaries are generated in a timely manner

## Conclusion

The Smart Summary feature in Rezolve.ai represents a significant enhancement to agent productivity and ticket handling efficiency. By providing a concise, AI-generated overview of ticket history and context, it enables agents to quickly understand the situation and take appropriate action without spending valuable time reading through entire ticket histories.

Through thoughtful configuration of included fields, comprehensiveness level, and summarization style, administrators can tailor the Smart Summary feature to their organization's specific needs and communication standards. This customization, combined with strategic layout placement, creates a powerful tool that improves agent performance, reduces resolution times, and enhances the overall service experience.

As tickets become increasingly complex and involve multiple touchpoints, Smart Summary becomes an essential feature for modern service desks, enabling them to maintain personalized, efficient service even with high ticket volumes and complex support scenarios.
