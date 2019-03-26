$(document).ready(function () {
    //learn array
    var learn = [ "Chemistry" , "Algebra" , "Calculus" , "Physics" , "Astronomy"];
    
    function displayImages(){
        var name = $(this).attr("data-name");
        console.log("hello")
      // Constructing a URL to search Giphy for the name of the person who said the quote
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FyvajhZdvZ2X3n6NKNeLkTwZudN4Nze4&q=" +
        name + "&limit=10&offset=0&rating=G&lang=en";
        
      $.ajax({
        url: queryURL,
        method: "GET"
        
        })

        .then(function(response){
            
            var results = response.data;
         
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                        // Only taking action if the photo has an appropriate rating
                        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        // Creating a div for the gif
                        var giphyPlaceHolder = $("<div>");

                        // Storing the result item's rating
                        var rating = results[i].rating;

                        // Creating a paragraph tag with the result item's rating
                        var resultsPlaceHolder = $("<p>").text("Rating: " + rating);

                        // Creating an image tag
                        var image = $("<img>");

                        // Giving the image tag an src attribute of a proprty pulled off the
                        // result item
                        image.attr("src", results[i].images.fixed_height.url);

                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        giphyPlaceHolder.append(resultsPlaceHolder);
                        giphyPlaceHolder.append(image);

                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#imagedrop").prepend(giphyPlaceHolder);
                    }    
            }
        }); 
      
        
       
    }    
    //function for creating a button and class
    function scienceLearn (){
        $("#informationholder").empty();
        
        for (var i = 0; i < learn.length; i++ ){
            var buttonCreator = $("<button>");
            buttonCreator.addClass("science");
            buttonCreator.attr("data-name", learn[i]);
            buttonCreator.text(learn[i]);
            $("#informationholder").append(buttonCreator);
            
            
        
        }
    }
   
    //click function
        $("#storelearn").on("click", function(event){
            event.preventDefault();
            var learning =$("#learn-input").val().trim();
            learn.push(learning);
            scienceLearn();
            
            
        


        });
       $(document).on("click", ".science" , displayImages);
        scienceLearn();
});
























