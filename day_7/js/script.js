//basic function

// Rule:
// 1. must invoke in order to execute the code inside function
// 2. without parameter and return type

// Type of user defined function
// 1. without parameter and return type

function showMessage(){
    let message = "have a nice day!!!"
    console.log("message:" + message)
}
// invoking function
showMessage()

//2. with parameter and no return type
function checkUserType(usertype, department){
    let user_type = "ADMIN"
    let department = "HEADQUATER";
    if (user_type === userType.toUpperCase() &&
    user_department === department.toUpperCase()){
        console.log("welcome to DAV ADMIN PANEL")
    } else {
        console.log("message: access Forbidden")
    }
}
// passing arguments to function with parameters
let ut = "admin"
let dept = "headquater"
checkUserType(ut, dept);

//3. with paremeter and return type
function checkResult(checked_value){
    let resukt = "Message: ";
    switch(checked_value){
        case 1:
            return result.concat(result, "You're under average")
        case 2:
            return result.concat(result, "You are average")
        case 3:
            return result.concat(result, "You are good")
        case 4:
            return result.concat(result, "You are best")
        case 5:
            return result.concat(result, "You are excellent")
        default:
            return result.concat(result, "You've no record")

    }
}
console.log("Checking user status:" + checkResult(3))

// 4. without parameter and with return type
function showUserGoal(){
    let goal = 45
    let goal_status = ""
    if(goal >= 0 && goal <= 39.99){
        goal_status = "Beginner Level"
    } else if (goal >= 40 && goal<= 64.99){
        
    }
    }

