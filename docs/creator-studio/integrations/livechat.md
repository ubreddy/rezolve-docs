---
id: livechat
title: Live Chat Integration
sidebar_label: Live Chat Integration
description: Documentation for Live Chat Integration
status: 
whatsPending: 
---

# Live Chat Integration

## Overview

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation offers seamless live chat integration capabilities that connect users with human agents when conversational AI reaches its limits or when personal assistance is preferred. This integration provides a smooth transition from automated support to human interaction, maintaining conversation context and ensuring continuity in the user experience. The live chat functionality can be configured through either Service Catalog templates or direct Creator Studio flows, offering flexibility in implementation approaches.

![Live Chat One](/img/Creator%20Studio/livechat_one.png)


## Integration Methods

### Service Catalog Template Approach

The Service Catalog approach leverages existing ticketing templates:
- Create a Live Chat service template in Service Catalog with appropriate fields
- Import the template into Creator Studio as a flow
- Configure the imported template in the ticketCreationV2 flow
- Establish contextual triggers in Bot Integration settings
- Test the integration to ensure proper handoff

This method benefits organizations already using Service Catalog templates as it maintains consistency with existing processes and reporting.

![Live Chat Two](/img/Creator%20Studio/livechat_two.png)


### Creator Studio Flow Approach

Alternatively, a direct Creator Studio implementation can be created:
- Build a dedicated live chat flow in Creator Studio
- Configure the necessary cards, actions, and slots
- Integrate the flow with ticketCreationV2
- Set up context triggers in "Manage Triggers" screen
- Test the user experience end-to-end

This approach offers more customization options and may be preferable for specialized live chat requirements or when Service Catalog is not being fully utilized.

![Live Chat Three](/img/Creator%20Studio/livechat_three.png)

## Activation Methods

Once configured, users can access live chat through multiple paths:

### Contextual Triggers
Users can naturally transition to live chat during conversation:
- Specific phrases or questions can trigger live chat offering
- Detected frustration or repeated failures may prompt agent assistance
- Complex inquiries beyond bot capabilities can automatically suggest human support
- Users can explicitly ask to speak with a human agent

The contextual triggers are configured in Bot Integration (for Service Catalog templates) or Manage Triggers (for Creator Studio flows).

### Direct Access Button
For immediate human assistance:
- "Connect to Agent" button appears on the bot landing page
- Provides a clear, immediate path to human support
- Can be configured to collect preliminary information before connection
- Offers a fallback for users who prefer human interaction

![Live Chat Four](/img/Creator%20Studio/livechat_four.png)

## User Experience

When live chat is triggered, the user experiences a smooth transition:
- Bot acknowledges the handoff to a human agent
- User may see a queue position or estimated wait time
- Relevant conversation context is preserved for the agent
- Chat interface remains consistent during the transition
- Human agent joins the conversation with full context
- After resolution, the conversation may return to the bot or conclude

## Implementation Considerations

When implementing live chat integration:
- **Agent Availability:** Ensure proper staffing for expected chat volumes
- **Queuing Logic:** Configure appropriate wait time messaging and queue behavior
- **Context Transfer:** Verify that relevant conversation history transfers to agents
- **Fallback Handling:** Define processes for when no agents are available
- **Analytics Integration:** Ensure chat metrics are properly captured for reporting
- **Agent Training:** Prepare agents for context-aware conversation continuation

## Conclusion

The live chat integration capabilities in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation create a seamless escalation path from automated to human support, ensuring that users always have access to the appropriate level of assistance. Whether implemented through Service Catalog templates or direct Creator Studio flows, this functionality maintains conversation context and provides a consistent user experience throughout the support journey.


