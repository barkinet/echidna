
<style type="text/css">

  h1 {
    margin-top:       0;
  }

  ul, li {
    line-height:      125%;
  }

  li {
    padding-top:      0.5em;
  }

  .remark-slide-container:first-child .remark-slide-number {
    visibility:       hidden;
  }

  .remark-slide-number,
  .remark-slide-content .footer {
    position:         absolute;
    bottom:           0.5rem;
    font-size:        67%;
    line-height:      24px;
    opacity:          1;
  }

  .remark-slide-number {
    right:            1rem;
  }

  .remark-slide-content .footer {
    left:             1rem;
  }

  .remark-slide-content .footer img {
    vertical-align:   middle;
    max-height:       24px;
    margin-right:     0.5rem;
  }

  .hidden-comment {
    display:          none;
  }

  .half img {
    width:            50%;
  }

  .comment {
    background-color: #ffffc0;
  }

  .green {
    color:            #00c000;
  }

  .nb-call {
    color:            #800080;
  }

  .nb {
    font-size:        67%;
	text-align        right;
	vertical-align:   bottom;
    color:            #800080;
  }

  code {
    color:            #ff0000;
  }

  a code {
    color:            inherit;
  }

</style>

name: comment
layout: true
class: comment

---

layout: false
class: center, middle

.hidden-comment[<br><br><br><br>**If you are reading this**, you are looking at the *source*! <br> [Use
Remarkise instead](https://tripu.github.io/remark/remarkise?url=https%3A%2F%2Frawgit.com%2Fw3c%2Fechidna%2Ftripu%2Fmiscellanea%2Fdoc%2Fpresentation.md)
to **see the presentation in interactive slides**.<br><br><br><br>]

<!--······························································································································
····  If you aren't seeing this as an interactive presentation, in slides, open it with Remarkise:                            ····
····  https://tripu.github.io/remark/remarkise?url=https%3A%2F%2Frawgit.com%2Fw3c%2Fechidna%2Ftripu%2Fmiscellanea%2Fdoc%2Fpresentation.md  ····
·······························································································································-->

# The new publication workflow

## *How is that going to make my life easier?*

<br><br><br><br>

.center.half[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo.png)]

<br><br>

.center[4 June 2015]

---

# How publishing happens today .nb-call[\*]

1. Editor pings team contact
2. Team contact downloads all files; maybe uploads to some intermediate location
3. Team contact pings webmaster
4. Webmaster finds issues in spec (most likely); tells team contact
5. Team contact fixes problem, or passes the ball to the editor
6. Iterate between steps 1 and 5 until things look OK
7. Webmaster publishes in a semi-automatic way; informs other parts

.center[Editor&nbsp;&nbsp;&nbsp;&nbsp;&harr;&nbsp;&nbsp;&nbsp;&nbsp;Team contact&nbsp;&nbsp;&nbsp;&nbsp;&harr;&nbsp;&nbsp;&nbsp;&nbsp;Webmaster]

.nb[\* Your mileage may vary.]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# About those intermediate locations

* Some staff contacts copy specs to be published to W3C space (or somewhere else)  
eg [`http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/`](http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/)
* Those locations are non-announced, intermediate copies, *but not temporary*, ie stuff stays there forever
* This is considered a bad practice (or at least it will be now)

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

template: comment

How accurate was that description?

What do other editors and team contacts do? What tools or steps?

What other aspects will be improved by Echidna?

---

# Problems

* Webmaster and other in team kept busy with repetitive tasks
* Tedious, asynchronous back and forth between roles
* Releasing often is effectively discouraged (it takes effort, and time)
* Validating specs before publication is difficult
* `/TR` contains unnecessary copies of specs,  
eg [`http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/`](http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/)
* Publication depends on all actors being available,  
ie, webmaster and systeam are busy &rarr; publications have to wait

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# In an ideal world: automatic publication

1. .green[Editor pushes changes, eg to **GitHub**]
2. .green[CI (&ldquo;continuous integration&rdquo;) system, eg **Travis CI**, kicks in]
3. .green[CI system sends *shortname* to Echidna, plus an *auth token*]
4. Echidna infers:
  1. Base URL of the spec
  2. Type of spec
  2. Metadata: WG, editors, etc
