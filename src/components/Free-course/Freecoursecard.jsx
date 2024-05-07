/* eslint-disable react/no-unknown-property */


const Freecoursecard = (props) => {

    const{imgurl,title,students,ratings}=props.item;
  return (
    <div className=" single_free_course">
      <div className="free_course_img mb-5">
        <img src={imgurl} alt="" className="w-100" />
        <button className="btn free_btn">Free</button>
      </div>
      <div className="free_course_details ">
        <h6>{title}</h6>
      </div>

      <div className="d-flex align-items-center gap-5">
        <span className="d-flex align-items-center gap-2">
          <i class="ri-user-line"></i>{students}
        </span>
        <span className="d-flex align-items-center gap-2">
          <i class="ri-star-fill"></i>{ratings}
        </span>
      </div>
    </div>
  );
};

export default Freecoursecard;
