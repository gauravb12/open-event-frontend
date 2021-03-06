import Ember from 'ember';
import FormMixin from 'open-event-frontend/mixins/form';

const { Component } = Ember;

export default Component.extend(FormMixin, {
  classNames: ['ui', 'stackable', 'centered', 'grid'],
  getValidationRules() {
    return {
      inline : true,
      delay  : false,
      on     : 'blur',
      fields : {
        file: {
          identifier : 'file',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please upload a file')
            },
            {
              type   : 'regExp',
              value  : '/^(.*.((zip|xml|ical|ics|xcal)$))?[^.]*$/i',
              prompt : this.l10n.t('Please upload a file in suggested format')
            }
          ]
        }
      }
    };
  },
  actions: {
    submit() {
      this.onValid(() => {
      });
    }
  }
});
