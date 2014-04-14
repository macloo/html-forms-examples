Exercises with These Files
==========================

This document explains how to use these files to learn about HTML forms.

First, open [the index page](http://macloo.github.io/html-forms-examples/index.html) in a new browser tab. Explore. Try the forms. Fill them and submit them.

Then download all of the files. On [the main GitHub page for this repo](https://github.com/macloo/html-forms-examples), look on the right side for the **Download ZIP** button.

In following the instructions below, you'll use a text editor program such as TextWrangler or Notepad++. You should have some experience with HTML and CSS, and experience with jQuery is recommended. 

##Basic instructions

Scripts are unique to each HTML page, so look in the **/scripts/** folder for a filename that matches the filename of the HTML. For example, **checkboxes.html** and **checkboxes.js.**

The CSS for the form elements is in **styles/form.css.** All the other CSS is in **styles/styles.css.** Usually you will not need to look at the CSS in these exercises.

The **jquery.min.js** file is included so you can run everything offline if need be.

##form1

These files (**form1.html** and **form1.js**) deal with text fields. First, play with [the live page](http://macloo.github.io/html-forms-examples/form1.html). Then look at the HTML, flipping between the HTML file in your text editor and the live page in your browser. Try to change the text inside the four fields. Click **Submit.** Reset the form, click **Submit** again.

Now look at the code in **form1.js** -- start by looking at line 13. The key there is `.blur()` -- read the text inside quotes (line 14), go back to the live page, figure it out.

Look at lines 17 and 18. Same idea, but now with `.focus()` -- see how it works by playing on the live page.

Lines 21 to 37 control what happens when you click **Submit.** This is all jQuery. Don't change what's in lines 21, 23 and 37, but you can edit what's in between to experiment.

**Exercise:** In the HTML, a a new text field in the HTML, after the other text fields, but before the submit code. Follow the pattern of the four original text fields, but be sure to change `id=""`, `name=""`, and `value=""` in your new code element. Save the HTML file in your text editor and then test it in your browser.


##License

You are free to use and/or modify anything here.