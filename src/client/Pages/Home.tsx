import * as React from 'react';
import BlogCard from '../Component/BlogCard';
import { Link } from 'react-router-dom';
import { IBlog } from '../Utilities/interfaces';

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            blogs: [],
            title: '',
            content: '',
        }
    }


    async componentDidMount() {
        try {
            let r = await fetch(`/api/blogs`);
            let blogs = await r.json();
            this.setState({ blogs });
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <>
                <section className="row justify-content-center">
                    <article className="col-12">
                        <h1 className="text-center">Kevin's Blogs</h1>
                    </article>
                    {this.state.blogs.map(blog => {
                        return <BlogCard blog={blog} />
                    })}
                </section>
            </>
        )
    }
}


interface IHomeProps { }
interface IHomeState {
    blogs: Array<IBlog>;
    title: string;
    content: string;
}

export default Home;