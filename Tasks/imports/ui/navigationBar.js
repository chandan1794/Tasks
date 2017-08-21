import './navigationBar.html';

Template.navigationBar.events({
    'click #signOut': function(event){
        Meteor.logout(function(error){
            if(error){
                alert("Error in logging out!!");
            }else{
                alert("Successfully Logged Out!!");
            }
        })
    }
})