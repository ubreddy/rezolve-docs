---
title: 'Enabling Modern Script Editor in SharePoint'
sidebar_position: 1
status: 
whatsPending: 
---


# Enabling Modern Script Editor in SharePoint



Enabling
ModernScriptEditor
SharePoint
To create SharePoint Widget WebPart


COMPLETE THE FOLLOWING WITH SHAREPOINT ADMIN ACCESS
To allow the widget html to be added to SharePoint, we need to enable Modern Script Editor in SharePoint. We will
guide you through how to do this in SharePoint.
ENABLE MODERNSCRIPT EDITOR (JSWEBPART) IN MODERN SHAREPOINT
1. Login with Sharepoint admin access:
a. Add app in SharePoint app Catalog
i. To add the app provided by rezolve.ai to your SharePoint app catalog, to access the app
catalog log on to this url: https://.sharepoint.com/sites/AppCatalog/AppCatalog [please
replace your tenant name before you log on] Note: This can be limited to the site you want to
make an update to.
ii. Click on the New and upload the package and click Ok, This requires SharePoint administrator or
Global administrator role (package file provided separately)
iii. Once you upload the package a pop-up screen will open and ask you to deploy the app click on
deploy (Make sure that you aren’t making this available for all sites )

ADDING APP IN YOUR SHAREPOINT SITE
1. Add App in your site where you want to embed widget.
b. Once your deployment is successful without error, open the site, where you want to enable script editor.
c. Click on the gear icon available on site, and select add an app, then click on “From My organization” and
add the modern script editor web part to the site
2. Enable Script Editor
a. Download SharePoint online management Shell (Download link: https://www.microsoft.com/en-
us/Download/confirmation.aspx?id=35588 )
b. Run the following commands in Sharepoint Management shell:
i. Connect-SPOService https://-admin.sharepoint.com [Replace tenant name]
This command is to connect to your SharePoint service which requires admin access. If it runs successfully a
new window will open and ask for a login.
(Login with admin access)

ii. Execute below command to enable ModernScriptEditor
set-sposite -identity  -DenyAddAndCustomizePages 0 [replace site url]
This command will enable scripting for that particular share point site
3. Now log on to your site and go to edit the site option you click on the edit web part and go to advance option
you will have access
4. Add this webpart in your SharePoint page, and paste the widgetcode provided by Rezolve team.


![Page 2 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page2_4.jpeg)

![Page 2 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page2_5.png)

![Page 3 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page3_4.png)

![Page 3 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page3_5.png)

![Page 4 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page4_4.jpeg)

![Page 4 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page4_5.png)

![Page 4 Image](/img/reference/SharePoint%20Widget/images/Enabling-Modern-Script-Editor-in-SharePoint_page4_6.png)
