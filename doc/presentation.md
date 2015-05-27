
<style type="text/css">

  ul, li {
    line-height:    125%;
  }

  li {
    padding-top:    0.5em;
  }

  .remark-slide-container:first-child .remark-slide-number,
  .remark-slide-container:nth-child(2) .remark-slide-number,
  .remark-slide-container:last-child .remark-slide-number {
    visibility:     hidden;
  }

  .remark-slide-content .footer {
    position:       absolute;
    bottom:         12px;
    left:           20px;
    opacity:        0.5;
  }

  .remark-slide-content .footer img {
    vertical-align: middle;
  }

  .hidden-comment {
    display:        none;
  }

</style>

class: center, middle

.hidden-comment[<br><br><br><br>**If you are reading this**, you are looking at the *source*! [Use
Remarkise](https://tripu.github.io/remark/remarkise?url=https%3A%2F%2Frawgit.com%2Fw3c%2Fechidna%2Ftripu%2Fmiscellanea%2Fdoc%2Fpresentation.md)
instead] to **see the presentation in interactive slides**.<br><br><br><br>]

<!--······························································································································
····  If you aren't seeing this as an interactive presentation, in slides, open it with Remarkise:                            ····
····  https://tripu.github.io/remark/remarkise?url=https%3A%2F%2Frawgit.com%2Fw3c%2Fechidna%2Ftripu%2Fmiscellanea%2Fdoc%2Fpresentation.md  ····
·······························································································································-->

# New publication workflow

.center[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo.png)]

---

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png) New publication workflow]

# How publishing happens today

* Editor pings team contact.
* Team contact sometimes copies doc to some new location.

.center[Editor&nbsp;&nbsp;&nbsp;&nbsp;&harr;&nbsp;&nbsp;&nbsp;&nbsp;Team contact&nbsp;&nbsp;&nbsp;&nbsp;&harr;&nbsp;&nbsp;&nbsp;&nbsp;Webmaster]

---

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png) New publication workflow]

# Problems

* Webmaster and others kept busy with repetitive tasks.
* Back and forth between roles.
* Releasing often is effectively discouraged (it takes effort, and time).
*

---

# The solution

Let the robots steal our jobs!

.center[![Robot](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/robots18.png)]

---

# In an ideal world: *automatic* publication

1. Editor goes to [`https://w3.org/publish/`](https://w3.org/publish/).
  1. After authentication, system knows what specs are associated to editor.
  2. Editor selects one among all those specs.
2. System infers:
  1. Base URL of the spec.
  2. Type of spec.
  2. Metadata: WG, other editors, etc.
3. Validation:
  1. System runs pubrules checker in the background.
  2. And presents comprehensive information about result of validation.
  3. &hellip;including info about errors, with pointers to specific pubrules.
4. Repeat steps 1 through 3 until there are no errors.
5. Editor confirms publication.
6. Spec published under `TR/`.

---

# In an ideal world: *manual* publication

1. Editor goes to `https://w3.org/publish/`.
  1. After authentication, system knows what specs are associated to editor.
  2. Editor selects one among all those specs.
2. System infers:
  1. Base URL of the spec.
  2. Type of spec.
  2. Metadata: WG, other editors, etc.
3. Validation:
  1. System runs pubrules checker in the background.
  2. And presents comprehensive information about result of validation.
  3. &hellip;including info about errors, with pointers to specific pubrules.
4. Repeat steps 1 through 3 until there are no errors.
5. Editor confirms publication.
6. Spec published under `TR/`.

---

# Where we are

&#10007; `https://w3.org/publish/`.

&#10003; HTTP Endpoint.

---

# Challenges

* If the system achieves the goal of streamlining the process and freeing up people, folks may publish *very* often, and `TR/` will become *massive*.
* Exceptions.
* Exceptions.
* Exceptions.

---

# *&ldquo;team contact copies doc to temporary space&hellip;&rdquo;*

Some staff contacts copy.

Those locations are non-public, intermediate copies, *but not temporary*, ie stuff stays there.

This is considered bad practice, for a number of reasons.

---

# What is this?

---

# I'm team contact. How is this going to make my life easier?

* Editors in your groups can publish themselves *without your intervention*.
* Even if you help them, you'll save a lot of time.

---

# What is this?

---

# The components

* Echidna
* Specberus (ˈspɛk bər əs) *n. new* pubrules *automatic checker and documentation tool.*

*Specberus* is expected to replace the [current pubrules tool](http://www.w3.org/2005/07/pubrules) in the near future.

---

# Questions

---

# Credits

* Icons from [flaticon](http://www.flaticon.com/); made by [](), [](), [](), [](), [](), [](), []().
* Thanks to Systeam and others for reviewing and contributing.

<div>Icons made by <a href="http://www.flaticon.com/authors/plainicon" title="Plainicon">Plainicon</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>

