import React from 'react';
import d from './Post.module.css'


const Post = (props) => {

    return (
        <div className={d.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfL1m9ieQv9XN3t1E-bzZMM-nFpkSa_E2Jqg&usqp=CAU"/>

            {props.message}

            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
      )
}

export default Post;


