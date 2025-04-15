---
id: creating-articles
title: Creating Articles in Knowledge Management
sidebar_label: Creating Articles
description: Guide for creating and editing knowledge articles directly in the system
status: 
whatsPending: 
---

# Creating Articles in Knowledge Management

Knowledge Articles form the foundation of Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation 's Virtual Agent intelligence, providing carefully crafted content that powers accurate, consistent responses to user queries. Unlike document uploads that incorporate existing materials, Knowledge Articles are purpose-built content pieces specifically designed for conversational AI delivery. These articles can be precisely tailored to answer common questions, explain procedures, clarify policies, or provide guidance on various topics.

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation  offers two distinct types of Knowledge Articles—Scripted and Non-Scripted—each with unique characteristics suited to different information delivery needs. This dual approach provides organizations with flexibility in how information is presented while maintaining accuracy and relevance.

![Article One](/img/Knowledge%20management/article_one.png)


## Access and Permissions

The Knowledge Articles feature is accessible to specific roles within the Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation  platform:

- **Bot Analyst:** Can create, edit, and manage Knowledge Articles
- **Bot Admin:** Has full Knowledge Article management capabilities
- **Tenant Admin:** Has system-wide access to all knowledge management functions

These role-based permissions ensure that knowledge creation and maintenance are handled by appropriate personnel while allowing organizations to distribute responsibilities based on their structure.

## Knowledge Article Types

### Scripted Articles

Scripted Articles deliver exact, word-for-word responses without modification:

- **Toggle On:** Activated by turning on the "Scripted Answers" toggle during article creation
- **Exact Delivery:** Bot presents the content exactly as written, with no alterations
- **Formatting Preservation:** Maintains precise formatting, bullet points, and structure
- **Media Support:** Can include images, links, videos, and other rich media
- **Multi-step Capabilities:** Supports sequential, step-by-step information delivery

![Article Two](/img/Knowledge%20management/article_two.png)


Scripted Articles are ideal for:
- Compliance-sensitive information requiring exact wording
- Step-by-step instructions that must be followed precisely
- Content containing specific terminology that should not be altered
- Information that benefits from rich media illustration

### Non-Scripted Articles

Non-Scripted Articles utilize AI to generate dynamic, conversational responses:

- **Toggle Off:** Created by leaving the "Scripted Answers" toggle off during article creation
- **AI Generation:** Bot uses the content as a foundation but generates a conversational response
- **Contextual Adaptation:** Responses adjust to the specific context of the user's question
- **Natural Variation:** Provides slightly different wording each time while maintaining accuracy
- **Simplified Format:** Typically uses more straightforward formatting

![Article Three](/img/Knowledge%20management/article_three.png)



Non-Scripted Articles are ideal for:
- General information that benefits from conversational delivery
- Content that may need to be slightly adapted based on query context
- Information that should sound natural and personalized
- Topics where slight wording variations are acceptable

## Creating Knowledge Articles

### Basic Article Creation

The article creation process follows these general steps:

1. Navigate to Knowledge Management > Knowledge Articles
2. Click "Create New Article" or similar button
3. Enter a title (the primary question the article answers)
4. Toggle "Scripted Answers" on or off based on delivery requirements
5. Create the article content using the rich text editor
6. Add any additional elements (media, steps, variants)
7. Save the article as Draft or Published

![Article Four](/img/Knowledge%20management/article_four.png)


### Rich Content Features

For Scripted Articles in particular, several advanced content features are available:

#### Media Integration
- Insert images to illustrate concepts
- Add video links for demonstrations
- Include file attachments for supplementary materials
- Insert hyperlinks to related resources

![Article Five](/img/Knowledge%20management/article_five.png)


#### Multi-Step Answers
For complex procedures or explanations:
1. Create the initial content
2. Click "Add Step" button
3. Enter title and content for each step
4. Arrange steps in logical order
5. Preview the stepped presentation



These multi-step articles are particularly effective for procedures, troubleshooting guides, or any information that follows a sequential process.

![Article Six](/img/Knowledge%20management/article_six.png)


#### Question Variants
To improve the Virtual Agent's ability to match user questions with appropriate articles:
1. In the article editor, locate the variants section
2. Add alternative phrasings of the main question
3. Include common variations, different terminology, or shorthand versions
4. Save variants with the article



These variants significantly improve the matching accuracy of the Virtual Agent by accounting for the different ways users might ask for the same information.

![Article Seven](/img/Knowledge%20management/article_seven.png)


## Audience Management

Knowledge Articles support sophisticated audience targeting to ensure information is appropriately shared:

### Whitelisting
When an article is whitelisted for a specific audience:
- Only members of that audience will receive this information
- The article is effectively hidden from all other users
- Ideal for role-specific or sensitive information

### Blacklisting
When an article is blacklisted for a specific audience:
- Everyone except members of the blacklisted audience will receive this information
- Members of the blacklisted audience will not see this article
- Useful for excluding certain groups from seeing particular content

![Article Eight](/img/Knowledge%20management/article_eight.png)


Audience settings can be configured during article creation or modified later through article settings. This capability ensures that the Virtual Agent provides appropriate information based on who is asking, maintaining information security while delivering personalized responses.

## Article Status Management

Articles can exist in different states to control their visibility and usage:

### Draft Status
Articles in Draft status:
- Are not used by the Virtual Agent to answer questions
- Can be edited and refined before publication
- Are only visible to knowledge authors and administrators
- Serve as works in progress until ready for use

