// var question = { ques ,
//              opt : [
//                 opt1,
//                 opt2,
//                 opt3,
//                 opt4
//                 ],
//              ans
//             };

var result = 0;
var correctAns = 0;
var wrongAns = 0;
var attemtedQuestions = 0;


var html = [{ques : "What does HTML stand for?", opt: ["Hyper Text Markup Language","High-level Text Management Language","Hyperlink and Text Management Language","HyperTransfer Markup Language"],ans : 0},
            {ques: "Which HTML tag is used to create a hyperlink?", opt: ["&lt;link&gt;","&lt;a&gt;","&lt;hyperlink&gt;","&lt;url&gt;"], ans : 1},
            {ques: "What is the purpose of the HTML &lt;head&gt; tag?", opt: [" It defines the main content of the HTML document."," It contains metadata about the HTML document.","It specifies the title of the HTML document.","It defines a section in the document."], ans : 1},
            {ques: "Which HTML element is used to define the structure of an HTML document, including headings, paragraphs, and lists?", opt: ["&lt;body&gt;","&lt;structure&gt;","&lt;document&gt;","&lt;main&gt;"], ans : 0},
            {ques: "What does the HTML attribute 'src' represent?", opt: ["Source","Script","Style","Subscript"], ans : 0},
            {ques: "Which HTML tag is used for creating an unordered list?", opt: ["&lt;ol&gt;","&lt;ul&gt;","&lt;list&gt;","&lt;li&gt;"], ans : 1},
            {ques: "What is the purpose of the HTML &lt;footer&gt; tag?", opt: [" It defines a footer for a document or a section."," It specifies the main content of the HTML document.","It contains metadata about the HTML document.","opIt defines a section in the document.t4"], ans : 0},
            {ques: "Which HTML element is used for creating a table?", opt: ["&lt;table&gt;","&lt;tab&gt;","&lt;tr&gt;","&lt;td&gt;"], ans : 0},
            {ques: "What does the HTML attribute 'alt' in the &lt;img&gt; tag represent?", opt: ["Alignment","Altitude","Alternative text for an image","Alert"], ans : 2},
            {ques: "Which HTML tag is used to create a line break within text?", opt: ["&lt;br&gt;","&lt;lb&gt;","&lt;break&gt;","&lt;line&gt;"], ans : 0}
        ];

function showQuestions(subject) {
    result = 0;
    correctAns = 0;
    wrongAns = 0;
    attemtedQuestions = 0;
    if(document.getElementsByClassName("intro")[0].innerHTML != '') {
        document.getElementsByClassName("intro")[0].remove();
    }

    for(var i=0;i<subject.length;i++) {
       var quiz = document.getElementById("quiz-question");
       quiz.insertAdjacentHTML('beforeend', "<div class=\"question\"></div><div class=\"answer\"><form action=\"\"><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"a\"><label></label></div><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"b\"><label></label></div><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"c\"><label></label></div><div class=\"opt\"><input type=\"radio\" name=\"q"+(i+1)+"\" id=\"q"+(i+1)+"d\"><label></label></div></form></div>"); 
    }
    document.getElementById("submit-quiz").insertAdjacentHTML('beforeend', "<button id=\"submit\" type=\"button\">Submit Test</button>"); 
    document.getElementById("submit-quiz").addEventListener("click",function() {
        evaluateResult(subject);
    });     
    for(var i=0;i<subject.length;i++) {
        document.getElementsByClassName("question")[i].innerHTML = (i+1)+". "+subject[i].ques;
        for(var j=0;j< 4;j++) {
            document.getElementsByTagName("label")[j+4*i].innerHTML = subject[i].opt[j];
        }
    }
}

function evaluateResult(subject) {
    var attemtedQues;
    for (let i = 0; i < subject.length; i++) {
        attemtedQues = document.getElementsByName("q"+(i+1));
        if(attemtedQues[html[i].ans].checked == true) {
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
    document.getElementById("quiz-question").remove();
    document.getElementById("submit-quiz").remove();
    document.getElementById("result").insertAdjacentHTML('beforeend', "<p>Your Scrore : "+result+" / 10</p><p>Attempted Questions : "+attemtedQuestions+"</p><p>Correct Answers : "+correctAns+"</p><p>Wrong Answers : "+wrongAns+"</p>");
}
