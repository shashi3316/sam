export default function (kibana) {
  return new kibana.Plugin({
   require: ['elasticsearch'],

    uiExports: {
      app: {
        title: 'Indices',
        description: 'An awesome Kibana plugin',
        main: 'plugins/elasticsearch_status/app',
        icon: 'plugins/elasticsearch_status/icon.svg'
      }
    }
});
