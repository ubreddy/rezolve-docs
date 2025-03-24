---
title: 'How to Register an Azure Application for SharePoint Ingestion for Rezolve.ai'
sidebar_position: 1
status: 
whatsPending: 
---


# How to Register an Azure Application for SharePoint Ingestion for Rezolve.ai

How to Register an Azure Application for SharePoint Ingestion
for Rezolve.ai
1. In the Azure portal, search for "App Registrations" and open the App Registrations service.
2. Click on "+ New Registration".
3. Provide a name for the application, select the appropriate "Supported Account Types", then
click on "Register".
4. Once registered, you will be redirected to the application overview page. The Application
(client) ID and the Directory (tenant) ID for your application are listed here. Note these
down as they will be used for the authentication process.
5. To generate the Client Secret, navigate to "Certificates & secrets" from the left sidebar. Click
on "+ New Client Secret", add a description, choose an expiry period, then click on "Add".
6. Once added, Azure will generate a new client secret. Copy and save the value of the client
secret as Azure won't show this value again.
7. Now, to give your application access to Sites.Read.All and Files.Read.All permissions,
navigate to "API permissions" from the left sidebar.
8. Click on "+ Add a permission", select "Microsoft Graph" from the list of available APIs, then
select "Application permissions”.
9. Either browse the list or use the search box to find and select “Sites.Read.All” and "
Files.Read.All" permissions, then click on "Add permissions".
10. After adding the necessary permissions, you will notice that your added permissions require
admin consent. "Grant admin consent for [Your Directory]" will need to be clicked next.
Note that only an Azure AD admin can grant this consent.
Locating the site id and folder id in SharePoint is done by navigating to the SharePoint online
site and then selecting the desired site or folder. The ID will be part of the URL of the page you
are viewing. For example, ‘https://your-tenant-name.sharepoint.com/sites/[Site-ID]’.
To locate the Folder ID, navigate to the desired folder in the document library, the Folder ID will
be the ID of the folder in the document library. The URL will look like 'https://your-tenant-
name.sharepoint.com/:f:/g/[Folder-ID]'.
Remember that Azure registered app and SharePoint online may have different access and
permission settings. Ensure that the app has the necessary permissions to access and manage
the specific SharePoint site and its documents.

![Page 1 Image](/img/reference/images/How-to-Register-an-Azure-Application-for-SharePoint-Ingestion-for-Rezolve.ai_page1_2.png)

![Page 2 Image](/img/reference/images/How-to-Register-an-Azure-Application-for-SharePoint-Ingestion-for-Rezolve.ai_page2_1.png)

![Page 2 Image](/img/reference/images/How-to-Register-an-Azure-Application-for-SharePoint-Ingestion-for-Rezolve.ai_page2_2.png)

![Page 3 Image](/img/reference/images/How-to-Register-an-Azure-Application-for-SharePoint-Ingestion-for-Rezolve.ai_page3_1.png)

![Page 3 Image](/img/reference/images/How-to-Register-an-Azure-Application-for-SharePoint-Ingestion-for-Rezolve.ai_page3_2.png)
