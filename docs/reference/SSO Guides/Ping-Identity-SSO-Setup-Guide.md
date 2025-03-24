---
title: 'Ping Identity SSO Setup Guide'
sidebar_position: 1
status: 
whatsPending: 
---


# Ping Identity SSO Setup Guide



Ping Identity: Single Sign On
Setup


To add a SAML application to Ping Identity and assign users to it, follow these steps:
Step 1: Add a SAML Application to Ping Identity
1. Log in to PingOne:
• Go to the PingOne admin console and log in with your administrator credentials.
2. Navigate to the Applications:
• In the left-hand menu, select Applications.
3. Add a New Application:
• Click on the + Add Application button.
4. Select SAML Application:
• In the application catalog, select SAML Application.
5. Configure the Application:
• Fill in the details for your SAML application:
• Application Name: Provide a name for your application.
• Description: Optionally, provide a description.
• Category: Select a category that best fits your application.
• Click Next to proceed.
6. Configure SAML Settings:
• ACS URL (Assertion Consumer Service URL): Enter the URL where the SAML assertions
should be sent.
• Entity ID: Enter the unique identifier for your application.
• NameID Format: Choose the appropriate NameID format (e.g., Email, Persistent, etc.).
• Signature Algorithm: Choose the algorithm used for signing the SAML assertions.
• Attributes: Add any required SAML attributes that your application needs.
•

7. Review and Save:
• Review the settings and click Save.
8. Download Metadata:
• After saving, download the SAML metadata file or note down the necessary details
(like the SSO URL and Entity ID) that you need to configure in your application.
Step 2: Assign Users to the SAML Application
1. Navigate to Users:
• In the left-hand menu, select Users.
2. Select Users:
• Check the boxes next to the users you want to assign to the application.
3. Assign Application:
• Click on the Assign Applications button.
4. Choose the Application:
• From the list of available applications, select the SAML application you just created.
5. Save the Assignment:
• Click Assign to add the selected users to the application.
Final Steps
1. Test the SAML Integration:
• Ensure that the application is properly configured to accept SAML assertions from
PingOne.
• Perform a test login to verify that the SAML SSO works as expected.
2. Adjust User Permissions (If Needed):
• Depending on your application's needs, you may need to adjust user roles and
permissions within the application itself.

By following these steps, you can successfully add a SAML application to Ping Identity and assign
users to it. If you encounter any issues, consult the Ping Identity documentation or support for
further assistance.



