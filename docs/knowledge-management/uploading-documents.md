---
id: uploading-documents
title: Uploading Documents to Knowledge Management
sidebar_label: Uploading Documents
description: Guide for uploading and managing documents in the Knowledge Management system
status: 
whatsPending: 
---

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Knowledge Management system includes a robust document upload feature that allows organizations to incorporate existing documentation into the Virtual Agent's knowledge base. This capability enables the bot to reference and provide information from a wide range of organizational documents, significantly expanding its ability to answer user queries without requiring manual recreation of content.

The document upload functionality supports multiple file formats, batch processing, audience targeting, and version control to create a comprehensive, well-organized knowledge repository that powers the Virtual Agent's responses.

![Upload One](/img/Knowledge%20Management/upload_one.png)

## Access and Permissions

The document upload feature is accessible to specific roles within the Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation platform:

- **Bot Analyst:** Can upload and manage documents to expand the knowledge base
- **Bot Admin:** Has full document management capabilities including upload, deletion, and configuration
- **Tenant Admin:** Has system-wide access to all knowledge management functions

This role-based access ensures that knowledge base management is limited to appropriate personnel while providing flexibility for organizations to assign responsibilities based on their structure.

![Upload Two](/img/Knowledge%20management/upload_two.png)

## Supported File Formats

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation currently supports three primary document formats:

- **PDF (.pdf):** Ideal for formal documentation with complex formatting
- **Word Documents (.docx):** Suitable for most business documentation
- **Text Files (.txt):** Best for simple, plain-text content

Support for these formats covers the vast majority of organizational documentation, ensuring that existing knowledge assets can be readily incorporated into the Virtual Agent's knowledge base.

![Upload Three](/img/Knowledge%20management/upload_three.png)



## Upload Process

### Single and Batch Upload

The document upload interface supports efficient processing of multiple documents:

- Upload up to 5 documents simultaneously
- Progress indicators for each document being processed
- Status updates for successful uploads and any errors
- Preview capabilities for uploaded content

This batch upload capability streamlines the process of building a comprehensive knowledge base, allowing administrators to efficiently process large document collections.

![Upload Four](/img/Knowledge%20management/upload_four.png)



## Document Processing

When documents are uploaded, the system performs several important processing steps:

- **Content Extraction:** Text is extracted from the document, including handling of various formatting
- **Indexing:** Content is indexed for efficient retrieval during user queries
- **Entity Recognition:** Key entities, topics, and terms are identified
- **Relationship Mapping:** Connections between concepts are established
- **Question Generation:** Potential questions the document can answer are identified

This processing transforms static documents into dynamic knowledge sources that the Virtual Agent can leverage when responding to user queries.

## Audience Management

To ensure that information is appropriately targeted and secured, documents can be assigned to specific audiences:

![Upload Five](/img/Knowledge%20management/upload_five.png)



### Whitelisting

When a document is whitelisted for a specific audience:

- Only members of that audience will receive answers from the document
- The document content is effectively hidden from all other users
- This is ideal for sensitive or role-specific information

![Upload Six](/img/Knowledge%20management/upload_six.png)

### Blacklisting

When a document is blacklisted for a specific audience:

- All users except those in the blacklisted audience will receive answers from the document
- Members of the blacklisted audience will not see information from this source
- This is useful for excluding certain groups from seeing particular content

Audience targeting can be configured during the initial upload process. This capability ensures that the Virtual Agent provides appropriate information based on who is asking, maintaining information security while delivering personalized responses.

## Document Version Management

Knowledge content frequently requires updates, and the document upload system includes capabilities for managing document versions:

### Document Replacement

When uploading a document with the same name as an existing document:

- The system detects the potential duplication
- A confirmation prompt appears asking whether to replace the existing document
- Upon confirmation, the new document replaces the previous version
- The original upload date is preserved for tracking purposes
- A new "Updated at" date reflects when the replacement occurred



This versioning approach maintains continuity in the knowledge base while ensuring content remains current. The preservation of original upload dates with distinct update timestamps creates a clear audit trail of document evolution.

## Document Management

### Bulk Operations

To streamline knowledge base maintenance, the system supports bulk operations:

