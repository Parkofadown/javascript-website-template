function body(){
    document.write("<body>");
    document.write("<ul>") 
    document.write("<li><a  href='index.html'>Home</a></li>")
    document.write("<li>About</li>")
    document.write("<li>Contact</li>")
    document.write("</ul>") 
    document.write("<p>Hello World!</p>");
    document.write("</body>"); 
}

function footer() {
    document.write("<footer>");
    document.write("</footer>");
    document.write("</html>");  
}

body();
footer();
// var styles uses a tilde to input css 
var styles =  `

li {
    display: inline-block;
    list-style-type:none;
    margin:5px;
    padding 10px;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)