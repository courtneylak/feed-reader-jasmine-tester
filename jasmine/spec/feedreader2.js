/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url sub-component is defined and not empty', function() {
            for (url of allFeeds) {
                expect(url).toBeDefined();    
                expect(url.length).not.toBe(0);
            };
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name sub-component is defined an not empty', function() {
            for (name of allFeeds) {
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            };
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function() {
        
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('menu element by default is hidden upon refreshing page', function() {
            var x = document.getElementsByClassName("menu-hidden")[0];
            expect(x.style.transform).toMatch("translate3d(-12em, 0, 0)");
            //expect($('<body class="menu-hidden">')).toBeVisible();
            //document.getElementById("myDIV").style.transform = "rotate(20deg)"
            //expect(menuIcon).toBeHidden()
            //expect(translate3d).toBeLessThan(0);
            //expect(pi).toBeLessThan(4)
            //expect(css: .menu-hidden transform: translate3d(-12em, 0, 0).toBeDefined as < 0());
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('when clicked, menu becomes visible / invisible', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();  
            expect($('body').toggleClass('menu-hidden').toBe(true));
            
            menuIcon = $('.menu-icon-link');
            menuIcon.click();  
            expect($('body').toggleClass('menu-hidden').toBe(false));

        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        var container = $('.feed');

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        
        it('Asynch: minimum 1 entry in the container of .feed', function(done) {
            expect($(`.entry, .feed`)).toBeDefined();
                done();
            });
                
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        let feedOne;
        let feedTwo;
        
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done) {

            done();
        });

        it('loaded new feed updates correctly', function() {
            expect (feedOne === feedTwo).toBe(false);
            });
    });

}());
