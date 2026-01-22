(() => {
  // <stdin>
  window.addComment = (function(v) {
    var I, C, h, E = v.document, b = { commentReplyClass: "comment-reply-link", commentReplyTitleId: "reply-title", cancelReplyId: "cancel-comment-reply-link", commentFormId: "commentform", temporaryFormId: "wp-temp-form-div", parentIdFieldId: "comment_parent", postIdFieldId: "comment_post_ID" }, e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver, r = "querySelector" in E && "addEventListener" in v, n = !!E.documentElement.dataset;
    function t() {
      d(), e && new e(o).observe(E.body, { childList: true, subtree: true });
    }
    function d(e2) {
      if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
        let t3 = function(e3) {
          if ((e3.metaKey || e3.ctrlKey) && 13 === e3.keyCode) return C.removeEventListener("keydown", t3), e3.preventDefault(), C.submit.click(), false;
        };
        var t2 = t3;
        I.addEventListener("touchstart", l), I.addEventListener("click", l);
        C && C.addEventListener("keydown", t3);
        for (var n2, d2 = (function(e3) {
          var t4 = b.commentReplyClass;
          e3 && e3.childNodes || (e3 = E);
          e3 = E.getElementsByClassName ? e3.getElementsByClassName(t4) : e3.querySelectorAll("." + t4);
          return e3;
        })(e2), o2 = 0, i = d2.length; o2 < i; o2++) (n2 = d2[o2]).addEventListener("touchstart", a), n2.addEventListener("click", a);
      }
    }
    function l(e2) {
      var t2, n2, d2 = g(b.temporaryFormId);
      d2 && h && (g(b.parentIdFieldId).value = "0", t2 = d2.textContent, d2.parentNode.replaceChild(h, d2), this.style.display = "none", n2 = (d2 = (d2 = g(b.commentReplyTitleId)) && d2.firstChild) && d2.nextSibling, d2 && d2.nodeType === Node.TEXT_NODE && t2 && (n2 && "A" === n2.nodeName && n2.id !== b.cancelReplyId && (n2.style.display = ""), d2.textContent = t2), e2.preventDefault());
    }
    function a(e2) {
      var t2 = g(b.commentReplyTitleId), t2 = t2 && t2.firstChild.textContent, n2 = this, d2 = m(n2, "belowelement"), o2 = m(n2, "commentid"), i = m(n2, "respondelement"), r2 = m(n2, "postid"), n2 = m(n2, "replyto") || t2;
      d2 && o2 && i && r2 && false === v.addComment.moveForm(d2, o2, i, r2, n2) && e2.preventDefault();
    }
    function o(e2) {
      for (var t2 = e2.length; t2--; ) if (e2[t2].addedNodes.length) return void d();
    }
    function m(e2, t2) {
      return n ? e2.dataset[t2] : e2.getAttribute("data-" + t2);
    }
    function g(e2) {
      return E.getElementById(e2);
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, false), { init: d, moveForm: function(e2, t2, n2, d2, o2) {
      var i, r2, l2, a2, m2, c, s, e2 = g(e2), n2 = (h = g(n2), g(b.parentIdFieldId)), y = g(b.postIdFieldId), p = g(b.commentReplyTitleId), u = (p = p && p.firstChild) && p.nextSibling;
      if (e2 && h && n2) {
        void 0 === o2 && (o2 = p && p.textContent), a2 = h, m2 = b.temporaryFormId, c = g(m2), s = (s = g(b.commentReplyTitleId)) ? s.firstChild.textContent : "", c || ((c = E.createElement("div")).id = m2, c.style.display = "none", c.textContent = s, a2.parentNode.insertBefore(c, a2)), d2 && y && (y.value = d2), n2.value = t2, I.style.display = "", e2.parentNode.insertBefore(h, e2.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o2), I.onclick = function() {
          return false;
        };
        try {
          for (var f = 0; f < C.elements.length; f++) if (i = C.elements[f], r2 = false, "getComputedStyle" in v ? l2 = v.getComputedStyle(i) : E.documentElement.currentStyle && (l2 = i.currentStyle), (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === l2.visibility) && (r2 = true), "hidden" !== i.type && !i.disabled && !r2) {
            i.focus();
            break;
          }
        } catch (e3) {
        }
        return false;
      }
    } };
  })(window);
})();
/*! This file is auto-generated */

