
Q1. Mention the working of Internet Website in Terms of Front-end & Back-end Divisions.

ANS 1 - An internet website typically consists of two main divisions: 
the front-end and the back-end. 
Front-end:
The front-end refers to the user-facing part of a website. It involves the design, layout, and interact with when they visit a website. Technologies used in front-end development include:
HTML (Hypertext Markup Language): It structures the content of the website, defining elements such as headings, paragraphs, images, and links.

CSS (Cascading Style Sheets): It controls the presentation and styling of HTML elements, determining their colors, fonts, layouts, and overall visual appearance.

JavaScript: It adds interactivity and dynamic behavior to the website, enabling features like animations, form validation, and real-time updates.

Back-end:
The back-end refers to the server-side of a website that handles the behind-the-scenes operations and data processing. It involves managing databases, handling user authentication, and processing requests from the front-end. Technologies used in back-end development include:

Programming languages: Python, Ruby, Java, PHP, or JavaScript (Node.js).
Web frameworks: Django (Python), Ruby on Rails (Ruby), Spring (Java), Laravel (PHP), or Express.js (JavaScript) 

Databases: Back-end developers work with databases like MySQL, PostgreSQL, MongoDB to store and retrieve data.

APIs (Application Programming Interfaces): APIs define how different software components can interact with each other. They allow the front-end to request data from the back-end or send data for processing.


Q2. What are tags in HTML? Explain the each category of tag with an Example.

In HTML (Hypertext Markup Language), tags are used to define the structure and elements of a web page. They consist of angled brackets (<>) surrounding a keyword or element name. Tags are written in pairs, with an opening tag and a closing tag, enclosing the content or element they affect.

Here are three categories of tags commonly used in HTML:
1. Structural Tags:
Structural tags define the overall structure and sections of a web page. They provide a way to organize and divide the content into logical blocks. Examples include:

html: This tag represents the root element of an HTML document and encloses all other tags.
head: This tag contains meta-information about the web page, such as the title, character encoding, linked stylesheets, and scripts.
body: This tag encloses the main content of the web page that will be visible to the users.

2. Content Tags:
Content tags define and format the actual content within the web page. They represent text, images, links, headings, paragraphs, lists, and more. Examples include:
h1 to h6: These tags define headings, with h1 being the highest level (main heading) and h6 being the lowest level (subheading).
p: This tag represents a paragraph of text.
img: This tag inserts an image into the web page.

3. Formatting Tags:
Formatting tags modify the appearance or style of the content within the web page. They can be used to apply emphasis, create lists, add line breaks, etc. Examples include:
em: This tag italicizes the enclosed text to indicate emphasis.
strong: This tag bolds the enclosed text to indicate strong importance.
ul and li: These tags create an unordered list and list items, respectively.

Q3. Explain the working Procedure of Virtual DOM.
ANS - Procedure of how the Virtual DOM works:

Initial Render:
When you first load a web application or a web page built with a framework like React, an initial render of the UI takes place. At this stage, the framework creates a virtual representation of the DOM tree, known as the Virtual DOM. The Virtual DOM is a lightweight copy of the actual DOM (the rendered HTML structure).

Updating the State:
As the user interacts with the application, such as clicking a button or entering data in a form, the application's state may change. When a state change occurs, the framework triggers a process to update the UI accordingly.

Reconciliation:
The framework performs a process called reconciliation, where it compares the new state of the application with the previous state. It determines the differences or updates needed to reflect the new state in the UI.

Virtual DOM Diffing:
During the reconciliation process, the framework compares the previous Virtual DOM with the updated Virtual DOM. It identifies the specific changes or differences between the two representations.

Update Virtual DOM:
Based on the identified differences, the framework updates the Virtual DOM to reflect the new state of the application. This update is typically more efficient and faster compared to directly manipulating the actual DOM.

Reconciliation of the Real DOM:
After updating the Virtual DOM, the framework performs a process called diffing. It calculates the minimal number of changes required to bring the actual DOM in sync with the updated Virtual DOM.

Actual DOM Update:
Finally, the framework applies the calculated changes to the real DOM. However, unlike traditional approaches that directly modify the entire DOM tree, the framework only updates the specific elements that have changed.


Q4. Mention some Differences between MySQL and No SQL

ANS - MySQL is a relational database that is based on a tabular design. NoSQL is non-relational and has a document-based design.

A MySQL database is currently more popular in the market than NoSQL because the latter is still fairly new. That means, at present, MySQL encompasses a large community while NoSQL has a comparatively small community.

While MySQL is not easily scalable due to rigid schema restrictions, NoSQL can easily be scaled because of its dynamic schema nature.

Another key difference is MySQL requires a detailed database model before the creation of the database while NoSQL requires no detailed modeling.

Q5. Explain any one DBMS Technology in your own words.

ANS - MongoDB is a popular NoSQL (non-relational) database management system designed for handling large volumes of unstructured or semi-structured data. It differs from traditional relational databases by offering a flexible and scalable approach to data storage and retrieval.

Documents: MongoDB stores data in documents, which are schema-less and resemble JSON objects. Documents can have nested structures and can hold various types of data, including arrays, strings, numbers, and even sub-documents.

Collections: Collections in MongoDB are containers for related documents. They are analogous to tables in a relational database. We can think of a collection as a grouping of similar documents, such as users, products or orders.