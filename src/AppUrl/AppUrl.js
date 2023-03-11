

class AppUrl{
    static BaseApi="http://localhost:8000/api";

    static services = this.BaseApi+'/services';
    static allProjects = this.BaseApi+'/allProjects';
    static threeProjects = this.BaseApi+'/threeProjects';
    static projectdetails = this.BaseApi+'/projectdetails/{id}';
    static allCourses = this.BaseApi+'/allCourses';
    static fourCourses = this.BaseApi+'/fourCourses';
    static courseDetails = this.BaseApi+'/courseDetails/{id}';
    static footer = this.BaseApi+'/footer';
    static chart = this.BaseApi+'/chart';
    static team = this.BaseApi+'/team';
    static about = this.BaseApi+'/about';
    static home = this.BaseApi+'/home';
    static contact = this.BaseApi+'/contact';
}

export default AppUrl
