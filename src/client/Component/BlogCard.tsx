import * as React from 'react';
import { IBlog } from '../Pages/Home';
import { Link, RouteComponentProps } from 'react-router-dom';




const BlogCard : React.SFC<IBlogCardProps> = (props) => {
    





    return(
        // console.log(props.blog.id)
        <article className="col-6">
            <div className="card border border-dark m-2">
                <div className="card-body">
                    <h2 className="card-title text-center">{props.blog.title}</h2>
                    <p className="card-text text-justify">{props.blog.content.substring(0, 150)}...</p>
                    <p className="card-text text-center">written by: {props.blog.authorid}</p>
                    <Link to={`/view/${props.blog.id}`} className="btn btn-primary btn-block">View Blog </Link>
                </div>
            </div>
        </article>
        
    )
} 


interface IBlogCardProps {
    blog: IBlog;
}

export default BlogCard