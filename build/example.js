function version(r) {
  
  r.return(200, njs.version);
}

function hello(r) {
  r.return(200, "Hello world!\n");
}

function dec_foo(r) {
  return decodeURIComponent(r.args.foo);
}

function inject_header(s) {
  inject_my_header(s, 'Content-Type: text/plain');
}

function inject_my_header(s, header) {
  var req = '';

  s.on('upload', function(data, flags) {
      req += data;
      var n = req.search('\n');
      if (n != -1) {
          var rest = req.substr(n + 1);
          req = req.substr(0, n + 1);
          s.send(req + header + '\r\n' + rest, flags);
          s.off('upload');
      }
  });
}

function join(r) {
  join_subrequests(r, ['/hello', '/version']);
}

function join_subrequests(r, subs) {
  var parts = [];

  function done(reply) {
      parts.push({ uri:  reply.uri,
                   code: reply.status,
                   body: reply.responseBody });

      if (parts.length == subs.length) {
          r.return(200, JSON.stringify(parts));
      }
  }

  for (var i in subs) {
      r.subrequest(subs[i], done);
  }
}