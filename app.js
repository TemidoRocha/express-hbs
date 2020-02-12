const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + 'views/partials');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/about', (request, response) => {
  const data = {
    history:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat vitae leo in auctor. Cras a neque tellus. Aenean sed aliquam nisl. Nam id lorem a lorem tincidunt accumsan. Nullam sed metus egestas, auctor dui nec, vehicula neque. Fusce malesuada nunc ut ante interdum dapibus. Vestibulum semper libero in nibh consectetur, id suscipit purus ullamcorper. Aenean lacinia velit a ullamcorper bibendum.'
  };
  response.render('about', data);
});
app.get('/work', (request, response) => {
  const data = {
    garage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat vitae leo in auctor. Cras a neque tellus. Aenean sed aliquam nisl. Nam id lorem a lorem tincidunt accumsan. Nullam sed metus egestas, auctor dui nec, vehicula neque. Fusce malesuada nunc ut ante interdum dapibus. Vestibulum semper libero in nibh consectetur, id suscipit purus ullamcorper. Aenean lacinia velit a ullamcorper bibendum.',
    shop:
      'Vivamus ut lorem lorem. Nunc sit amet ornare libero. Fusce molestie orci in sem placerat faucibus. Sed fermentum pretium nulla, placerat venenatis libero sodales id. Duis nec nulla blandit, fringilla lacus sed, consequat elit. Vestibulum sagittis ut purus sit amet laoreet. Nam tempus velit eget nulla rhoncus hendrerit. Morbi rhoncus est at libero pellentesque accumsan. Cras ultricies nibh ex, a aliquet est tempus pharetra. Phasellus non nulla vitae velit hendrerit porta vitae vel orci. Duis et dictum velit. In et magna quam. Maecenas finibus arcu ac lobortis auctor.',
    tours:
      'Vivamus eleifend ante vitae odio fermentum, at pharetra ex rutrum. Integer id lacus ut enim imperdiet sollicitudin nec ut urna. Duis scelerisque bibendum justo in vestibulum. Suspendisse condimentum ante vel dolor cursus sagittis. Integer lacus ante, viverra at lectus vitae, laoreet iaculis felis. Vestibulum sit amet ex id ipsum rutrum laoreet at in turpis. Ut tincidunt justo magna, quis scelerisque enim facilisis quis.',
    updatedDate: new Date()
  };
  response.render('work', data);
});
app.get('*', (request, response) => {
  response.render('error');
});

app.listen(3000);
