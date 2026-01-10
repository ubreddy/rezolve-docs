---
slug: january-2026-release
title: January Release
date: 2026-01-10
authors: rezolve
tags: [release, features]
---

**Release Date:** January 10, 2026

This release brings powerful new data export capabilities, dashboard enhancements, and streamlined migration workflows. Key highlights include SFTP Ticket Data Export, dynamic formula support in dashboards, and simplified Delta productization.

&nbsp;

<!-- truncate -->

### SFTP Ticket Data Export (New Feature)

Users can now export ticket data directly to an SFTP target location from the Reports section. Key capabilities include:
- Configure SFTP connection settings including server type, path, and credentials
- Set up subscription with configurable frequency
- Secure handling with encrypted password storage

---

### Dashboard - Column Rename for Unique Users & Repeat User Charts (Enhancement)

Users can now customize column names in Unique Users and Repeat User charts. An "Alias" field has been added under X-Axis in the Edit Chart configuration, allowing users to rename columns (including the Count column) when viewing data in "View All" mode.

---

### Dashboard - Dynamic Formula Support in Log Time Chart (Enhancement)

The Log Time chart now supports custom formulas via a TEXT-based formula field. Users can create calculations using supported variables ($count, $sum, $average) and operators (+, -, *, /, %, ^). The system validates formulas in real-time with clear error messaging for invalid inputs.

---

### Service Catalog (Enhancement) - Separate Feedback Rating and Feedback Comment Events

Feedback events have been split into two distinct events: "Feedback Rating Update" and "Feedback Comment Update" (previously combined into a single event). The Feedback Comments field is now available in both Events (Field Update trigger) and Action Conditions, enabling more granular automation - such as updating linked tickets when feedback comments change.

---

### Tickets Management (Enhancement) - Improved CSV Export Labels in Ticket List View

Export options in the ticket list view have been renamed for clarity:
- "Export as CSV (All Data)" → "Export as CSV (All Columns)"
- "Export as CSV (Present View)" → "Export as CSV (Presently visible columns)"

---

### Live Chat (Bug Fix) - Live Chat Navigation

Fixed navigation issues affecting POV tenants where users encountered a yellow screen error. The root cause was identified as new tenants registered as V3 being unable to access V2 screens. Navigation now works correctly across all tenant configurations.

---

### PD Tickets Export Data Quality (Bug Fix)

Resolved multiple data quality issues in the PD ticket export functionality:
- Fixed count mismatches between exported data and source
- Corrected JSON appearing in unexpected columns
- Resolved bad data formatting in date fields

---

### Offer-Based Field Filtering for Bot Integration & Email Configuration

Enhanced Bot Integration, Mail Server, and Smart Email Field Mapping screens to dynamically display fields based on the selected offer. Bot Input Fields now filter dynamically based on the selected offer, matching the behavior on the Create Ticket page. Different offers under the same ticket type can now have unique required field configurations.

---

### Configurable Offer Name Display in Inbox Layout

Separated the offer name from the ticket number in the Agent Inbox view and made it configurable. Offer name is now displayed as a separate tag/badge instead of being concatenated with the ticket number. Offer Name is available as a special field in Inbox Layout configuration (under "Special Fields"). This allows a cleaner inbox display with no more ticket number truncation; admins can now control offer name visibility per their requirements.

---

### SFTP Data Export for Ticket Data

Automated SFTP Export for Ticket Data - Introduced a new SFTP data export capability that enables scheduled transfer of ticket data to client-specified SFTP locations. This feature exports all ticket data (excluding notes and history) as TSV files, with each file containing up to 5,000 tickets. Users can configure SFTP connection details and set export frequency through the Reports section.

---

### Historical Knowledge Gaps Data Now Visible After V3 Migration

Resolved an issue where Knowledge Gaps data for older entries (prior to March) was not displaying in the V3 Console. Historical gaps, conversations, and explainability data are now properly migrated and accessible when tenants upgrade from V1 to V3 Knowledge module.

---

### Delta Productization Simplification

Streamlined the Delta migration process with automated workflows, eliminating multiple manual configuration steps. Significantly reducing administrative overhead and potential for human error during client migrations to Delta.

- **One-click Delta Migration:** Added a toggle in Config App (ASC_Admin only) to migrate clients from Base AIQuery API to Delta API — no more manual database updates required
- **Automatic V3 Transition:** Migrating to Delta now automatically triggers V3 module migration, removing the need to manually add individual modules to tenant config
- **Automated Data Migration:** Page data is now automatically migrated to V3 during the transition
- **New Default Dashboard:** The new Conversation Dashboard is now set as the default landing page for all migrated tenants

---

### Audience Restrictions for Managed Triggers

Added the ability to configure content restrictions (audience targeting) for managed triggers.

Users can now assign specific audiences to managed triggers, enabling the publishing of content-restricted flows. This enhancement applies to both standard managed triggers and bot integrations. This enables more granular control over who can access trigger-based content and flows, supporting enterprise requirements for restricted content delivery.

---

## Support

For questions or issues related to this release, please contact our support team by emailing us at support@rezolve.ai
