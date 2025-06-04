---
title: 'Uploading Custom Bot'
id: uploading-custom-bot-in-teams-and-assigning-policy-to-individual-or-group
sidebar_position: 1
sidebar_label: Uploading Custom Bot
status: 
whatsPending: 
---

# Uploading Custom Bot

This guide provides step-by-step instructions for uploading a custom bot to Microsoft Teams and assigning access policies to individuals or groups within your organization.

## Overview

The process consists of four main steps:
1. Uploading the custom bot to your Teams environment
2. Creating a permission policy for the bot
3. Assigning the policy to individuals or groups
4. Optionally pinning the bot for easier access

## 1. Uploading Custom Bot for Your Organization

1. Navigate to [Microsoft Teams Admin Center](https://admin.teams.microsoft.com/dashboard)
2. Click **Manage apps**

   ![Navigate to Manage Apps](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page2_2.jpeg)

3. Click **Upload new app**

   ![Upload New App](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page3_1.jpeg)

4. Click **Upload**

   ![Click Upload](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page3_3.jpeg)

5. Search and select the zip file provided to you by Rezolve. Wait for the confirmation message and once received, close the popup box.

   ![Upload Confirmation](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page4_1.jpeg)

## 2. Creating the Permission Policy

1. Click **Permission policies**

   ![Permission Policies](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page4_4.jpeg)

2. Click **Add**

   ![Add Permission Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page5_1.jpeg)

3. Give your Policy a Name and Description

   ![Name Your Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page5_2.jpeg)

4. Under Custom apps, select **Allow specific apps and block all others**

5. Click **Allowed Apps**

   ![Allow Specific Apps](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page6_1.jpeg)

6. Click the "Search by name" field and enter your Bot name

   ![Search for Bot](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page6_2.jpeg)

7. Click **Add** next to your bot when it shows

   ![Add Your Bot](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page7_1.jpeg)

8. Click **Allow**

   ![Click Allow](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page7_2.jpeg)

9. Click **Save**

   ![Save Permission Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page8_1.jpeg)

## 3. Creating the Setup Policy

1. Click **Setup policies**

   ![Setup Policies](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page8_2.jpeg)

2. Click **Manage policies**

   ![Manage Policies](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page9_1.jpeg)

3. Click **Add**

   ![Add Setup Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page9_3.jpeg)

4. Enter a name for your app setup policy (e.g., BotNameAccessPolicy)
   > **Note**: Spaces are not allowed when creating your policy name.

   ![Name Setup Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page10_1.jpeg)

5. Add a description (e.g., BotName Access Policy)

6. Choose your company's preferences for the **Upload custom apps** and **User pinning** options

   ![Policy Description and Preferences](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page10_4.jpeg)

7. Click **None** and select the Permission Policy previously created

   ![Select Permission Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page11_1.jpeg)

8. Click the **Search by name** field

   ![Search Field](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page11_4.jpeg)

9. Type your bot's app name

   ![Enter Bot Name](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page12_1.jpeg)

10. Click on your custom bot app

    ![Select Bot App](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page12_3.jpeg)

11. Click **Add**

    ![Add Bot to Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page13_1.jpeg)

12. Click **Add** again

    ![Confirm Adding Bot](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page13_3.jpeg)

13. Click **Save**

    ![Save Setup Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page14_1.jpeg)

## 4. Pinning the App to a Policy (Optional)

To make the bot more accessible, you can pin it to the Teams menu:

1. Go to **Setup Policy**, select the Policy, scroll down to **Pinned apps** section and click **Add apps**

   ![Add Pinned Apps](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page14_3.jpeg)

2. Click the **Search by name** field

   ![Search for Bot to Pin](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page15_1.jpeg)

3. Type your bot's app name

   ![Enter Bot Name for Pinning](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page15_3.jpeg)

4. Click **Add**

   ![Add Bot for Pinning](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page16_1.jpeg)

5. Click **Add** again

6. Click **Save**

   ![Save Pinned App](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page17_1.jpeg)

7. If you get a confirmation prompt, click **Save**

   ![Confirm Save](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page17_3.jpeg)

## 5. Assigning the Policy to Individuals

1. Make sure you are on the **Manage policies** tab and select your bot policy

   ![Select Bot Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page18_1.jpeg)

2. Click **Manage users**

   ![Manage Users](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page18_4.jpeg)

3. Click **Add**

   ![Add Users](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page19_1.jpeg)

4. Click the **Search by display or username** field

   ![Search for Users](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page19_3.jpeg)

5. Search for the individuals you would like to have access and click **Add** until you are done

   ![Select Users](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page20_1.jpeg)

6. Click **Confirm**

   ![Confirm User Assignment](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page20_4.jpeg)

## 6. Assigning the Policy to Groups

1. Click **Group policy assignment**

   ![Group Policy Assignment](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page21_1.jpeg)

2. Click **Add**

   ![Add Group](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page21_3.jpeg)

3. Click the **Select a group** field

   ![Select Group Field](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page22_1.jpeg)

4. Look for the group you want to grant access to

   ![Search for Group](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page22_3.jpeg)

5. Select it and click **Add**

   ![Add Selected Group](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page23_2.jpeg)

6. Click **Policy name**

   ![Select Policy Name](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page24_1.jpeg)

7. Select the policy you created for the bot

   ![Choose Bot Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page24_3.jpeg)

8. Click **Apply**

   ![Apply Policy](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page25_4.jpeg)

9. Click **Confirm**

   ![Confirm Group Assignment](/img/reference/images/Uploading-Custom-Bot-in-Teams-and-Assigning-Policy-to-Individual-or-Group_page25_6.jpeg)