5. Validation:
  1. Echidna runs pubrules checker in the background
  2. Presents on the page comprehensive information about validation
  3. &hellip;including info about errors, with pointers to specific pubrules
6. If there are errors, edit spec and go to step 1
7. Otherwise, \[publication, @todo\]
8. Spec published under `/TR`; e-mail notifications sent

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# In an ideal world: &ldquo;triggered&rdquo; publication

1. .green[Editor goes to `https://w3.org/publish/` (basic auth, W3C credentials)]
2. .green[Echidna finds out what specs are associated to him/her]
3. .green[Editor selects one among those specs (a *shortname*) and hits *publish*]
4. Echidna infers:
  1. Base URL of the spec
  2. Type of spec
  2. Metadata: WG, other editors, etc
5. Validation:
  1. Echidna runs pubrules checker in the background
  2. Sends back comprehensive information about validation
  3. &hellip;including info about errors, with pointers to specific pubrules
6. If there are errors, edit spec and go to step 1.3
7. Editor confirms publication \[@todo\]
8. Spec published under `/TR`; e-mail notifications sent

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Advantages

* Webmaster and others freed for more productive work
* No more asynchronous back and forth between actors
* Releasing very often becomes possible (but see *challenges*)
* Better validation
* No more intermediate copies
* Publish any day, any time (barring moratoria)

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Where we are

&#10007; `https://w3.org/publish/`.

&#10003; HTTP Endpoint: [`https://labs.w3.org/echidna/api/version`](https://labs.w3.org/echidna/api/version)

&#10003; Web UI (WIP): [branch `tripu/web-interface`](https://github.com/w3c/echidna/tree/tripu/web-interface)

\[@todo: add more details, eg interactions w/ CVS, DB, etc\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Challenges

* If the system achieves the goal of streamlining the process and freeing up people, folks may publish *very* often, and `TR/` will become *massive*
* Exceptions
* Exceptions
* Exceptions

\[@todo: add more issues\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# I'm team contact. How is this going to make my life easier?

* Editors in your groups can publish themselves *without your intervention*
* Even if you help them, you'll save a lot of time

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# How to publish (as a team contact)

1. If the spec is already at a publicly-accessible URL, do *not* copy it elsewhere

\[@todo\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# How to publish (as an editor/chair)

\[@todo\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

template: comment

What is the role of *chairs* here? How are we helping them?

---

# The process (1): for now

* Bare HTTP endpoint
* Use with `curl` (command line) or typing calls on your browser's location bar

\[@todo\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# The process (2): hopefully soon

* Reference UI, developed in-house  
eg `https://w3.org/publish/`
* Work is ongoing: [branch `tripu/web-interface`](https://github.com/w3c/echidna/tree/tripu/web-interface)


\[@todo\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# The process (3): ultimately

* Several user-contributed clients, cattering to different needs

\[@todo\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# References

\[@todo: links to wiki, issues, mail archive, etc\]

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# The pieces

* Echidna
* Specberus (ˈspɛk bər əs) *n. new* pubrules *automatic checker and documentation tool.*

*Specberus* is expected to replace the [current pubrules tool](http://www.w3.org/2005/07/pubrules) in the near future.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

template: comment

Demo here?

Idea:

* Tweak haproxy to have  
`https://labs.w3.org/echidna-dev/`  
point to `orthrus`
* Change `config.js` in `orthrus` so that it doesn't really publish nor install
* Have it &ldquo;installing&rdquo; WDs on eg `https://www.w3.org/Team/Antonio/TR/`

```javascript
'publish': new Job(),
'tr-install': new Job(),
'update-tr-shortlink': new Job()
```

```javascript
global.W3C_PUBSYSTEM_URL = 'http://localhost:3001/publish';
global.TR_INSTALL_CMD = 'mkdir -p $dest && cp -R $source $dest';
global.UPDATE_TR_SHORTLINK_CMD = '#';
global.SENDMAIL = './sendmail.sh';
global.MAILING_LIST = 'foobar@w3.org';
```

Feasible? Worth it?

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Questions

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Credits

* Icons from [flaticon](http://www.flaticon.com/); made by [](), [](), [](), [](), [](), [](), []().
* Thanks to Systeam and others for reviewing and contributing.

<div>Icons made by <a href="http://www.flaticon.com/authors/plainicon" title="Plainicon">Plainicon</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

