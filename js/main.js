/**
 * Created by acer121 on 2017/6/22.
 */
angular.module('myApp',[])
    .controller('SignUpController',function($scope)
        {
            $scope.userdata = {};
            $scope.submitForm = function(){
                console.log("表单提交了");
                console.log($scope.userdata);
                if($scope.signUpForm.$invalid)
                {
                    alert("请检查您的信息");
                }else{
                    alert("提交成功");
                }
            }



        })
    .directive('compare',function(){
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText:'=compare'
        }
        o.require = 'ngModel';
        o.link = function(sco,ele,att,con){
            con.$validators.compare = function(v){
                return v == sco.orgText;
            }
            sco.$watch('orgText',function(){
                con.$validate();
            })
        }
        return o;
    })