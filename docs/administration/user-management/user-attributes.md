---
id: user-attributes
title: User Attributes
sidebar_label: User Attributes
description: Comprehensive guide to managing user attributes and profile information
status: 
whatsPending: 
---

# User Attributes

User Attributes in Rezolve.ai provide a flexible framework for storing and utilizing custom user information that extends beyond basic profile details. These attributes enable personalized experiences, sophisticated routing rules, targeted content delivery, and detailed analytics based on user characteristics.

Attributes can be created and managed to reflect organization-specific information needs:

- **Standard Attributes**: Common fields like Location, Department, Job Title, and Manager that are preconfigured in the system
- **Custom Attributes**: Organization-specific fields that can be created to capture unique characteristics relevant to business processes
- **System Attributes**: Automatically generated and managed fields that track system-related user information

The attribute creation process allows administrators to define various properties:

- **Attribute Type**: Data type such as text, number, date, boolean, or selection list
- **Default Values**: Preset values for new user accounts
- **Validation Rules**: Requirements for data format or value constraints
- **Visibility Settings**: Controls regarding which roles can view or edit the attribute
- **Required Status**: Whether the attribute must be populated for all users

## Attribute Types

| Type | Description | Example |
| --- | --- | --- |
| Text | Text field |  phone number|
| Unique Text | Text field collects unique values as tags | location, department, role|
| Predefined List| Dropdown with fixed values | Gender, Marital Status|

![User Attributes](/img/administration/User_Attributes.png)

## Attribute Population Methods

Attributes are populated through several methods:

- **Manual Entry**: Direct input during user creation or profile updates
- **Bulk Import**: Mass updates via CSV or spreadsheet uploads
- **Directory Synchronization**: Automatic population from enterprise directories
- **SSO Mapping**: Values derived from identity provider claims during authentication
- **API Integration**: Programmable updates from external systems

## Platform Capabilities Enabled by Attributes

Once configured, user attributes enable powerful capabilities throughout the platform:

- **Routing Rules**: Directing tickets or chats based on user characteristics (e.g., routing IT hardware issues to the support team matching the user's location)
- **Knowledge Targeting**: Displaying relevant knowledge articles based on user attributes (e.g., showing location-specific policies)
- **Bot Personalization**: Tailoring virtual agent responses based on user context
- **Access Control**: Granting permissions based on attribute values
- **Workflow Automation**: Triggering specific processes based on user properties
- **Reporting Segmentation**: Analyzing performance metrics by user attributes

## Attribute Management Tools

The User Attributes section includes management tools for maintaining attribute data quality:

- **Bulk Editing**: Updating attribute values for multiple users simultaneously
- **Attribute Reports**: Identifying missing or potentially incorrect attribute values
- **Usage Analysis**: Understanding which attributes are actively used in platform functions
- **Value Standardization**: Tools to consolidate inconsistent values (e.g., merging "NY" and "New York")

Organizations typically develop an attribute strategy that balances comprehensiveness with manageability, focusing on attributes that drive meaningful differences in how users interact with the platform or how work is routed and processed. This strategic approach ensures that the attribute framework remains valuable without becoming unnecessarily complex.

Through thoughtful implementation of user attributes, organizations can create highly personalized support experiences that acknowledge user context while enabling efficient, targeted service delivery based on relevant user characteristics.

## Other properties

* Required
* Allow Multiple
* Append or overwrite on sync
