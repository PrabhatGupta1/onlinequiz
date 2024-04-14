var result = 0;
var correctAns = 0;
var wrongAns = 0;
var attemtedQuestions = 0;
var isHomePage = true;
var isQuizTest = false;
var isResult = false;
var currentSubject;
var currentSubCode;
var sub = ["HTML 5","CSS 3","JavaScript","Bootstrap"];

function showQuestions(subject,sub_code) {
    result = 0;
    correctAns = 0;
    wrongAns = 0;
    attemtedQuestions = 0;
    if(isHomePage) {
        document.getElementById("intro").remove();
        isHomePage = false;
    }
     
    currentSubject = subject;
    currentSubCode = sub_code;
    wipeOut(document.getElementById("quiz-question"));
    wipeOut(document.getElementById("submit-quiz"));

    var quiz = document.getElementById("quiz-question");
    quiz.classList.add("px-4");
    quiz.classList.add("py-4");
    quiz.insertAdjacentHTML('beforeend',"<h2>"+sub[sub_code]+"</h2>")
    for(var i=0;i<subject.length;i++) {
        quiz.insertAdjacentHTML('beforeend', "<div class=\"question\"></div><div class=\"answer\"><form action=\"\"><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"a\"><label for=\"q"+(i+1)+"a\"></label></div><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"b\"><label for=\"q"+(i+1)+"b\"></label></div><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"c\"><label for=\"q"+(i+1)+"c\"></label></div><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"d\"><label for=\"q"+(i+1)+"d\"></label></div></form></div>"); 
    }
    document.getElementById("submit-quiz").insertAdjacentHTML('beforeend', "<button id=\"submit\" type=\"button\">Submit Test</button>"); 
       
    for(var i=0;i<subject.length;i++) {
        document.getElementsByClassName("question")[i].innerHTML = (i+1)+". "+subject[i].ques;
        for(var j=0;j< 4;j++) {
            document.getElementsByTagName("label")[j+4*i].innerHTML = subject[i].opt[j];
        }
    }
    document.getElementById("submit-quiz").addEventListener("click",function() {
        evaluateResult(currentSubject,currentSubCode);
    });  
    if(isResult == true) {
        wipeOut(document.getElementById("result"));
    }
}

function evaluateResult(subject,subCode) {
    var attemtedQues;
    for (let i = 0; i < subject.length; i++) {
        attemtedQues = document.getElementsByName("q"+(i+1));
        console.log(subject[i].ans);
        if(attemtedQues[subject[i].ans].checked == true) {
            result++;
            correctAns++;
            attemtedQuestions++;
        } else {
            if(attemtedQues[0].checked == false && attemtedQues[1].checked == false && attemtedQues[2].checked == false && attemtedQues[3].checked == false) {
                
            } else {
                result = result - 0.25;
                wrongAns++;
                attemtedQuestions++;
            }
        }
    }
    wipeOut(document.getElementById("quiz-question"));
    wipeOut(document.getElementById("submit-quiz"));
    document.getElementById("result").insertAdjacentHTML('beforeend', "<div><p>Your Score : "+result+" / 10</p><p>Attempted Questions : "+attemtedQuestions+"</p><p>Correct Answers : "+correctAns+"</p><p>Wrong Answers : "+wrongAns+"</p><p>Subject : "+sub[subCode]+"</p></div>");
    isResult = true;
}

