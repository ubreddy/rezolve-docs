---
id: fields
title: Fields
sidebar_label: Fields
description: Documentation for Fields
status: 
whatsPending: 
---


Fields are the building blocks of your ticket templates in the service catalog. They allow you to capture various types of information from users when they create tickets. The system supports multiple field types to accommodate different data requirements.

## Field Types
- **Text**: Simple text input fields for capturing short text information
- **Rich Text**: Formatted text fields that allow styling, lists, and other formatting options
- **Number**: Fields that accept only numerical values
- **Dropdown**: Selection fields with predefined options
- **Email**: Fields specifically formatted for email addresses
- **Media**: Fields that allow file attachments like documents, images, etc.
- **Boolean**: Yes/No or True/False fields

## Field Configuration
Each field has three main configuration sections:

### Basic Settings
- **Equipment Specification**: Define what the field is intended to capture
- **Default Value**: Set a pre-populated value for the field
- **Description**: Add explanatory text about the field's purpose
- **Attachment Settings**: Enable or disable file attachments for this field

### Advanced Settings
- **Placeholder**: Add helper text that appears when the field is empty
- **Hint Text**: Provide additional guidance below the field
- **Required Field**: Mark if the field must be filled to submit the ticket
- **Searchable**: Allow the field to be included in search functionality
- **Include in Reports**: Include the field data in reporting dashboards

### Role Settings
This section allows you to set field-level conditions based on user roles and attributes:
- **Viewers**: Control who can see the field (organization-wide, specific queue members, groups, users, roles, user attributes, or actors)
- **Editors**: Control who can edit the field
- **Conditional Visibility**: Make the field visible only when certain conditions are met
- **Conditional Editability**: Make the field editable only when certain conditions are met
- **Conditional Requirement**: Make the field required only when certain conditions are met

## Default Fields
When creating a template, some fields are included by default and cannot be removed:
- **Subject**: A brief title for the ticket
- **Summary**: A more detailed description of the issue or request
