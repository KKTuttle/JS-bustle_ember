import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('story');
  },

  actions: {
    save3(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('admin');
    }
  }
});
