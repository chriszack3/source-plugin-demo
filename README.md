<h1 align="center">
  Portfolio: Source Plugin Walkthrough
</h1>

This is intended to be a demonstration of how I might write operating procedures for a junior dev on my team. It assumes a basic understanding of Node, React, and popular JS libraries (e.g. Axios).

## 🚀 Quick start

1.  **Install the Gatsby client if you haven't already**
    First check your version of Gatsby:
    ```shell
    gatsby -v
    ```
    If you have the Gatsby client installed already you will get the following output in the console.
    ```shell
    #With the X's being your version number
    Gatsby CLI version: X.X.X
    ```
    If you get this response, nothing more is needed, proceed to the next step. 

    But if you get the output: 

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby: command not found
    ```
    Go to <a href='https://www.gatsbyjs.com/docs/reference/gatsby-cli/'>this link</a> and follow the instructions to download the Gatsby client, then start this step over from the beginning.  

1. **Create a barebones Gatsby app**
    For our purposes let's just use the gatsby-hello-world-starter.
    ```shell
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Test that your app builds correctly.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**
    You should see the following output in your console after the development bundle builds: 

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

    If your build process errors, try to troubleshoot using this <a href='https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/'>link</a>

    For WSL 1/2 users: 
    If you get an EPERM error, it means that the group and/or owner permissions were set too strictly when the 'gatsby new' command was run. To fix run the following:
    
    ```shell
    cd ..
    sudo chown <your_username>: -R /gatsby-starter-hello-world
    ``` 

1. **Open the file index.js in src/pages**
    Gatsby will call its createPage API on each .js file in the pages folder of root using the filename as the route (except in the case of 'index' which is routed to '/').
    Changes made to src/pages/index.js will hot-reload at localhost:8000

1. **Pick an api to use**
    Copy copy copy copy

1. **Test call to api from browser to confirm response**

1. **Make plugins directory in the root of your project**

1. **Mkdir plugins**

1. **Mkdir source-plugin**

1. **Cd plugins/source-plugin**

1. **Clone barebones gatsby source plugin**

1. **Install axios, gatsby source filesystem, graphql**

1. **Add source plugin to gatsby config.js**

1. **Export the sourceNodes api from gatsby-node.js at plugins/source-plugin/gatsby-node.js**

1. **Send a request to your api and log the response to the console**

1. **Run gatsby develop and you should see your response in the console like below**

1. **Loop over the array returned from the api and call createNode for each item in the array**

1. **Refactor into a try/catch pattern**

1. **Check if data.result is an array**

1. **If no throw err**

1. **If yes createNode for each item**

1. **Check in graphql playground that nodes were created successfully**

1. **Refactor with api key stored in .env file and import it with dotenv library already included**

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
