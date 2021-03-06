import Marionette from 'backbone.marionette';
import {render as template} from 'templates/layout.twig';

const Layout = Marionette.View.extend({
  template,

  el:      '.container',
  regions: {
    content: '.content',
  },
});

export default new Layout();
