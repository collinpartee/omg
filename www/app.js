angular.module('omgApp', ['smoothScroll', 'angular-carousel'])
  .controller('omgController', function($scope, $timeout, smoothScroll) {
    $scope.showDtl = false;
     $scope.likeCollapsed = true;
     $scope.dislikeCollapsed = true;
     $scope.pageLoaded = false;
    
    $timeout(function() {
 $scope.pageLoaded = true;
        console.log('update with timeout fired');
    }, 1500);
    
        
    
    $scope.showProject = function(project){
        console.log(project);
        $scope.projectResources = project;
    };
    
    var smoothScroollOptions = {
    duration: 700,
    easing: 'easeInQuad',
    offset: 120,
    callbackBefore: function(element) {
        console.log('about to scroll to element', element);
    },
    callbackAfter: function(element) {
        console.log('scrolled to element', element);
    }
}
    
    $scope.showProjectDtl = function(project){
        console.log(project);
        $scope.projectDeets = project;
        $scope.showDtl = true;
        var projSection = document.getElementById('oneProject');
        smoothScroll(projSection);
    };
    $scope.closeProjectDtl = function(){
        $scope.showDtl = false;
        var workSection = document.getElementById('works');
        smoothScroll(workSection);
//        $location.hash('works');
//        $anchorScroll();
    };

    
    $scope.websiteContent = {
        landing : {
            quote: "OMG!",
            quote2:"It's Collin P!",
            source: "Everyone Everywhere"
        },
        projectList:[
            {
                projectName: 'ShopSmart',
                projectTags: ['ios', 'mobile', 'UI/UX'],
                projectPics: ['img/ss/screenshot2.png' ],
                projectShortDescription: 'A short description of my project and role',
                projectLongDescription: [
                    " 'What’ll it be hun?' 'Espresso, two shots over ice. Put it in a small cup and easy on the ice.' I said, taking out my credit card before she told me what astronomical price I’d be paying.",
                    " 'Three seventy-eight hun.' The barista said as she swiped my card through the reader. Four dollars for a fucking espresso I thought, sliding my credit card between my wallet, not bothering to put it in the slot. Fuck Starbucks and fuck this heap of ice she put in my drink after I specifically told her not to go balls in on.'Thank you ma’am.' I said with a wink and a sarcastic nod. She gave me an 'Uh Huh, have a good day hun.' nonchalantly as if to say 'I heard you wanted little ice, but I’m stuck in this hipster infested shit hole, so enjoy.' Have you ever been inside a Starbucks before? First of all, everything’s green and mahogany and there’s more recycled phone-charging wood in there to build a home. You have the guy who you pray you’re in front of so you’re not standing for a half and hour listening to him order his Caramel Non-Fat Soy Mocha Laté with extra whipped cream and a spritz of estrogen. Then you have the little girls who want—can you believe it— ten Caramel Non-Fat Soy Mocha Bullshits for their friends. You find yourself standing there negotiating with your future criminal attorney. 'If I rip the little one’s blonde hair off her head, while tripping the slutty one, causing her to break a nose, I get 10 years for assault and battery?' 'Yeah, but we can probably file an appeal and get you some community service, three years probation and some anger management classes.' Meanwhile, they have the audacity to play this indie music, brought to you by Molly 'I sound like every other girl' Hade. I was going to say worse than elevator music, but I swear to God, I’ve been in thousands of elevators. No fucking music in any of them. "
                ],
                projectLink: 'www.google.com'
            },
            {
                projectName: 'Food User Group',
                projectTags: ['ios', 'android', 'mobile', 'UI/UX'],
                projectPics: ['img/fug/screenshot1.png', 'img/work2.png' ],
                projectShortDescription: 'A short description of my project and role',
                projectLongDescription: ['A short description of my project and role','A short description of my project and role'],
                projectLink: 'www.google.com'
            },
            {
                projectName: 'Black Magic',
                projectTags: ['ios', 'android', 'mobile', 'UI/UX'],
                projectPics: ['img/work2.png' ],
                projectShortDescription: 'A short description of my project and role',
                projectLongDescription: ['A short description of my project and role','A short description of my project and role'],
                projectLink: 'https://docs.angularjs.org/api/ng/directive/ngHref'
            },
            {
                projectName: 'Jim Noodle',
                projectTags: ['ios', 'android', 'mobile', 'UI/UX'],
                projectPics: ['img/jn/screenshot1.png', ],
                projectShortDescription: 'A short description of my project and role',
                projectLongDescription: ['A short description of my project and role','A short description of my project and role'],
                projectLink: 'www.google.com'
            },
            {
                projectName: 'Lines N Planes',
                projectTags: ['ios', 'mobile', 'UI/UX', 'Objective-C'],
                projectPics: ['img/lnp/screenshot1.png' ],
                projectShortDescription: 'A short description of my project and role',
                projectLongDescription: ['A short description of my project and role','A short description of my project and role'],
                projectLink: 'www.google.com'
            },
            
        ],
        
        aboutMe: {
        introQuote: 'Yes it\'s really me',
        name: 'Collin Partee',
        about: 'In my day job I work for Macy\'s Sytstems and Technology as a developer. In my spare time I like to watch people in the park.',
        quote:'We will always tend to fulfull our expactaions ouf ourselves',
        likes: ['long walks on the beach', 'riding my bike', 'catching pokemon', 'attempting to cook gourmet meals'],
        dislikes: ['falling off of my bike', 'traffic']
    },
        
        contact:{
            email: 'collin.partee@gmail.com',
            phone1: '770-316-7481',
            phone2: '678-098-3456',
        }
    };
    
        $scope.projectResources =  $scope.websiteContent.projectList[0];

    console.log($scope.websiteContent);
    console.log($scope.websiteContent.projects);
    
  })
.controller('site2', function($scope, $timeout, smoothScroll) {
    $scope.pageShowing = 'none';
    
    $scope.showPage = function(page){
            $scope.pageShowing = 'none';

        $timeout(function(){
            $scope.pageShowing = page;
            console.log($scope.pageShown);
        }, 2000);
        
        
    };
    
    
    
    
});