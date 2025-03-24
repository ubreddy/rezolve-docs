---
title: 'Enabling Graph API Permissions for additional Attributes in Teams using SSO App'
id: enabling-graph-api-permissions-for-additional-attributes-in-teams-using-sso-app
sidebar_position: 1
sidebar_label: Enabling Graph API Permissions for additional Attributes in Teams using SSO App
status: 
whatsPending: 
---

# Enabling Graph API Permissions for Microsoft Teams SSO App

This guide provides step-by-step instructions for enabling Graph API permissions in your Azure AD application to allow the bot to perform automations for your end-users in Microsoft Teams.

## Overview

To enable Microsoft Teams automations, you need to configure specific Graph API permissions in your Azure Active Directory. This guide will walk you through the process of:

1. Registering your app in Azure AD
2. Enabling the required Graph API permissions
3. Generating client secrets
4. Downloading and sharing the necessary credentials with Rezolve

## Required Graph API Permissions

For basic Microsoft Teams automation, the following permissions are required:

- **Team.ReadBasic.All**
- **TeamMember.ReadWrite.All**
- **Directory.Read.All**
- **User.Read.All**

These permissions must be configured as **Application permissions** in your Azure AD.

## Part A: Configuring API Permissions

1. Open your Azure Portal
2. Click on the **View** button for **Manage Azure Active Directory**

   ![Azure Portal](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page2_4.png)

3. Click on **App Registration**
4. Search and open the Rezolve SSO application you created

   ![App Registration](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page3_4.png)

5. The App Overview page will open. Look for **API Permissions** in the left-hand side menu and click on it
6. Select **Add a Permission** on the main part of the page

   ![API Permissions](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page3_5.png)

7. Select **Microsoft Graph**

   ![Microsoft Graph](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page4_4.png)

8. Click on **Application Permission** option

   ![Application Permission](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page4_5.png)

9. Type **Team** in the search box, select **Team.ReadBasic.All** and click **Add Permissions**

   ![Team.ReadBasic.All](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page5_4.png)

10. Click **Add a Permission** > **Microsoft Graph** > **Application permissions** again
11. Type **Team** in the search box, this time select **TeamMember.ReadWrite.All** and click **Add Permissions**

    ![TeamMember.ReadWrite.All](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page5_5.png)

12. Click **Add a Permission** > **Microsoft Graph** > **Application permissions** again
13. Type **direct** in the search box, select **Directory.Read.All** and click **Add Permissions**

    ![Directory.Read.All](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page6_4.png)

14. Click **Add a Permission** > **Microsoft Graph** > **Application permissions** again
15. Type **User** in the search box, select **User.Read.All** and click **Add Permissions**

    ![User.Read.All](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page6_5.png)

16. Close the Request API Permissions box so you are back at the Configure permissions screen
17. Select **Grant admin consent for...**

    ![Grant Admin Consent](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page6_6.png)

18. Click **Yes** to confirm the Grant admin consent

    ![Confirm Admin Consent](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page7_4.png)

19. Confirm that the screen looks similar to the example below with your listed permissions, **Admin Consent Req** set to **Yes** and **Granted for** has a green check

    ![Permissions Confirmation](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page7_5.png)

## Part B: Creating Client Secrets and Sharing Credentials

1. Look for **Certificates & secrets** in the left-hand side menu and select it
2. Then select **New client secret** on the main part of the page

   ![Certificates & Secrets](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page8_4.png)

3. Enter a description (e.g., "RezolveAIBot") and click **Add**

   ![Add Client Secret](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page9_4.png)

4. Copy the **Value** and **Secret ID** and save them securely
5. Select **Overview** in the left-hand side menu
6. Copy the **Application (client) ID** and save it with the Client Secret ID

   ![Application ID](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page10_4.png)

7. Select **Manifest** in the left-hand side menu
8. Click on **Download**

   ![Download Manifest](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page10_5.png)

9. Send the **Application (client) ID**, **Client Secret ID**, and the downloaded **Manifest** to Rezolve

   ![Send to Rezolve](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-for-additional-Attributes-in-Teams-using-SSO-App-NEW_page11_4.png)

## Important Note

This document contains proprietary information owned by Rezolve.ai and must not be distributed outside without authorization.

For more information, contact:
- Address: 11501 Dublin Blvd STE 200, Dublin, CA 94568
- Email: info@rezolve.ai
- Website: www.rezolve.ai
