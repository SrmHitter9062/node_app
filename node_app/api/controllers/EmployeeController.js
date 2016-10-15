/**
 * Created by siyaram.malav on 15/10/16.
 */

module.exports = {
  get_all_employee: function (req, res) {
    var emp_list = [1,2,3,4,5,6];
    var context = {emp_list:emp_list}
    console.log("Here in empl controller\n");
    res.render('employee',context);
  }
};

