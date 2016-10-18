---
layout: post
title:  Tutorial Website for College of Education
blurb: A tutorial website aimed to aid faculty and staff.
date:   2015-12-17 16:49:18 -0700
categories: jekyll
type: Client
lastUpdate: 2016-10-14
status: "completed"
---

## Overview

A tutorial website built for the College of Education at the University of Hawaii. Aimed towards aiding faculty and staff with technology related questions. This site was built using Jekyll, the static site generator.

<hr />

## Project

Assist was a project handed over to me while working at [DCDC](https://dcdc.coe.hawaii.edu/) over at the University of Hawaii at Manoa. Initially the website was developed about 40% in Wordpress, but because of the simplicity of the overall project, I decided to covert it to a Jekyll generated website. I work alongside other teammates and so I cannot take credit for 100% of the design or development.

<a href="https://assist.coe.hawaii.edu/">
![]({{ site.baseurl }}/images/post-images/2015-12-17-coe-assist-website/img00.png)
View site</a>

### 1. Sitemap

Assist already had a sort of structure before I started working on it, and so I went with it and created a sitemap that helped simplify it even more. It consisted of a main page listing tutorial posts and clicking on an individual post would redirect you to the tutorial from which you could follow the steps. You can see the website structure from the image below:

![]({{ site.baseurl }}/images/post-images/2015-12-17-coe-assist-website/img01.png)

As you can see the overall site was not complex at all. This is one of the reasons why using something heavy like Wordpress did not make sense to me.

### 2. Research

From the sitemap, I moved onto similar websites doing the same thing. Generally speaking, this site was a basic Q&A type of site and so that was the category that I stuck to when researching. Eventually, my teammates found a site that they felt fit our needs. The site was called [Jisc](https://www.jisc.ac.uk/guides).

<a href="https://www.jisc.ac.uk/guides">
![]({{ site.baseurl }}/images/post-images/2015-12-17-coe-assist-website/img02.png)
</a>

### 3. Search Functionality

The true difficulty with the site was setting up a searching functionality. Because Jekyll does not use a database, we needed to tweak a couple things.

1. First being that we needed to generate a JSON file of all posts using Jekyll's 'front-matter' (yaml).
2. From there, we decided to use [lunr](http://lunrjs.com/), which provides simple full-text searching.
3. Then we created 3 other js files ([set-query.js](https://github.com/uhm-coe/assist/blob/master/assets/js/set-query.js), [search.js](https://github.com/uhm-coe/assist/blob/master/assets/js/search.js), [results.js](https://github.com/uhm-coe/assist/blob/master/assets/js/results.js))

In summary, set-query.js was an Immediately Invoked Function Expression (IIFE) that set up a Query object which would be able to be accessed throughout the site. This was actually my first time creating an IIFE, so this project was fun and interesting to work with. Search.js was used to create and submit a new Query object. Results.js worked with lunr.js to generate and present the results.

### 4. Layout/Design

![]({{ site.baseurl }}/images/post-images/2015-12-17-coe-assist-website/img03.png)

The landing page consisted of:

1. Easy to access search bar.
2. Easy to access side bar.

Some users only know an idea of what they want to look for, and so that's why we added a search bar. And some know somewhat what they need, which is why we added the sidebar. Having both options helps in getting the user to the answer that they are looking for as quickly as possible.

![]({{ site.baseurl }}/images/post-images/2015-12-17-coe-assist-website/img04.png)

An single post tutorial consisted of:

1. A search bar on top, again in case that article that showed up was not the one they were looking for.
2. A sidebar on the side, again in case the article that showed up was not the one they were looking for.
3. Information on the post to give them a more detailed idea which would help them decide whether it was the post they needed.

![]({{ site.baseurl }}/images/post-images/2015-12-17-coe-assist-website/img05.png)

Following down the post a user would see:

1. A chronological order of what steps needed to be done to finish/do a task.
2. Images to accompany each step which could be zoomed in when clicked on.

## Conclusion

In the end, creating Assist was a fun experience. I learned a lot about how Jekyll worked (this was the first time using it) and learned a lot of cool new tricks with JavaScript. If you want to look more into the project there is documentation on code and how the site works on the [GitHub Repo](https://github.com/uhm-coe/assist) and [GitHub Wiki](https://github.com/uhm-coe/assist/wiki).

## Disclaimer

I do not take credit for all of the project in it's design and development. There were others involved in the project which you can see if you check out the Github Repo. I currently no longer work on the maintenance of the Assist site.
