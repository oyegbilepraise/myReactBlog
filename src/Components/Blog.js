import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInput, setBlogData } from '../features/userSlide'

const Blog = () => {
    const searchInput= useSelector(selectUserInput)
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=e3781bbcd14e94f2fad1329b07257381`
    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(blog_url).then((res) => {
            dispatch(setBlogData(res.data))
            setBlogs(res.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        })
    }, [searchInput])
    return (
        <div className='container'>
            <h3>Blogs</h3>
            {loading ? <h1>Loading...</h1> : ''}
            <div className='row'>
                    {blogs?.articles?.map(blog => (
                <div className='col-4'>
                    <div className='card shadow mt-4' style={{minHeight: '500px'}}>
                    <a className="" target ='_blank' href={blog.url}>
                        <img src = {blog.image} className='card-img'/>
                        <div className='text-dark p-2'>
                            <h6 className='mt-2' >
                                <span className='p-1' style={{backgroundColor: 'grey'}}>{blog.source.name}</span>
                                <span className='mx-3'>{blog.publishedAt}</span>
                            </h6>
                            <h5 style={{textDecoration: 'underline'}}>{blog.title}</h5>
                            <p>{blog.description}</p>
                        </div>
                    </a>
                    </div>
                </div>
                ))}
                {blogs?.totalArticles == 0 && (
                    <h1 className=''> No blogs Available  ... Search Something else and retry later </h1>
                )}
            </div>
        </div>
    )
}

export default Blog
