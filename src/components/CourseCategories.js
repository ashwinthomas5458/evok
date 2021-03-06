import React from 'react';
import Cat from './Cat'


function CourseCategories({courseCategories}){

    return(
        <div className="courseCategories">
            <div className="rings courseCategories">
                <img src="svgs/Ellipse 4.svg" alt=""/>
                <img src="svgs/Ellipse 5.svg" alt=""/>
            </div>
            <div className="content flex">
                <figure className="flex">
                    <h3>Course Categories</h3>
                    <a href="/" className="view">
                        View all Courses
                        <img src="svgs/Arrow 1.svg" alt=""/>
                    </a>
                </figure>
                <div className="list flex">
                <div className="grid">
                {courseCategories.map(category=>(
                    <Cat courseCategory={category.name} key={`${category.id}${category.name}`} />
                ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCategories;