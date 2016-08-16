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
    },

    update(story, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined && params[key] !== "") {
          story.set(key, params[key]);
        }
      });
      story.save();
      this.transitionTo('admin');
    }
  }
});
