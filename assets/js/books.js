function renderBookGrid(containerId, category) {
  var container = document.getElementById(containerId);
  if (!container) return;

  fetch("data/books.json")
    .then(function (res) { return res.json(); })
    .then(function (books) {
      var entries = books.filter(function (b) { return b.category === category; });
      if (!entries.length) return;

      container.innerHTML = entries.map(function (b) {
        var excerpt = "";
        if (b.description) {
          var paras = b.description.split("\n").filter(function (p) { return p.trim(); });
          var source = paras.find(function (p) { return p.length > 60; }) || paras[0] || "";
          excerpt = source.slice(0, 170).trim() + (source.length > 170 ? "…" : "");
        }
        var amazonBtn = b.amazonLink
          ? '<a class="btn btn-primary" href="' + b.amazonLink + '" target="_blank" rel="noopener">Available on Amazon</a>'
          : '<a class="btn btn-primary" href="#" aria-disabled="true">Available on Amazon</a>';
        var excerptHtml = excerpt ? '<p class="entry-excerpt">' + excerpt + "</p>" : "";
        return (
          '<div class="amazon-card">' +
          '<div class="card-media"><img src="' + b.coverImage + '" alt="' + b.title + ' book cover" loading="lazy"></div>' +
          '<div class="card-body">' +
          "<h3>" + b.title + "</h3>" +
          excerptHtml +
          amazonBtn +
          "</div></div>"
        );
      }).join("");
    })
    .catch(function () {
      /* data/books.json unavailable (e.g. opened via file://) — leave existing static content in place */
    });
}
