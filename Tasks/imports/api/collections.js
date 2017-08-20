import { Mongo } from 'meteor/mongo';

export const tasks = new Mongo.Collection("tblTasks");