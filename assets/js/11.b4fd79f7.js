(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,e,s){t.exports=s.p+"assets/img/ubu.8d6f2853.png"},358:function(t,e,s){t.exports=s.p+"assets/img/winterm.c83f38b6.png"},414:function(t,e,s){"use strict";s.r(e);var a=s(43),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"development-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-process"}},[t._v("#")]),t._v(" Development Process")]),t._v(" "),a("h2",{attrs:{id:"project-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[t._v("#")]),t._v(" Project Structure:")]),t._v(" "),a("p",[t._v("All code & data for this project will be housed in our "),a("a",{attrs:{href:"https://github.com/madison-housing-cs638",target:"_blank",rel:"noopener noreferrer"}},[t._v("github team repo."),a("OutboundLink")],1),t._v(" There are 4 repositories:")]),t._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),a("p",[t._v("This is where we will store all the datasets that we will use for this project.")]),t._v(" "),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" code")]),t._v(" "),a("p",[t._v("This is where we will store all python code needed to generate visualizations, models, and filter data. This will contain a few different kinds of files:")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("data_retreiver.py")])]),t._v(": This is a file that will be for downloading / transforming data from the data repository into any scripts / notebooks.")]),t._v(" "),a("li",[a("strong",[t._v("Common / Utility "),a("code",[t._v(".py")]),t._v(" files.")]),t._v(" We are going to need some scripts for tranforming data, creating models, that kind of thing.")]),t._v(" "),a("li",[a("strong",[t._v("Jupyter Notebooks for creating visualizations")]),t._v(" These are the notebooks that will actually create the visualizations we showcase. Try to keep these reletively clean. If you have to write a ton of transformational code to help generate a visualization, consider putting that in a common "),a("code",[t._v(".py")]),t._v(" file.")]),t._v(" "),a("li",[a("strong",[t._v("1 Scratch Jupyter Notebook for each teammate")]),t._v(" Of course, sometimes you've just gotta try stuff out and be messy, so everyone has one jupyter notebook to playaround in.")])]),t._v(" "),a("h3",{attrs:{id:"showcase-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showcase-code"}},[t._v("#")]),t._v(" showcase-code")]),t._v(" "),a("p",[t._v("This is all the markdown for the website you are on right now. To chage the website:")]),t._v(" "),a("ol",[a("li",[t._v("Clone the repo, and make the nessessary changes. Refer to the existing code on how to make changes.")]),t._v(" "),a("li",[t._v("Once satisfied, make a commit, and push the code.")]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("sh deploy.sh")]),t._v(" to push the changes to the live site.")])]),t._v(" "),a("h3",{attrs:{id:"madison-housing-cs638-github-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#madison-housing-cs638-github-io"}},[t._v("#")]),t._v(" madison-housing-cs638.github.io")]),t._v(" "),a("p",[t._v("This is the generated html for this website. "),a("strong",[t._v("Do not directly change this.")])]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started.")]),t._v(" "),a("p",[a("strong",[t._v("WINDOWS 10 STEPS")])]),t._v(" "),a("h3",{attrs:{id:"install-the-windows-subsystem-for-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-windows-subsystem-for-linux"}},[t._v("#")]),t._v(" Install The Windows Subsystem for Linux")]),t._v(" "),a("p",[t._v("To ensure consistency, we should all be developing from a shared environment, using similar tools. One of which is The Windows Subsystem for Linux, or WSL (Were going to use WSL2). It is essentialy a high-performance linux emulator that runs on windows. To set this up:")]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[t._v("Make sure your computer is up to date")])]),t._v(" "),a("li",[a("p",[t._v("Install WSL1, by following along with "),a("a",{attrs:{href:"https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),a("OutboundLink")],1),t._v(" tutorial, through "),a("strong",[t._v("Enabling ‘Virtual Machine Platform’")])])]),t._v(" "),a("li",[a("p",[t._v("Install Ubuntu")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download it through the Microsoft store "),a("a",{attrs:{href:"https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Run Ubuntu, and set yourself up with a username and password.")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(357),alt:"image-20200514115044653"}})])])]),t._v(" "),a("li",[a("p",[t._v("Finish Installing WSL 2 and upgrading ubuntu to use WSL 2 be following the rest of "),a("a",{attrs:{href:"https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),a("OutboundLink")],1),t._v(" tutorial, starting with "),a("strong",[t._v("Enabling Windows Subsystem for Linux 2")])])])]),t._v(" "),a("h3",{attrs:{id:"install-and-configure-windows-terminal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-windows-terminal"}},[t._v("#")]),t._v(" Install and Configure Windows Terminal")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download Windows Terminal from the Microsoft store "),a("a",{attrs:{href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Connect to your WSL instance by opening a new tab for ubuntu.")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(358),alt:"image-20200514121902568"}})]),t._v(" "),a("li",[a("p",[a("em",[t._v("(optional)")]),t._v(" Make your bash prompt better.")]),t._v(" "),a("ol",[a("li",[t._v("run "),a("code",[t._v("code ~/.bashrc")]),t._v(" to open up your bash profile.")]),t._v(" "),a("li",[t._v("add "),a("code",[t._v('export PS1="\\u@\\W $ "')]),t._v(" at the end of the file, save, then restart the terminal.")])])])]),t._v(" "),a("p",[a("strong",[t._v("EVERYONE STEPS")])]),t._v(" "),a("h3",{attrs:{id:"install-and-configure-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-git"}},[t._v("#")]),t._v(" Install and Configure Git")]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[t._v("Signup for Github")])]),t._v(" "),a("li",[a("p",[t._v("From ubuntu, run "),a("code",[t._v("sudo apt install git")]),t._v(" & "),a("code",[t._v("git --version")]),t._v(" to verify the installation.")])]),t._v(" "),a("li",[a("p",[t._v("Cache your remote login credentials to avoid typing your username/password on every remote push:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ben Kizaric"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global credential.helper cache --timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"install-and-configure-node-and-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-node-and-npm"}},[t._v("#")]),t._v(" Install and Configure node and npm")]),t._v(" "),a("p",[t._v("You need this to generate the showcase website.")]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[t._v("Navigate to your user directory with "),a("code",[t._v("cd ~")])])]),t._v(" "),a("li",[a("p",[t._v("update / install needed software.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("sudo apt-get update -y")]),t._v(" Update existing software")]),t._v(" "),a("li",[a("code",[t._v("apt-get install build-essential libssl-dev -y")]),t._v(" Install essential software, like a c++ compiler.")])])]),t._v(" "),a("li",[a("p",[t._v("install node version manager, nvm. You may have to restart your shell.")]),t._v(" "),a("p",[a("code",[t._v("curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash")])])]),t._v(" "),a("li",[a("p",[t._v("Install node and npm with "),a("code",[t._v("nvm install node")])])])]),t._v(" "),a("h3",{attrs:{id:"install-python-ubuntu-wsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-python-ubuntu-wsl"}},[t._v("#")]),t._v(" Install Python (Ubuntu / WSL)")]),t._v(" "),a("ol",[a("li",[t._v("Run these commands to get needed software")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt update\nsudo apt install software-properties-common\nsudo add-apt-repository ppa:deadsnakes/ppa\n# This will prompt you to press enter\nsudo apt update\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Install python 3.8 with "),a("code",[t._v("sudo apt install python3.8")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);