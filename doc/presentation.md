
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

  code {
    color:            #ff0000;
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

# How publishing happens today

1. Editor pings team contact
2. Team contact downloads all files; maybe uploads to some intermediate location
3. Team contact pings webmaster
4. Webmaster finds issues in spec (most likely); tells team contact
5. Team contact fixes problem, or informs editor
6. Iterate from through steps 1 to 5 until things look good.
7. Webmaster publishes in a semi-automatic way; informs other parts

.center[Editor&nbsp;&nbsp;&nbsp;&nbsp;&harr;&nbsp;&nbsp;&nbsp;&nbsp;Team contact&nbsp;&nbsp;&nbsp;&nbsp;&harr;&nbsp;&nbsp;&nbsp;&nbsp;Webmaster]

Your mileage may vary.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Problems

* Webmaster and others kept busy with repetitive tasks
* Back and forth between roles
* Releasing often is effectively discouraged (it takes effort, and time)
* Validation should be easier
* Publication should be fully automated
* `TR/` full of unused, intermediate copies of specs, eg  
[`http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/`](http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/)
* Publication depends on all actors being available,  
ie, webmaster and systeam busy &rarr; publications have to wait

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# In an ideal world: automatic publication

1. Editor pushes changes, eg to **GitHub**
2. CI (&ldquo;continuous integration&rdquo;) system kicks in, eg **Travis CI**
3. CI system sends *shortname* to Echidna, plus an auth token
4. .green[Echidna infers:]
  1. .green[Base URL of the spec]
  2. .green[Type of spec]
  2. .green[Metadata: WG, other editors, etc]
5. .green[Validation:]
  1. .green[Echidna runs pubrules checker in the background]
  2. .green[And presents comprehensive information about result of validation]
  3. .green[&hellip;including info about errors, with pointers to specific pubrules]
6.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# In an ideal world: &ldquo;manual&rdquo; publication

1. Editor goes to `https://w3.org/publish/` (basic auth, W3C credentials)
  1. Echidna knows what specs are associated to him/her
  2. Editor selects one among all those specs (a *shortname*)
2. .green[Echidna infers:]
  1. .green[Base URL of the spec]
  2. .green[Type of spec]
  2. .green[Metadata: WG, other editors, etc]
3. .green[Validation:]
  1. .green[Echidna runs pubrules checker in the background]
  2. .green[And presents comprehensive information about result of validation]
  3. .green[&hellip;including info about errors, with pointers to specific pubrules]
4. While there are errors, edit spec and go back to step 3
5. Editor confirms publication
6. Spec published under `TR`; e-mail notifications sent

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Advantages

* Webmaster and others freed for
* No back and forth between roles
* Releasing very often possible (see *challenges*)
* Validation becomes easy
* Publication should be fully automated
* `TR/` full of unused, intermediate copies of specs, eg  
[`http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/`](http://www.w3.org/TR/2015/WD-xquery-update-30-20150219/)
* Publication depends on all actors being available,  
ie, webmaster and systeam busy &rarr; publications have to wait

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Where we are

&#10007; `https://w3.org/publish/`.

&#10003; HTTP Endpoint.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# Challenges

* If the system achieves the goal of streamlining the process and freeing up people, folks may publish *very* often, and `TR/` will become *massive*
* Exceptions
* Exceptions
* Exceptions

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# *&ldquo;team contact copies doc to temporary space&hellip;&rdquo;*

Some staff contacts copy.

Those locations are non-public, intermediate copies, *but not temporary*, ie stuff stays there.

This is considered bad practice, for a number of reasons.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# I'm team contact. How is this going to make my life easier?

* Editors in your groups can publish themselves *without your intervention*.
* Even if you help them, you'll save a lot of time.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

# The components

* Echidna
* Specberus (ˈspɛk bər əs) *n. new* pubrules *automatic checker and documentation tool.*

*Specberus* is expected to replace the [current pubrules tool](http://www.w3.org/2005/07/pubrules) in the near future.

.footer[![Logo](https://raw.githubusercontent.com/w3c/echidna/tripu/miscellanea/doc/w3c-labs-logo-small.png)New publication workflow]

---

template: comment

# Demo here?

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

