const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\templates\\post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\templates\\tag.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\contact.js"))),
  "component---src-pages-credits-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\credits.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\projects.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\thanks.js"))),
  "component---src-pages-uses-js": hot(preferDefault(require("C:\\sites\\JasonCoryAlvernaz\\src\\pages\\uses.js")))
}

