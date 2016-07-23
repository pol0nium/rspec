var searchIndex = {};
searchIndex["rspec"] = {"doc":"","items":[[0,"events","rspec","Events are send by the Runner to signal the progression in the test suite, with the results",null,null],[4,"Event","rspec::events","",null,null],[13,"StartRunner","","",0,null],[13,"FinishedRunner","","",0,null],[13,"StartDescribe","","",0,null],[13,"EndDescribe","","",0,null],[13,"StartTest","","",0,null],[13,"EndTest","","",0,null],[8,"EventHandler","","",null,null],[10,"trigger","","",1,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[0,"context","rspec","The Context module holds all the functionality for the test declaration, that is: `describe`,\n`before`, `after`, `it` and their variants.",null,null],[3,"Context","rspec::context","A Context holds a collection of tests, a collection of closures to call before running any\ntests, and a collection of closure to call _after_ all the tests..",null,null],[12,"tests","","",2,null],[12,"before_each","","",2,null],[12,"after_each","","",2,null],[4,"Testable","","This enum is used to build a tree of named tests and contextes.",null,null],[13,"Test","","Name and Test body",3,null],[13,"Describe","","Name and Describe body",3,null],[5,"describe","","This is the root describe. It will instanciate a root `Context` that you can use to declare\nexamples, and will returns a Runner ready to run the tests.",null,{"inputs":[{"name":"str"},{"name":"f"}],"output":{"name":"runner"}}],[5,"rdescribe","","This is the root describe with a sugar. It will instanciate a root `Context` that you can use\nto declare examples, will instanciate a `Runner` for the test and run them.",null,null],[6,"BeforeFunction","","This is the type used by the closure given as argument of a `Context::before()` call.",null,null],[6,"AfterFunction","","This is the type used by the closure given as argument of a `Context::after()` call.",null,null],[6,"TestFunction","","This is the type used by the closure given as argument of a `Context::it()` call.",null,null],[6,"TestResult","","The type used for a test result",null,null],[11,"default","","",2,{"inputs":[],"output":{"name":"context"}}],[11,"describe","","Open and name a new example group, which will be keeped as a child context of the current\ncontext.",2,null],[11,"it","","Register and name a closure as an example",2,null],[11,"before","","Declares a closure that will be executed before each test of the current Context.",2,null],[11,"after","","Declares a closure that will be executed after each test of the current Context.",2,null],[0,"runner","rspec","The Runner is where all the examples are actually executed.",null,null],[3,"Runner","rspec::runner","",null,null],[3,"TestReport","","",null,null],[12,"total_tests","","",4,null],[12,"success_count","","",4,null],[12,"error_count","","",4,null],[6,"RunnerResult","","",null,null],[11,"new","","",5,{"inputs":[{"name":"context"}],"output":{"name":"runner"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"testreport"}}],[11,"clone","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"fmt","","",4,null],[11,"run","","",5,null],[11,"result","","",5,null],[11,"add_event_handler","","",5,null],[0,"formatter","rspec","The formatter module expose different formatters that can be attached to the Runner and display\nthe progression of the run under various forms",null,null],[0,"formatter","rspec::formatter","",null,null],[8,"Formatter","rspec::formatter::formatter","",null,null],[0,"simple","rspec::formatter","",null,null],[3,"Simple","rspec::formatter::simple","",null,null],[12,"name_stack","","",6,null],[12,"failures","","",6,null],[11,"new","","",6,{"inputs":[{"name":"t"}],"output":{"name":"simple"}}],[11,"trigger","","",6,null]],"paths":[[4,"Event"],[8,"EventHandler"],[3,"Context"],[4,"Testable"],[3,"TestReport"],[3,"Runner"],[3,"Simple"]]};
initSearch(searchIndex);
