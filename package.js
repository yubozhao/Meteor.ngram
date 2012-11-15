Package.describe({
  summary: "Ngram for meteor."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.add_files('ngram.js', where);
  api.add_files('fingerprint.js', where);
});