;
(() => {
  // ns-hugo-imp:C:\Users\ZhuanZ\Documents\GitHub\hugomeme\themes\far\assets\ts\utils.ts
  var farallonHelper = class {
    getCookie(key) {
      if (0 < document.cookie.length) {
        var e = document.cookie.indexOf(key + "=");
        if (-1 != e) {
          e = e + key.length + 1;
          var n = document.cookie.indexOf(";", e);
          return -1 == n && (n = document.cookie.length), document.cookie.substring(e, n);
        }
      }
      return "";
    }
    setCookie(key, value, n) {
      var o = /* @__PURE__ */ new Date();
      o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
      var i = "expires=" + o.toUTCString();
      document.cookie = key + "=" + value + ";" + i + ";path=/";
    }
    showNotice(message, type = "success") {
      const html = `<div class="notice--wrapper">${message}</div>`;
      document.querySelector("body").insertAdjacentHTML("beforeend", html);
      document.querySelector(".notice--wrapper").classList.add("is-active");
      setTimeout(() => {
        document.querySelector(".notice--wrapper").remove();
      }, 3e3);
    }
  };

  // ns-hugo-imp:C:\Users\ZhuanZ\Documents\GitHub\hugomeme\themes\far\assets\ts\action.ts
  var farallonActions = class extends farallonHelper {
    singleSelector = ".fArticle";
    likeButtonSelctor = ".like-btn";
    articleSelector = ".fBlock--item";
    viewSelector = ".article--views";
    termSelector = ".fTerm--header";
    imageSelector = ".fFigure";
    imageLikeCountSelector = ".image--likes";
    actionDomain;
    text = "";
    likeButton = null;
    post_id;
    is_single = false;
    is_term = false;
    constructor(config) {
      super();
      this.singleSelector = config.singleSelector ?? this.singleSelector;
      this.likeButtonSelctor = config.likeButtonSelctor ?? this.likeButtonSelctor;
      this.articleSelector = config.articleSelector ?? this.articleSelector;
      this.viewSelector = config.viewSelector ?? this.viewSelector;
      this.termSelector = config.termSelector ?? this.termSelector;
      this.imageSelector = config.imageSelector ?? this.imageSelector;
      this.imageLikeCountSelector = config.imageLikeCountSelector ?? this.imageLikeCountSelector;
      this.actionDomain = config.actionDomain;
      this.text = config.text ?? this.text;
      this.is_single = document.querySelector(this.singleSelector) ? true : false;
      this.is_term = document.querySelector(this.termSelector) ? true : false;
      if (this.is_single) {
        const postSingle = document.querySelector(
          this.singleSelector
        );
        this.post_id = postSingle.dataset.id ?? "";
        this.initArticleLike();
        this.initArticleView();
        this.initImageLike();
      } else {
        this.initArticlesView();
      }
      if (this.is_term) {
        this.initTermView();
      }
    }
    initTermView() {
      const term = document.querySelector(this.termSelector);
      if (!term.dataset.id) return;
      fetch(this.actionDomain + "post/" + term.dataset.id + "/view", {
        method: "post"
      });
    }
    initArticleView() {
      fetch(this.actionDomain + "post/" + this.post_id + "/view", {
        method: "post"
      }).then((res) => {
        res.json().then((data) => {
          document.querySelector(this.viewSelector).innerText = data.views + this.text;
        });
      });
    }
    initArticlesView() {
      const articles = Array.from(
        document.querySelectorAll(this.articleSelector)
      );
      if (articles.length === 0) return;
      let ids = [];
      articles.forEach((article) => {
        return ids.push(article.dataset.id);
      });
      const idsString = ids.join(",");
      fetch(this.actionDomain + "post/views?post_ids=" + idsString).then(
        (res) => {
          res.json().then((data) => {
            const result = data.results;
            articles.forEach((article) => {
              if (!article.querySelector(this.viewSelector)) return;
              article.querySelector(
                this.viewSelector
              ).innerText = (result.find(
                (item) => item.post_id == article.dataset.id
              ) ? result.find(
                (item) => item.post_id == article.dataset.id
              ).views : 0) + this.text;
            });
          });
        }
      );
    }
    initImageLike() {
      const images = Array.from(
        document.querySelectorAll(this.imageSelector)
      );
      if (images.length === 0) return;
      let ids = [];
      images.forEach((image) => {
        return ids.push(image.dataset.id);
      });
      const idsString = ids.join(",");
      fetch(this.actionDomain + "post/views?post_ids=" + idsString).then(
        (res) => {
          res.json().then((data) => {
            const result = data.results;
            images.forEach((image) => {
              if (!image.querySelector(this.imageLikeCountSelector))
                return;
              image.querySelector(
                this.imageLikeCountSelector
              ).innerHTML = (result.find(
                (item) => item.post_id == image.dataset.id
              ) ? result.find(
                (item) => item.post_id == image.dataset.id
              ).views : 0) + `<svg class="fFigure--icon" viewBox="0 0 1024 1024" width="12" height="12">
                    <path d="M780.8 204.8c-83.2-44.8-179.2-19.2-243.2 44.8L512 275.2 486.4 249.6c-64-64-166.4-83.2-243.2-44.8C108.8 275.2 89.6 441.6 185.6 537.6l32 32 153.6 153.6 102.4 102.4c25.6 25.6 57.6 25.6 83.2 0l102.4-102.4 153.6-153.6 32-32C934.4 441.6 915.2 275.2 780.8 204.8z">
                    </path>
                </svg>`;
            });
          });
        }
      );
      images.forEach((image) => {
        image.addEventListener("click", () => {
          this.handleImageLike(image);
        });
      });
    }
    handleImageLike(image) {
      const imageId = image.dataset.id;
      if (!imageId) return;
      fetch(this.actionDomain + "post/" + imageId + "/view", {
        method: "post"
      }).then((res) => {
        res.json().then((data) => {
          this.showNotice("Thanks for your like");
          const countElement = image.querySelector(
            this.imageLikeCountSelector
          );
          if (countElement) {
            countElement.innerHTML = data.views + `<svg class="fFigure--icon" viewBox="0 0 1024 1024" width="12" height="12">
                    <path d="M780.8 204.8c-83.2-44.8-179.2-19.2-243.2 44.8L512 275.2 486.4 249.6c-64-64-166.4-83.2-243.2-44.8C108.8 275.2 89.6 441.6 185.6 537.6l32 32 153.6 153.6 102.4 102.4c25.6 25.6 57.6 25.6 83.2 0l102.4-102.4 153.6-153.6 32-32C934.4 441.6 915.2 275.2 780.8 204.8z">
                    </path>
                </svg>`;
          }
          this.setCookie("like_" + imageId, "1", 1);
        });
      });
      image.classList.add("is-active");
    }
    initArticleLike() {
      this.likeButton = document.querySelector(this.likeButtonSelctor);
      if (this.likeButton) {
        fetch(this.actionDomain + "post/" + this.post_id + "/like").then(
          (res) => {
            res.json().then((data) => {
              this.likeButton.querySelector(
                ".count"
              ).innerText = data.likes;
            });
          }
        );
        this.likeButton.addEventListener("click", () => {
          this.handleLike();
        });
        if (this.getCookie("like_" + this.post_id)) {
          this.likeButton.classList.add("is-active");
        }
      }
    }
    handleLike() {
      if (this.getCookie("like_" + this.post_id)) {
        return this.showNotice("You have already liked this post");
      }
      if (this.likeButton) {
        const url = this.actionDomain + "post/" + this.post_id + "/like";
        fetch(url, {
          method: "post"
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.showNotice("Thanks for your like");
          const countElement = this.likeButton?.querySelector(
            ".count"
          );
          if (countElement) {
            countElement.innerText = data.likes;
          }
          this.setCookie("like_" + this.post_id, "1", 1);
        });
        this.likeButton?.classList.add("is-active");
      }
    }
  };
  var action_default = farallonActions;

  // ns-hugo-imp:C:\Users\ZhuanZ\Documents\GitHub\hugomeme\themes\far\assets\ts\comment.ts
  var farallonComment = class extends farallonHelper {
    loading = false;
    post_id;
    total = 0;
    total_paged = 1;
    paged = 1;
    actionDomain;
    wrapper;
    dateFormater;
    constructor(config) {
      super();
      this.wrapper = config.wrapper ?? ".fComment--area";
      if (!document.querySelector(this.wrapper)) return;
      this.actionDomain = config.actionDomain;
      this.post_id = document.querySelector(this.wrapper).dataset.id;
      this.fetchComments();
      this.init();
    }
    renderComment(item, children = "", reply = true) {
      const replyHtml = reply ? `<span class="comment-reply-link u-cursorPointer" onclick="return addComment.moveForm('comment-${item.comment_ID}', '${item.comment_id}', 'respond', '${this.post_id}')"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" class=""><g><path d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"></path></g></svg></span>` : "";
      return `<li class="comment parent fComment--item" itemtype="http://schema.org/Comment" data-id="${item.comment_ID}" itemscope="" itemprop="comment" id="comment-${item.comment_ID}">
                    <div class="fComment--body">
                        <header class="fComment--header">
                            <div class="fComment--avatar">
                                <img src="${item.avatar}" class="avatar" alt="${item.comment_author}" width=42 height=42 />
                            </div>
                            <div class="fComment--meta">
                                ${item.comment_author}
                                <span class="dot"></span>
                                <div class="fComment--time" itemprop="datePublished" datetime="${item.comment_date}">${item.comment_date}</div>
                                ${replyHtml}
                            </div>
                        </header>
                        <div class="fComment--content" itemprop="description">
                            ${item.comment_content}
                        </div>
                    </div>
                    ${children}
                </li>`;
    }
    async fetchComments() {
      fetch(
        this.actionDomain + "comment/list?paged=" + this.paged + "&post_id=" + this.post_id
      ).then((res) => {
        res.json().then((data) => {
          const comments = data.results;
          this.total = data.total;
          this.total_paged = data.total_paged;
          if (this.total_paged > 1) {
            this.randerNav();
          }
          document.querySelector(
            ".fComment--heroTitle .count"
          ).innerHTML = this.total;
          const html = comments.map((item) => {
            let children = "";
            if (item.children) {
              children = `<ol class="children">${item.children.map((i) => {
                return this.renderComment(i);
              }).join("")}</ol>`;
            }
            return this.renderComment(item, children);
          }).join("");
          document.querySelector(".fComment--list").innerHTML = html;
        });
      });
    }
    randerNav() {
      const nextDisabled = this.paged == 1 ? "disabled" : "";
      const preDisabled = this.paged == this.total_paged ? "disabled" : "";
      const html = `<span class="cnav-item ${preDisabled}" data-action="pre">
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z" fill-rule="evenodd">
        </path></svg> Older Comments</span><span class="chartPage-verticalDivider"></span><span class="cnav-item ${nextDisabled}" data-action="next">Newer Comments
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fill-rule="evenodd">
        </path></svg>
        </span>`;
      document.querySelector(".commentnav").innerHTML = html;
      document.querySelectorAll(".cnav-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          if (item.classList.contains("disabled")) return;
          console.log(item);
          const action = item.attributes["data-action"].value;
          console.log(action);
          if (action == "pre") {
            this.paged += 1;
          } else {
            this.paged -= 1;
          }
          this.fetchComments();
        });
      });
    }
    init() {
      if (document.querySelector(".comment-form")) {
        if (this.getCookie("comment_author") != "") {
          document.querySelector("#author").value = this.getCookie("comment_author");
        }
        if (this.getCookie("comment_author_email") != "") {
          document.querySelector("#email").value = this.getCookie("comment_author_email");
        }
        if (this.getCookie("comment_author_url") != "") {
          document.querySelector("#url").value = this.getCookie("comment_author_url");
        }
        document.querySelector(".comment-form")?.addEventListener("submit", (e) => {
          e.preventDefault();
          if (this.loading) return;
          const form = document.querySelector(
            ".comment-form"
          );
          const formData = new FormData(form);
          const formDataObj = {};
          formData.forEach(
            (value, key) => formDataObj[key] = value
          );
          formDataObj["post_id"] = this.post_id;
          this.loading = true;
          fetch(this.actionDomain + "comment/insert", {
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: {
              "Content-Type": "application/json"
            }
          }).then((response) => {
            return response.json();
          }).then((data) => {
            this.loading = false;
            if (data.status != 200) {
              return this.showNotice(data.err, "error");
            }
            let a = document.getElementById(
              "cancel-comment-reply-link"
            ), i = document.getElementById("respond"), n = document.getElementById("wp-temp-form-div");
            const comment = data.data;
            const html = this.renderComment(comment, "", false);
            const parent_id = document.querySelector(
              "#comment_parent"
            )?.value;
            if (a) {
              a.style.display = "none";
              a.onclick = null;
            }
            document.getElementById(
              "comment_parent"
            ).value = "", n && i && n.parentNode && n.parentNode.removeChild(n);
            if (document.querySelector(".comment-body__fresh"))
              document.querySelector(".comment-body__fresh")?.classList.remove("comment-body__fresh");
            document.getElementById(
              "comment"
            ).value = "";
            if (parent_id != "") {
              document.querySelector("#comment-" + parent_id)?.insertAdjacentHTML(
                "beforeend",
                '<ol class="children">' + html + "</ol>"
              );
              console.log(parent_id);
            } else {
              if (document.querySelector(".no--comment")) {
                document.querySelector(".no--comment")?.remove();
              }
              document.querySelector(".commentlist")?.insertAdjacentHTML("beforeend", html);
            }
            const newComment = document.querySelector(
              `#comment-${comment.comment_id}`
            );
            if (newComment) {
              newComment.scrollIntoView({
                behavior: "smooth"
              });
            }
            this.setCookie(
              "comment_author",
              document.querySelector(
                "#author"
              ).value,
              1
            );
            this.setCookie(
              "comment_author_email",
              document.querySelector(
                "#email"
              ).value,
              1
            );
            this.setCookie(
              "comment_author_url",
              document.querySelector(
                "#url"
              ).value,
              1
            );
            this.showNotice("\u8BC4\u8BBA\u6210\u529F");
          });
        });
      }
    }
  };

  // ns-hugo-imp:C:\Users\ZhuanZ\Documents\GitHub\hugomeme\themes\far\assets\ts\db.ts
  var Douban = class {
    ver;
    type;
    finished;
    paged;
    genre_list;
    subjects;
    status;
    baseAPI;
    types;
    container;
    constructor(config) {
      this.container = config.container;
      this.types = config.types ?? [
        "movie",
        "book",
        "music",
        "game",
        "drama"
      ];
      this.baseAPI = config.baseAPI;
      this.ver = "1.0.6";
      this.type = "movie";
      this.status = "done";
      this.finished = false;
      this.paged = 1;
      this.genre_list = [
        {
          name: "\u5DF2\u770B",
          value: "done"
        },
        {
          name: "\u5728\u770B",
          value: "doing"
        },
        {
          name: "\u60F3\u770B",
          value: "mark"
        }
      ];
      this.subjects = [];
      this._create();
    }
    on(event, element, callback) {
      const nodeList = document.querySelectorAll(element);
      nodeList.forEach((item) => {
        item.addEventListener(event, callback);
      });
    }
    _handleGenreClick() {
      this.on("click", ".db--genreItem", (t) => {
        const self = t.currentTarget;
        if (self.classList.contains("is-active")) {
          return;
        }
        document.querySelector(".db--list").innerHTML = "";
        document.querySelector(".lds-ripple").classList.remove("u-hide");
        this.status = self.dataset.status || "";
        this._renderGenre();
        this.paged = 1;
        this.finished = false;
        this.subjects = [];
        this._fetchData();
      });
    }
    _reanderTypes() {
      document.querySelector(".db--nav").innerHTML = this.types.map((item) => {
        return `<span class="db--navItem JiEun${this.type == item ? " current" : ""}" data-type="${item}">${item}</span>`;
      }).join("");
      this._handleNavClick();
    }
    _renderGenre() {
      document.querySelector(".db--genres").innerHTML = this.genre_list.map((item) => {
        return `<span class="db--genreItem${this.status == item.value ? " is-active" : ""}" data-status="${item.value}">${item.name}</span>`;
      }).join("");
      this._handleGenreClick();
    }
    _fetchData() {
      const params = new URLSearchParams({
        paged: this.paged.toString(),
        type: this.type,
        status: this.status
      });
      fetch(this.baseAPI + "list?" + params.toString()).then((response) => response.json()).then((t) => {
        console.log(t.results);
        if (t.results.length) {
          if (document.querySelector(".db--list").classList.contains("db--list__card")) {
            this.subjects = [...this.subjects, ...t.results];
            this._randerDateTemplate();
          } else {
            this.subjects = [...this.subjects, ...t.results];
            this._randerListTemplate();
          }
          document.querySelector(".lds-ripple").classList.add("u-hide");
        } else {
          this.finished = true;
          document.querySelector(".lds-ripple").classList.add("u-hide");
        }
      });
    }
    _randerDateTemplate() {
      const result = this.subjects.reduce((result2, item) => {
        const date = new Date(item.create_time);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const key = `${year}-${month.toString().padStart(2, "0")}`;
        if (Object.prototype.hasOwnProperty.call(result2, key)) {
          result2[key].push(item);
        } else {
          result2[key] = [item];
        }
        return result2;
      }, {});
      let html = ``;
      for (let key in result) {
        const date = key.split("-");
        html += `<div class="db--listBydate"><div class="db--titleDate"><div class="db--titleDate__day">${date[1]}</div><div class="db--titleDate__month">${date[0]}</div></div><div class="db--dateList__card">`;
        html += result[key].map((movie) => {
          return `<div class="db--item${this.type == "music" ? " db--item__music" : ""}"><img src="${movie.poster}" referrerpolicy="no-referrer" class="db--image"><div class="db--score ">${movie.douban_score > 0 ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>' + movie.douban_score : ""}${movie.year > 0 ? " \xB7 " + movie.year : ""}</div><div class="db--title"><a href="${movie.link}" target="_blank">${movie.name}</a></div></div>`;
        }).join("");
        html += `</div></div>`;
      }
      document.querySelector(".db--list").innerHTML = html;
    }
    _randerListTemplate() {
      document.querySelector(".db--list").innerHTML = this.subjects.map((item) => {
        return `<div class="db--item"><img src="${item.poster}" referrerpolicy="no-referrer" class="db--image"><div class="ipc-signpost ">${item.create_time}</div><div class="db--score ">${item.douban_score ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>' + item.douban_score : ""}${item.year ? " \xB7 " + item.year : ""}</div><div class="db--title"><a href="${item.link}" target="_blank">${item.name}</a></div>
                </div>
                </div>`;
      }).join("");
    }
    _handleScroll() {
      window.addEventListener("scroll", () => {
        var t = window.scrollY || window.pageYOffset;
        const moreElement = document.querySelector(
          ".block-more"
        );
        if (moreElement.offsetTop + -window.innerHeight < t && document.querySelector(".lds-ripple").classList.contains("u-hide") && !this.finished) {
          document.querySelector(".lds-ripple").classList.remove("u-hide");
          this.paged++;
          this._fetchData();
        }
      });
    }
    _handleNavClick() {
      this.on("click", ".db--navItem", (t) => {
        const self = t.currentTarget;
        if (self.classList.contains("current")) return;
        this.status = "done";
        this.type = self.dataset.type;
        this._renderGenre();
        document.querySelector(".db--list").innerHTML = "";
        document.querySelector(".lds-ripple").classList.remove("u-hide");
        document.querySelector(".db--navItem.current").classList.remove("current");
        self.classList.add("current");
        this.paged = 1;
        this.finished = false;
        this.subjects = [];
        this._fetchData();
      });
    }
    _create() {
      if (document.querySelector(".db--container")) {
        const container = document.querySelector(
          this.container
        );
        if (!container) return;
        container.innerHTML = `<nav class="db--nav">
            </nav>
            <div class="db--genres">
            </div>
            <div class="db--list db--list__card">
            </div>
            <div class="block-more block-more__centered">
                <div class="lds-ripple">
                </div>
            </div>`;
        this._renderGenre();
        this._reanderTypes();
        this._fetchData();
        this._handleScroll();
      }
      if (document.querySelector(".js-db")) {
        document.querySelectorAll(".js-db").forEach((item) => {
          const db = item;
          const id = db.dataset.id;
          const type = db.dataset.type;
          const nodeParent = db.parentNode;
          fetch(this.baseAPI + `${type}/${id}`).then((response) => {
            response.json().then((t) => {
              if (t.data) {
                const data = t.data;
                const node = document.createElement("div");
                node.classList.add("doulist-item");
                node.innerHTML = `<div class="doulist-subject">
                            <div class="doulist-post"><img decoding="async" referrerpolicy="no-referrer" src="${data.poster}"></div>
                            <div class="doulist-content">
                            <div class="doulist-title"><a href="${data.link}" class="cute" target="_blank" rel="external nofollow">${data.name}</a></div>
                            <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:55%"></span></span><span class="rating_nums"> ${data.douban_score} </span></div>
                            <div class="abstract">${data.card_subtitle}</div>
                            </div>
                            </div>`;
                nodeParent.replaceWith(node);
              }
            });
          });
        });
      }
      if (document.querySelector(".db--collection")) {
        document.querySelectorAll(".db--collection").forEach((item) => {
          this._fetchCollection(item);
        });
      }
    }
    _fetchCollection(item) {
      const type = item.dataset.style ? item.dataset.style : "card";
      fetch(
        this.baseAPI + "/list?type=" + item.dataset.type + "&paged=1&start_time=" + item.dataset.start + "&end_time=" + item.dataset.end
      ).then((response) => response.json()).then((t) => {
        if (t.length) {
          if (type == "card") {
            item.innerHTML += t.map((movie) => {
              return `<div class="doulist-item">
                            <div class="doulist-subject">
                            <div class="db--viewTime ">Marked ${movie.create_time}</div>
                            <div class="doulist-post"><img referrerpolicy="no-referrer" src="${movie.poster}"></div><div class="doulist-content"><div class="doulist-title"><a href="${movie.link}" class="cute" target="_blank" rel="external nofollow">${movie.name}</a></div><div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${movie.douban_score}</span></div><div class="abstract">${movie.card_subtitle}</div></div></div></div>`;
            }).join("");
          } else {
            const result = t.reduce(
              (result2, item2) => {
                if (Object.prototype.hasOwnProperty.call(
                  result2,
                  item2.create_time
                )) {
                  result2[item2.create_time].push(item2);
                } else {
                  result2[item2.create_time] = [item2];
                }
                return result2;
              },
              {}
            );
            let html = ``;
            for (let key in result) {
              html += `<div class="db--date">${key}</div><div class="db--dateList">`;
              html += result[key].map((movie) => {
                return `<div class="db--card__list"">
                                    <img referrerpolicy="no-referrer" src="${movie.poster}">
                                    <div>
                                    <div class="title"><a href="${movie.link}" class="cute" target="_blank" rel="external nofollow">${movie.name}</a></div>
                                    <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${movie.douban_score}</span></div>
                                    ${movie.remark || movie.card_subtitle}
                                    </div>
                                    </div>`;
              }).join("");
              html += `</div>`;
            }
            item.innerHTML = html;
          }
        }
      });
    }
  };
  var db_default = Douban;

  // <stdin>
  var farallonBase = class extends farallonHelper {
    is_single = false;
    post_id = 0;
    is_archive = false;
    VERSION = "0.7.7";
    like_btn;
    selctor = ".like-btn";
    actionDomain = window.actionDomain;
    constructor() {
      super();
      this.initCopyright();
      this.initThemeSwitch();
      this.initBack2Top();
      this.initSearch();
    }
    initSearch() {
      document.querySelector('[data-action="show-search"]').addEventListener("click", () => {
        document.querySelector(".fHeader--content .inner").classList.toggle("search--active");
      });
    }
    initBack2Top() {
      if (document.querySelector(".fBackTop")) {
        const backToTop = document.querySelector(
          ".fBackTop"
        );
        window.addEventListener("scroll", () => {
          const t = window.scrollY || window.pageYOffset;
          t > 200 ? backToTop.classList.add("is-active") : backToTop.classList.remove("is-active");
        });
        backToTop.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    }
    initCopyright() {
      const copyright = `<div class="fFooter--info">
        Theme <a href="https://fatesinger.com/101971" target="_blank">farallon</a> by bigfa / version ${this.VERSION}
    </div>`;
      document.querySelector(".fFooter--content").insertAdjacentHTML("afterend", copyright);
      document.querySelector(".icon--copryrights").addEventListener("click", () => {
        document.querySelector(".fFooter--info").classList.toggle("active");
      });
    }
    initThemeSwitch() {
      const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "auto";
      const html = `<div class="fThemeSwitcher">
        <span class="${theme == "dark" ? "is-active" : ""}" data-action-value="dark">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
        </span>
        <span class="${theme == "light" ? "is-active" : ""}" data-action-value="light">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="M4.22 4.22l1.42 1.42"></path>
                <path d="M18.36 18.36l1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="M4.22 19.78l1.42-1.42"></path>
                <path d="M18.36 5.64l1.42-1.42"></path>
            </svg>
        </span>
        <span class="${theme == "auto" ? "is-active" : ""}"  data-action-value="auto">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
            </svg>
        </span>
    </div>`;
      document.querySelector("body").insertAdjacentHTML("beforeend", html);
      document.querySelectorAll(".fThemeSwitcher span").forEach((item) => {
        item.addEventListener("click", () => {
          if (item.classList.contains("is-active")) return;
          document.querySelectorAll(".fThemeSwitcher span").forEach((item2) => {
            item2.classList.remove("is-active");
          });
          if (item.dataset.actionValue == "dark") {
            localStorage.setItem("theme", "dark");
            document.querySelector("body").classList.remove("auto");
            document.querySelector("body").classList.add("dark");
            item.classList.add("is-active");
          } else if (item.dataset.actionValue == "light") {
            localStorage.setItem("theme", "light");
            document.querySelector("body").classList.remove("auto");
            document.querySelector("body").classList.remove("dark");
            item.classList.add("is-active");
          } else if (item.dataset.actionValue == "auto") {
            localStorage.setItem("theme", "auto");
            document.querySelector("body").classList.remove("dark");
            document.querySelector("body").classList.add("auto");
            item.classList.add("is-active");
          }
        });
      });
    }
  };
  new action_default({
    singleSelector: ".fArticle",
    articleSelector: ".fBlock--item,.fCard--item",
    termSelector: ".fTerm--header",
    likeButtonSelctor: ".like-btn",
    actionDomain: window.actionDomain
  });
  new farallonBase();
  new farallonComment({
    actionDomain: window.actionDomain,
    wrapper: ".fComment--area"
  });
  new db_default({
    baseAPI: window.dbAPIBase,
    container: ".db--container"
  });
})();