### Published Status
Articles in Published status:
- Are actively used by the Virtual Agent to answer matching questions
- Have undergone review and approval
- Are available based on their audience settings
- Appear in knowledge base metrics and reporting

![Article Nine](/img/Knowledge%20management/article_nine.png)


The ability to move articles between Draft and Published states provides a workflow for content development, review, and activation that ensures only approved content is used in Virtual Agent responses.

## AutoComplete Feature

The AutoComplete feature leverages AI to assist in article creation:

1. Enter the article title (the question to be answered)
2. Click the "AutoComplete" button
3. Configure generation options in the drawer that appears:
   - Format preference (bullets, paragraphs, etc.)
   - Structure guidance (overview first, solution-focused, etc.)
   - Reference websites (optional sources to draw from)
   - Tone and style preferences
4. Generate the article content
5. Review and edit the generated content as needed
6. Save as Draft or Published

![Article Ten](/img/Knowledge%20management/article_ten.png)


This powerful feature significantly accelerates knowledge base development by generating comprehensive first drafts that knowledge authors can then refine, rather than creating all content from scratch.

## Workspace Organization

For organizations with multiple departments or functions, Knowledge Articles can be organized into distinct workspaces:
- **Departmental Workspaces:** Separate areas for different teams (HR, IT, Finance, etc.)
- **Role-Based Workspaces:** Organized by function rather than department
- **Topic-Based Workspaces:** Grouped by subject matter regardless of department

![Article Eleven](/img/Knowledge%20management/article_eleven.png)


This organizational structure helps manage large knowledge bases by compartmentalizing content while still allowing the Virtual Agent to access all relevant information when answering queries.

## Knowledge Metrics

The system provides visibility into the knowledge base size and composition:
- **Size of Scripted Knowledge:** Total count of Scripted Knowledge Articles
- **Article Distribution:** Breakdown of articles by workspace
- **Publication Status:** Counts of Draft vs. Published articles
- **Audience Coverage:** Analysis of which audiences are served by current content

![Article Twelve](/img/Knowledge%20management/article_twelve.png)

These metrics are visible on the Virtual Agent Management dashboard, providing at-a-glance insights into the scope and composition of the knowledge base.

## Best Practices for Knowledge Articles

### When to Use Scripted vs. Non-Scripted

**Choose Scripted Articles for:**
- Legal or compliance information requiring exact wording
- Technical procedures with precise steps
- Security protocols that must be followed exactly
- Content containing regulated terminology
- Information that benefits from rich media support

**Choose Non-Scripted Articles for:**
- General information and explanations
- Frequently asked questions with straightforward answers
- Content that benefits from conversational delivery
- Information that should adapt slightly to question context
- Topics where the exact wording is less critical than the core information

### Article Creation Guidelines
- **Clear Titles:** Frame titles as questions users would actually ask
- **Comprehensive Variants:** Include different ways users might phrase the question
- **Concise Content:** Provide complete but efficient answers without unnecessary text
- **Structured Information:** Use headings, bullets, and steps for easy comprehension
- **Current Content:** Ensure information is up-to-date before publishing
- **Consistent Tone:** Maintain consistent voice across articles
- **Appropriate Audience:** Apply correct audience settings for information security

### Content Development Strategy
For building a comprehensive knowledge base:
- **Start With FAQ Analysis:** Identify and create articles for the most frequently asked questions
- **Leverage Existing Content:** Use AutoComplete to quickly transform existing information
- **Gap Analysis:** Regularly review unanswered questions to identify needed articles
- **User Feedback Loop:** Create articles based on negative feedback patterns
- **Regular Review Cycle:** Establish a schedule for reviewing and updating content
- **Split Complex Topics:** Break complicated subjects into multiple focused articles
- **Cross-Reference Related Content:** Create connections between related topics

### Example: Building an HR Knowledge Base

**Scenario:** An HR department wants to create a knowledge base for common employee questions.

**Process:**

#### Question Identification
- Analyze help desk tickets for common HR questions
- Survey employees about frequent information needs
- Review existing HR documentation for key topics
- Identify seasonal or cyclical information needs (benefits enrollment, reviews)

#### Article Type Selection
- Benefits explanations → Non-Scripted (general information)
- Leave request procedures → Scripted (exact steps required)
- Company policies → Scripted (exact wording important)
- Office locations and hours → Non-Scripted (general information)

#### Content Creation Workflow
- Draft initial article titles (questions)
- Use AutoComplete to generate first drafts
- HR specialists review and refine content
- Add appropriate media and formatting
- Create comprehensive question variants
- Apply appropriate audience settings

#### Organization and Publication
- Organize into logical HR sub-workspaces (Benefits, Policies, Procedures, etc.)
- Publish high-priority articles immediately
- Schedule regular publication of remaining content
- Monitor effectiveness and refine based on usage data

## Conclusion

Knowledge Articles in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation  represent a powerful way to create purpose-built content that directly addresses user questions with precision and relevance. The dual approach of Scripted and Non-Scripted articles provides organizations with flexibility in how information is presented, balancing the need for exact wording in some cases with more natural, conversational delivery in others.

The combination of rich content features, audience targeting, workspace organization, and AI-assisted creation through AutoComplete enables organizations to build comprehensive, well-structured knowledge bases efficiently. This purpose-built content, working alongside uploaded documents and other knowledge sources, creates a robust foundation for the Virtual Agent to provide accurate, helpful responses across a wide range of topics.

By following best practices for article creation and strategically choosing between Scripted and Non-Scripted approaches based on content requirements, organizations can develop Virtual Agent knowledge bases that effectively address user needs while maintaining necessary control over information delivery.


