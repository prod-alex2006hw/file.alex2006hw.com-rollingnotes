var debug = require('debug')('RollingNotes');
var app = require('./app');

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
    debug('Express server listening on port ' + server.address().port);

});
