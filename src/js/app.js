/*
------------------------------
Challenge by Frontend Mentor.
Coded by Jose Obdulio Rivas Velasquez.
------------------------------
*/
window.onload = function() {
    //Initial value.
    var id_user = 0;
    //Data.
    var JSON_data = {
        "user":[
            {
                "id_user": 0,
                "name": "Tanya Sinclair",
                "profession": "UX Engineer",
                "paragraph": "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
                "profile_img": "src/assets/images/image-tanya.jpg"
            },
            {
                "id_user": 1,
                "name": "John Tarkpor",
                "profession": "Junior Front-end Developer",
                "paragraph": "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
                "profile_img": "src/assets/images/image-john.jpg"
            }
        ]
    };
    //Elements by Id
    var btn_next = this.document.getElementById('control_next');
    var btn_previous = this.document.getElementById('control_previous');
    var paragraph = this.document.getElementById('paragraph');
    var user = this.document.getElementById('user');
    var profession = this.document.getElementById('profession');
    var img_profile = this.document.getElementById('profile_img');
    //Events Listener
    //Click Next
    btn_next.addEventListener("click", (e)=>{
        e.preventDefault();
        changeData(0);
    });
    //Click Previous
    btn_previous.addEventListener("click", (e)=>{
        e.preventDefault();
        changeData(1);
    });
    //Functions.
    function changeData(action){
        //Type of move
        if(action==0){
            id_user++; //Next
        }else{
            id_user--; //Previous
        }
        //Id user.
        if(id_user>=JSON_data.user.length){
            id_user=0;
        }else if(id_user<0){
            var index = JSON_data.user.length-1;
            id_user=JSON_data.user[index].id_user;
        }
        //Change data
        JSON_data.user.forEach(element => {
            if(element.id_user == id_user){
                //Change text in html view
                user.innerHTML = element.name; //Name
                paragraph.innerHTML = element.paragraph; //Paragraph
                profession.innerHTML = element.profession; //Profession
                img_profile.src = element.profile_img; //Profile Image
            }
        });
    }
};