---
slug: march-2025-release
title: March 2025 Release
authors: rezolve
tags: [release, features]
---

# March 2025 Release

We're excited to announce our March 2025 release with several new features and improvements!

## Release Date: 7th March 2025

### 1: Creator Studio :Script Validator for Adaptive Cards

#### Overview
This release introduces a script validation feature within Creator Studio to enhance the development experience when working with Adaptive Cards.

#### New Capabilities

* Script Validation: Creator Studio now includes a built-in code validator for Adaptive Card JSON scripts.

* Error Highlighting: The validator highlights the specific line(s) where an error occurs in the Adaptive Card JSON content.

#### Problem Addressed

Previously, there was no validation for Adaptive Card JSON within Creator Studio. As a result, incorrect or malformed JSON could cause the bot flow to break without giving visibility into the issue, making it difficult for implementation engineers to debug. This feature solves that problem by providing immediate feedback and pinpointing issues within the Adaptive Card structure.


![Release](/img/Release/prd_2005.png)



### 2: Dashboard - Support for "IS EMPTY" and related operators in filters

#### Overview

The Actor (Assigned To) field in dashboard filters now supports "IS EMPTY" and other logical operators to help users create more precise and insightful chart filters.

#### New Capabilities

* Added Operator: `IS EMPTY`
  * Enables filtering data where the Actor/Assigned To field is blank or unassigned.

* Additional Operators Supported:
  * `IS`
  * `NOT IN`
  * `IS ONE OF`

* Improved Filter Flexibility:
  * Allows users to include/exclude tickets where no actor is assigned, aiding better analysis of unassigned workloads.

#### Use Case

In dashboards like "My Workload Dashboard", users can now include a filter condition to identify incidents with no assignee (`Actor IS EMPTY`). This helps teams monitor backlog or unattended tickets more effectively.

#### Impact

* Enhances reporting accuracy for operational dashboards.
* Supports quicker detection of bottlenecks and assignment gaps.
* Streamlines chart customization for advanced analytics.


![Release](/img/Release/dri_4466.png)




### 3: Bot Studio : UI Restriction in Production Folder and Default Component Visibility for ASC Admin

#### Overview

This update improves role-based access and environment-specific editing permissions in Bot Studio by modifying toolbar visibility and component toggling behavior.

#### Enhancements

✅ Toolbar Removed in Production Folder

* The toolbar and interaction bar are now hidden in the Production folder.
* Editing actions like component addition or deletion are disabled, ensuring production integrity.

✅ Toolbar Retained in Custom Folder

* The toolbar remains fully accessible in the Custom Folder, enabling flow creation, editing, and component manipulation where allowed.

✅ ASC Admin Role: Default "Show All Components" Enabled

* For users with ASC Admin access:
  * The "Show All Components" option is now automatically toggled ON.
  * Eliminates the need to manually enable this setting every time.

#### Problem Addressed

* Previously, the production environment displayed an unused toolbar, causing confusion.
* "Show All Components" was hidden by default, requiring extra steps for admin users.

### 4: Attachment Count Display in Badges

#### Overview

Improved the user interface by enhancing the way attachment counts are displayed. This change makes it easier for users to quickly understand how many attachments are associated with a ticket or record.

#### Enhancements

✅ Old Behavior:

* Attachment count was shown in brackets within the heading text:
  (e.g., "Attachments (1)")

✅ New Behavior:

* Attachment count now appears as a badge, similar to modern UI patterns.
  (e.g., A "+2" badge is shown next to the visible files, indicating more attachments are hidden)

✅ Benefits:

* Provides a cleaner and more intuitive layout.
* Improves visibility and accessibility of attachment metadata.
* Matches design consistency across Agent-UI components.

#### Visuals

Before:
`Attachments (1)`

After:
`Attachments [ onboarding.pdf ][ employee_list.xls ][ assets_details.doc ][ +2 ]`


![Release](/img/Release/dri_1419.png)


### 5: Creator Studio Flow Editor - Color Code for Components

We're excited to announce an update to the Bot Studio Flow Editor that enhances visual clarity and improves the user experience through a new color coding system for components.

#### What's New

* Component Labels with Visual Indicators: Each component is now displayed with a badge that includes an associated icon and color code, making identification faster and more intuitive

* Color-Coded Component Names: Component names are highlighted with their respective colors to enhance visual recognition at a glance

* Reduced Visual Noise: Condition badges now appear in gray, decreasing their visual prominence and helping users focus on the main flow components

#### Benefits

* Improved Visual Hierarchy: The new color system creates a clear visual distinction between different component types

* Enhanced Scanning and Navigation: Quickly identify components when working with complex flows

* Better User Experience: Redesigned component cards in both collapsed and expanded views for improved clarity.


![Release](/img/Release/prd_1845.png)


### 6: Service Catalog - Ticket Type Color Coding System

We're excited to announce an enhancement to our ticketing system that introduces color coding for ticket types, making ticket identification faster and more intuitive across the platform.

#### What's New

- **Color-Coded Ticket Types**: Each ticket type can now be assigned a unique color through the color picker in the ticket type creation interface
- **Visual Identification in Agent Interface**: Tickets are now displayed with their associated color in the agent inbox, making it easier to quickly identify ticket types at a glance
- **Color Picker Tool**: A comprehensive color selection tool with:
  - RGB/HEX color input options
  - Visual color selection palette
  - Opacity/intensity controls
  - Saved colors palette for consistency across your system

#### User Experience Improvements

- **Enhanced Ticket Recognition**: Tickets in the inbox display color-coded user initials (as seen in the inbox view with SA, AV, AP, CC)
- **Status Clarity**: Status indicators (RESOLVED, DRAFT, UNREAD, SUBMITTED) remain clearly visible alongside the color coding
- **Consistent Visual System**: Colors help create a cohesive identification system throughout the platform

![Release](/img/Release/dri_2521.png)

![Release](/img/Release/dri_2521_1.png)


### 7: Actor and Queue Fields Enhancement

We're pleased to announce an important enhancement to our field configuration system that expands the capability of Actor and Queue fields.

#### What's New

* Actor and Queue as Dependent Fields: Actor and Queue fields can now be configured as dependent fields within your forms and workflows

* Hierarchy Data Mapping: Actor fields can now be mapped to Hierarchy data, providing more flexible data relationships

* Default Value Selection: You can now choose default values for Actor and Queue fields in mapped hierarchy configurations

#### Key Benefits

* Enhanced Form Logic: Create more complex and intelligent form behaviors using Actor and Queue fields as dependencies

* Improved Data Relationships: Build more sophisticated data models by connecting Actor fields to your hierarchy data

* Consistent Configuration Experience: Actor and Queue fields now work like any other level in your mapped hierarchies


![Release](/img/Release/dri_1419_1.png)