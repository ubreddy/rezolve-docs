---
id: metadata-linking
title: Metadata Linking
sidebar_label: Metadata Linking
description: Documentation for Metadata Linking
status: 
whatsPending: 
---

# Metadata Linking

Rezolve.ai's Meta Fields and Table Layout configuration provides a powerful way to customize the list view of tickets in the Agent UI. This feature allows administrators to determine which fields are visible in the ticket list table, create custom meta fields that combine data from multiple templates, and arrange the table layout for optimal user experience.

## Accessing Meta Fields Configuration

To configure meta fields and table layout:

1. Navigate to the Service Catalog
2. Look for the "Meta Fields" option
3. Access the configuration page

![Metadata List](/img/Helpdesk/Metadata_List.png)

## Understanding Default List View Fields

The Agent UI ticket list view comes with several default columns that are always available:

| Default Field | Description |
|---------------|-------------|
| Ticket ID | The unique identifier for each ticket |
| Submitted By | The user who created the ticket |
| Updated By | The user who last modified the ticket |
| Last Viewed By | The user who most recently viewed the ticket |
| Updated At | The date and time when the ticket was last modified |
| Created At | The date and time when the ticket was created |
| Offer Type | The specific offer used to create the ticket |
| Ticket Type | The template type used to create the ticket |

These default fields provide basic ticket identification and tracking information.

![Metadata Agent UI](/img/Helpdesk/Metadata_agentUI.png)

## Creating Custom Meta Fields

Meta fields allow you to display additional information in the list view, including data from custom fields across different templates:

1. In the Meta Fields configuration page, click "Create Meta Field" or "Add New"
2. Enter a name for your meta field (this will be the column header in the list view)
3. Configure field mappings from various templates
4. Save your new meta field

![Custom Meta Fields](/img/Helpdesk/Custom_MetaFields.png)

## Mapping Fields to Meta Fields

The power of meta fields comes from their ability to map to different fields across various templates:

- When creating or editing a meta field, you'll see a list of available templates
- For each template, you can select which field should map to this meta field
- This allows the same meta field to display relevant information regardless of which template was used to create the ticket

![Mapping New Fields](/img/Helpdesk/Mapping_NewFields.png)

### Types of Fields That Can Be Mapped

You can map various types of fields to your meta fields:

- **Standard Fields**: Regular fields from templates
- **Special Fields**: System-generated fields like Notes, History, etc.
- **Dependent Fields**: Fields that depend on other fields' values

### Example: Creating a "Priority" Meta Field

Let's create a meta field that shows ticket priority across different templates:

1. Create a new meta field named "Priority"
2. Map it to the following template fields:
   - IT Support template → Priority field
   - HR Request template → Urgency field
   - Facilities template → Importance field
   - Equipment Request template → Priority field

Now, regardless of which template was used to create a ticket, the appropriate priority value will display in the "Priority" column of the list view.


![Priority Metafield](/img/Helpdesk/Priority_Metafield.png)

## Configuring Table Layout

Once you've created your meta fields, you can configure how they appear in the list view:

1. In the Meta Fields configuration page, look for the "Table Layout" option
2. Access the table layout configuration screen
3. Arrange the order of columns by dragging and dropping
4. Toggle visibility for specific columns
5. Save your layout configuration


![Configure Table Layout](/img/Helpdesk/Configure_Table_Layout.png)

### Customizing Column Order

Arrange columns in the most logical order for your users:

- In the table layout screen, columns are displayed in their current order
- Drag columns up or down to change their position in the table
- Place the most important or frequently used columns toward the left
- Save your changes

### Managing Column Visibility

Control which columns appear in the default view:

- For each column, toggle visibility on or off
- Consider the balance between information density and screen space
- Remember that users can typically show/hide columns in their own view
- Save your configuration

## Dashboard Integration with Meta Fields

Meta fields play a crucial role in creating effective dashboards and analytics:

### Types of Visualizations Enhanced by Meta Fields

| Visualization Type | Use Case | Meta Field Benefit |
|-------------------|----------|-------------------|
| Stacked Bar Charts | Compare ticket volumes by category, location, or agent performance | Consistent categorization across templates |
| Grouped Bar Charts | Track ticket trends across multiple variables | Standardized data from diverse templates |
| Line & Series Charts | Analyze response rate improvements and daily ticket trends over time | Consistent time-series data regardless of source template |
| Pie Charts | Visualize ticket distribution by department or category | Unified classification across different processes |
| Heat Maps | Identify peak hours or days for ticket creation | Normalized data for accurate temporal analysis |

### Dashboard Creation Process

1. Configure meta fields that will provide valuable insights
2. Ensure consistent mapping across all relevant templates
3. Create dashboard visualizations using these meta fields
4. Set up filters using meta fields for interactive analysis

## Example: Comprehensive List View Configuration

Let's create a complete list view configuration for a service desk:

### Step 1: Create Meta Fields

Create the following meta fields:

- **Priority**
  - Map to priority or urgency fields across all templates
- **Category**
  - Map to department, category, or type fields across templates
- **Status**
  - Map to status fields across all templates
- **Due Date**
  - Map to due date, deadline, or target completion fields
- **Assignee**
  - Map to assigned to or owner fields

### Step 2: Configure Table Layout

Arrange columns in this order:

1. Ticket ID
2. Status (meta field)
3. Priority (meta field)
4. Category (meta field)
5. Subject (default field)
6. Assignee (meta field)
7. Submitted By (default field)
8. Created At (default field)
9. Due Date (meta field)
10. Updated At (default field)

### Step 3: Create Dashboard Visualizations

Using these meta fields, create dashboard visualizations:

- **Ticket Volume by Category** (Stacked Bar Chart)
  - X-axis: Time periods
  - Y-axis: Ticket count
  - Stacked by: Category meta field

- **Tickets by Priority and Status** (Grouped Bar Chart)
  - X-axis: Priority meta field
  - Y-axis: Ticket count
  - Grouped by: Status meta field

- **Response Time Trends** (Line Chart)
  - X-axis: Time periods
  - Y-axis: Average response time
  - Series: Category meta field

## Best Practices for Meta Fields and Table Layout

- **Create Meaningful Mappings**: Ensure field mappings across templates truly represent the same concept
- **Use Consistent Naming**: Name meta fields clearly so their purpose is obvious
- **Prioritize Important Information**: Place the most critical fields first in the table layout
- **Balance Information Density**: Include enough fields to be useful without overwhelming users
- **Consider User Roles**: Different roles may need different field visibility
- **Test Thoroughly**: Verify that mappings display as expected with tickets from all templates
- **Document Your Configuration**: Maintain documentation of your meta field mappings for reference

## Benefits of Effective Meta Field Configuration

- **Unified View**: Consistent display of information across different ticket types
- **Improved Filtering**: Filter and sort across template boundaries
- **Enhanced Reporting**: Create comprehensive reports that include all ticket types
- **Better User Experience**: Present relevant information consistently in the list view
- **Powerful Dashboards**: Create insightful visualizations using standardized data

## Conclusion

The Meta Fields and Table Layout configuration in Rezolve.ai provides a powerful way to customize the ticket list view and create consistent data representations across different templates. By properly configuring meta fields and optimizing the table layout, administrators can significantly improve the usability of the Agent UI while enabling powerful analytics and reporting capabilities.

This feature is particularly valuable for organizations with diverse ticket types and templates, as it creates a unified view that helps agents quickly identify and prioritize their work regardless of which template was used to create each ticket. When combined with dashboard capabilities, meta fields enable comprehensive analytics that provide valuable insights into service performance across the entire organization.
