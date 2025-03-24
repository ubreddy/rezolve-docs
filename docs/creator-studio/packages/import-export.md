---
id: import-export
title: Import and Export Packages
sidebar_label: Import and Export Packages
description: Documentation for Import and Export Packages
status: 
whatsPending: 
---

# Import and Export Packages

## Importing Templates

The Import Template option allows you to convert a Service Catalog template into a flow that can be triggered by the bot. By default, any imported flows will be published in both the Production and Service Catalog folders and will have the same name as the Service Catalog template, but with an "SC_" prefix. When a flow is cloned, the "SC_" prefix is removed, and the cloned flow will only retain the name of the template.

![Import Template](../../../static/img/Creator%20Studio/Import%20Template.jpg)

**Only Service Catalog Templates in an Approved status** can be imported into Creator Studio. Clicking Import Template displays a list of Approved templates available for import. Once you select a template, a dropdown menu will appear asking you to select the number of ticket fields to display in each adaptive card when the flow is run.

![Approved Templates](../../../static/img/Creator%20Studio/Approved_Templates.jpg)

After making your selection, simply click Migrate and then confirm that you want to import the template.

**Note:**  
1. Reimporting a Service Catalog template will overwrite the previous version.
2. A template must be re-imported each time it has been updated to reflect the latest changes.

