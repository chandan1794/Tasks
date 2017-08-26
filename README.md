# Tasks
Creating a task manager for multiple people. A small application to run on office server.


This is a meteor js based application. To run this application on your server you will have to install meteor js.
For more information on installation please visit official website of Meteor.js

Functionality:
After setting up the environment and cloning the code to a local folder. Go into the folder and
Run command `$ meteor`

You will see a welcome screen.
  1. Signup ( if not already )
  2. Sign in
  3. Now you will see two tables and a form
    a. First table contains the tasks which are assigned to you.
    b. Second table contains the tasks which are assigned by you.
    c. Form is at the top, just below the header of the page. It is to create new task and assign them to someone.

A task can have 4 status:
  1. Pending: When you first create the task its status will be pending.
  2. Submitted: When someone completes the task assigned to them and submit it.
  3. Reassigned: When the submitted task comes to the assignee and they rejects the submission, it will be reassigned.
  4. Approved: When the submitted task comes to assignee and they accepts it.

Background color of rows depends on the status of the task:
  1. Pending and Reassigned: Yellow
  2. Submitted: Blue
  3. Approved: Green


Upgrades in version 1.1:
  1. UI has been improved.
  2. Can edit and delete a task.

Rule for editing a task:
  1. You can only edit the tasks which are assigned by you and whose status is pending.

Rule for deleting a task:
  1. You can only delete the tasks which are assigned by you and either are pending or approved.
  2. You can also delete the tasks which are assigned to you and are completed.
