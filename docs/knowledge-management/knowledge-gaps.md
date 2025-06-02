---
id: knowledge-gaps
title: Knowledge Gaps Management
sidebar_label: Knowledge Gaps Management
description: Guide for identifying and addressing gaps in your knowledge base
status: 
whatsPending: 
---

# Knowledge Gaps Management

Knowledge Gaps in Rezolve.ai represent instances where the virtual agent (bot) was unable to provide a satisfactory response to a user query. These gaps are systematically captured, categorized, and presented to administrators through the Knowledge Gaps interface, enabling continuous improvement of the bot's knowledge base and response capabilities.

## Understanding Knowledge Gaps

Rezolve.ai identifies three distinct types of knowledge gaps:

### 1. Missing Knowledge

Occurs when:

- The bot explicitly states it does not have information on the topic
- The query is within the bot's intended scope
- No relevant knowledge source is available to answer the query

**Example:**

User: "What's the process for requesting a temporary parking pass?"

Bot: "I'm sorry, I don't have information about temporary parking passes."

Missing knowledge gaps typically indicate content that should be added to the knowledge base.

![Knowledge Gaps Types](/img/Knowledge%20Management/gap1.png)

### 2. Out of Scope

Occurs when:

- The bot identifies that the query falls outside its configured scope
- The question relates to topics the bot is not designed to address

**Example:**

User: "Can you explain string theory to me?"

Bot: "I'm sorry, but questions about scientific theories are outside my scope. I'm designed to help with IT-related inquiries."

Out of scope gaps may indicate user misconceptions about the bot's purpose or potential opportunities to expand the bot's capabilities.

### 3. Inaccurate Answer

Occurs when:

- The bot provides an answer
- The user indicates dissatisfaction via negative feedback (thumbs down)
- The answer may be outdated, incomplete, or incorrect

**Example:**

User: "How do I reset my password?"

Bot: Provides steps for an outdated password reset process

User: Gives thumbs down to indicate the answer wasn't helpful

Inaccurate answer gaps indicate content that needs to be updated or improved.

## Accessing Knowledge Gaps

To access the Knowledge Gaps interface:

1. Navigate to "Virtual Agent Management"
2. Select "Knowledge Management"
3. Go to "Knowledge Insights"
4. Click on "Knowledge Gaps"

![Knowledge Gaps Interface](/img/Knowledge%20Management/gap2.png)

## Knowledge Gaps Interface

The Knowledge Gaps interface displays all captured instances where the bot failed to provide satisfactory answers:

For each knowledge gap, the interface typically shows:

- The user's query/utterance
- The type of gap (Missing Knowledge, Out of Scope, Inaccurate Answer)
- When the gap occurred
- Frequency (if the same gap has occurred multiple times)
- Action buttons for addressing the gap

## Addressing Knowledge Gaps

For each identified gap, administrators have several options accessible through action buttons:

### 1. Fix Now

The "Fix Now" button provides immediate options to address the knowledge gap:

![Fix Now Options](/img/Knowledge%20Management/gap3.png)

#### Upload Document
- Upload a document containing the answer to the query
- The system will process and index the document
- Future similar queries will be answered using this document

#### Crawl URL
- Provide a URL to a webpage containing relevant information
- The system will crawl and index the content
- The bot will use this information for future responses

#### Add Knowledge Article
- Create a new knowledge article directly addressing the gap
- Write a detailed answer to the specific query
- Format and structure the information for optimal bot usage

### 2. Explanation

The "Explanation" button reveals how the query was processed:

![Fix Now Options](/img/Knowledge%20Management/gap4.png)

- Shows the flow chart of the query processing
- Indicates which decision points led to the knowledge gap
- Helps identify why the bot couldn't answer effectively
- Provides insights for systemic improvements

### 3. View Chat

The "View Chat" button displays the complete conversation context:

![View Chat Interface](/img/Knowledge%20Management/gap5.png)

- Shows the entire chat session containing the knowledge gap
- Provides context around the query
- Reveals any preceding questions or follow-ups
- Helps understand the user's intent more clearly

### 4. Delete Gap

Administrators can also delete a knowledge gap from the list if:

- The gap is irrelevant or intentional
- The query is inappropriate
- The gap has been addressed through broader knowledge base improvements

## Example: Addressing Different Types of Gaps

### Example 1: Fixing a Missing Knowledge Gap

**Gap:** Users frequently ask about the new hybrid work policy, but the bot has no information.

**Solution:**

1. Click "Fix Now"
2. Select "Upload Document"
3. Upload the official hybrid work policy document
4. The system processes the document
5. Future queries about hybrid work will receive accurate responses

### Example 2: Handling an Out of Scope Gap

**Gap:** Multiple users ask about company stock options, which is outside the IT bot's scope.

**Solution Options:**

If it should remain out of scope:
1. Create a clearer "out of scope" response directing users to HR
2. No knowledge addition required

If scope should be expanded:
1. Click "Fix Now"
2. Add Knowledge Article about where to find stock option information
3. Update bot scope configuration

### Example 3: Correcting an Inaccurate Answer

**Gap:** Bot provides outdated VPN connection instructions, receiving consistent negative feedback.

**Solution:**

1. Click "Fix Now"
2. Select "Add Knowledge Article"
3. Create new article with current VPN connection process
4. Mark old information as deprecated
5. Test to ensure the bot now provides updated information

## Best Practices for Knowledge Gap Management

- **Regular Review:** Schedule weekly or bi-weekly reviews of knowledge gaps
- **Prioritize by Frequency:** Address gaps that occur most frequently first
- **Look for Patterns:** Identify categories of information consistently missing
- **Involve Subject Matter Experts:** Have specialists review content additions
- **Test Fixes:** Verify that gaps are properly addressed by testing similar queries
- **Maintain Documentation:** Keep records of how gaps were addressed
- **Analyze Trends:** Monitor if certain types of gaps increase or decrease over time
- **Update Training:** Use gaps to improve overall bot training and scope definition

## Conclusion

The Knowledge Gaps feature in Rezolve.ai provides a systematic approach to identifying and addressing instances where the virtual agent fails to meet user needs. By categorizing gaps into Missing Knowledge, Out of Scope, and Inaccurate Answer types, the system enables targeted improvements to the knowledge base.

The intuitive interface with Fix Now, Explanation, and View Chat options makes it straightforward for administrators to understand why gaps occurred and how to address them effectively. This continuous improvement process ensures that the virtual agent becomes increasingly capable of answering user queries accurately over time.

By diligently managing knowledge gaps, organizations can significantly enhance the effectiveness of their virtual agent, improve user satisfaction, and reduce the need for human intervention in routine inquiries. The systematic approach to knowledge improvement also creates a valuable feedback loop that helps prioritize content development and maintenance efforts.

## Next Steps

- Explore [Knowledge Search and Discovery](/docs/knowledge-management/search/ticket-based) to optimize content findability
- Learn about [Knowledge Workflow](/docs/knowledge-management/knowledge-workflow) for content lifecycle management
- Set up [Testing Knowledge](/docs/knowledge-management/testing-knowledge) to validate content effectiveness
