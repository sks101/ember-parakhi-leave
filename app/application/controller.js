import Ember from 'ember';

export default Ember.Controller.extend({
	logout: function(){
			this.store.unloadAll();
			this.store.unloadAll('leave');
			localStorage.removeItem("fuse-leave-session");
			this.transitionTo('login');
	}
	
});