- **Multi-Select:** Choose multiple documents using checkboxes
- **Bulk Delete:** Remove several documents simultaneously
- **Bulk Audience Assignment:** Apply the same audience settings to multiple documents
- **Batch Processing:** Apply other operations to selected document groups

These bulk capabilities significantly reduce the time required to manage large knowledge bases, especially during major organizational changes or content refreshes.

### Search and Filtering

To help administrators locate specific documents within large knowledge bases:

- **Search by Filename:** Quickly locate specific documents
- **Filter by Upload Date:** Find recently added or older content
- **Filter by Format:** Focus on specific file types
- **Filter by Audience:** View documents assigned to particular audiences
- **Sort Options:** Arrange documents by name, date, size, or other attributes



These tools ensure that even as the knowledge base grows, administrators can efficiently locate and manage specific content.

## Document Analytics

For each uploaded document, the system provides analytics to help administrators understand its effectiveness:

- **Query Matches:** How often the document is matched to user queries
- **Response Rate:** How frequently content from the document is provided to users
- **Feedback Metrics:** User ratings on answers sourced from the document
- **Top Questions:** Most common questions answered using this document
- **Gap Analysis:** Questions related to the document topic that couldn't be answered

These analytics help identify high-performing documents and those that may require improvements, guiding ongoing knowledge base optimization.

## Best Practices for Document Upload

### Document Preparation
To maximize the effectiveness of uploaded documents:

- **Clear Structure:** Use clear headings and organization
- **Concise Content:** Focus on clear explanations without excessive text
- **Limited Formatting:** Minimize complex formatting that might be lost in processing
- **Current Information:** Ensure content is up-to-date before uploading
- **Descriptive Filenames:** Use names that clearly indicate content
- **Complete Information:** Include all relevant details needed to fully answer questions

### Upload Strategy
For efficient knowledge base development:

- **Prioritize High-Value Content:** Start with documents addressing common questions
- **Logical Grouping:** Upload related documents together for better context
- **Audience Planning:** Determine appropriate audience settings before uploading
- **Testing:** Verify document effectiveness with sample questions after upload
- **Regular Updates:** Establish a schedule for reviewing and refreshing documents
- **Version Control:** Maintain an external log of document versions and changes

### Security Considerations
To maintain information security:

- **Review for Sensitive Content:** Screen documents for confidential information before upload
- **Appropriate Audience Targeting:** Use whitelisting for sensitive information
- **Regular Audits:** Periodically review audience settings for continued appropriateness
- **Permission Alignment:** Ensure document permissions match organizational security policies
- **Access Monitoring:** Track who uploads and modifies documents

## Example: Building a Technical Support Knowledge Base

**Scenario:** An IT department wants to make technical support documentation available through the Virtual Agent.

### Process:

#### Document Identification:
- Identify key troubleshooting guides
- Select user manuals for common systems
- Gather FAQs from support team
- Collect network access procedures

#### Document Preparation:
- Convert all documents to supported formats
- Ensure clear headings and structure
- Update any outdated information
- Add clear problem/solution phrasing

#### Audience Planning:
- General IT procedures → No restrictions
- Admin tools documentation → Whitelist IT staff only
- Network security guides → Whitelist IT security team
- Executive system guides → Whitelist executive assistants

#### Batch Upload:
- Group documents by topic for efficient uploading
- Upload in batches of 5 documents
- Apply appropriate audience settings to each batch
- Verify successful processing

#### Testing and Refinement:
- Test with sample questions from each document
- Identify any processing issues
- Update documents as needed
- Monitor analytics for effectiveness

## Conclusion

The document upload functionality in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Knowledge Management system provides a powerful way to leverage existing organizational documentation within the Virtual Agent. By supporting multiple formats, batch processing, audience targeting, and version management, this feature enables organizations to quickly build comprehensive knowledge bases that power accurate, relevant responses to user queries.

This capability is particularly valuable for organizations with substantial existing documentation, as it eliminates the need to recreate content specifically for the Virtual Agent. Instead, current documents can be directly incorporated, ensuring consistency between the Virtual Agent's responses and other official documentation while significantly reducing the time required to build a robust knowledge base.

Through careful document preparation, strategic uploading, and ongoing monitoring of performance analytics, organizations can create a powerful, evolving knowledge resource that continuously enhances the Virtual Agent's ability to provide helpful, accurate information to users.
