if (Meteor.isClient) {
/*
    Router 
*/    
    Router.configure({
        onBeforeAction: function(){
                    
            try{
                var routeName = Router.current().route.name;
                var user = Meteor.user();
                console.log(user)
                var verifieduser = user
                
                var isAuthRoute = _.contains(['login'], routeName);
                
                if (verifieduser && isAuthRoute) {
                    console.log("verifieduser")
                    Router.go('app');
                }
                else if(!verifieduser &&! isAuthRoute){
                    Router.go('login');
                }
            }catch(e){
                console.error(e)
            }
        }
    })

    Router.map(function(){
        this.route('login', { path: '/', template: 'login'});
        this.route('app', { path: '/app', template: 'app'});
    })
/*
    template events
*/
    Template.login.events({
        'click a':function(evt,tpl){
            evt.preventDefault()
            console.log('clique ')
            Meteor.loginWithPassword({username:"darkship"},"123456",function(err){
                if(err)
                {
                    console.error(err)
                }
                else
                {
                    console.log("loginWithPassword sucess")
                }
            })
            return false
        }

    })
    
    Template.app.events({
        'click a':function(){
              Meteor.logout()  
        }
    })
}
  
if (Meteor.isServer) {
/*
    create user on startup
*/
    Meteor.startup(function () {
        Accounts.config({sendVerificationEmail:false,forbidClientAccountCreation :false})
        
        var firstUser=Meteor.users.findOne({username:'darkship'})
        
        if(!firstUser)
        Accounts.createUser({username:'darkship',password:'123456'})
    });
    
}
