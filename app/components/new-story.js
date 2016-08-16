import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    newStoryFormShow() {
      this.set('addNewStory', true);
    },

    save1() {
      var params = {
        headline: this.get('headline'),
        photo: this.get('photo'),
        author: this.get('author'),
        articleText: this.get('articleText'),
      };
      this.set('addNewStory', false);
      this.sendAction('save2', params);
    }
  }
});