function wipeOut(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function availableSoon() {
    window.alert("The quiz for this subject will be available soon...");
}



var html = [{ques: "What does HTML stand for?", opt: ["Hyper Text Markup Language","High-level Text Management Language","Hyperlink and Text Management Language","HyperTransfer Markup Language"],ans : 0},
            {ques: "Which HTML tag is used to create a hyperlink?", opt: ["&lt;link&gt;","&lt;a&gt;","&lt;hyperlink&gt;","&lt;url&gt;"], ans : 1},
            {ques: "What is the purpose of the HTML &lt;head&gt; tag?", opt: [" It defines the main content of the HTML document."," It contains metadata about the HTML document.","It specifies the title of the HTML document.","It defines a section in the document."], ans : 1},
            {ques: "Which HTML element is used to define the structure of an HTML document, including headings, paragraphs, and lists?", opt: ["&lt;body&gt;","&lt;structure&gt;","&lt;document&gt;","&lt;main&gt;"], ans : 0},
            {ques: "What does the HTML attribute 'src' represent?", opt: ["Source","Script","Style","Subscript"], ans : 0},
            {ques: "Which HTML tag is used for creating an unordered list?", opt: ["&lt;ol&gt;","&lt;ul&gt;","&lt;list&gt;","&lt;li&gt;"], ans : 1},
            {ques: "What is the purpose of the HTML &lt;footer&gt; tag?", opt: [" It defines a footer for a document or a section."," It specifies the main content of the HTML document.","It contains metadata about the HTML document.","It defines a section in the document."], ans : 0},
            {ques: "Which HTML element is used for creating a table?", opt: ["&lt;table&gt;","&lt;tab&gt;","&lt;tr&gt;","&lt;td&gt;"], ans : 0},
            {ques: "What does the HTML attribute 'alt' in the &lt;img&gt; tag represent?", opt: ["Alignment","Altitude","Alternative text for an image","Alert"], ans : 2},
            {ques: "Which HTML tag is used to create a line break within text?", opt: ["&lt;br&gt;","&lt;lb&gt;","&lt;break&gt;","&lt;line&gt;"], ans : 0}
        ];

var css = [{ques: "What does CSS stand for?", opt: ["Computer Style Sheets"," Creative Style Sheets","Cascading Style Sheets","Colorful Style Sheets"], ans : 2},
           {ques: "Which CSS property is used to set the text color of an element?", opt: ["text-color","color","font-color","text-style"], ans : 1},
           {ques: "How can you include comments in CSS?", opt: [" /* Comment */","// Comment //","&lt;!-- Comment --&gt;"," % Comment %"], ans : 0},
           {ques: "Which CSS property is used to control the space between elements' border and content?", opt: ["padding","margin","spacing","border-spacing"], ans : 0},
           {ques: "In CSS, what does the \"float\" property do?", opt: ["Aligns text to the right","Moves an element to the right or left, allowing text to flow around it","Changes the transparency of an element"," Floats the element above other elements"], ans : 1},
           {ques: "What is the purpose of the CSS \"box-sizing\" property?", opt: ["Defines the size of a box","Adjusts the spacing between elements","Specifies the rendering mode of an element"," Controls how the total width and height of an element is calculated"], ans : 3},
           {ques: "Which CSS selector targets all instances of a specified element?", opt: ["*","#",".","element"], ans : 3},
           {ques: "What is the purpose of the CSS \"z-index\" property?", opt: ["Sets the background color of an element","Defines the stacking order of positioned elements","Adjusts the letter spacing in text","Controls the width of an element"], ans : 1},
           {ques: "Which CSS property is used for adding shadows to text?", opt: [" text-shadow","box-shadow","shadow-text","font-shadow"], ans : 0},
           {ques: "What is the purpose of the CSS \"media queries\"?", opt: ["To define font styles for different media types","To apply different styles based on the device characteristics","To create media-specific layouts","To control media playback in the browser"], ans : 1}
        ];

var js = [{ques: "What is JavaScript primarily used for?", opt: ["Styling web pages","Creating dynamic content and interactivity on web pages","Defining page structure","Managing database operations"], ans : 1},
          {ques: "How do you declare a variable in JavaScript?", opt: ["var variableName;","let variableName;","const variableName;","All of the above"], ans : 3},
          {ques: "What is the purpose of the \"typeof\" operator in JavaScript?", opt: ["To check if a variable is defined","To determine the type of a variable","To assign a type to a variable","To compare variable values"], ans : 1},
          {ques: "Which of the following is not a valid way to create a function in JavaScript?", opt: [" function myFunction() {}"," var myFunction = function() {};","const myFunction = () => {};"," myFunction: function() {}"], ans : 3},
          {ques: "What is the purpose of the \"addEventListener\" method in JavaScript?", opt: ["To add style rules to an element","To listen for and respond to events on an element","To create a new HTML element","To append an element to the DOM"], ans : 1},
          {ques: "What does the \"JSON\" acronym stand for in JavaScript?", opt: ["JavaScript Object Notation","Java Serialized Object Notation","JavaScript Ordered Notation","JSON is not an acronym"], ans : 0},
          {ques: "What is the purpose of the \"try...catch\" statement in JavaScript?", opt: ["To declare variables within a specific scope","To handle errors in code","To create conditional statements","To loop through an array"], ans : 1},
          {ques: "Which operator is used for strict equality in JavaScript?", opt: ["==","===","=","!=="], ans : 1},
          {ques: "What does the \"this\" keyword refer to in JavaScript?", opt: ["The current HTML document","The global window object","The current function's execution context","The parent element of an element"], ans : 2},
          {ques: "Which built-in method can be used to sort an array in JavaScript?", opt: ["sort()","order()","arrange()","organize()"], ans : 0},
        ];

var bs = [{ques: "What is Bootstrap?",opt: ["A programming language","A front-end framework","A database management system","A server-side scripting language"],ans: 1},
          {ques: "Which CSS preprocessor is used by Bootstrap?",opt: ["Sass","Less","Stylus","Both A and B"],ans: 3},
          {ques: "What is the purpose of the Bootstrap grid system?",opt: ["To create responsive layouts","To define color schemes","To manage server-side logic","To style typography"],ans: 0},
          {ques: "Which class is used to create a responsive navigation bar in Bootstrap?",opt: [" .navbar-default",".nav-bar",".navbar-responsive",".responsive-navbar"],ans: 0},
          {ques: "In Bootstrap, which class is used to create a button group?",opt: [" .button-group"," .btn-group",".button-container",".btn-container"],ans: 1},
          {ques: "What does the \"container\" class in Bootstrap do?",opt: ["Adds a border around an element","Centers content with fixed-width responsiveness"," Defines a background color for an element"," Sets font styles for text"],ans: 1},
          {ques: "Which class is used for creating responsive, fixed-width containers in Bootstrap?",opt: [" .container-fixed"," .container-fluid",".container-responsive",".container-fixed-width"],ans: 1},
          {ques: "What is the purpose of the Bootstrap \"glyphicons\" class?",opt: ["To style text","To add small, vector icons","To create form elements","To define button styles"],ans: 1},
          {ques: "Which utility class is used for hiding elements on different screen sizes in Bootstrap?",opt: [".hidden-xs",".hide-mobile",".invisible-md",".screen-hidden"],ans: 0},
          {ques: "What is the purpose of the \"Jumbotron\" component in Bootstrap?",opt: ["To create animated buttons","To display prominent headings","To define a navigation bar","To style form elements"],ans: 1}       
        ];