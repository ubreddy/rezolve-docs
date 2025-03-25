---
id: mail-channel-setup
title: Mail Channel Setup
sidebar_label: Mail Channel Setup
description: Documentation for Mail Channel Setup
status: 
whatsPending: 
---


The Mail Channel Setup allows organizations to integrate email capabilities with the ticketing system. This integration enables ticket creation via email, email notifications, and the ability to update tickets through email replies.

## Key Features

### Mail Server Configuration
- Set up new mail servers with detailed connection parameters
- Configure authentication methods including OAuth and password-based authentication
- Establish secure connections to email services like Office 365 or other IMAP/SMTP servers

### Email to Ticket Conversion
- Automatically create tickets from incoming emails
- Map email components (subject, body, attachments) to ticket fields
- Filter emails based on domains and folders

### Reply Processing
- Process email replies and add them as notes to existing tickets
- Configure which ticket types can receive email updates
- Handle attachments and formatting in email replies

## Configuration Tabs

### Connection Form Fields
- Protocol: Select the email protocol (e.g., IMAP)
- Host/IP: Specify the mail server host (e.g., outlook.office365.com)
- Username: Email account username
- Port: Connection port (typically 993 for IMAP)
- Reply To Mail: Optional reply-to address
- Auth Type: OAuth or Password
- Azure Active Directory Tenant ID: For Microsoft integrations
- Redirect URL: For OAuth authentication flow
- Client ID/Secret: For OAuth authentication
- Token Endpoint: OAuth token endpoint URL
- Connection Settings: Timeout, retry settings, etc.

### Folder Mapping
- Fail Folder: Where problematic emails are moved
- Success Folder: Where processed emails are moved
- Exclusion Folder: Emails to ignore (e.g., bulk mail)

### Domain Settings
- Allowed Domains: List of domains from which to accept emails
- Exclude AutoReplies: Option to filter out automatic replies

### Ticket Mapping Settings
- Template Selection: Choose which template receives email-created tickets
- Whitelist Ticket Types: Templates that can receive email updates
- Field Mapping: Map email properties to ticket fields

## Implementation Process
1. Access the Mail Server section in Service Catalog
2. Set up connection details for your email server
3. Configure folder mappings and allowed domains
4. Map email components to ticket fields
5. Test the configuration with sample emails
6. Monitor and adjust settings as needed

## Important Notes
- Setting up an email server creates a silent offer for the selected template
- This offer won't be visible in the normal offer section but functions as an email entry point
- Changes to the template selection cannot be made after initial setup and publishing

## Best Practices
- Use dedicated email accounts for ticket management
- Implement clear folder structures for processed emails
- Regularly monitor the fail folder for problematic emails
- Configure appropriate security settings to protect sensitive information
- Set up clear auto-response messages for ticket creation confirmation
