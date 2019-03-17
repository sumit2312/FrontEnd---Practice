// Listen for form submit

document.getElementById("myForm").addEventListener("submit",saveBookmark);

function saveBookmark(e){
   var siteName = document.getElementById("siteName").value;
   var siteUrl = document.getElementById("siteUrl").value;

    var bookmark ={
        name: siteName,
        url:siteUrl
    }
    /*
    // Local Storage Test
    localStorage.setItem('test','HelloWorld');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    // Test if bookmark is null
    if(localStorage.getItem('bookmarks') === null){
        // Init Array
        var bookmarks = [];
        // Add to aarray
        bookmarks.push(bookmark);
        //set to local Storge
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to local Storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }


    //prevent from submitting
    e.preventDefault();
}


function deleteBookmark(url){
    console.log(url);
}

function fetchBookmarks(){
    //Get Bookmarks from local Storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResult');

    //Build output
        bookmarksResults.innerHTML = "";

    for(var i=0;i<bookmarks.length;i++){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;

            bookmarksResults.innerHTML += '<div class="well border border-success mw-100 bg-warning">'+
                                            '<h3>'+ name +
                                            ' <a class="btn btn-default" target="_blank" href="'+url+'" >Visit</a> ' +
                                            ' <a onclick="deleteBookmark(\''+ url+ '\')" class="btn btn-danger" target="_blank" href="#" >Delete</a> '+
                                            '</h3>'+ 
                                           '</div>' ;
    }
    
}