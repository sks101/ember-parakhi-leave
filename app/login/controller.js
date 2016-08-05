import Ember from 'ember';

export default Ember.Controller.extend({
	user: {},
	actions:{
		
		login:function(){
			var controller = this;
			var data = JSON.stringify({
				username: controller.user.name,
				password: controller.user.password
			});
			$.ajax({
				method: "post",
				url: "http://localhost:3000/login",
				contentType: "application/json",
				dataType: "json",
				data: data,
				success: function(res){
					localStorage.setItem("fuse-leave-session", JSON.stringify(res));
					alert("Login successful.......");
					controller.transitionTo('/leaves');

				}
				
			})
		}
	}
});
