---
id: overview
title: Integrations Overview
sidebar_label: Overview
description: Documentation for Integrations Overview and Prismatic Configuration
status:
whatsPending:
---

## Prismatic Configuration

### Initial Setup

When a user navigates to Creator Studio and selects "Import Integration" within any custom folder, the system triggers the categories API call. As soon as that call is executed, a customer record is automatically created in Prismatic, but it is created with zero instances.

![Initial Setup](/img/Service%20Catalog/d1.png)

### Integration Categories

All integrations are created in Prismatic within different categories. Within an integration, categories can either be selected or newly created. Once a category is assigned, the integration should appear under that specific category.

![Integration Categories](/img/Service%20Catalog/d2.png)

---

## Importing Integration in Prismatic

Follow these steps to import an integration:

1. **Click on Import Integration** - Navigate to any custom folder and click on "Import Integration"

![Click on Import Integration](/img/Service%20Catalog/d3.png)

2. **Select Category** - All the categories created in Prismatic will be displayed. Select any one category and click on "Next"

![Select Category](/img/Service%20Catalog/d4.png)

3. **Select API** - All the APIs configured in that category will appear. Select any one of the APIs

![Select API](/img/Service%20Catalog/d5.png)

4. **Select Flows** - All the flows created in the specific integration will appear. Click on "Next" to import the integration successfully

![Select Flows](/img/Service%20Catalog/d6.png)

All the flows created inside an integration appear in the interface. New flows can be added, and existing flows can be cloned, edited, or deleted.

![Integration Flows Interface](/img/Service%20Catalog/d7.png)

---

## Creating Flows for Imported Integrations

### Step 1: Add Flow to Designer
- Drag and drop the flow from the left panel to use it as an operation inside a flow

![Add Flow to Designer](/img/Service%20Catalog/d8.png)

![Flow Operations](/img/Service%20Catalog/d9.png)

### Step 2: Deploy to Production
1. Post importing the integrations, they are marked as WIP (Work in Progress)

![WIP Status](/img/Service%20Catalog/d10.png)

2. Deploy them to production

![Deploy Integration](/img/Service%20Catalog/d11.png)

3. Then deploy the flow to production

![Deploy Flow](/img/Service%20Catalog/d12.png)

---

## Triggering the Flow in BOT

### Method 1: Create Triggers to Call the Flow

1. **Edit the Flow** - Enable "Top Level Flow" for the flow

![Enable Top Level Flow](/img/Service%20Catalog/d13.png)

2. **Manage Triggers** - Click on "Manage Triggers" and create triggers. All flows with "Top Level Flow" enabled will appear

![Manage Triggers](/img/Service%20Catalog/d14.png)

3. **Add Trigger Details** - Add trigger name, description, and queries selecting a particular flow

![Add Trigger Details](/img/Service%20Catalog/d15.png)

4. **Test in Virtual Agent** - Go to Virtual Agent, click on "Ask a Question" and add your trigger words

![Test in Virtual Agent](/img/Service%20Catalog/d16.png)

### Method 2: Add Flow to Landing Message

Keep the flow at the top in the landing message, which triggers the flow in the bot by default.

![Landing Message Flow](/img/Service%20Catalog/d17.png)

---

## Instance Management in Prismatic

### Initial State
Initially, when a customer is created in Prismatic with no instance enabled, the bot fails stating the same.

![No Instance Error](/img/Service%20Catalog/d18.png)

### Creating an Instance

Follow these steps to create an instance:

1. **Select an API** - Choose an API to create an instance for

![Select API for Instance](/img/Service%20Catalog/d19.png)

2. **Add Credentials** - Add Client ID and Secret

![Add Credentials](/img/Service%20Catalog/d20.png)

3. **Authenticate** - Click on "Connect" and authenticate

![Authenticate](/img/Service%20Catalog/d21.png)

4. **Enable Instance** - The instance is now enabled

![Instance Enabled](/img/Service%20Catalog/d22.png)

Once the instance is enabled, the bot will answer based on the configured flow.

![Bot Response](/img/Service%20Catalog/d23.png)

---

## Versions in Integration

Any change made in the integration is considered as a new version. The bot responds based on the existing version only, unless the instance version is changed.

![Integration Versions](/img/Service%20Catalog/d24.png)

### Output Schema in Integration

The output schema defines the structure of data returned by the integration. This schema is used to map integration responses to bot flows and other system components.

![Output Schema](/img/Service%20Catalog/d25.png)

---

