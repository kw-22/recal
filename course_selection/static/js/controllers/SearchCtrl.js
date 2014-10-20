define(["require", "exports"], function(require, exports) {
    'use strict';

    var SearchCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function SearchCtrl($scope, $resource) {
            this.$scope = $scope;
            this.$resource = $resource;
            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML
            this.$scope.vm = this;
            this.$scope.courses = [
                {
                    "description": "This course examines the past and present, the doings and the sufferings of Americans of African descent from a multidisciplinary perspective.  It highlights the ways in which serious intellectual scrutiny of the agency of black people in the United States help redefine what it means to be American, new world, modern and post modern",
                    "id": 1,
                    "registrar_id": "1152000004",
                    "resource_uri": "/course_selection/api/v1/course/1/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Introduction to the Study of African American Cultural Practices"
                },
                {
                    "description": "This introductory course focuses on texts from the mid-eighteenth century through the early 20th century;  it will cover early texts such as poetry by Phillis Wheatley & Paul Laurence Dunbar; oratory by David Walker, Sojourner Truth; slave narratives by Frederick Douglass, Harriet Jacobs; spirituals; black theatre by Pauline Hopkins, Bert Williams; fiction by Charles Chesnutt, James Weldon Johnson; & non-fiction by W.E.B.DuBois, Anna Julia Cooper, Booker T. Washington. The course explores how black literature engages with the politics of cultural identity formation, notions of freedom, citizenship, and aesthetic forms.",
                    "id": 5,
                    "registrar_id": "1152000008",
                    "resource_uri": "/course_selection/api/v1/course/5/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "African American Literature:  Origins to 1910"
                },
                {
                    "description": "Prejudice is one of the most contentious topics in modern American society. There is debate regarding its causes, pervasiveness, and impact. This goal of this course is to familiarize students with the psychological research relevant to these questions. We will review theoretical perspectives on prejudice to develop an understanding of its cognitive, affective, and motivational underpinnings. We will also discuss how these psychological biases relate to evaluations of, and behavior toward, members of targeted groups. In addition, research-based strategies for reducing prejudice will be discussed.",
                    "id": 9,
                    "registrar_id": "1152011395",
                    "resource_uri": "/course_selection/api/v1/course/9/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Prejudice:  Its Causes, Consequences, and Cures"
                },
                {
                    "description": "African literature and films have been a vital (but often unacknowledged) stream in and stimulant to the global traffic in invention. Nigerian literature is one of the great literatures of the 20th century. Ethiopian literature is one of the oldest in the world. South Africans have won more Nobel Prizes for Literature in the past forty years than authors from any other country. Senegalese films include some of the finest films ever made. In this course, we will study the richness and diversity of foundational African texts (some in translation), while foregrounding questions of aesthetics, style, and humor.",
                    "id": 12,
                    "registrar_id": "1152011718",
                    "resource_uri": "/course_selection/api/v1/course/12/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Introduction to African Literature and Film"
                },
                {
                    "description": "The Harlem Renaissance is most often depicted as \"the flowering of African American arts and literature.\"  It can also be characterized as a period when diverse forms of African American religious expressions, ideologies, and institutions emerged.  This course explores the literature of the Harlem Renaissance as a means to understand the pivotal intersection of race and religion during this time of black cultural production.",
                    "id": 10,
                    "registrar_id": "1152010649",
                    "resource_uri": "/course_selection/api/v1/course/10/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Race, Religion, and the Harlem Renaissance"
                },
                {
                    "description": "Explores the life-writing of American, African, and Asian women in the fashion industry as a launching point for thinking about race, gender, and class. How do ethnicity and femininity intersect? How are authenticity and difference commodified? How do women construct identities through narrative and negotiate their relationships to their bodies, families, and nations? This course will include guest lectures by fashion editors and models; discussions of contemporary television programs, global fashion, and cultural studies; and student self-narratives about their relationships with cultural standards of beauty, whether vexed or not.",
                    "id": 3,
                    "registrar_id": "1152011244",
                    "resource_uri": "/course_selection/api/v1/course/3/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Model Memoirs:  The Life Stories of International Fashion Models"
                },
                {
                    "description": "In the context of de facto equality but persistent racial inequality, how do we identify race's role in public policy? This course addresses this question by drawing on a range of interdisciplinary texts. We begin by exploring different theoretical perspectives of race, seeking to define \"the racial state\" in historical and comparative terms. We then consider how race interacts with a variety of American political institutions, including the welfare state, immigration regulation, and the criminal justice state. We give particular attention to the complexities of racial construction and race's intersection with other forms of hierarchy.",
                    "id": 8,
                    "registrar_id": "1152012694",
                    "resource_uri": "/course_selection/api/v1/course/8/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Public Policy in the American Racial State"
                },
                {
                    "description": "As articulated by Thelma Golden, postblack refers to the work of African American artists who emerged in the 1990s with ambitious, irreverent, and sassy work. Though hard to define, postblack suggested the emergence of a generation of artists removed from the long tradition of black affirmation of the Harlem Renaissance, black empowerment of the Black Arts movement, and identity politics of the 1980s and early 90s. This seminar provides an opportunity for a deep engagement with the work of African American artists of the past decade. It will involve critical and theoretical readings on multiculturalism, race, identity, and contemporary art.",
                    "id": 7,
                    "registrar_id": "1152011117",
                    "resource_uri": "/course_selection/api/v1/course/7/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Postblack - Contemporary African American Art"
                },
                {
                    "description": "This course will explore the various meanings of The Great Migration and mobility found in 20th century African American literature.  Through careful historical and literary analysis, we will examine the significant impact migration has had on African American writers and the ways it has framed their literary representations of modern black life.",
                    "id": 6,
                    "registrar_id": "1152011394",
                    "resource_uri": "/course_selection/api/v1/course/6/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Migration and the Literary Imagination"
                },
                {
                    "description": "This lecture and laboratory course will acquaint non-biology majors with the theory and practice of modern molecular biology, with a focus on biological topics of current public interest. Topics include: structure of DNA, RNA, proteins, genomes and an overview of state-of-the-art technologies including cloning, recombinant DNA and PCR. The course will address how recent scientific advances affect issues relevant to human biology including forensics, stem cells, molecular evolution and the genetic basis of human traits and behaviors such as obesity and aggression.",
                    "id": 804,
                    "registrar_id": "1152008598",
                    "resource_uri": "/course_selection/api/v1/course/804/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "From DNA to Human Complexity"
                },
                {
                    "description": "As the demographics of Blacks in America change, we are compelled to rethink the dominant stories of who African Americans are, and from whence they come. In this seminar, we will explore the deep cultural, genealogical, national origin, regional, and class-based diversity of people of African descent in the United States. Materials for the course will include scholarly writings as well as memoirs and fiction. In addition to reading assignments, students will be expected to complete an ethnographic or oral history project based upon research conducted within a Black community in the U.S., and a music or visual art based presentation of work.",
                    "id": 4,
                    "registrar_id": "1152011245",
                    "resource_uri": "/course_selection/api/v1/course/4/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Diversity in Black America"
                },
                {
                    "description": "A broad survey of the field of immunology and the mammalian immune system.  The cellular and molecular basis of innate and acquired immunity will be discussed in detail.  The course will provide frequent exemplars drawn from human biology in health and disease.",
                    "id": 805,
                    "registrar_id": "1152010621",
                    "resource_uri": "/course_selection/api/v1/course/805/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Molecular and Cellular Immunology"
                },
                {
                    "description": "This course offers an introduction to the major themes, critical questions,and pivotal moments in African American history since emancipation.   It traces the social, political, cultural, intellectual, and legal contours of he black experience in the United States from Reconstruction to the rise of Jim Crow, through the World Wars, Depression, and the Great Migrations, to the long civil rights era and the contemporary period of racial politics.  Using a wide variety of texts, images, and creative works, the course situates African American history within broader national and international contexts.",
                    "id": 15,
                    "registrar_id": "1152003426",
                    "resource_uri": "/course_selection/api/v1/course/15/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "African American History from Reconstruction to the Present"
                },
                {
                    "description": "Research seminar focused on Princeton University's historical connections to the institution of slavery. The class will work toward creating a report that details the slave-holding practices of Princeton faculty and students, examines campus debates about slavery, and investigates whether money derived from slave labor contributed to the early growth of the school. Class will meet in Mudd Library.",
                    "id": 16,
                    "registrar_id": "1152012214",
                    "resource_uri": "/course_selection/api/v1/course/16/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Princeton and Slavery"
                },
                {
                    "description": "First principles development of quantum theory, with applications to atoms, molecules, and their spectroscopy.  This course will emphasize developing basic principles and focus on illustrative examples.",
                    "id": 215,
                    "registrar_id": "1152001003",
                    "resource_uri": "/course_selection/api/v1/course/215/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Advanced Physical Chemistry: Quantum Mechanics"
                },
                {
                    "description": "This course is designed to introduce graduate students to the literature of African-American History, from the colonial era up to more recent times.  Major themes and debates will be highlighted.  The course should help students to define interests within the field to pursue further study and research and also to aid preparation for examinations.",
                    "id": 18,
                    "registrar_id": "1152008465",
                    "resource_uri": "/course_selection/api/v1/course/18/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Readings in African American History"
                },
                {
                    "description": "Explores the 300-year history of what has been described as an \"impossible but inevitable city.\"  Settled on perpetually eroding swampland at the foot of one of the world's great waterways, this port city served as an outpost of three empires and a gateway linking the N. American heartland with the Gulf Coast, Caribbean, and Atlantic World. A unique crossroads of capitalism and cultures, New Orleans is, as one writer puts it, \"an alternative American history all in itself.\" From European and African settlement through Hurricane Katrina, we'll consider how race, culture, and the environment have defined the history of the city and its people.",
                    "id": 17,
                    "registrar_id": "1152012825",
                    "resource_uri": "/course_selection/api/v1/course/17/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "History of New Orleans: Invention & Reinvention in an American City"
                },
                {
                    "description": "Examines a wide range of issues regarding race, ethnicity and nationalism globally, but with an emphasis on Latin America. We will explore the basic sociological, political and cultural concepts of nation, race and ethnicity, emphasizing how they are used and their relation with one another in various contexts. For example, race and ethnicity have taken on special meanings in Latin America where they are central to ideas about the nation. Much of the course will focus on how that came about and how race is manifested in different national contexts. We will emphasize comparisons to the U.S. as well as across countries within Latin America.",
                    "id": 20,
                    "registrar_id": "1152010915",
                    "resource_uri": "/course_selection/api/v1/course/20/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Race, Ethnicity, and Nationalism in Latin America"
                },
                {
                    "description": "See the Princeton Writing Program website.",
                    "id": 1102,
                    "registrar_id": "1152008343",
                    "resource_uri": "/course_selection/api/v1/course/1102/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Utopias, Dystopias, and Manifestos"
                },
                {
                    "description": "Examines selected aspects on conflict in primarily sub-Saharan Africa.  We focus on issues such as: theories of conflict; types of actors; behavior, especially civilian victimization; how conflicts end; and the moral evaluation of conflict.  Cases and comparisons include: the 1998 Great Lakes Conflict; the child and corporate soldier in Sierra Leone and Uganda; causes and patterns of civilian victimization; the current conflict in Zimbabwe; and the problems of accountability as experienced by the International Criminal Court and the South African Truth and Reconciliation Commission.",
                    "id": 21,
                    "registrar_id": "1152010102",
                    "resource_uri": "/course_selection/api/v1/course/21/",
                    "semester": "/course_selection/api/v1/semester/1/",
                    "title": "Conflict in Africa"
                }
            ];
            // watching for events/changes in scope, which are caused by view/user input
            // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            // $scope.$watch('todos', () => this.onTodos(), true);
            // $scope.$watch('location.path()', path => this.onPath(path))
            // if ($location.path() === '') $location.path('/');
            // $scope.location = $location;
        }
        SearchCtrl.prototype.sayHello = function () {
            this.$scope.message = "Hello";
        };
        SearchCtrl.$inject = [
            '$scope',
            '$resource'
        ];
        return SearchCtrl;
    })();

    
    return SearchCtrl;
});
