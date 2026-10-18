// TierStack prototype renderer. Reads window.TIERSTACK_DATA from data.js. No build step, no fetch.
(function () {
  var data = window.TIERSTACK_DATA;
  if (!data) return;
  var $ = function (sel) { return document.querySelector(sel); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function catById(id) { return data.categories.filter(function (c) { return c.id === id; })[0]; }
  function toolsFor(id) { return data.tools.filter(function (t) { return t.category === id; }); }

  // Homepage: category cards
  var catGrid = $("#category-grid");
  if (catGrid) {
    catGrid.innerHTML = data.categories.map(function (c) {
      var count = toolsFor(c.id).length;
      return '<article class="card"><p class="kicker">' + count + ' tools ranked</p><h3>' + esc(c.name) +
        '</h3><p>' + esc(c.description) + '</p><a href="rankings.html?cat=' + esc(c.id) + '">View tier list &rarr;</a></article>';
    }).join("");
  }

  // Feed renderer (shared by homepage preview + releases page)
  function feedHTML(limit) {
    var items = limit ? data.releases.slice(0, limit) : data.releases;
    return items.map(function (r) {
      return '<article class="feed-item"><span class="pill watch">Meta impact: ' + esc(r.metaImpact) + '</span>' +
        '<h3>' + esc(r.title) + '</h3><p class="meta" style="color:var(--muted)">' + esc(r.category) + ' &middot; Example feed entry for prototype</p>' +
        '<p>' + esc(r.summary) + '</p><p class="take">' + esc(r.take) + '</p></article>';
    }).join("");
  }
  var homeFeed = $("#home-feed");
  if (homeFeed) homeFeed.innerHTML = feedHTML(3);
  var fullFeed = $("#full-feed");
  if (fullFeed) fullFeed.innerHTML = feedHTML(0);

  // How-we-rank: criteria
  var crit = $("#criteria-grid");
  if (crit) {
    crit.innerHTML = data.criteria.map(function (c) {
      return '<article class="card"><div class="weight">' + c.weight + '</div><h3>' + esc(c.name) + ' / 100</h3><p>' + esc(c.description) + '</p></article>';
    }).join("");
  }

  // Rankings page: tabs + tier board + compare
  var tabsEl = $("#category-tabs"), boardEl = $("#tier-board"), catInfo = $("#category-info");
  if (tabsEl && boardEl) {
    var params = new URLSearchParams(window.location.search);
    var current = params.get("cat") && catById(params.get("cat")) ? params.get("cat") : data.categories[0].id;
    var compare = {}; // tool name -> true, max 2 per view

    function renderTabs() {
      tabsEl.innerHTML = data.categories.map(function (c) {
        return '<button class="tab" data-cat="' + esc(c.id) + '" aria-selected="' + (c.id === current) + '">' + esc(c.name) + '</button>';
      }).join("");
      Array.prototype.forEach.call(tabsEl.querySelectorAll(".tab"), function (btn) {
        btn.addEventListener("click", function () {
          current = btn.getAttribute("data-cat"); compare = {}; render();
          history.replaceState(null, "", "rankings.html?cat=" + current);
        });
      });
    }
    function renderBoard() {
      var c = catById(current);
      if (catInfo) {
        catInfo.innerHTML = "<h2>" + esc(c.name) + "</h2><p class='sub'>" + esc(c.description) +
          "</p><p class='sub'><strong style='color:var(--text)'>Same-task test (planned):</strong> " + esc(c.testTask) +
          "</p><p><span class='pill watch'>" + esc(data.editorialLabel) + "</span> <span class='pill'>" + esc(data.lastUpdatedNote) + "</span></p>";
      }
      var tiers = ["S", "A", "B", "C"];
      boardEl.innerHTML = tiers.map(function (tier) {
        var tools = toolsFor(current).filter(function (t) { return t.tier === tier; });
        var inner = tools.length ? tools.map(function (t) {
          var checked = compare[t.name] ? " checked" : "";
          return '<div class="tool"><h4><a href="' + esc(t.url) + '" target="_blank" rel="noopener noreferrer">' + esc(t.name) + '</a></h4>' +
            '<p class="best">' + esc(t.bestFor) + '</p><p class="verdict">' + esc(t.verdict) + '</p>' +
            '<label><input type="checkbox" class="compare-check" data-name="' + esc(t.name) + '"' + checked + '> Compare</label></div>';
        }).join("") : '<p style="color:var(--muted)">No tools in this tier yet.</p>';
        return '<div class="tier-row"><div class="tier-badge tier-' + tier + '">' + tier + '</div><div class="tier-tools">' + inner + '</div></div>';
      }).join("");
      Array.prototype.forEach.call(boardEl.querySelectorAll(".compare-check"), function (box) {
        box.addEventListener("change", function () {
          var name = box.getAttribute("data-name");
          if (box.checked) {
            var keys = Object.keys(compare);
            if (keys.length >= 2) { delete compare[keys[0]]; }
            compare[name] = true;
          } else { delete compare[name]; }
          renderBoard(); renderCompare();
        });
      });
    }
    function renderCompare() {
      var box = $("#compare-box"); if (!box) return;
      var names = Object.keys(compare);
      var tools = names.map(function (n) { return toolsFor(current).filter(function (t) { return t.name === n; })[0]; }).filter(Boolean);
      if (tools.length < 2) {
        box.innerHTML = "<h3>Compare two tools</h3><p style='color:var(--muted)'>Tick <strong>Compare</strong> on any two tools in this category to see them side by side. (" + tools.length + "/2 selected)</p>";
        return;
      }
      function row(label, fn) {
        return "<tr><th>" + label + "</th>" + tools.map(function (t) { return "<td>" + fn(t) + "</td>"; }).join("") + "</tr>";
      }
      box.innerHTML = "<h3>Side by side</h3><p><span class='pill watch'>" + esc(data.editorialLabel) + "</span></p>" +
        '<table class="compare"><thead><tr><th></th>' + tools.map(function (t) { return "<th>" + esc(t.name) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        row("Tier (Editorial v0)", function (t) { return '<span class="tier-badge tier-' + t.tier + '" style="width:36px;height:36px;font-size:1rem;border-radius:9px">' + t.tier + "</span>"; }) +
        row("Best for", function (t) { return esc(t.bestFor); }) +
        row("Verdict", function (t) { return esc(t.verdict); }) +
        row("Official site", function (t) { return '<a href="' + esc(t.url) + '" target="_blank" rel="noopener noreferrer">' + esc(t.url.replace("https://", "")) + "</a>"; }) +
        "</tbody></table><p style='color:var(--muted);font-size:.9rem'>No scores, prices, or tested claims yet — hands-on same-task results will replace this editorial view. See <a href='how-we-rank.html'>How we rank</a>.</p>";
    }
    function render() { renderTabs(); renderBoard(); renderCompare(); }
    render();
  }

  // Newsletter placeholders: never submit anywhere
  Array.prototype.forEach.call(document.querySelectorAll("form.newsletter-form"), function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-msg");
      if (msg) msg.textContent = "Prototype only — this form is not connected and nothing was saved or sent.";
    });
  });
})();
