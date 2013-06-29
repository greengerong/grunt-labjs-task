$LAB
    .script("js/bootstrap/q1.min.js").wait()
    .script("js/bootstrap/q2.min.js").wait()
    .script(" js/release/q34.min.js")

    .script("app module")
    .wait(function(){
        angular.bootstrap("app",app[name]);
    });