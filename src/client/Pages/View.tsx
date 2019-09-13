import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { IBlog, ITag } from '../Utilities/interfaces';




class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            blog: {
                id: 0,
                title: '',
                content: '',
                authorid: 0
            },
            blogtags: []
        }
    }


    async componentDidMount() {
        console.log(this.props.match.params.id);
        try {
            let r = await fetch(`/api/blogs/${this.props.match.params.id}`);
            let blog = await r.json();
            let r2 = await fetch(`/api/blogtags/${this.props.match.params.id}`);
            let blogtags = await r2.json();
            this.setState({ blog, blogtags });
        } catch (error) {
            console.log(error);
        }

    }


    render() {
        return (
            <>
                <section className="row justify-content-center">
                    <article className="col-12">
                        <div className="card border border-dark shadow m-2">
                            <div className="card-body">
                                <h2 className="card-title text-center">{this.state.blog.title}</h2>
                                <p className="card-text text-center">written by: {this.state.blog.authorid}</p>
                                <div className="d-flex justify-content-center mb-3">
                                    {this.state.blogtags.map(blogtag => (
                                        <span className="badge badge-dark text-primary p-2 mx-2">{blogtag.name}</span>
                                    ))}
                                </div>

                                <p className="card-text text-justify">{this.state.blog.content.split('\n').map((item, i) => (
                                    <span key={`item-${i}`}>
                                        {item}
                                        <br />
                                    </span>
                                ))}</p>
                                
                            </div>
                            <div className="card-body d-flex justify-content-around">
                                <Link to="/" className="btn btn-primary rounded">Go Back</Link>
                                <Link to={`/edit/${this.props.match.params.id}`} className="btn btn-warning rounded">Edit</Link>
                            </div>
                        </div>
                    </article>

                </section>
            </>
        )
    }
}


interface IEditProps extends RouteComponentProps<{ id: string }> { }

interface IEditState { 
    blog: IBlog;
    blogtags: ITag[];
}


export default Edit;