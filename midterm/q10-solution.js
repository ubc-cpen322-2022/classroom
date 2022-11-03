/*
 * Complete the 'countWords' function below.
 *
 * The function accepts an input stream, an output stream and a callback function.
 * The function is expected to write an integer to the output stream.
 */
function countWords(inputStream, outputStream, done){
    var wordCount = 0;
    var withinParen = 0;
    var withinWord = true;
    var firstchar = false;
    
    inputStream.on("data", function(blob) {
        var str = blob.toString();
        for (var i=0; i<str.length; ++i) {
            var c = str[i];
            if (c == '(') { 
                withinParen++;
                withinWord = true;
            }
            else if (c == ')') {
                if (withinParen>0 && withinWord && firstchar)
                    wordCount++;
                withinParen--;
                withinWord = false;
            }
            else if (c == ' ') {
                if (withinParen>0 && withinWord && firstchar)
                    wordCount++;
                withinWord = false;
            } else {
                withinWord = true;
                firstchar = true;
            }
        }
    } );

    inputStream.on("end", function() {
    outputStream.write(wordCount+""); 
    } );