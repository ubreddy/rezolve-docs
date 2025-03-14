---
title: 'Enabling Graph API Permissions existing app   For SharePoint Search Files and Folder'
sidebar_position: 1
---


# Enabling Graph API Permissions existing app - For SharePoint Search Files and Folder

Help Center
Enterprise Service Management
Enabling Graph API
Permissions
For the bot to Search SharePoint
Knowledge Articles
Find More- rezolve.ai/help-center

REGISTER APP IN AZURE AD
To allow the bot to perform automation for your end-user, we need SharePoint site ID and to enable certain Graph
API(s). We will guide you through how to do this in Azure AD.
Please note that the SharePoint page being used should be open to all of the bot end-users. This is to avoid them not
being able to open/access documents or any other material that may be returned by the bot.
ENABLE GRAPH API
Graph API Permissions are Required for the bot to be able to search and provide knowledge articles from SharePoint.
1. Sites.Read.All
2. Files.Read.All (if documents are saved to OneDrive)
TYPE OF PERMISSIONS REQUIRED
1) Application permissions
Instructions Part A
1. Open your Portal
2. Click on the View button for Manage Microsoft Entra ID

3. Click on App Registration
4. Search and Open the Rezolve SSO application you created

5. The App Overview page will open, look for API Permissions in the left hand side menu and click on it
6. Select Add a Permission on the main part of the page
1.
2.
7. Select Microsoft Graph
Teams and clickRegister
3.
5.
6.
This document contains proprietary information owned by Rezolve.ai and must not
be5 d.istributed outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
8. Click on the Application Permission option
7.
8.
9. Type Site in the search box, select Sites.Read.All and click Add Permissions
10. Click Add a Permission &gt; Microsoft Graph &gt; Application permissions again
11. Type File in the search box, this time select Files.Read.All and click Add Permissions
Here is an example:
9.

12. Close the Request API Permissions box so you are back at the Configure permissions screen
13. Select Grant admin consent for …
10.
14.Click Yes to Grant admin consent confirmation
11.
15. Confirm that the screen looks similar to below with your listed permissions, Admin Consent Req set to Yes and
Granted for has a green check
12.
13.

Instructions Part B
1. Look for Certificates & secrets in the left hand side menu and select it
2. Then select New client secret on the main part of the page

3. Enter a description i.e. RezolveAIBot and click Add
14.

5. Copy the Value and Secret ID and save them somewhere
6. Select Overview in the left hand side menu
7. Copy the Application (client) ID and save with Client Secret ID
8. Select Manifest in the left hand side menu
9. Click on Download


10. Send the SharePoint Site ID, Application (client) ID, Client Secret ID, Client Secret Value and the
downloaded Manifest to Rezolve


![Page 2 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page2_4.png)

![Page 3 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page3_4.png)

![Page 3 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page3_5.png)

![Page 4 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page4_4.png)

![Page 4 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page4_5.png)

![Page 5 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page5_4.png)

![Page 5 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page5_5.png)

![Page 5 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page5_6.png)

![Page 6 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page6_4.png)

![Page 6 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page6_5.png)

![Page 6 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page6_6.png)

![Page 7 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page7_4.png)

![Page 8 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page8_4.png)

![Page 9 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page9_4.png)

![Page 9 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page9_5.png)

![Page 10 Image](/img/reference/Sharepoint%20Knowledge%20Ingestion/images/Enabling-Graph-API-Permissions-existing-app---For-SharePoint-Search-Files-and-Folder_page10_1.png)

