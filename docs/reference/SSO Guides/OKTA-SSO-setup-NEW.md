---
title: 'OKTA SSO setup NEW'
sidebar_position: 1
status: 
whatsPending: 
---


# OKTA SSO setup NEW



OKTA Single Sign On
Setup


1. Create a Rezolve.ai app in OKTA
2. Point the App to the Rezolve.ai using the Realm and Redirect URLs provided via email by the Rezolve team. Here
is an example of how your configuration should look:
• Single Sign On URL: https://federation-sts.actionable-science.com/auth/realms/tenantname/broker/saml/endpoint
• Recipient URL: https://federation- sts.actionable-science.com/auth/realms/tenantname/broker/saml/endpoint
• Destination URL: https://federation-sts.actionable-science.com/auth/realms/tenantname/broker/saml/endpoint
• Audience Restriction: https://federation-sts.actionable-science /auth/realms/tenantname
3. Once done, please provide us the SSO metadata / URL so that we can enable SSO in our platform
4. Add the 3 user attributes as shown below to SAML assertion

5. Create 2 Rezolve user ID’s under OKTA to access the above created Applications.
6. Configure OKTA to be accessed from India and USA.


![Page 3 Image](/img/reference/SSO%20Guides/images/OKTA-SSO-setup-NEW_page3_4.jpeg)
